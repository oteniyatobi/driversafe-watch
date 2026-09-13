import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import FadeIn from '../components/FadeIn';

const IconCamera = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#5B8A9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
    <circle cx="12" cy="13" r="4"/>
  </svg>
);
const IconCpu = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#5B8A9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/>
    <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/>
  </svg>
);
const IconMapPin = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#5B8A9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const IconBell = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#5B8A9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"/>
  </svg>
);
const IconWifi = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#5B8A9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0"/>
    <circle cx="12" cy="20" r="1" fill="#5B8A9A"/>
  </svg>
);
const IconMonitor2 = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#5B8A9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
  </svg>
);
const IconActivity = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#5B8A9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
);
const IconPhone = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#5B8A9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
  </svg>
);

const Product = () => (
  <div className="page">
    <Nav />

    {/* ══ Page Header ══ */}
    <section className="hero">
      <div className="container">
        <FadeIn>
          <span className="label hero__eyebrow">The Product</span>
          <h1 className="hero__title">
            One device.<br />Complete visibility.
          </h1>
          <p className="hero__sub">
            driverwatch is a hardware-software system that fits in any vehicle and gives
            fleet operators a clear view of driver alertness without changing how drivers work.
          </p>
        </FadeIn>
      </div>
    </section>

    {/* ══ Prototype Showcase ══ */}
    <section className="section section--alt">
      <div className="container">
        <div className="proto">
          <FadeIn>
            <div className="proto__frame">
              <img
                src="/prototype.jpg"
                alt="The driverwatch hardware unit: a compact navy dashboard camera with adjustable mount"
                width={1168}
                height={784}
              />
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div>
              <span className="label">The Prototype</span>
              <h2 style={{ marginTop: 10, marginBottom: 16 }}>
                Built to sit on a dashboard and be forgotten.
              </h2>
              <p className="body" style={{ marginBottom: 8 }}>
                The unit is deliberately plain. No screen for the driver to look at, no
                buttons to press, no settings to configure. It mounts once, powers on,
                and runs for the length of the shift.
              </p>
              <p className="body">
                A single status light confirms it's working. Everything else happens
                on the dashboard, or through the speaker when it matters.
              </p>

              <div className="proto__specs">
                {[
                  ['Sensor', 'Infrared camera, low-light capable'],
                  ['Processing', 'On-device, Raspberry Pi platform'],
                  ['Connectivity', 'Cellular, no WiFi required'],
                  ['Positioning', 'Integrated GPS'],
                  ['Alerts', 'Built-in audio speaker'],
                  ['Mount', 'Adjustable, fits any dashboard'],
                  ['Installation', 'Under 20 minutes'],
                ].map(([k, v]) => (
                  <div key={k} className="proto__spec">
                    <span className="proto__spec-key">{k}</span>
                    <span className="proto__spec-val">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    {/* ══ Hardware ══ */}
    <section className="section">
      <div className="container">
        <FadeIn>
          <div className="section-hd">
            <span className="label">The Hardware</span>
            <h2 style={{ marginTop: 10 }}>The device that watches when you can't.</h2>
            <p className="body" style={{ marginTop: 12, maxWidth: 520 }}>
              A compact unit that mounts to the dashboard. Built on a Raspberry Pi
              platform: reliable, repairable, and designed for real-world East
              African road conditions.
            </p>
          </div>
        </FadeIn>

        <div className="grid-2" style={{ maxWidth: 900 }}>
          {[
            {
              icon: <IconCamera />,
              title: 'Infrared Camera',
              body: 'Monitors the driver\'s face in any lighting, from bright midday sun to a dark rural route at 3am. The IR lens detects eye closure, blink rate, and head drop without flash or distraction.',
            },
            {
              icon: <IconCpu />,
              title: 'On-device Processing',
              body: 'Detection happens locally, on the device. No round-trip to a server. Alerts fire in under two seconds, fast enough to matter even at highway speeds.',
            },
            {
              icon: <IconMapPin />,
              title: 'GPS Module',
              body: 'Every alert is tagged with a location. Fleet managers see exactly where an incident occurred. Route history is stored for review and insurance purposes.',
            },
            {
              icon: <IconBell />,
              title: 'Audio Alert Speaker',
              body: 'When fatigue is detected, the driver hears a loud, clear alert immediately. No vibration. No silent notification. Something they cannot ignore.',
            },
            {
              icon: <IconWifi />,
              title: 'Cellular Module',
              body: 'Data syncs to the dashboard over the cellular network. No WiFi needed. Works on routes where there\'s no fixed connectivity, just a mobile signal.',
            },
            {
              icon: <IconCamera />,
              title: 'Compact, Vehicle-agnostic',
              body: 'Mounts to any dashboard with a standard mount. Works in trucks, buses, matatus, and private vehicles. Installation takes under 20 minutes.',
            },
          ].map((f, i) => (
            <FadeIn key={i} delay={(i % 2) * 100}>
              <div className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                <div className="feat-icon" style={{ flexShrink: 0, marginBottom: 0 }}>{f.icon}</div>
                <div>
                  <h3 style={{ marginBottom: 8 }}>{f.title}</h3>
                  <p className="body-sm">{f.body}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* ══ Demo Video ══ */}
    <section className="section section--navy">
      <div className="container" style={{ maxWidth: 860 }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="label" style={{ color: 'var(--teal)' }}>Demo Feed</span>
            <h2 style={{ color: 'var(--white)', marginTop: 10 }}>See it in action.</h2>
            <p className="body" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 480, margin: '12px auto 0' }}>
              Watch the driverwatch device detect driver fatigue and trigger an alert in real time.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={80}>
          <div
            style={{
              position: 'relative',
              borderRadius: 16,
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {/* Live indicator */}
            <div
              style={{
                position: 'absolute',
                top: 14,
                left: 14,
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                background: 'rgba(0,0,0,0.55)',
                backdropFilter: 'blur(8px)',
                padding: '5px 10px',
                borderRadius: 20,
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#E53E3E',
                  display: 'block',
                  animation: 'pulse 1.5s ease-in-out infinite',
                }}
              />
              <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'rgba(255,255,255,0.9)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Live Feed
              </span>
            </div>
            {/* 16:9 iframe wrapper */}
            <div style={{ position: 'relative', paddingBottom: '56.25%' }}>
              <iframe
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                src="https://drive.google.com/file/d/19HsqxmRDkw-ucz9GCMC3R9I0Q0zksnqk/preview"
                title="driverwatch Live Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </FadeIn>
      </div>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </section>

    {/* ══ How Detection Works ══ */}
    <section className="section">
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 64,
            alignItems: 'center',
            maxWidth: 960,
          }}
        >
          <FadeIn>
            <span className="label">Detection</span>
            <h2 style={{ marginTop: 10, marginBottom: 16 }}>
              Fatigue doesn't announce itself. driverwatch does.
            </h2>
            <p className="body" style={{ marginBottom: 20 }}>
              The camera continuously measures three signals: eye openness,
              blink frequency, and head position. When those signals fall
              outside safe thresholds, the alert fires. That might be a PERCLOS
              score above 80%, or a head drop beyond 15°.
            </p>
            <p className="body">
              It's not one signal. It's a combination. A driver can blink slowly
              without being impaired. The system looks for patterns, not
              individual moments.
            </p>
            <div
              style={{
                marginTop: 32,
                padding: '20px 24px',
                background: 'var(--white)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                borderLeft: '3px solid var(--teal)',
              }}
            >
              <p className="body-sm" style={{ color: 'var(--text)' }}>
                PERCLOS (Percentage of Eye Closure) is the industry-standard
                measure for drowsy driving detection, developed by the US
                Federal Highway Administration.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { label: 'Eye closure detected', value: '< 0.5s', note: 'Time to first signal' },
                { label: 'Alert delivery', value: '< 2s', note: 'From detection to audio' },
                { label: 'Detection accuracy', value: '99.2%', note: 'In controlled testing' },
                { label: 'False alert rate', value: '< 1%', note: 'Tuned to reduce nuisance alerts' },
              ].map((m, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '16px 20px',
                    background: 'var(--white)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                  }}
                >
                  <div>
                    <p style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--navy)' }}>{m.label}</p>
                    <p className="body-sm">{m.note}</p>
                  </div>
                  <span style={{ fontWeight: 600, fontSize: '1.375rem', color: 'var(--teal)', letterSpacing: '-0.02em' }}>{m.value}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    {/* ══ Software Dashboard ══ */}
    <section className="section section--alt">
      <div className="container">
        <FadeIn>
          <div className="section-hd">
            <span className="label">The Software</span>
            <h2 style={{ marginTop: 10 }}>A clear view of your entire fleet.</h2>
            <p className="body" style={{ marginTop: 12, maxWidth: 520 }}>
              Fleet managers access a web dashboard, with no app download required, that
              shows every vehicle's status in one place.
            </p>
          </div>
        </FadeIn>

        <div className="grid-3">
          {[
            {
              icon: <IconActivity />,
              title: 'Live alertness feed',
              body: 'See driver alertness scores updating in real time. If a score drops, you know before the driver needs to pull over.',
              delay: 0,
            },
            {
              icon: <IconMapPin />,
              title: 'Route and location history',
              body: 'Every trip is logged with GPS. Review where incidents occurred, identify risky route segments, and keep accurate records for audits.',
              delay: 100,
            },
            {
              icon: <IconBell />,
              title: 'Alert log',
              body: 'Every alert, timestamped and geotagged. See which drivers receive alerts most frequently and use the data to inform scheduling decisions.',
              delay: 200,
            },
            {
              icon: <IconPhone />,
              title: 'Emergency contact system',
              body: 'If a driver is unresponsive after repeated alerts, the system automatically contacts their designated emergency contact with location.',
              delay: 0,
            },
            {
              icon: <IconMonitor2 />,
              title: 'Multi-vehicle overview',
              body: 'Manage as many vehicles as you operate from a single screen. No per-seat pricing that punishes you for growing your fleet.',
              delay: 100,
            },
            {
              icon: <IconCpu />,
              title: 'Exportable reports',
              body: 'Download incident reports and driver history for insurance submissions, safety audits, or internal fleet reviews.',
              delay: 200,
            },
          ].map((f, i) => (
            <FadeIn key={i} delay={f.delay}>
              <div className="card" style={{ height: '100%' }}>
                <div className="feat-icon">{f.icon}</div>
                <h3 style={{ marginBottom: 10 }}>{f.title}</h3>
                <p className="body-sm">{f.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* ══ CTA ══ */}
    <section className="section section--navy">
      <div className="container" style={{ textAlign: 'center' }}>
        <FadeIn>
          <h2 style={{ color: 'var(--white)', marginBottom: 16 }}>
            Want to see it running in a vehicle?
          </h2>
          <p className="body" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 460, margin: '0 auto 32px' }}>
            Book a demo and we'll show you the hardware, the dashboard, and what
            real-time alertness monitoring looks like for your fleet.
          </p>
          <Link to="/contact" className="btn btn--primary btn--lg">
            Book a Demo
          </Link>
        </FadeIn>
      </div>
    </section>

    <Footer />
    <ScrollToTop />
  </div>
);

export default Product;
