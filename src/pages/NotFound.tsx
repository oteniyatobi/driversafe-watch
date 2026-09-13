import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const NotFound = () => (
  <div className="page">
    <Nav />
    <section
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 240px)',
        padding: '80px 24px',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: 440 }}>
        <div
          style={{
            fontSize: '6rem',
            fontWeight: 600,
            color: 'var(--border)',
            lineHeight: 1,
            letterSpacing: '-0.04em',
            marginBottom: 24,
          }}
        >
          404
        </div>
        <h1 style={{ marginBottom: 12, color: 'var(--navy)' }}>Page not found</h1>
        <p className="body" style={{ marginBottom: 32 }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn--primary btn--lg">
          Back to Home
        </Link>
      </div>
    </section>
    <Footer />
  </div>
);

export default NotFound;
