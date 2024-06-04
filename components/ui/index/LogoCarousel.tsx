"use client";
import imageData from "../../../public/images/imageData";
import { Tooltip } from "@nextui-org/react";
import Image from "next/image";

const LogoCarousel: React.FC = () => {
  return (
    <section className="bg-lightBg overflow-y-hidden">
      <div className="group relative flex max-h-[100px] w-full flex-col justify-center overflow-x-hidden bg-transparent align-baseline">
        <div className="group-hover:pause relative flex w-[300%] animate-[carousel_35s_linear_infinite] flex-row overflow-y-hidden sm:w-[200%] sm:animate-[carousel_35s_linear_infinite] lg:w-[150%] lg:animate-[carousel_45s_linear_infinite]">
          {imageData.map((object, index) => (
            <Tooltip
              key={index}
              content={`${object.name}`}
              closeDelay={-100}
              offset={-20}
              className="rounded-lg border-2 border-gray-400/10 text-sm tracking-wide"
            >
              <Image
                className="relative mx-auto my-3 flex h-20 w-20 flex-row justify-center rounded-lg object-contain"
                src={object.src}
                width={100}
                height={100}
                alt={`${object.name} logo`}
              />
            </Tooltip>
          ))}
        </div>
        <div className="group-hover:pause absolute flex w-[300%] translate-x-[200%] animate-[carousel-reverse_35s_linear_infinite] flex-row items-center overflow-x-hidden sm:w-[200%] sm:translate-x-[100%] sm:animate-[carousel-reverse_35s_linear_infinite] lg:w-[150%] lg:translate-x-[50%] lg:animate-[carousel-reverse_45s_linear_infinite] ">
          {imageData.map((object, index) => (
            <Tooltip
              key={index}
              content={`${object.name}`}
              closeDelay={-100}
              offset={-20}
              className=" rounded-lg border-2 border-gray-400/10 text-sm tracking-wide"
            >
              <Image
                className="relative mx-auto my-3 flex h-20 w-20 flex-row justify-center rounded-lg object-contain"
                src={object.src}
                width={100}
                height={100}
                alt={`${object.name} logo`}
                key={index}
              ></Image>
            </Tooltip>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
