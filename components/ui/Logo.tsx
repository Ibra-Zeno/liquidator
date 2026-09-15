import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const Logo: FC = ({}) => {
  return (
    <Link
      href="/"
      className="z-30 flex w-fit items-center gap-2.5 font-serif text-xl font-medium text-text"
    >
      <Image
        src="/images/index/liquidatorLogo.png"
        alt="The Liquidator"
        width={28}
        height={28}
        className="h-7 w-7"
      />
      The Liquidator
    </Link>
  );
};

export default Logo;
