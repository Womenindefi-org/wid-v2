# Women in DeFi v2

<!-- Badges -->
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Sanity](https://img.shields.io/badge/Sanity-F03E2F?style=for-the-badge&logo=sanity&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

> **Women in DeFi** is a community-driven platform dedicated to empowering women across the decentralised finance (DeFi) ecosystem — through education, networking, and advocacy. This repository is the source code for **Version 2** of the Women in DeFi website.

---

## Table of Contents

- [About the Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Running Locally](#running-locally)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Resources & Links](#resources--links)

---

## About the Project

Women in DeFi v2 is a redesigned, content-rich platform aimed at:

- Showcasing stories and achievements of women in decentralised finance
- Providing educational resources for those entering or advancing in the DeFi space
- Connecting community members through events, newsletters, and collaborations
- Serving as a hub for news, blogs, and curated DeFi content managed via a headless CMS

The project is built with performance, accessibility, and editorial flexibility in mind.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | [Next.js 16.1.1](https://nextjs.org/) |
| UI Library | [React 19](https://react.dev/) |
| Language | [TypeScript 5](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| CMS | [Sanity v5](https://www.sanity.io/) |
| Forms | React Hook Form + Yup |
| Deployment | [Netlify](https://www.netlify.com/) (via `@netlify/plugin-nextjs`) |

---

## Prerequisites

Before you begin, make sure you have the following installed on your machine:

- **Node.js** v18 or higher — [Download](https://nodejs.org/)
- **npm** v9+ or **yarn** v1.22+
- **Git** — [Download](https://git-scm.com/)
- A **Sanity.io** account (free tier is sufficient) — [Sign up](https://www.sanity.io/)
- A **Netlify** account (for deployment) — [Sign up](https://www.netlify.com/)

---

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Womenindefi-org/wid-v2.git
cd wid-v2
```

### 2. Install Frontend Dependencies

```bash
cd site
npm install
```

### 3. Install Sanity Studio Dependencies

```bash
cd ../sanity/studio
npm install
```

### 4. Set Up Environment Variables

Copy the example environment file and fill in your values (see [Environment Variables](#environment-variables) below):

```bash
cd ../site
cp .env.example .env.local
```

---

## Running Locally

You'll need two terminal sessions — one for the frontend and one for the Sanity Studio.

**Terminal 1 — Start the Next.js frontend:**

```bash
cd site
npm run dev
```

The site will be available at [http://localhost:4444](http://localhost:4444).

**Terminal 2 — Start the Sanity Studio:**

```bash
cd sanity/studio
npm run dev
```

The Sanity Studio will be available at [http://localhost:3333](http://localhost:3333).

---

## Environment Variables

Create a `.env.local` file inside the `site/` directory. The following variables are required:

```env
# Sanity Project Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_sanity_api_token

# Site URL (used for metadata and canonical links)
NEXT_PUBLIC_SITE_URL=http://localhost:4444
```

> **Note:** Never commit your `.env.local` file to version control. It is already included in `.gitignore`.

To obtain your Sanity credentials:
1. Log in at [sanity.io](https://www.sanity.io/)
2. Navigate to your project → **Settings** → **API**
3. Copy your **Project ID** and create a new **API token** with appropriate permissions

---

## Project Structure

```
wid-v2/
├── sanity/                      # Sanity CMS root
│   ├── studio/                  # Sanity Studio application
│   │   ├── schemas/             # Content schemas (blog posts, events, team, etc.)
│   │   ├── plugins/             # Custom Sanity plugins
│   │   ├── sanity.config.ts     # Sanity Studio configuration
│   │   └── package.json         # Studio dependencies
│   └── package.json             # Shared Sanity client dependencies
│
├── site/                        # Next.js frontend application
│   ├── components/              # Reusable UI components
│   ├── app/ or pages/           # Next.js routing (App Router or Pages Router)
│   ├── lib/                     # Utility functions and Sanity client
│   ├── styles/                  # Global and module CSS
│   ├── public/                  # Static assets (images, fonts, icons)
│   └── next.config.js           # Next.js configuration
│
├── netlify.toml                 # Netlify deployment configuration
├── README.md                    # Project documentation (you are here)
└── CONTRIBUTING.md              # Contribution guidelines
```

---

## Deployment

This project is deployed via **Netlify**, with configuration defined in `netlify.toml`.

### Automatic Deployment (via Netlify)

1. Push changes to the `master` branch to trigger a production deployment.
2. Push to `staging` to deploy a preview for review before merging to `master`.

### Manual Deployment

To deploy manually using the Netlify CLI:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Authenticate
netlify login

# Build and deploy
cd site
npm run build
netlify deploy --prod --dir=.next
```

### Build Command

```bash
npm run build
```

### Publish Directory

`.next`

> Ensure all environment variables are set in the Netlify dashboard under **Site Settings → Environment Variables** before deploying.

---

## Contributing

We welcome contributions from everyone! Please read our [CONTRIBUTING.md](./CONTRIBUTING.md) for:

- How to report bugs and request features
- Setting up your local development environment
- Our branching strategy and PR process
- Commit message conventions and coding standards

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.

---

## Resources & Links

- [Women in DeFi Website](https://womenindefi.org)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Netlify Documentation](https://docs.netlify.com/)
- [Open Issues](https://github.com/Womenindefi-org/wid-v2/issues)
- [Contribution Guide](./CONTRIBUTING.md)

---

<p align="center">Built with love by the Women in DeFi community</p>