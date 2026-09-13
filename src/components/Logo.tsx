interface LogoProps {
  size?: number;
  variant?: "full" | "icon" | "wordmark";
  className?: string;
  textColor?: string;
}

/**
 * Exact geometry from the brand kit — public/brand/logo-icon-only.svg.
 * Do not adjust the path or the wheel radii; the wheel stays small ("iris size")
 * per the brand rules. Pass stroke="#FFFFFF" for the reversed variant
 * (eye turns white, wheel stays teal — see logo-reversed.svg).
 */
export const DriverWatchIcon = ({
  size = 40,
  className = "",
  stroke = "#0A2540",
  accent = "#5B8A9A",
}: {
  size?: number;
  className?: string;
  stroke?: string;
  accent?: string;
}) => (
  <svg
    width={size}
    height={Math.round(size * 0.75)}
    viewBox="0 0 160 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Eye outline */}
    <path
      d="M28 60 C28 38 52 22 80 22 C108 22 132 38 132 60 C132 82 108 98 80 98 C52 98 28 82 28 60 Z"
      stroke={stroke}
      strokeWidth="8"
      strokeLinecap="round"
      fill="none"
    />
    {/* Small steering wheel */}
    <g transform="translate(80, 60)">
      <circle cx="0" cy="0" r="14" stroke={accent} strokeWidth="3.5" fill="none" />
      <circle cx="0" cy="0" r="4.5" fill={accent} />
      <line x1="0" y1="-14" x2="0" y2="-4.5" stroke={accent} strokeWidth="3" strokeLinecap="round" />
      <line x1="-12.1" y1="7" x2="-3.9" y2="2.25" stroke={accent} strokeWidth="3" strokeLinecap="round" />
      <line x1="12.1" y1="7" x2="3.9" y2="2.25" stroke={accent} strokeWidth="3" strokeLinecap="round" />
    </g>
  </svg>
);

const Logo = ({ size = 40, variant = "full", className = "", textColor = "#0A2540" }: LogoProps) => {
  if (variant === "icon") return <DriverWatchIcon size={size} className={className} />;

  if (variant === "wordmark") {
    return (
      <span
        className={className}
        style={{ color: textColor, fontSize: size * 0.55, fontWeight: 500, letterSpacing: "-0.02em" }}
      >
        driverwatch
      </span>
    );
  }

  return (
    <div className={className} style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <DriverWatchIcon size={size} />
      <span
        style={{
          color: textColor,
          fontSize: Math.round(size * 0.42),
          fontWeight: 500,
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}
      >
        driverwatch
      </span>
    </div>
  );
};

export default Logo;
