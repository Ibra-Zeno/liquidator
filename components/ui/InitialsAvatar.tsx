import { cn } from "@/lib/utils";

export function getInitials(name: string): string {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return "?";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

interface InitialsAvatarProps {
  name: string;
  className?: string;
}

// Fallback avatar for team members without a photo — initials on a soft
// jade-wash tile, styled to match the brand, instead of a generic stock icon.
const InitialsAvatar: React.FC<InitialsAvatarProps> = ({
  name,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center bg-secondary",
        className,
      )}
      aria-hidden="true"
    >
      <span className="font-serif text-5xl font-medium tracking-wide text-primary/70 sm:text-6xl">
        {getInitials(name)}
      </span>
    </div>
  );
};

export default InitialsAvatar;
