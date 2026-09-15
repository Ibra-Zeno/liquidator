// A bolder, filled companion to the hero's line-art KLSkyline — same
// abstracted Petronas Towers geometry, solid instead of a ghost watermark,
// standing in for the "Kuala Lumpur skyline" stock photo it replaces.
const SkylineIllustration: React.FC<{ className?: string }> = ({
  className,
}) => (
  <svg
    viewBox="0 0 800 600"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
    className={className}
  >
    {/* Sun */}
    <circle cx="620" cy="150" r="70" className="fill-accent/25" />
    <circle cx="620" cy="150" r="40" className="fill-accent/50" />

    {/* Ground */}
    <rect x="0" y="560" width="800" height="40" className="fill-primary-deep/15" />

    {/* Low-rise context buildings */}
    <rect x="40" y="480" width="70" height="80" className="fill-primary/25" />
    <rect x="120" y="430" width="55" height="130" className="fill-primary/30" />
    <rect x="610" y="460" width="60" height="100" className="fill-primary/30" />
    <rect x="680" y="500" width="70" height="60" className="fill-primary/20" />

    {/* Skybridge */}
    <rect x="330" y="330" width="130" height="26" className="fill-primary-deep" />

    {/* Left tower */}
    <polygon
      points="230,560 230,400 250,400 250,270 270,270 270,140 320,140 320,270 340,270 340,400 360,400 360,560"
      className="fill-primary-deep"
    />
    <rect x="288" y="90" width="8" height="60" className="fill-primary-deep" />

    {/* Right tower */}
    <polygon
      points="440,560 440,400 460,400 460,270 480,270 480,140 530,140 530,270 550,270 550,400 570,400 570,560"
      className="fill-primary-deep"
    />
    <rect x="498" y="90" width="8" height="60" className="fill-primary-deep" />
  </svg>
);

export default SkylineIllustration;
