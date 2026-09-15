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

    {/* Left tower — tapering setback tiers, a shaft, then a thin spire,
        matching the real building's stepped profile */}
    <rect x="245" y="460" width="110" height="100" className="fill-primary-deep" />
    <rect x="255" y="380" width="90" height="80" className="fill-primary-deep" />
    <rect x="264" y="300" width="72" height="80" className="fill-primary-deep" />
    <rect x="273" y="160" width="54" height="140" className="fill-primary-deep" />
    <rect x="296" y="100" width="8" height="60" className="fill-primary-deep" />

    {/* Right tower — mirrored */}
    <rect x="445" y="460" width="110" height="100" className="fill-primary-deep" />
    <rect x="455" y="380" width="90" height="80" className="fill-primary-deep" />
    <rect x="464" y="300" width="72" height="80" className="fill-primary-deep" />
    <rect x="473" y="160" width="54" height="140" className="fill-primary-deep" />
    <rect x="496" y="100" width="8" height="60" className="fill-primary-deep" />

    {/* Skybridge, connecting the two shafts */}
    <rect x="327" y="220" width="146" height="26" className="fill-primary-deep" />

    {/* Support legs rising from each tower to meet at a single point at
        the bridge's centre — uniform-width struts (rotated rects, not
        tapering wedges), forming an A-frame */}
    <rect
      x="327"
      y="292"
      width="91"
      height="10"
      className="fill-primary-deep"
      transform="rotate(-37 327 297)"
    />
    <rect
      x="473"
      y="292"
      width="91"
      height="10"
      className="fill-primary-deep"
      transform="rotate(-143 473 297)"
    />
  </svg>
);

export default SkylineIllustration;
