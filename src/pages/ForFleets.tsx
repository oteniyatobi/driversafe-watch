import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import FadeIn from '../components/FadeIn';
import { useCountUp } from '../hooks/useCountUp';

const IconAlert = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#5B8A9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);
const IconShield = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#5B8A9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const IconTrend = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#5B8A9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
  </svg>
);
const IconClock = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#5B8A9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

const CostStat = ({ value, prefix = '', suffix, label }: { value: number; prefix?: string; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(value);
  return (
    <div style={{ padding: '28px 0', borderBottom: '1px solid var(--border)' }}>
      <div className="stat-num" style={{ color: 'var(--navy)' }}>
        {prefix}
        <span ref={ref as React.RefObject<HTMLSpanElement>}>{count.toLocaleString()}</span>
        {suffix}
      </div>
      <p className="body-sm" style={{ marginTop: 6 }}>{label}</p>
    </div>
  );
};

const ForFleets = () => (
  <div className="page">
    <Nav />

    {/* ══ Page Header ══ */}
    <section className="hero">
      <div className="container">
        <FadeIn>
          <span className="label hero__eyebrow">For Fleet Operators</span>
          <h1 className="hero__title">
            One accident costs more<br />than a year of monitoring.
          </h1>
          <p className="hero__sub">
            driverwatch is built for logistics companies, bus operators, and
            transport businesses that need their drivers to arrive safely on
            every route, every night.
          </p>
        </FadeIn>
        <FadeIn delay={100}>
          <div className="hero__actions">
            <Link to="/contact" className="btn btn--primary btn--lg">Book a Demo</Link>
            <Link to="/product" className="btn btn--outline btn--lg">See the Product</Link>
          </div>
        </FadeIn>
      </div>
    </section>

    {/* ══ The Problem ══ */}
    <section className="section section--alt">
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 64,
            alignItems: 'start',
            maxWidth: 960,
          }}
        >
          <FadeIn>
            <span className="label">The Problem</span>
            <h2 style={{ marginTop: 10, marginBottom: 16 }}>
              Your drivers are on the road at 3am. Are you watching?
            </h2>
            <p className="body" style={{ marginBottom: 16 }}>
              The highest-risk window for driver fatigue is between midnight and
              5am. Body clock, reduced traffic, and long shifts combine to create
              conditions where drowsiness isn't a possibility. It's a near-certainty
              on any route longer than four hours.
            </p>
            <p className="body" style={{ marginBottom: 16 }}>
              Most fleet operators know their routes are risky at night. Almost
              none have a system that can do anything about it while it's happening.
            </p>
            <p className="body">
              A late-night call to say there's been an accident is the worst part
              of running a fleet. driverwatch is the tool that prevents that call.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: 32, border: '1px solid var(--border)' }}>
              <p className="label" style={{ marginBottom: 20 }}>What one accident costs</p>
              <CostStat value={15000} prefix="$" suffix="+" label="Minimum cost of a serious road accident (USD)" />
              <CostStat value={50000} prefix="$" suffix="+" label="Full liability exposure including legal fees" />
              <CostStat value={3} suffix="x" label="Average insurance premium increase after a claim" />
              <div style={{ paddingTop: 20 }}>
                <p className="body-sm">
                  Figures based on regional fleet operator data from East Africa and international road safety reports.
                  Actual costs vary by jurisdiction and severity.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    {/* ══ Why fleets need this ══ */}
    <section className="section">
      <div className="container">
        <FadeIn>
          <div className="section-hd" style={{ maxWidth: 560 }}>
            <span className="label">The Case for driverwatch</span>
            <h2 style={{ marginTop: 10 }}>Four reasons fleet operators choose us.</h2>
          </div>
        </FadeIn>

        <div className="grid-2">
          {[
            {
              icon: <IconAlert />,
              title: 'Accident prevention, not just reporting',
              body: 'Most fleet management tools tell you what happened. driverwatch intervenes before it happens. The driver hears an alert. You see the incident on your dashboard. The vehicle keeps moving.',
              delay: 0,
            },
            {
              icon: <IconShield />,
              title: 'Driver accountability without surveillance',
              body: 'The system monitors alertness, not behaviour. Drivers aren\'t recorded or judged. They\'re protected. That distinction matters for driver buy-in and for your legal standing.',
              delay: 100,
            },
            {
              icon: <IconClock />,
              title: 'Built for overnight and long-haul routes',
              body: 'Kigali to Mombasa. Kampala to Nairobi. Routes that start at dusk and end at dawn are where driverwatch earns its place. It doesn\'t get tired. It doesn\'t take breaks.',
              delay: 0,
            },
            {
              icon: <IconTrend />,
              title: 'Insurance and compliance evidence',
              body: 'Every alert is logged with a timestamp and GPS location. In the event of an incident, you have documented evidence that you were monitoring driver safety. That matters to insurers and regulators.',
              delay: 100,
            },
          ].map((f, i) => (
            <FadeIn key={i} delay={f.delay}>
              <div className="card" style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div className="feat-icon" style={{ flexShrink: 0, marginBottom: 0 }}>{f.icon}</div>
                <div>
                  <h3 style={{ marginBottom: 10 }}>{f.title}</h3>
                  <p className="body-sm">{f.body}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* ══ ROI Framing ══ */}
    <section className="section section--alt">
      <div className="container" style={{ maxWidth: 760 }}>
        <FadeIn>
          <span className="label">Return on Investment</span>
          <h2 style={{ marginTop: 10, marginBottom: 24 }}>
            The maths is straightforward.
          </h2>
        </FadeIn>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <FadeIn>
            <div className="roi-block">
              <p style={{ fontWeight: 600, color: 'var(--navy)', marginBottom: 8 }}>
                One prevented accident
              </p>
              <p className="body">
                A single serious road accident conservatively costs a fleet operator
                $15,000 to $50,000 once you add up vehicle damage, cargo loss,
                medical liability, legal costs and increased insurance. That figure doesn't include
                the human cost, or the reputational damage with clients.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={80}>
            <div className="roi-block">
              <p style={{ fontWeight: 600, color: 'var(--navy)', marginBottom: 8 }}>
                driverwatch costs a fraction of that
              </p>
              <p className="body">
                Hardware installation per vehicle. A monthly software subscription
                per fleet. The numbers are available on request, and the comparison with the cost
                of one avoided incident makes the decision clear.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={160}>
            <div className="roi-block">
              <p style={{ fontWeight: 600, color: 'var(--navy)', marginBottom: 8 }}>
                It pays for itself the first time it works
              </p>
              <p className="body">
                The system doesn't need to prevent ten accidents to justify its cost.
                One prevented incident covers the investment many times over: one
                driver who gets an alert and pulls over instead of falling
                asleep at the wheel.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    {/* ══ Who it's for ══ */}
    <section className="section">
      <div className="container">
        <FadeIn>
          <div className="section-hd--center">
            <span className="label">Who we work with</span>
            <h2 style={{ marginTop: 10 }}>Built for serious fleet operators.</h2>
          </div>
        </FadeIn>

        <div className="grid-3">
          {[
            { label: 'Logistics & freight', desc: 'Trucks and lorries on overnight intercity routes across East Africa.' },
            { label: 'Bus & coach operators', desc: 'Long-distance passenger services where driver fatigue is a direct safety risk to passengers.' },
            { label: 'Matatu & taxi fleets', desc: 'High-frequency urban and peri-urban operators with multiple vehicles and drivers.' },
            { label: 'Corporate fleets', desc: 'Companies with driver accountability requirements and duty-of-care obligations.' },
            { label: 'Government transport', desc: 'Public service vehicles and government fleet operators with compliance requirements.' },
            { label: 'Ride-hailing operators', desc: 'Platform operators who need to monitor driver wellness at scale.' },
          ].map((w, i) => (
            <FadeIn key={i} delay={(i % 3) * 80}>
              <div
                style={{
                  padding: '24px',
                  background: 'var(--white)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  height: '100%',
                }}
              >
                <p style={{ fontWeight: 600, color: 'var(--navy)', marginBottom: 8 }}>{w.label}</p>
                <p className="body-sm">{w.desc}</p>
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
          <h2 style={{ color: 'var(--white)', marginBottom: 14 }}>
            Talk to us about your fleet.
          </h2>
          <p className="body" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 460, margin: '0 auto 32px' }}>
            Tell us how many vehicles you operate, the routes you run, and what
            you're trying to solve. We'll show you exactly how driverwatch fits in.
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

export default ForFleets;
