# Ihoon Isaac — Executive VA Portfolio V5.1

Premium dark Executive Technology portfolio built with Next.js 16, TypeScript and CSS.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Main editing areas

- `data/site.ts` — profile, contact details, social links, services, experience, credentials and tools.
- `data/projects.ts` — case studies and portfolio work.
- `public/images/` — profile/brand images.
- `public/work/` — portfolio evidence.
- `app/page.tsx` — page structure and interactions.
- `app/globals.css` — visual system, responsive layout and animation.

## Adding new work

1. Put an optimized image in `public/work/`. WebP is preferred.
2. Add the project object to `data/projects.ts`.
3. The work will appear in the Selected Work section and its case-study modal.

## SEO / metadata

The project includes title/description, keywords, authorship, robots directives, Open Graph, Twitter Card, favicon, theme color, web manifest, sitemap/robots routes and Person structured data.

For production canonical URLs and absolute social-share URLs, set `NEXT_PUBLIC_SITE_URL` to the final deployed HTTPS domain before deployment. Example: `NEXT_PUBLIC_SITE_URL=https://yourdomain.com`.

## Performance

- Below-the-fold portfolio images use lazy loading.
- The hero portrait is prioritized because it is above the fold.
- Source images were resized and converted from PNG to WebP.
- `next/image` remains responsible for responsive image delivery.
- Avoid uploading oversized originals; keep portfolio images close to their displayed dimensions.
