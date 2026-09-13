import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import FadeIn from '../components/FadeIn';

const About = () => (
  <div className="page">
    <Nav />

    {/* ══ Page Header ══ */}
    <section className="hero">
      <div className="container">
        <FadeIn>
          <span className="label hero__eyebrow">About driverwatch</span>
          <h1 className="hero__title">
            Built in Rwanda.<br />Made for East Africa.
          </h1>
          <p className="hero__sub">
            driverwatch started as a question: why do drivers keep dying on roads
            that aren't that dangerous? The answer, almost always, is fatigue.
          </p>
        </FadeIn>
      </div>
    </section>

    {/* ══ Origin Story ══ */}
    <section className="section section--alt">
      <div className="container" style={{ maxWidth: 780 }}>
        <FadeIn>
          <span className="label">Where it started</span>
          <h2 style={{ marginTop: 10, marginBottom: 24 }}>
            Top 7 at CodeExtreme. From there, something real.
          </h2>
        </FadeIn>

        <FadeIn delay={60}>
          <p className="body-lg" style={{ marginBottom: 20 }}>
            In 2024, a team entered Rwanda's CodeExtreme Buildathon, a 48-hour
            technology competition that drew over 770 teams from across East Africa.
            The challenge was to build something that solved a real problem.
          </p>
        </FadeIn>
        <FadeIn delay={120}>
          <p className="body" style={{ marginBottom: 20 }}>
            The team chose road safety. Not because it was a safe bet, but because
            the numbers are hard to ignore: thousands of deaths each year across the
            region, a significant proportion of them linked to driver fatigue on
            overnight routes. Existing solutions, where they existed at all, weren't
            built for East African roads, East African vehicles, or East African
            budgets.
          </p>
        </FadeIn>
        <FadeIn delay={160}>
          <p className="body" style={{ marginBottom: 32 }}>
            The prototype worked. The team finished in the top 7. And rather than
            leave it as a competition entry, they kept building.
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 24,
            }}
          >
            {[
              { num: '770+', label: 'Teams at CodeExtreme' },
              { num: 'Top 7', label: 'Competition finish' },
              { num: '2024', label: 'Founded, Kigali' },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  textAlign: 'center',
                  padding: '24px',
                  background: 'var(--white)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border)',
                }}
              >
                <div className="stat-num" style={{ marginBottom: 6 }}>{s.num}</div>
                <p className="body-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>

    {/* ══ Company ══ */}
    <section className="section">
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
            <span className="label">The Company</span>
            <h2 style={{ marginTop: 10, marginBottom: 16 }}>
              Registered, accountable, and building for the long term.
            </h2>
            <p className="body" style={{ marginBottom: 16 }}>
              driverwatch is registered with the Rwanda Development Board (RDB),
              which means it operates as a formal company, not a side project or
              a prototype waiting for permission to exist.
            </p>
            <p className="body" style={{ marginBottom: 16 }}>
              The company is based in Kigali, Rwanda, with a focus on the East
              African market: Rwanda, Kenya, Uganda, Tanzania, and Burundi. These
              are markets with growing commercial transport sectors, rising safety
              expectations, and significant unmet need for driver monitoring tools
              built for local conditions.
            </p>
            <p className="body">
              The goal isn't to build a product and sell it to a larger company.
              The goal is to reduce road deaths across East Africa. That requires
              a real business, one with the sustainability to operate at scale,
              over time.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <span className="label">The Mission</span>
            <h2 style={{ marginTop: 10, marginBottom: 16 }}>
              Safer roads across East Africa.
            </h2>
            <p className="body" style={{ marginBottom: 20 }}>
              East Africa has some of the highest road fatality rates in the world
              relative to vehicle ownership. Most of those deaths are preventable.
              Fatigue, distraction, and driver inattention are factors in the
              majority of serious crashes, and none of them require better roads
              to fix. They require better monitoring.
            </p>
            <p className="body" style={{ marginBottom: 28 }}>
              driverwatch is a specific answer to a specific problem. It doesn't
              claim to solve everything. It claims to solve the thing it was
              built to solve: keeping a driver awake and alert on a dangerous
              route at 3am.
            </p>
            <div
              style={{
                padding: '20px 24px',
                background: 'var(--white)',
                border: '1px solid var(--border)',
                borderLeft: '3px solid var(--teal)',
                borderRadius: 'var(--radius-lg)',
              }}
            >
              <p
                style={{
                  fontStyle: 'italic',
                  color: 'var(--text)',
                  fontSize: '1rem',
                  lineHeight: 1.7,
                }}
              >
                "Safer Roads. Protected Lives." Not a slogan. A description
                of what happens when a driver gets an alert instead of falling
                asleep.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    {/* ══ CTA ══ */}
    <section className="section section--navy">
      <div className="container" style={{ textAlign: 'center' }}>
        <FadeIn>
          <h2 style={{ color: 'var(--white)', marginBottom: 14 }}>
            Interested in what we're building?
          </h2>
          <p className="body" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 440, margin: '0 auto 32px' }}>
            Whether you run a fleet, work in transport policy, or want to partner
            with us, get in touch.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn--primary btn--lg">Book a Demo</Link>
            <a
              href="mailto:oluwatobijeremiahoteniya@gmail.com"
              className="btn btn--outline-white btn--lg"
            >
              Send us an email
            </a>
          </div>
        </FadeIn>
      </div>
    </section>

    <Footer />
    <ScrollToTop />
  </div>
);

export default About;
