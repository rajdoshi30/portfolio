# Raj Doshi — Portfolio (Luni-style)

This project is a full React portfolio scaffold using Vite, Tailwind, Framer Motion and React-Three-Fiber. It includes the sections you requested with clear file names and comments.

## Quick setup
1. Install dependencies:

```bash
npm install
```

2. Development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Deploy to GitHub Pages (optional):

- Install gh-pages: `npm i -D gh-pages`
- The project already includes a deploy script using `gh-pages` and `homepage` in package.json.
- To deploy (after building), run:
  ```bash
  npm run deploy
  ```

## Customization / Where to edit
- `src/components/01_Hero.jsx` — Hero section and 3D canvas (torus knot placeholder)
- `src/components/02_About.jsx` — About text & KPI tiles
- `src/components/03_Clients.jsx` — Add real client logos in `/public/assets` and update grid
- `src/components/04_Experience.jsx` — Experience timeline (edit `timeline` array)
- `src/components/06_Projects.jsx` — Projects cards (replace placeholders with links to Tableau/GitHub)
- `src/components/07_Contact.jsx` — Contact options & Formspree or Calendly links

## Domain & GitHub Pages

1. Create a repo (any name) on GitHub and push this project.
2. Add a file named `CNAME` in the repo root with your custom domain: `rajdoshi.me`
3. In Namecheap DNS, add A records for GitHub Pages and CNAME `www` → `rajdoshi30.github.io`
4. After propagation, enable HTTPS in GitHub Pages settings.

## Notes / Next steps
- Replace placeholder assets in `/public/assets/` (logo files, photo placeholder).
- If you want advanced 3D models, use GLTF in `/public/models/` or use Spline separately.
