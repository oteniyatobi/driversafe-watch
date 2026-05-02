import { useEffect, useRef } from "react";

interface Star {
  x: number; y: number; r: number;
  spd: number; off: number; amber: boolean;
}

const RoadBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0, H = 0, animId = 0, t = 0;
    let stars: Star[] = [];

    const seedStars = () => {
      stars = Array.from({ length: 120 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H * 0.46,
        r: Math.random() * 1.4 + 0.3,
        spd: Math.random() * 2.5 + 0.5,
        off: Math.random() * Math.PI * 2,
        amber: Math.random() < 0.08,
      }));
    };

    const resize = () => {
      W = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      H = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      seedStars();
    };

    resize();
    window.addEventListener("resize", resize);

    const HORIZON_RATIO = 0.46; // where the road meets the sky
    const NUM_H = 24;  // horizontal grid lines
    const NUM_V = 26;  // vertical lines total
    const SPEED = 0.004; // road scroll speed

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      const HORIZON = H * HORIZON_RATIO;
      const VP_X = W / 2;
      const now = Date.now() * 0.001;

      t = (t + SPEED) % 1;

      // ── 1. Starfield ─────────────────────────────────────────────
      stars.forEach(s => {
        const tw = 0.3 + 0.7 * Math.abs(Math.sin(now * s.spd + s.off));
        ctx.fillStyle = s.amber
          ? `rgba(245,158,11,${tw * 0.8})`
          : `rgba(180,210,255,${tw * 0.75})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * (0.7 + tw * 0.5), 0, Math.PI * 2);
        ctx.fill();
      });

      // Subtle nebula/glow behind stars
      const nebula = ctx.createRadialGradient(W * 0.3, H * 0.2, 0, W * 0.3, H * 0.2, W * 0.4);
      nebula.addColorStop(0, "rgba(59,130,246,0.04)");
      nebula.addColorStop(1, "transparent");
      ctx.fillStyle = nebula;
      ctx.fillRect(0, 0, W, HORIZON);

      // ── 2. Vertical road perspective lines ───────────────────────
      for (let i = -NUM_V / 2; i <= NUM_V / 2; i++) {
        const frac = i / (NUM_V / 2);
        const bottomX = VP_X + frac * W * 0.78;
        const alpha = Math.max(0, 0.18 - Math.abs(frac) * 0.14);
        if (alpha < 0.005) continue;

        ctx.strokeStyle = `rgba(59,130,246,${alpha})`;
        ctx.lineWidth = i === 0 ? 1.2 : 0.6;
        ctx.beginPath();
        ctx.moveTo(VP_X, HORIZON);
        ctx.lineTo(bottomX, H + 20);
        ctx.stroke();
      }

      // ── 3. Horizontal road lines (perspective scrolling) ─────────
      for (let i = 0; i < NUM_H; i++) {
        const phase = (t + i / NUM_H) % 1;
        // Quadratic gives correct perspective foreshortening
        const p = phase * phase;

        const screenY = HORIZON + (H - HORIZON) * p;
        if (screenY > H + 3 || screenY < HORIZON) continue;

        const spread = p;
        const lineW = Math.min(spread * W * 1.7, W * 1.7);
        const alpha = Math.min(0.28, spread * 0.3);
        if (alpha < 0.005) continue;

        ctx.strokeStyle = `rgba(59,130,246,${alpha})`;
        ctx.lineWidth = Math.max(0.4, spread * 1.8);
        ctx.beginPath();
        ctx.moveTo(VP_X - lineW / 2, screenY);
        ctx.lineTo(VP_X + lineW / 2, screenY);
        ctx.stroke();
      }

      // ── 4. Amber centre-lane dashes ──────────────────────────────
      for (let i = 0; i < NUM_H; i++) {
        const phase = (t + i / NUM_H) % 1;
        const p = phase * phase;
        const screenY = HORIZON + (H - HORIZON) * p;
        if (screenY > H + 3 || screenY < HORIZON + 10) continue;

        const alpha = Math.min(0.55, p * 0.65);
        if (alpha < 0.05) continue;

        const dW = Math.max(1, p * 5);
        const dH = Math.max(2, p * 14);
        ctx.fillStyle = `rgba(245,158,11,${alpha * 0.55})`;
        ctx.fillRect(VP_X - dW / 2, screenY - dH / 2, dW, dH);
      }

      // ── 5. Horizon glow line ─────────────────────────────────────
      const hGrad = ctx.createLinearGradient(0, 0, W, 0);
      hGrad.addColorStop(0, "rgba(59,130,246,0)");
      hGrad.addColorStop(0.2, "rgba(59,130,246,0.2)");
      hGrad.addColorStop(0.5, "rgba(59,130,246,0.7)");
      hGrad.addColorStop(0.8, "rgba(59,130,246,0.2)");
      hGrad.addColorStop(1, "rgba(59,130,246,0)");
      ctx.strokeStyle = hGrad;
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(0, HORIZON);
      ctx.lineTo(W, HORIZON);
      ctx.stroke();

      // ── 6. Horizon bloom ─────────────────────────────────────────
      const bloom = ctx.createRadialGradient(VP_X, HORIZON, 0, VP_X, HORIZON, W * 0.6);
      bloom.addColorStop(0, "rgba(59,130,246,0.12)");
      bloom.addColorStop(0.35, "rgba(59,130,246,0.05)");
      bloom.addColorStop(1, "rgba(59,130,246,0)");
      ctx.fillStyle = bloom;
      ctx.fillRect(0, HORIZON - 100, W, 200);

      // ── 7. Road surface ambient light (center glow on asphalt) ───
      const roadGlow = ctx.createRadialGradient(VP_X, H * 0.75, 0, VP_X, H * 0.75, W * 0.35);
      roadGlow.addColorStop(0, "rgba(59,130,246,0.05)");
      roadGlow.addColorStop(1, "rgba(59,130,246,0)");
      ctx.fillStyle = roadGlow;
      ctx.fillRect(0, HORIZON, W, H - HORIZON);

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
};

export default RoadBackground;
