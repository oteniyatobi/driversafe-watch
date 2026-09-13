import { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import FadeIn from '../components/FadeIn';

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzcPBdBpU-f67V5Vwzz2j2Fn5iAf4cgextsplmc1qzRG2LXr-QwOkRo26cf7xEcpC3kXg/exec';

const FLEET_SIZES = [
  'Select fleet size',
  '1–5 vehicles',
  '6–20 vehicles',
  '21–50 vehicles',
  '51–100 vehicles',
  '100+ vehicles',
];

const ContactDemo = () => {
  const [form, setForm] = useState({
    name: '',
    company: '',
    fleetSize: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const params = new URLSearchParams();
      Object.entries(form).forEach(([k, v]) => params.append(k, v));

      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params,
      });

      setStatus('sent');
      setForm({ name: '', company: '', fleetSize: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="page">
      <Nav />

      {/* ══ Page Header ══ */}
      <section className="hero">
        <div className="container">
          <FadeIn>
            <span className="label hero__eyebrow">Book a Demo</span>
            <h1 className="hero__title">
              Let's talk about<br />your fleet.
            </h1>
            <p className="hero__sub">
              Tell us about your operation and we'll arrange a demo: live hardware,
              the dashboard, and a walkthrough of how it works for your specific routes.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ══ Form + Contact Info ══ */}
      <section className="section section--alt">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 380px',
              gap: 64,
              alignItems: 'start',
              maxWidth: 960,
            }}
          >
            {/* Form */}
            <FadeIn>
              {status === 'sent' ? (
                <div
                  style={{
                    padding: '40px',
                    background: 'var(--white)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border)',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: '50%',
                      background: '#EBF5EE',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px',
                    }}
                  >
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#2D7D46" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3 style={{ marginBottom: 12 }}>Message received.</h3>
                  <p className="body">
                    We typically respond within one business day. In the meantime,
                    feel free to email us directly at{' '}
                    <a href="mailto:oluwatobijeremiahoteniya@gmail.com" className="text-link">
                      oluwatobijeremiahoteniya@gmail.com
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    background: 'var(--white)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border)',
                    padding: '36px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 20,
                  }}
                >
                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Full name</label>
                      <input
                        id="name"
                        className="form-input"
                        type="text"
                        placeholder="Jean-Paul Hakizimana"
                        value={form.name}
                        onChange={set('name')}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="company">Company</label>
                      <input
                        id="company"
                        className="form-input"
                        type="text"
                        placeholder="Kigali Logistics Ltd"
                        value={form.company}
                        onChange={set('company')}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="fleetSize">Fleet size</label>
                      <select
                        id="fleetSize"
                        className="form-select"
                        value={form.fleetSize}
                        onChange={set('fleetSize')}
                        required
                      >
                        {FLEET_SIZES.map(s => (
                          <option key={s} value={s === 'Select fleet size' ? '' : s} disabled={s === 'Select fleet size'}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email address</label>
                      <input
                        id="email"
                        className="form-input"
                        type="email"
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={set('email')}
                        required
                      />
                    </div>

                    <div className="form-group form-group--full">
                      <label className="form-label" htmlFor="message">Tell us about your operation</label>
                      <textarea
                        id="message"
                        className="form-textarea"
                        placeholder="What routes do you run? What's your biggest safety concern? Any specific challenges you'd like us to address in the demo?"
                        value={form.message}
                        onChange={set('message')}
                      />
                    </div>
                  </div>

                  {status === 'error' && (
                    <p style={{ color: '#C0392B', fontSize: '0.875rem' }}>
                      Something went wrong. Please try emailing us directly at{' '}
                      <a href="mailto:oluwatobijeremiahoteniya@gmail.com" className="text-link">
                        oluwatobijeremiahoteniya@gmail.com
                      </a>.
                    </p>
                  )}

                  <div className="form-submit-wrap">
                    <button
                      type="submit"
                      className="btn btn--primary btn--lg"
                      disabled={status === 'sending'}
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      {status === 'sending' ? (
                        <>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ animation: 'spin 0.8s linear infinite' }}>
                            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                          </svg>
                          Sending…
                        </>
                      ) : 'Book a Demo'}
                    </button>
                  </div>
                </form>
              )}
            </FadeIn>

            {/* Contact info sidebar */}
            <FadeIn delay={100}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div
                  style={{
                    padding: '24px',
                    background: 'var(--white)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <p className="label" style={{ marginBottom: 12 }}>Direct contact</p>
                  <a
                    href="mailto:oluwatobijeremiahoteniya@gmail.com"
                    style={{ display: 'block', fontWeight: 600, color: 'var(--teal)', fontSize: '0.9375rem', wordBreak: 'break-word' }}
                  >
                    oluwatobijeremiahoteniya@gmail.com
                  </a>
                  <p className="body-sm" style={{ marginTop: 6 }}>
                    We respond within one business day.
                  </p>
                </div>

                <div
                  style={{
                    padding: '24px',
                    background: 'var(--white)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <p className="label" style={{ marginBottom: 12 }}>Location</p>
                  <p style={{ fontWeight: 600, color: 'var(--navy)', fontSize: '0.9375rem' }}>
                    Kigali, Rwanda
                  </p>
                  <p className="body-sm" style={{ marginTop: 4 }}>
                    RDB registered. Demos available in person or over video call.
                  </p>
                </div>

                <div
                  style={{
                    padding: '24px',
                    background: 'var(--white)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <p className="label" style={{ marginBottom: 12 }}>What to expect</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {[
                      'A walkthrough of the hardware device',
                      'Live demo of the fleet dashboard',
                      'Discussion of your specific routes and risks',
                      'Transparent conversation about pricing',
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <div
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            background: 'var(--teal)',
                            marginTop: 7,
                            flexShrink: 0,
                          }}
                        />
                        <p className="body-sm" style={{ color: 'var(--text)' }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    padding: '24px',
                    background: 'var(--white)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <p className="label" style={{ marginBottom: 8 }}>Website</p>
                  <a
                    href="https://driverwatch.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link"
                    style={{ fontWeight: 600, fontSize: '0.9375rem' }}
                  >
                    driverwatch.tech
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @media (max-width: 768px) {
          .contact-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ContactDemo;
