import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const Logo: FC = ({}) => {
  return (
    <Link href="/" className="z-30 text-3xl font-bold">
      <div className="flex items-center">
        <Image
          src="/images/index/liquidatorLogo.png"
          className=""
          alt="theliquidator.net logo"
          width={30}
          height={30}
        />
        <h2 className="-mb-3 ml-3 font-logo text-lg font-extralight leading-7 tracking-wider">
          theliquidator.net
        </h2>
      </div>
    </Link>
  );
};

export default Logo;
