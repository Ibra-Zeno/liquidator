import { FC } from "react";
import Link from "next/link";

const Logo: FC = ({}) => {
  return (
    <Link
      href="/"
      className="z-30 flex w-fit items-center gap-2 font-serif text-xl font-medium text-text"
    >
      <span className="-translate-y-px text-accent">✦</span>
      The Liquidator
    </Link>
  );
};

export default Logo;
