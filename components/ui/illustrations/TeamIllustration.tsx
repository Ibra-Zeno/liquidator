// Abstract "convergence" motif — overlapping rings standing in for
// collaboration, rather than a literal (and easily dated) office photo.
const TeamIllustration: React.FC<{ className?: string }> = ({
  className,
}) => (
  <svg
    viewBox="0 0 800 600"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
    className={className}
  >
    <circle
      cx="330"
      cy="270"
      r="190"
      strokeWidth="2.5"
      className="fill-none stroke-primary/25"
    />
    <circle
      cx="490"
      cy="330"
      r="160"
      strokeWidth="2.5"
      className="fill-none stroke-primary/40"
    />
    <circle
      cx="430"
      cy="170"
      r="110"
      strokeWidth="2.5"
      className="fill-none stroke-accent/60"
    />
    <circle cx="330" cy="270" r="6" className="fill-primary-deep/70" />
    <circle cx="490" cy="330" r="6" className="fill-primary-deep/70" />
    <circle cx="430" cy="170" r="6" className="fill-accent/80" />
    <rect
      x="596"
      y="436"
      width="18"
      height="18"
      transform="rotate(45 605 445)"
      className="fill-accent/50"
    />
    <rect
      x="150"
      y="110"
      width="13"
      height="13"
      transform="rotate(45 156.5 116.5)"
      className="fill-primary/50"
    />
    <rect
      x="646"
      y="150"
      width="11"
      height="11"
      transform="rotate(45 651.5 155.5)"
      className="fill-primary/30"
    />
  </svg>
);

export default TeamIllustration;
