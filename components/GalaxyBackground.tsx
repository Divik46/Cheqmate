"use client";

import { useEffect, useRef, useState } from "react";
import { Renderer, Program, Mesh, Triangle, Color } from "ogl";

const vertexShader = `
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`;

const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec3 uResolution;
uniform float uDensity;
uniform float uHueShift;
uniform float uSpeed;
uniform float uGlowIntensity;
uniform float uSaturation;
uniform float uTwinkleIntensity;
uniform float uRotationSpeed;

varying vec2 vUv;

#define NUM_LAYER 4.0
#define STAR_COLOR_CUTOFF 0.2
#define MAT45 mat2(0.7071, -0.7071, 0.7071, 0.7071)
#define PERIOD 3.0

float Hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float tri(float x) {
  return abs(fract(x) * 2.0 - 1.0);
}

float trisn(float x) {
  float t = fract(x);
  return 2.0 * (1.0 - smoothstep(0.0, 1.0, abs(2.0 * t - 1.0))) - 1.0;
}

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0/3.0, 1.0/3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

float Star(vec2 uv, float flare) {
  float d = length(uv);
  float m = (0.05 * uGlowIntensity) / d;
  float rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x * uv.y * 1000.0));
  m += rays * flare * uGlowIntensity;
  uv *= MAT45;
  rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x * uv.y * 1000.0));
  m += rays * 0.3 * flare * uGlowIntensity;
  m *= smoothstep(1.0, 0.2, d);
  return m;
}

vec3 StarLayer(vec2 uv) {
  vec3 col = vec3(0.0);
  vec2 gv = fract(uv) - 0.5; 
  vec2 id = floor(uv);

  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 offset = vec2(float(x), float(y));
      vec2 si = id + offset;
      float seed = Hash21(si);
      float size = fract(seed * 345.32);
      float glossLocal = tri(uTime / (PERIOD * seed + 1.0));
      float flareSize = smoothstep(0.9, 1.0, size) * glossLocal;

      float red = smoothstep(STAR_COLOR_CUTOFF, 1.0, Hash21(si + 1.0)) + STAR_COLOR_CUTOFF;
      float blu = smoothstep(STAR_COLOR_CUTOFF, 1.0, Hash21(si + 3.0)) + STAR_COLOR_CUTOFF;
      float grn = min(red, blu) * seed;
      vec3 base = vec3(red, grn, blu);

      float hue = fract(uHueShift / 360.0);
      float sat = length(base - vec3(dot(base, vec3(0.299, 0.587, 0.114)))) * uSaturation;
      float val = max(max(base.r, base.g), base.b);
      base = hsv2rgb(vec3(hue, sat, val));

      float star = Star(gv - offset, flareSize);

      float twinkle = trisn(uTime + seed * 6.2831) * 0.5 + 1.0;
      twinkle = mix(1.0, twinkle, uTwinkleIntensity);
      star *= twinkle;

      col += star * size * base;
    }
  }
  return col;
}

void main() {
  vec2 uv = (vUv * uResolution.xy - 0.5 * uResolution.xy) / uResolution.y;

  float autoRotAngle = uTime * uRotationSpeed;
  mat2 autoRot = mat2(cos(autoRotAngle), -sin(autoRotAngle), sin(autoRotAngle), cos(autoRotAngle));
  uv = autoRot * uv;

  vec3 col = vec3(0.0);

  for (float i = 0.0; i < 1.0; i += 1.0 / NUM_LAYER) {
    float depth = fract(i + uTime * uSpeed);
    float scale = mix(20.0 * uDensity, 0.5 * uDensity, depth);
    float fade = depth * smoothstep(1.0, 0.9, depth);
    col += StarLayer(uv * scale + i * 453.32) * fade;
  }

  gl_FragColor = vec4(col, 1.0);
}
`;

type GalaxyBackgroundProps = {
  density?: number;
  hueShift?: number;
  speed?: number;
  glowIntensity?: number;
  saturation?: number;
  twinkleIntensity?: number;
  rotationSpeed?: number;
};

export default function GalaxyBackground({
  density = 1.0,
  hueShift = 200.0,
  speed = 0.2,
  glowIntensity = 0.4,
  saturation = 0.8,
  twinkleIntensity = 0.3,
  rotationSpeed = 0.05,
}: GalaxyBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasError, setHasError] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctn = containerRef.current;

    // Check WebGL support
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      setWebglSupported(false);
      setHasError(true);
      return;
    }

    let renderer: Renderer;
    let program: Program;
    let mesh: Mesh;
    let frameId: number;

    const resize = () => {
      try {
        if (renderer) {
          renderer.setSize(ctn.offsetWidth, ctn.offsetHeight);
          if (program) {
            program.uniforms.uResolution.value = new Color(
              renderer.gl.canvas.width,
              renderer.gl.canvas.height,
              renderer.gl.canvas.width / renderer.gl.canvas.height
            );
          }
        }
      } catch (error) {
        console.warn('Resize error:', error);
      }
    };

    try {
      renderer = new Renderer({ alpha: false });
      renderer.gl.clearColor(0, 0, 0, 1);

      const geometry = new Triangle(renderer.gl);
      program = new Program(renderer.gl, {
        vertex: vertexShader,
        fragment: fragmentShader,
        uniforms: {
          uTime: { value: 0 },
          uResolution: {
            value: new Color(renderer.gl.canvas.width, renderer.gl.canvas.height, renderer.gl.canvas.width / renderer.gl.canvas.height),
          },
          uDensity: { value: density },
          uHueShift: { value: hueShift },
          uSpeed: { value: speed },
          uGlowIntensity: { value: glowIntensity },
          uSaturation: { value: saturation },
          uTwinkleIntensity: { value: twinkleIntensity },
          uRotationSpeed: { value: rotationSpeed },
        },
      });

      mesh = new Mesh(renderer.gl, { geometry, program });
      ctn.appendChild(renderer.gl.canvas);

      resize();
      window.addEventListener("resize", resize);

      const animate = (t: number) => {
        try {
          if (program && mesh) {
            program.uniforms.uTime.value = t * 0.0002;
            renderer.render({ scene: mesh });
          }
          frameId = requestAnimationFrame(animate);
        } catch (error) {
          console.warn('Animation error:', error);
          setHasError(true);
        }
      };
      frameId = requestAnimationFrame(animate);

    } catch (error) {
      console.error('WebGL initialization error:', error);
      setHasError(true);
    }

    return () => {
      try {
        if (frameId) {
          cancelAnimationFrame(frameId);
        }
        window.removeEventListener("resize", resize);
        if (ctn && renderer && renderer.gl && renderer.gl.canvas && ctn.contains(renderer.gl.canvas)) {
          ctn.removeChild(renderer.gl.canvas);
        }
        if (renderer && renderer.gl) {
          const loseContext = renderer.gl.getExtension("WEBGL_lose_context");
          if (loseContext) {
            loseContext.loseContext();
          }
        }
      } catch (error) {
        console.warn('Cleanup error:', error);
      }
    };
  }, [density, hueShift, speed, glowIntensity, saturation, twinkleIntensity, rotationSpeed]);

  // Fallback for when WebGL is not supported or errors occur
  if (hasError || !webglSupported) {
    return (
      <div className="absolute inset-0 w-full h-full z-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 animate-pulse"></div>
      </div>
    );
  }

  return <div ref={containerRef} className="absolute inset-0 w-full h-full z-0" />;
}
