"use client";

import Link from "next/link";

interface UnderLinkProps {
  text: string;
  href: string;
  className?: string;
}

const UnderLink: React.FC<UnderLinkProps> = ({ text, href, className }) => {
  return (
    <Link
      href={href}
      className={`relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-700 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100 ${className}`}
    >
      {text}
    </Link>
  );
};

export default UnderLink;
