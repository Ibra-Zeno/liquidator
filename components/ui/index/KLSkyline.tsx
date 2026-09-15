// A restrained, abstracted silhouette of the Petronas Towers — a quiet
// nod to Kuala Lumpur rather than a literal illustration. The stepped,
// tapering tiers are what actually read as "Petronas" rather than any
// generic twin towers.
const KLSkyline: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 300 440"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    {/* Low-rise foreground buildings, sized to clear the towers' base
        (left tower base spans x54-126, right tower x174-246) */}
    <rect x="6" y="360" width="34" height="60" fill="currentColor" />
    <rect x="42" y="384" width="10" height="36" fill="currentColor" />
    <rect x="250" y="384" width="10" height="36" fill="currentColor" />
    <rect x="264" y="370" width="30" height="50" fill="currentColor" />

    {/* Left tower — four tapering setback tiers, a shaft, then a thin
        spire, matching the real building's stepped profile */}
    <rect x="54" y="346" width="72" height="74" fill="currentColor" />
    <rect x="60" y="286" width="60" height="60" fill="currentColor" />
    <rect x="66" y="226" width="48" height="60" fill="currentColor" />
    <rect x="72" y="120" width="36" height="106" fill="currentColor" />
    <rect x="87" y="20" width="6" height="100" fill="currentColor" />

    {/* Right tower — mirrored */}
    <rect x="174" y="346" width="72" height="74" fill="currentColor" />
    <rect x="180" y="286" width="60" height="60" fill="currentColor" />
    <rect x="186" y="226" width="48" height="60" fill="currentColor" />
    <rect x="192" y="120" width="36" height="106" fill="currentColor" />
    <rect x="207" y="20" width="6" height="100" fill="currentColor" />

    {/* Skybridge, connecting the two shafts */}
    <rect x="108" y="150" width="84" height="18" fill="currentColor" />

    {/* Support legs rising from each tower to meet at a single point at
        the bridge's centre — uniform-width struts (rotated rects, not
        tapering wedges), forming an A-frame */}
    <rect
      x="108"
      y="207"
      width="61"
      height="6"
      fill="currentColor"
      transform="rotate(-46.3 108 210)"
    />
    <rect
      x="192"
      y="207"
      width="61"
      height="6"
      fill="currentColor"
      transform="rotate(-133.7 192 210)"
    />
  </svg>
);

export default KLSkyline;
