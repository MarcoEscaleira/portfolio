# AGENTS.md

Guidance for AI coding agents working in this repository.

## Project overview

Personal portfolio site for [Marco Escaleira](https://escaleira.dev). A single-page Next.js app with section-based layout (Hero, About, Projects, Experience, Skills, Contact), dark/light theming, smooth scroll, a command palette, and a few easter eggs.

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14 (Pages Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS 3 + CSS custom properties |
| Animation | Motion (`motion/react`) |
| Icons | Lucide React |
| Theming | `next-themes` (class-based dark mode) |
| Scroll | Lenis |
| Command palette | cmdk |
| Analytics | Vercel Analytics |
| Package manager | Yarn 4 (Berry) via Corepack |
| Node | 22+ (see `.nvmrc`) |

## Repository layout

```
src/
  components/
    layout/       # Layout shell — Header, Footer, Layout
    sections/     # Page sections — Hero, About, Projects, etc.
    *.tsx         # Shared UI — CommandPalette, ThemeSwitcher, EasterEggs, SmoothScroll
  data/           # Static content — projects, experience, skills
  pages/          # Next.js pages (_app, index, 404)
  styles/         # global.css (design tokens as CSS variables)
public/           # Static assets (favicons, manifest)
```

Path alias: `@/*` maps to `src/*`.

## Commands

```bash
corepack enable    # Required once per machine (Node 22+ ships Corepack)
yarn install       # Install dependencies
yarn start:dev     # Dev server (next dev)
yarn build         # Production build
yarn start         # Serve production build
yarn lint          # ESLint + auto-fix
```

Uses the `node-modules` linker (see `.yarnrc.yml`) for Next.js compatibility. The Yarn version is pinned in `package.json` via `packageManager` — Corepack enforces it automatically.

Pre-commit hook runs `yarn lint` via Husky. Fix lint issues before committing.

## Git workflow

- **Never** commit or merge directly to `main` or `qa`.
- Branch from `qa`, open PRs targeting `qa`.
- Merge to `main` only after QA validation.

```bash
git checkout qa && git pull && git checkout -b <branch-name>
# ... make changes, commit, push ...
gh pr create --base qa
```

### Commit messages

Follow [Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/):

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Common types:

| Type | When to use |
|------|-------------|
| `feat` | New feature or user-facing addition |
| `fix` | Bug fix |
| `docs` | Documentation only |
| `style` | Formatting, no logic change |
| `refactor` | Code change that is neither a fix nor a feature |
| `perf` | Performance improvement |
| `test` | Adding or updating tests |
| `build` | Build system or dependencies |
| `ci` | CI configuration |
| `chore` | Maintenance tasks |

Examples:

```
feat(hero): add role word cycling animation
fix(theme): respect system preference on first load
docs: add AGENTS.md for coding agents
```

Use lowercase for types. Add an optional scope in parentheses when the change is scoped to a specific area (e.g. `projects`, `layout`, `ci`). For breaking changes, append `!` after the type/scope or add a `BREAKING CHANGE:` footer.

## Coding conventions

### Components

- Functional components only.
- Colocate small helpers (e.g. `useIsMac`) in the same file when used once.
- Export sections and layout pieces through barrel `index.ts` files.
- Use `PropsWithChildren` for wrapper components.

### Imports

ESLint enforces import order: React first, then external packages (alphabetized), then internal `@/` imports. No blank lines between groups.

```tsx
import { useEffect, useState } from "react";
import { Github } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { Header } from "@/components/layout";
```

### Styling

- Use Tailwind utility classes; avoid inline styles unless animating dynamic values.
- Design tokens live in `src/styles/global.css` as RGB CSS variables (`--color-bg`, `--color-fg`, etc.).
- Tailwind maps them in `tailwind.config.js` — use semantic names: `bg-bg`, `text-fg`, `text-fg-muted`, `border-border`, `bg-accent`, `text-accent-fg`.
- Fonts: `font-sans` (Inter), `font-display` (Space Grotesk), `font-mono` (JetBrains Mono).
- Respect `useReducedMotion()` from Motion for animations.

### Data

Content is static TypeScript in `src/data/`. Each file exports typed arrays (`projects`, `experience`, `skills`). Update data files rather than hardcoding content in components.

### SEO & accessibility

Always consider both when making changes — this is a public portfolio site.

**Accessibility**

- `eslint-plugin-jsx-a11y` is enabled — fix a11y warnings.
- Global `:focus-visible` styles are defined in `global.css`.
- Use semantic HTML (`main`, `nav`, `section`, heading hierarchy) and meaningful `aria-label`s on icon-only links.
- Respect `useReducedMotion()` for animations; don't rely on motion alone to convey information.
- Ensure keyboard navigation works for interactive elements (command palette, theme switcher, links, buttons).

**SEO**

- Keep page metadata accurate in `Layout.tsx` (`title`, favicons, manifest).
- Use a single logical `h1` per page and don't skip heading levels.
- Provide descriptive `alt` text on images via `next/image`.
- Use meaningful link text — avoid generic "click here" labels.
- Prefer crawlable content in the DOM over text hidden behind client-only interactions.

## Architecture notes

- **`Layout.tsx`** wraps every page: fonts, theme provider, header/footer, command palette, easter eggs, smooth scroll, analytics.
- **Command palette** opens via `Cmd/Ctrl+K` or `window.dispatchEvent(new CustomEvent("open-command-palette"))`.
- **Font variables** are applied to `document.body` because cmdk portals outside the layout tree.
- **i18n** is configured for `en-US` with domain `escaleira.dev` in `next.config.js`.
- **Images** use `next/image` where applicable.

## CI/CD

| Workflow | Trigger | Action |
|----------|---------|--------|
| `testing.yml` | Push to `main`/`qa`, PRs to `main` | `yarn lint` |
| `deployQA.yml` | Push to `qa` | Deploy to Vercel (QA) |
| `deployProd.yml` | Push to `main` | Deploy to Vercel (prod) |

## Agent guidelines

1. **Minimize scope** — this is a focused portfolio site; avoid over-engineering or adding dependencies without reason.
2. **Match existing patterns** — read surrounding components before adding new ones.
3. **Keep content in `src/data/`** — don't scatter copy across components.
4. **SEO & accessibility first** — treat both as ongoing requirements, not afterthoughts. Every UI change should preserve or improve semantic markup, keyboard access, metadata, and crawlable content.
5. **Test locally** — run `yarn lint` and `yarn build` after non-trivial changes.
6. **Verify in the browser** — for any UI, layout, or interaction change, run `yarn start:dev` and test in the browser before handing off. Check the affected pages, responsive breakpoints, dark/light theme, and animations where relevant.
7. **Don't commit unless asked** — follow the user's git instructions.
8. **Don't edit unrelated files** — no drive-by refactors.
