// A restrained, abstracted silhouette of the Petronas Towers — a quiet
// nod to Kuala Lumpur rather than a literal illustration.
const KLSkyline: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 300 440"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    {/* Low-rise context buildings */}
    <rect x="6" y="360" width="34" height="60" fill="currentColor" />
    <rect x="46" y="330" width="26" height="90" fill="currentColor" />
    <rect x="230" y="340" width="28" height="80" fill="currentColor" />
    <rect x="264" y="370" width="30" height="50" fill="currentColor" />

    {/* Skybridge */}
    <rect x="122" y="190" width="56" height="18" fill="currentColor" />

    {/* Left tower */}
    <polygon
      fill="currentColor"
      points="56,420 56,300 66,300 66,180 76,180 76,60 104,60 104,180 114,180 114,300 124,300 124,420"
    />
    <rect x="88" y="8" width="4" height="52" fill="currentColor" />

    {/* Right tower */}
    <polygon
      fill="currentColor"
      points="176,420 176,300 186,300 186,180 196,180 196,60 224,60 224,180 234,180 234,300 244,300 244,420"
    />
    <rect x="208" y="8" width="4" height="52" fill="currentColor" />
  </svg>
);

export default KLSkyline;
