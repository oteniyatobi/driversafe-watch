import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BrandLogo from './BrandLogo';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Product', to: '/product' },
  { label: 'For Fleets', to: '/for-fleets' },
  { label: 'About', to: '/about' },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isActive = (to: string) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`} role="navigation">
        <div className="nav__inner">
          {/* Logo */}
          <Link to="/" className="nav__logo" aria-label="driverwatch home">
            <BrandLogo className="nav__logo-img" />
          </Link>

          {/* Desktop links */}
          <ul className="nav__links" role="list">
            {NAV_LINKS.map(l => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`nav__link${isActive(l.to) ? ' nav__link--active' : ''}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTAs */}
          <div className="nav__right">
            <a
              href="https://drive-watch-three.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline btn--sm"
            >
              Launch Dashboard
            </a>
            <Link to="/contact" className="btn btn--primary btn--sm">
              Book a Demo
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="nav__burger"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`nav__overlay${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
        style={{ display: menuOpen ? 'block' : 'none' }}
      />

      {/* Mobile drawer */}
      <nav className={`nav__drawer${menuOpen ? ' open' : ''}`} aria-label="Mobile navigation">
        <div className="nav__drawer-head">
          <Link to="/" className="nav__logo">
            <BrandLogo className="nav__logo-img" />
          </Link>
          <button
            className="nav__drawer-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {NAV_LINKS.map(l => (
          <Link
            key={l.to}
            to={l.to}
            className={`nav__drawer-link${isActive(l.to) ? ' nav__drawer-link--active' : ''}`}
          >
            {l.label}
          </Link>
        ))}

        <div className="nav__drawer-cta" style={{ marginTop: 'auto', paddingTop: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <a
            href="https://drive-watch-three.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            Launch Dashboard
          </a>
          <Link to="/contact" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center' }}>
            Book a Demo
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
