# Mukesh Kumar | Portfolio

A modern portfolio website for an AI and ML engineer focused on agentic systems, retrieval-augmented generation (RAG), NLP, backend engineering, and practical AI products. Built with Next.js and designed to feel premium, minimal, and technically credible.

## Overview

This project presents Mukesh Kumar’s work as a polished online portfolio with:

- A cinematic hero section and dark editorial aesthetic
- Clear sections for about, selected work, capabilities, and contact
- Project highlights across ML, NLP, AI workflows, and RAG systems
- Professional links to GitHub, LinkedIn, and Instagram
- Responsive, performance-conscious frontend implementation

## Why this project exists

The portfolio is intended to communicate more than a resume. It tells a story about:

- building useful AI systems that connect to real-world workflows
- pairing machine learning with backend engineering
- translating complex technical ideas into understandable explanations
- creating a presence that suits product, research, and engineering conversations

## Tech stack

- Next.js 16
- React 19
- TypeScript
- CSS and custom design system
- Static asset optimization for profile and motion-driven images

## Project structure

```text
portfolio/
├── public/                  # Optimized images and assets
├── src/
│   ├── app/                 # App router, metadata, and global styling
│   ├── components/          # Reusable UI blocks and motion components
│   └── data/
│       └── portfolio.ts     # Portfolio content: projects, capabilities, toolbox
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── tsconfig.json
├── README.md
└── package-lock.json
```

## Features

- Responsive single-page portfolio experience
- Rich visual hierarchy and animated design details
- Project cards with technical tags and descriptions
- Portfolio storytelling tailored to AI/ML engineering work
- Clean structure for easy content updates and future additions

## Getting started

Clone the repository and install dependencies:

```bash
git clone <your-repo-url>
cd portfolio
npm install
```

Run the app locally:

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

## Production checks

```bash
npm run lint
npm run build
```

## Customization

Most portfolio content lives in:

- `src/data/portfolio.ts` for project, capability, and toolbox content
- `src/app/page.tsx` for page structure and section ordering
- `src/app/globals.css` for visual styling and layout

This makes it easy to update your work history, project descriptions, or branding without changing the app architecture.

## Deployment

This project is ready to be deployed on any platform that supports Next.js applications, such as:

- Vercel
- Netlify
- self-hosted Node environments

For Vercel, the repository can usually be deployed directly with the standard Next.js setup.

## License

This project is currently licensed under the ISC license as defined in `package.json`.

## Connect

- GitHub: https://github.com/mukeshkumr
- LinkedIn: https://www.linkedin.com/in/mukeshkumr/
- Instagram: https://www.instagram.com/mukeshbeyond/

If you want, I can also turn this into a more premium GitHub-style README with a project badge section, screenshot placeholders, and a stronger personal brand tone.
