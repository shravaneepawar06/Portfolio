# Shravanee Pawar – Portfolio

A responsive, single-page portfolio built with **React 18 + Vite**.
Sections: Hero, About Me, Skills, Projects, Resume, Contact.

**Live site:** _add your Netlify/Vercel/GitHub Pages URL here_
**Screenshots:** _add `docs/desktop.png` and `docs/mobile.png` here after deploying_

## Tech
React 18, Vite 5, plain CSS (custom properties, grid, media queries), self-hosted fonts via Fontsource (Bricolage Grotesque, IBM Plex Sans).

## Run locally
```bash
npm install
npm run dev        # development server
npm run build      # production build -> dist/
npm run preview    # serve dist/ at http://localhost:4173
```

## Project structure
```
public/            resume PDF, favicon, project preview images
src/data.js        all content (edit this to update the site)
src/components/    Header, Hero, About, Skills, Projects, Resume, Contact, Defer
src/styles.css     all styles
```

## Performance work
| Technique | Where |
|---|---|
| Component lazy loading | `React.lazy` + `Suspense` for About, Skills, Projects, Resume, Contact (each becomes its own JS chunk) |
| Load-on-approach | `Defer.jsx` uses `IntersectionObserver` and mounts a section 400px before it scrolls into view, so its chunk is fetched then |
| Image lazy loading | `loading="lazy"`, `decoding="async"`, explicit `width`/`height` on project images (prevents layout shift) |
| Minification | Vite production build minifies JS (esbuild) and CSS |
| Vendor chunk | React is split into its own long-cacheable chunk |
| Fonts | Self-hosted; only the weights used (400, 600, one variable display font) |

Production build: app code ≈ 7 KB (3.4 KB gzip), CSS 10 KB (2.5 KB gzip), React vendor chunk 45 KB gzip, each lazy section 0.4 – 1.6 KB.

## Deployment

### Netlify (recommended)
1. Push this repo to GitHub.
2. Netlify → **Add new site → Import an existing project** → pick the repo.
3. Build command `npm run build`, publish directory `dist`. Deploy.
4. **Custom domain:** Site settings → Domain management → Add a domain. Point your registrar's DNS to Netlify, or use Netlify DNS.
5. **SSL:** Netlify issues a free Let's Encrypt certificate automatically once DNS resolves. Turn on **Force HTTPS**.

### Vercel
Import the repo; Vercel detects Vite (build `npm run build`, output `dist`). Add a domain under **Settings → Domains**; HTTPS is automatic.

### GitHub Pages
`vite.config.js` uses `base: './'`, so the build works under `/<repo>/`.
```bash
npm i -D gh-pages
npm run build
npx gh-pages -d dist
```
Then Settings → Pages → branch `gh-pages`. Custom domain and "Enforce HTTPS" are on the same screen.

## Testing checklist
- [x] `npm run build` succeeds; `npm run preview` serves all sections, resume PDF and images
- [x] Lazy chunks load on scroll (headless Chromium: 2 section chunks on load, the rest after scrolling)
- [x] No horizontal scroll at 390 px width
- [ ] After deploying: Chrome, Firefox, Safari, Edge
- [ ] After deploying: DevTools device toolbar (320, 390, 768, 1024, 1440 px) and a real phone
- [ ] After deploying: Lighthouse (Performance, Accessibility, SEO)

## Challenges and solutions
- **Lazy sections broke nav links.** An unrendered section has nothing for `#projects` to scroll to. `Defer` always renders a placeholder `<section id=…>` with a minimum height, then swaps in the content.
- **Layout shift from images.** Fixed with `width`/`height` attributes and `height: auto` in CSS.
- **Contact form without a backend.** The form validates the email and opens the visitor's mail app with the message pre-filled (`mailto:`). To receive messages directly, switch to Formspree or Netlify Forms.
- **Hosting under a sub-path** (GitHub Pages) breaks absolute asset URLs. Fixed with `base: './'` and relative paths like `./favicon.svg`.
- **Third-party font requests.** Fontsource keeps fonts on the same origin, avoiding an extra connection.

## To do before submitting
- Replace `public/collab-board.svg` and `public/bitebox.svg` with real screenshots (update `width`/`height` in `Projects.jsx` if the ratio differs).
- Point each project's `link` in `src/data.js` to its own repo (they currently go to your GitHub profile).
- Fill in the live URL and screenshots at the top of this file.
