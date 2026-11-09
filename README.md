# Light Agnes Charles — Portfolio

A single-page personal portfolio for **Light Agnes Charles**, a Frontend Developer and UI/UX Designer based in Lagos, Nigeria. It showcases services, selected projects, tools, education, work experience and contact details.

**Live site:** _add your Vercel URL here_

<!-- Add a screenshot at docs/screenshot.png, then uncomment the line below:
![Portfolio screenshot](docs/screenshot.png)
-->

## Features

- One long page with smooth-scrolling navigation and an active-section indicator
- Scroll-triggered reveal animations, count-up stats and an animated tools section
- Expandable work-experience entries
- Fully responsive layout with a mobile menu
- Accessible markup: semantic landmarks, labelled form fields, visible focus states, and `prefers-reduced-motion` support
- All content lives in one typed data file, so updating the site never means touching components

## Tech stack

- [React](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) for development and builds
- [Tailwind CSS](https://tailwindcss.com/) for styling
- Deployed on [Vercel](https://vercel.com/)

No UI component library or icon package is used; icons are inline SVG.

## Project structure

```
src/
├── components/
│   ├── sections/      # Page sections: Navbar, Hero, Services, Projects, About, ...
│   └── ui/            # Reusable pieces: Icon, Reveal, Avatar, PrimaryButton, ...
├── data/
│   └── content.ts     # All site content (profile, projects, tools, jobs, ...)
├── hooks/             # useInView, useActiveSection, useScrollProgress, useCountUp
├── styles/
│   └── globalStyles.ts  # Fonts, keyframes and animation helpers
├── types.ts           # Shared TypeScript types
├── Portfolio.tsx      # Composes the sections into the page
├── App.tsx
└── main.tsx
public/                # Static files served from the site root (photo, CV)
```

## Getting started

You need [Node.js](https://nodejs.org/) 20.19 or newer.

```bash
git clone https://github.com/YOUR-USERNAME/portfolio.git
cd portfolio
npm install
npm run dev
```

Then open the local URL that Vite prints (usually http://localhost:5173).

### Scripts

| Command           | What it does                           |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Start the development server           |
| `npm run build`   | Type-check and create a production build |
| `npm run preview` | Preview the production build locally   |
| `npm run lint`    | Run ESLint                             |

## Customising

- **Text, links, projects, tools, jobs:** edit `src/data/content.ts`.
- **Profile photo and CV:** put the files in `public/` and set `PROFILE_IMAGE` and `CV_URL` in `src/data/content.ts`.
- **Project links:** add a `link` to any entry in `PROJECTS` to show a "View project" button.
- **Colours:** the palette (green `#274233`, amber `#F5A70A`) is written as Tailwind arbitrary values in the section components.
- **Animations:** keyframes and timing live in `src/styles/globalStyles.ts`.

## Contact form

The form opens the visitor's email app with the message pre-filled (a `mailto:` link), so it needs no backend or API keys.

## Deploying to Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Vercel detects Vite automatically (build command `npm run build`, output directory `dist`). Click **Deploy**.

Every push to `main` redeploys the site.

## Licence

© Light Agnes Charles. All rights reserved.