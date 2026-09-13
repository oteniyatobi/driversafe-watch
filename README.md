# driverwatch

Marketing site for driverwatch, a driver-fatigue monitoring system for commercial
fleets in East Africa. Live at [driverwatch.tech](https://driverwatch.tech).

## Stack

React + TypeScript + Vite, with plain CSS (no UI framework). Scroll animations use
the Intersection Observer API rather than an animation library.

## Running locally

```sh
npm install
npm run dev      # http://localhost:8080
npm run build    # production build to dist/
```

## Structure

```
src/
  pages/        Home, Product, ForFleets, About, ContactDemo, NotFound
  components/   Nav, Footer, BrandLogo, FadeIn, ScrollToTop, WaitlistCountdown
  hooks/        useCountUp
  index.css     design tokens + all component styles
public/
  brand/        brand assets (see brand/README.md)
  prototype.jpg hardware photo used on the Product page
```

## Brand

`public/brand/brand-guideline.jpg` is the authoritative brand sheet. The site's
logo is cropped from it into `mark-light.png` / `mark-dark.png`, rendered by
`src/components/BrandLogo.tsx`.

Note: the `logo-*.svg` files in `public/brand/` draw a **different** mark from the
guideline sheet (a rounded oval with a small wheel, rather than the sheet's pointed
eye with a full-size wheel). They are kept for reference but are not used on the site.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes to the domain in `CNAME`.
