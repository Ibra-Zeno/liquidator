"use client";
import { FC } from "react";
import Link from "next/link";
interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  return (
    <Link href="/" className="p-1 text-3xl font-bold">
      Logo
    </Link>
  );
};

export default Logo;
