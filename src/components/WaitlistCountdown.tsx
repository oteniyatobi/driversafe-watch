import { useState, useEffect } from 'react';
import FadeIn from './FadeIn';

const LAUNCH_DATE = new Date('2027-01-15T00:00:00').getTime();

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzcPBdBpU-f67V5Vwzz2j2Fn5iAf4cgextsplmc1qzRG2LXr-QwOkRo26cf7xEcpC3kXg/exec';

const getRemaining = () => {
  const distance = LAUNCH_DATE - Date.now();
  if (distance <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(distance / 86400000),
    hours: Math.floor((distance % 86400000) / 3600000),
    minutes: Math.floor((distance % 3600000) / 60000),
    seconds: Math.floor((distance % 60000) / 1000),
  };
};

const WaitlistCountdown = () => {
  const [time, setTime] = useState(getRemaining);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('sending');
    try {
      const params = new URLSearchParams();
      params.append('email', email);
      params.append('source', 'hardware-waitlist');
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params,
      });
      setStatus('sent');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  const blocks = [
    { label: 'Days', value: time.days },
    { label: 'Hours', value: time.hours },
    { label: 'Minutes', value: time.minutes },
    { label: 'Seconds', value: time.seconds },
  ];

  return (
    <section className="section">
      <div className="container">
        <FadeIn>
          <div className="waitlist">
            {/* Left — copy + form */}
            <div className="waitlist__copy">
              <span className="label">Hardware Waitlist</span>
              <h2 style={{ marginTop: 10, marginBottom: 12 }}>
                The device ships January 2027.
              </h2>
              <p className="body" style={{ marginBottom: 28, maxWidth: 420 }}>
                The driverwatch hardware unit enters production for East African fleets in
                January. Join the waitlist to reserve units for your fleet and get first
                access to installation slots.
              </p>

              {status === 'sent' ? (
                <div className="waitlist__success">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#2D7D46" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>You're on the list. We'll be in touch before launch.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="waitlist__form">
                  <input
                    type="email"
                    className="form-input"
                    placeholder="you@company.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="btn btn--primary"
                    disabled={status === 'sending'}
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    {status === 'sending' ? 'Sending…' : 'Join Waitlist'}
                  </button>
                </form>
              )}

              {status === 'error' && (
                <p style={{ color: '#C0392B', fontSize: '0.8125rem', marginTop: 10 }}>
                  Something went wrong. Please try again.
                </p>
              )}
            </div>

            {/* Right — countdown */}
            <div className="waitlist__clock">
              {blocks.map(b => (
                <div key={b.label} className="waitlist__block">
                  <span className="waitlist__num">
                    {b.value.toString().padStart(2, '0')}
                  </span>
                  <span className="waitlist__unit">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default WaitlistCountdown;
