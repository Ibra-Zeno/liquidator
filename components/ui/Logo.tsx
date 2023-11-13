import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  return (
    <Link href="/" className="text-3xl font-bold">
      <div className="flex items-center">
        <Image
          src="/images/index/liquidatorLogo.png"
          className=""
          alt="theliquidator.net logo"
          width={30}
          height={30}
        />
        <h1 className="-mb-3 ml-3 font-logo text-lg tracking-wider">
          theliquidator.net
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
