import { FC } from "react";
import Link from "next/link";
const logoCloud = [
  {
    name: "Malaysia Department of Insolvency (MDI)",
    href: "http://www.insolvensi.gov.my/",
    imageSrc: "",
  },
  {
    name: "Companies Commission of Malaysia (SSM)",
    href: "http://www.ssm.com.my/en",
    imageSrc: "",
  },
  {
    name: "The Malaysian Bar",
    href: "http://www.malaysianbar.org.my/",
    imageSrc: "",
  },
  {
    name: "Myeg Services Berhad",
    href: "http://www.myeg.com.my/",
    imageSrc: "",
  },
  {
    name: "The Board of Valuers, Appraisers, Estate Agents and Property Managers Malaysia (BOVAEP)",
    href: "http://www.lppeh.gov.my/",
    imageSrc: "",
  },
  {
    name: "Department of Surveys and Mapping Malaysia (JUPEM)",
    href: "http://www.jupem.gov.my/",
    imageSrc: "",
  },
  {
    name: "Department of Director General of Lands and Mines (JKPTG)",
    href: "http://www.kptg.gov.my/",
    imageSrc: "",
  },
  {
    name: "Real Estate and Housing Developers' Association Malaysia (REHDA)",
    href: "http://www.rehda.com/",
    imageSrc: "",
  },
  {
    name: "Ministry of Housing and Local Government (KPKT)",
    href: "http://www.kpkt.gov.my/",
    imageSrc: "",
  },
  {
    name: "Malaysia Institute of Accountants (MIA)",
    href: "http://www.mia.org.my/",
    imageSrc: "",
  },
];

const LogoCloud: FC = ({}) => {
  return (
    <section className="mx-20 mb-8 mt-20 grid grid-cols-2 gap-2 sm:gap-y-8 md:grid-cols-4 xl:grid-cols-5">
      {logoCloud.map((logo) => (
        <div
          key={logo.name}
          className="flex flex-col items-center justify-start"
        >
          <Link href={logo.href} target="_blank" rel="noreferrer">
            {/* <img
                    className="object-contain w-auto mx-auto h-14"
                    src={logo.imageSrc}
                    alt={logo.name}
                  /> */}
            <div className="mx-auto h-32 w-32 rounded-lg bg-sky-950"></div>
            <p className="mt-3 text-center text-xs font-bold text-gray-800 ">
              {logo.name}
            </p>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default LogoCloud;
