import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Tooltip } from "@nextui-org/react";
import imageData from "@/public/images/imageData";

const LogoCloud: FC = ({}) => {
  return (
    <section className="mx-auto mb-8 mt-20 flex animate-fadeIn flex-row justify-around delay-1000 fill-mode-forwards">
      {imageData.map((logo, index) => (
        <div
          key={logo.name}
          className="flex flex-col items-center justify-around px-3"
        >
          <Tooltip
            key={index}
            content={`${logo.name}`}
            closeDelay={-100}
            offset={0}
            className="rounded-sm border-2 border-gray-400/10 text-sm tracking-wide"
          >
            <Link href={logo.src} target="_blank" rel="noreferrer">
              <Image
                src={logo.src}
                alt={logo.name}
                width={60}
                height={60}
                className="rounded-sm object-contain"
              />
            </Link>
          </Tooltip>
        </div>
      ))}
    </section>
  );
};

export default LogoCloud;
