import { 
  Twitter, 
  Github, 
  Linkedin, 
  Mail, 
  ArrowUpRight,
  ExternalLink 
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Integrations", href: "#integrations" },
        { name: "AI Assistant", href: "#ai" },
        { name: "Mobile Apps", href: "#mobile" },
        { name: "API", href: "#api" },
      ]
    }
  ];

  const socialLinks = [
    { name: "Twitter", href: "#twitter", icon: Twitter },
    { name: "GitHub", href: "#github", icon: Github },
    { name: "LinkedIn", href: "#linkedin", icon: Linkedin },
    { name: "Email", href: "#email", icon: Mail },
  ];

  return (
    <footer className="bg-primary border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Column 1: Logo with Description */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-start">
            <div className="mb-4 sm:mb-6">
              <img 
                src="/images/Frame 4.png" 
                alt="Reflect Logo" 
                className="w-24 sm:w-32 h-auto object-contain mb-3 sm:mb-4"
              />
              <p className="text-secondary max-w-sm text-sm sm:text-base">
                A beautifully minimalist note-taking app designed to mirror the way you think. 
                Now with native AI integration.
              </p>
            </div>
          </div>

          {/* Column 2: Product Menu - Centered Column */}
          <div className="sm:col-span-1 lg:col-span-1 flex justify-start sm:justify-center">
            <div className="space-y-4 sm:space-y-6">
              {footerSections.map((section) => (
                <div key={section.title}>
                  <h3 className="text-white font-medium mb-3 sm:mb-4 text-sm sm:text-base">{section.title}</h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-secondary hover:text-white transition-colors duration-200 text-xs sm:text-sm flex items-center group"
                        >
                          {link.name}
                          <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Contact Information */}
          <div className="sm:col-span-1 lg:col-span-1">
            <div>
              <h3 className="text-white font-medium mb-3 sm:mb-4 text-sm sm:text-base">Contact</h3>
              <div className="space-y-2 sm:space-y-3">
                <div>
                  <p className="text-secondary text-xs sm:text-sm">
                    123 Business Street<br />
                    Suite 100<br />
                    New York, NY 10001
                  </p>
                </div>
                <div>
                  <a 
                    href="tel:+1234567890" 
                    className="text-secondary hover:text-white transition-colors duration-200 text-xs sm:text-sm"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
                <div>
                  <a 
                    href="mailto:info@reflect.com" 
                    className="text-secondary hover:text-white transition-colors duration-200 text-xs sm:text-sm"
                  >
                    info@reflect.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Stay Updated and Follow Us */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Newsletter Signup */}
            <div className="mb-4 sm:mb-6">
              <h3 className="text-white font-medium mb-2 sm:mb-3 text-sm sm:text-base">Stay updated</h3>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                />
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-200 flex items-center justify-center">
                  Subscribe
                  <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-white font-medium mb-2 sm:mb-3 text-sm sm:text-base">Follow us</h3>
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                      aria-label={social.name}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-secondary text-xs sm:text-sm">
              © {currentYear} Reflect. All rights reserved.
            </div>
            
            {/* Additional Links */}
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="#accessibility" className="text-secondary hover:text-white transition-colors duration-200">
                Accessibility
              </a>
              <a href="#sitemap" className="text-secondary hover:text-white transition-colors duration-200">
                Sitemap
              </a>
              <a href="#rss" className="text-secondary hover:text-white transition-colors duration-200">
                RSS
              </a>
              <div className="flex items-center text-secondary">
                <span className="mr-1 sm:mr-2">Made with</span>
                <span className="text-red-500">♥</span>
                <span className="ml-1 sm:ml-2">for thinkers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
