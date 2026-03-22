# Contributing to Women in DeFi v2

Thank you for your interest in contributing to **Women in DeFi v2**! Whether you're fixing a bug, proposing a new feature, improving documentation, or sharing feedback — every contribution matters and is deeply appreciated.

This guide will walk you through everything you need to know to contribute confidently and effectively.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How to Report Bugs](#how-to-report-bugs)
- [How to Request Features](#how-to-request-features)
- [Setting Up Your Dev Environment](#setting-up-your-dev-environment)
- [Branching Strategy](#branching-strategy)
- [Commit Message Conventions](#commit-message-conventions)
- [Pull Request Process](#pull-request-process)
- [Coding Standards & Style Guide](#coding-standards--style-guide)
- [Testing Expectations](#testing-expectations)
- [Need Help?](#need-help)

---

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](./CODE_OF_CONDUCT.md). We are committed to fostering a welcoming, inclusive, and respectful community. Please read it before contributing.

In short: be kind, be constructive, and be collaborative.

---

## How to Report Bugs

Found something broken? We appreciate you taking the time to report it!

1. **Search existing issues first** — check [GitHub Issues](https://github.com/Womenindefi-org/wid-v2/issues) to see if the bug has already been reported.
2. If it hasn't been reported, **open a new issue** and include:
   - A clear, descriptive title
   - Steps to reproduce the bug
   - What you expected to happen vs. what actually happened
   - Screenshots or error messages (if applicable)
   - Your environment: OS, Node.js version, browser version

Use the **Bug Report** issue template when available.

---

## How to Request Features

Have an idea that would improve the project? We'd love to hear it!

1. **Search existing issues** to see if the feature has already been requested.
2. If not, **open a new issue** using the **Feature Request** template and describe:
   - The problem you're trying to solve
   - Your proposed solution or feature
   - Any alternatives you've considered
   - Why this would benefit the community

We review feature requests regularly and will label them accordingly (e.g., `enhancement`, `discussion`).

---

## Setting Up Your Dev Environment

Follow these steps to get the project running on your local machine:

### 1. Fork and Clone

```bash
# Fork the repo on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/wid-v2.git
cd wid-v2
```

### 2. Add the Upstream Remote

```bash
git remote add upstream https://github.com/Womenindefi-org/wid-v2.git
```

### 3. Install Dependencies

```bash
# Install frontend dependencies
cd site
npm install

# Install Sanity Studio dependencies
cd ../sanity/studio
npm install
```

### 4. Configure Environment Variables

```bash
cd ../site
cp .env.example .env.local
# Fill in your Sanity project ID, dataset, and API token
```

See the [Environment Variables section in README.md](./README.md#environment-variables) for details on each variable.

### 5. Run the Development Servers

Open two terminal windows:

```bash
# Terminal 1 — Next.js frontend (http://localhost:4444)
cd site && npm run dev

# Terminal 2 — Sanity Studio (http://localhost:3333)
cd sanity/studio && npm run dev
```

---

## Branching Strategy

We follow a structured branching model to keep development organised and production stable.

### Branch Overview

| Branch | Purpose |
|---|---|
| `master` | Production-ready code — protected, only accepts PRs from `staging` |
| `staging` | Integration branch — all feature branches merge here first for review and testing |
| `feature/*` | New features (e.g., `feature/events-page`) |
| `fix/*` | Bug fixes (e.g., `fix/nav-mobile-overflow`) |
| `docs/*` | Documentation updates (e.g., `docs/update-readme`) |
| `chore/*` | Maintenance tasks, dependency updates (e.g., `chore/upgrade-next`) |

### Workflow

```
feature/* --+
fix/*    ---+--> staging --> master (production)
docs/*   ---+
```

1. **Always branch off `staging`**, never directly off `master`:

```bash
git checkout staging
git pull upstream staging
git checkout -b feature/your-feature-name
```

2. Make your changes, commit, and push to your fork.

3. Open a **Pull Request targeting `staging`**, not `master`.

4. Once your PR is reviewed, approved, and merged into `staging`, it will be tested and then promoted to `master` by a maintainer.

> Direct pushes to `master` and `staging` are not allowed. All changes must go through a Pull Request with at least one approved review.

---

## Commit Message Conventions

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. This keeps the git history clean and enables automated changelog generation.

### Format

```
<type>(optional scope): <short description>

[optional body]

[optional footer]
```

### Types

| Type | Use for |
|---|---|
| `feat` | A new feature |
| `fix` | A bug fix |
| `docs` | Documentation changes only |
| `style` | Formatting, missing semicolons, etc. (no logic change) |
| `refactor` | Code changes that neither fix a bug nor add a feature |
| `test` | Adding or updating tests |
| `chore` | Build process, dependency updates, tooling |
| `perf` | Performance improvements |

### Examples

```bash
feat(events): add upcoming events carousel to homepage
fix(nav): resolve mobile menu overflow on small screens
docs: update environment variable setup in README
chore: upgrade next.js to v14
```

- Use the **imperative mood** in the description ("add" not "added" or "adds")
- Keep the subject line under 72 characters
- Reference related issues in the footer: `Closes #12` or `Fixes #7`

---

## Pull Request Process

### Before You Submit

- [ ] Your branch is based off `staging` and is up to date with it
- [ ] You've run `npm run build` successfully with no errors
- [ ] Your code follows the project's coding standards
- [ ] You've written or updated tests where applicable
- [ ] You've updated documentation if your change affects usage or setup

### Submitting a PR

1. Push your branch to your fork and open a PR **against the `staging` branch**.
2. Fill in the PR template completely:
   - What does this PR do?
   - Why is this change needed?
   - How was it tested?
   - Screenshots (for UI changes)
   - Related issue number (e.g., `Closes #1`)
3. Apply the appropriate labels (`bug`, `enhancement`, `documentation`, etc.)
4. Request a review from a maintainer or a relevant code owner.

### Review Guidelines

- A PR requires **at least one approved review** before merging.
- Reviewers may request changes — address all feedback before re-requesting review.
- Once approved, a maintainer will merge the PR using **Squash and Merge** to keep history clean.
- Do not merge your own PR without a review, except for trivial documentation typo fixes.

---

## Coding Standards & Style Guide

### TypeScript

- Use TypeScript for all new files. Avoid `any` types — be explicit.
- Define interfaces and types in dedicated files or co-locate them with the component they serve.
- Use `const` by default; use `let` only when reassignment is needed.

### React / Next.js

- Write functional components with hooks — no class components.
- Follow the **single responsibility principle** — one component, one concern.
- Use Next.js built-in features: `Image`, `Link`, `Head`, etc.
- Keep page components thin; extract logic into custom hooks or utility functions.

### File & Folder Naming

- Component files: `PascalCase.tsx` (e.g., `EventCard.tsx`)
- Utility/helper files: `camelCase.ts` (e.g., `formatDate.ts`)
- Directories: `kebab-case` (e.g., `components/event-card/`)

### Sanity Schemas

- Keep schemas modular and well-named.
- Add descriptive `title` and `description` fields to all schema types for CMS usability.

### Linting & Formatting

The project uses **ESLint** for linting and **Prettier** for formatting (configured in `sanity/studio/package.json`). Before committing, ensure your code is clean:

```bash
# Run lint check (from the site/ directory)
cd site && npm run lint

# Run lint check in the Sanity Studio (from sanity/studio/)
cd sanity/studio && npm run lint
```

Prettier is enforced in the Sanity Studio with these settings: single quotes, no semicolons, print width of 100. Configure your editor to format on save using these rules.

---

## Testing Expectations

Before submitting a Pull Request, please ensure:

1. **The build passes** with no TypeScript errors:

```bash
cd site && npm run build
```

2. **Manual testing** — verify your changes work correctly in the browser at `http://localhost:4444`. For CMS-related changes, also verify in the Sanity Studio at `http://localhost:3333`.

3. **Cross-browser check** — for UI changes, test in at least two modern browsers (e.g., Chrome and Firefox).

4. **Responsive check** — verify your UI changes look correct on mobile, tablet, and desktop viewports.

5. **No console errors** — ensure there are no uncaught errors in the browser console.

> As the project grows, automated unit and integration tests will be introduced. Contributors are encouraged to write tests for new features where frameworks are in place.

---

## Need Help?

If you're stuck or unsure about anything, don't hesitate to:

- **Open a Discussion** on GitHub — great for questions, ideas, and feedback
- **Comment on the relevant issue** if your question is related to a specific ticket
- **Reach out to the maintainers** via the community channels linked on [the project website](https://womenindefi.org)

We're a friendly community and happy to help newcomers find their footing. No question is too small.

---

<p align="center">Thank you for helping make Women in DeFi v2 better for everyone.</p>