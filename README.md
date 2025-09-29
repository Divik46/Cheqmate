# Reflect Notes - Next.js Application

A beautifully minimalist note-taking app designed to mirror the way you think, built with Next.js and Tailwind CSS.

## Features

- **AI-Powered**: GPT-4 and Whisper integration for smart writing assistance and voice transcription
- **Smart Connections**: Automatic backlinking and knowledge graph visualization
- **Secure & Private**: End-to-end encryption for your thoughts and data
- **Meeting Integration**: Calendar sync and automatic note-taking
- **Research Tools**: Web clipping, Kindle highlights, and PDF annotations
- **Cross-Platform**: Works seamlessly across all your devices

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd reflect-notes-nextjs
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/                    # Next.js 13+ app directory
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Hero.tsx           # Hero section
│   ├── AIFeatures.tsx     # AI features section
│   ├── Superpowers.tsx    # Backlinks/superpowers section
│   ├── Information.tsx    # Information management section
│   ├── Meetings.tsx       # Meeting integration section
│   ├── Integrations.tsx   # Third-party integrations
│   ├── Testimonials.tsx   # User testimonials
│   └── CTA.tsx            # Call to action section
├── public/                # Static assets
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── next.config.js         # Next.js configuration
```

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React 18**: Modern React with hooks

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

