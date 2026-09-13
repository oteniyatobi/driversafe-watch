import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import FadeIn from '../components/FadeIn';
import WaitlistCountdown from '../components/WaitlistCountdown';
import { useCountUp } from '../hooks/useCountUp';

/* ── Count-up stat ── */
const Stat = ({
  value,
  suffix = '',
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) => {
  const { count, ref } = useCountUp(value);
  return (
    <div style={{ textAlign: 'center' }}>
      <div className="stat-num">
        <span ref={ref as React.RefObject<HTMLSpanElement>}>{count}</span>
        {suffix}
      </div>
      <p className="body-sm" style={{ marginTop: 6, color: 'var(--text-muted)' }}>
        {label}
      </p>
    </div>
  );
};

/* ── Icons (inline SVG, no external lib) ── */
const IconEye = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#5B8A9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
  </svg>
);
const IconMonitor = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#5B8A9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
  </svg>
);
const IconMoon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#5B8A9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

/* ── Page ── */
const Home = () => (
  <div className="page">
    <Nav />

    {/* ══ Hero ══ */}
    <section className="hero">
      <div className="container">
        <FadeIn>
          <span className="label hero__eyebrow">Driver Safety Technology</span>
        </FadeIn>
        <FadeIn delay={60}>
          <h1 className="hero__title">
            Driver Safety.<br />Always Watching.
          </h1>
        </FadeIn>
        <FadeIn delay={120}>
          <p className="hero__sub">
            driverwatch monitors driver alertness in real time. When fatigue or
            distraction is detected, it acts, so your drivers stay safe and your
            fleet keeps moving.
          </p>
        </FadeIn>
        <FadeIn delay={180}>
          <div className="hero__actions">
            <a
              href="https://drive-watch-three.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--lg"
            >
              Launch Dashboard
            </a>
            <Link to="/contact" className="btn btn--outline btn--lg">
              Book a Demo
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>

    {/* ══ 3 Key Benefits ══ */}
    <section className="section section--alt">
      <div className="container">
        <FadeIn>
          <div className="section-hd">
            <span className="label">Why driverwatch</span>
            <h2 style={{ marginTop: 10 }}>
              Monitoring that makes a difference.
            </h2>
          </div>
        </FadeIn>

        <div className="grid-3">
          {[
            {
              icon: <IconEye />,
              title: 'Detects fatigue before it causes harm',
              body: 'The camera tracks eye movement, blink rate, and head position. The moment alertness drops, the driver gets an immediate audio alert, before a mistake is made.',
              delay: 0,
            },
            {
              icon: <IconMonitor />,
              title: 'Fleet managers stay informed',
              body: 'A live dashboard shows driver status across your entire fleet. You know what\'s happening on every route, in real time, without waiting for a report.',
              delay: 100,
            },
            {
              icon: <IconMoon />,
              title: 'Built for overnight routes',
              body: 'Between midnight and 5am, accident risk is highest. driverwatch runs continuously. No shift changes, no fatigue of its own.',
              delay: 200,
            },
          ].map((b, i) => (
            <FadeIn key={i} delay={b.delay}>
              <div className="card" style={{ height: '100%' }}>
                <div className="feat-icon">{b.icon}</div>
                <h3 style={{ marginBottom: 12 }}>{b.title}</h3>
                <p className="body-sm">{b.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* ══ How It Works ══ */}
    <section className="section">
      <div className="container">
        <FadeIn>
          <div className="section-hd" style={{ maxWidth: 540 }}>
            <span className="label">How it works</span>
            <h2 style={{ marginTop: 10 }}>A device. An app. A safer fleet.</h2>
            <p className="body" style={{ marginTop: 12 }}>
              Three steps from installation to full fleet visibility.
            </p>
          </div>
        </FadeIn>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, maxWidth: 640 }}>
          {[
            {
              num: '01',
              title: 'Install the device',
              body: 'A compact camera unit mounts to the driver\'s dashboard. It connects to your cellular network in minutes. No IT team or specialist installation required.',
            },
            {
              num: '02',
              title: 'Monitor your drivers',
              body: 'The camera tracks driver alertness continuously. GPS logs every route. All data streams to your fleet dashboard in real time, accessible from any browser.',
            },
            {
              num: '03',
              title: 'Get alerts and act',
              body: 'When a driver shows signs of fatigue or distraction, they hear an immediate audio alert. You get notified on the dashboard. In an unresponsive emergency, designated contacts are reached automatically.',
            },
          ].map((s, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div
                style={{
                  display: 'flex',
                  gap: 24,
                  padding: '32px 0',
                  borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
                }}
              >
                <div className="step-num" style={{ marginTop: 2 }}>{s.num}</div>
                <div>
                  <h3 style={{ marginBottom: 8 }}>{s.title}</h3>
                  <p className="body">{s.body}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* ══ Stats ══ */}
    <section className="section section--alt">
      <div className="container">
        <FadeIn>
          <div className="section-hd--center">
            <span className="label">Built to compete and win</span>
            <h2 style={{ marginTop: 10 }}>Validated at East Africa's largest buildathon.</h2>
            <p className="body" style={{ marginTop: 12 }}>
              driverwatch was built at CodeExtreme, Rwanda's premier technology buildathon,
              and finished in the top 7 out of more than 770 competing teams.
            </p>
          </div>
        </FadeIn>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 32,
            maxWidth: 680,
            margin: '0 auto',
          }}
        >
          <FadeIn><Stat value={770} suffix="+" label="Teams at CodeExtreme" /></FadeIn>
          <FadeIn delay={100}><Stat value={7} suffix="" label="Our finishing position" /></FadeIn>
          <FadeIn delay={200}><Stat value={6} suffix="" label="Countries in East Africa served" /></FadeIn>
        </div>
      </div>
    </section>

    {/* ══ Hardware Waitlist ══ */}
    <WaitlistCountdown />

    {/* ══ CTA Banner ══ */}
    <section className="section section--navy">
      <div className="container" style={{ textAlign: 'center' }}>
        <FadeIn>
          <span className="label" style={{ color: 'var(--teal)' }}>Ready to protect your fleet?</span>
          <h2 style={{ color: 'var(--white)', marginTop: 10, marginBottom: 16 }}>
            Book a demo and see driverwatch in action.
          </h2>
          <p className="body" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 480, margin: '0 auto 32px' }}>
            We'll walk you through the hardware, the dashboard, and what real-time driver
            monitoring looks like for your specific operation.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn--primary btn--lg">
              Book a Demo
            </Link>
            <Link to="/for-fleets" className="btn btn--outline-white btn--lg">
              Learn About Fleet Pricing
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>

    <Footer />
    <ScrollToTop />
  </div>
);

export default Home;
