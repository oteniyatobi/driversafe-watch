/**
 * Logo mark cropped from public/brand/brand-guideline.jpg — the authoritative
 * sheet. (The logo-*.svg kit draws a different mark: a plain rounded oval with
 * a tiny wheel, not the sheet's pointed eye with a full-size wheel. Do not use
 * those SVGs for the logo.)
 *
 * mark-light/-dark.png carry a real alpha channel keyed from the sheet's white
 * background, so they sit on any surface. Blend modes were tried first and fail
 * on the scrolled nav, whose backdrop-filter creates its own stacking context.
 * The wordmark stays real text so it renders crisply and is selectable.
 */
const BrandLogo = ({
  variant = 'light',
  className = '',
}: {
  variant?: 'light' | 'dark';
  className?: string;
}) => (
  <span className={`brand-logo brand-logo--${variant} ${className}`}>
    <img
      src={variant === 'dark' ? '/brand/mark-dark.png' : '/brand/mark-light.png'}
      alt=""
      className="brand-logo__mark"
    />
    <span className="brand-logo__word">driverwatch</span>
  </span>
);

export default BrandLogo;
