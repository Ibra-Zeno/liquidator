// Ascending blocks with a rising accent line — a quiet stand-in for
// "recovery trajectory" rather than a stock office/services photo.
const GrowthIllustration: React.FC<{ className?: string }> = ({
  className,
}) => (
  <svg
    viewBox="0 0 800 600"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
    className={className}
  >
    <rect x="120" y="420" width="100" height="140" className="fill-primary/20" />
    <rect x="260" y="340" width="100" height="220" className="fill-primary/30" />
    <rect x="400" y="260" width="100" height="300" className="fill-primary/50" />
    <rect
      x="540"
      y="180"
      width="100"
      height="380"
      className="fill-primary-deep/80"
    />
    <path
      d="M100,470 C260,380 420,220 660,140"
      strokeWidth="3.5"
      strokeLinecap="round"
      className="fill-none stroke-accent"
    />
    <circle cx="660" cy="140" r="8" className="fill-accent" />
  </svg>
);

export default GrowthIllustration;
