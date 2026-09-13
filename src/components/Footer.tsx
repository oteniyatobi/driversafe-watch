import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__top">
        {/* Brand */}
        <div>
          <BrandLogo variant="dark" className="footer__logo-img" />
          <p className="footer__tagline">
            Driver Safety. Always Watching.<br />
            Safer Roads. Protected Lives.
          </p>
        </div>

        {/* Pages */}
        <div>
          <p className="footer__col-head">Platform</p>
          <Link to="/" className="footer__link">Home</Link>
          <Link to="/product" className="footer__link">Product</Link>
          <Link to="/for-fleets" className="footer__link">For Fleets</Link>
          <Link to="/about" className="footer__link">About</Link>
        </div>

        {/* Contact */}
        <div>
          <p className="footer__col-head">Contact</p>
          <a href="mailto:oluwatobijeremiahoteniya@gmail.com" className="footer__link">Email us</a>
          <Link to="/contact" className="footer__link">Book a Demo</Link>
          <a href="https://driverwatch.tech" target="_blank" rel="noopener noreferrer" className="footer__link">driverwatch.tech</a>
        </div>

        {/* Legal */}
        <div>
          <p className="footer__col-head">Company</p>
          <span className="footer__link" style={{ cursor: 'default' }}>Registered in Rwanda</span>
          <span className="footer__link" style={{ cursor: 'default' }}>RDB Registered</span>
          <span className="footer__link" style={{ cursor: 'default' }}>Est. 2024</span>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© 2025 DriverWatch Ltd. All rights reserved.</span>
        <span>Built in Kigali, Rwanda</span>
      </div>
    </div>
  </footer>
);

export default Footer;
