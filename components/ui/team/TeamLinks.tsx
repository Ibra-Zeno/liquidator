// "use client";
import Link from "next/link";
const teamLinks = [
  {
    link: "/team/liquidators",
    title: "Liquidators",
  },
  {
    link: "/team/senior-management",
    title: "Senior Management",
  },
  {
    link: "/team/liquidation",
    title: "Liquidation",
  },
  {
    link: "/team/conveyancing-subsale",
    title: "Conveyancing & Subsale",
  },
  {
    link: "/team/accounts",
    title: "Accounts",
  },
  {
    link: "/team/admin",
    title: "Admin",
  },
  {
    link: "/team/consultants",
    title: "Consultants",
  },
];

const TeamLinks: React.FC<{ currentLink: string }> = ({ currentLink }) => {
  const currentPath = "/team/" + currentLink;
  return (
    <section className="mt-6 flex flex-wrap justify-center gap-x-3 gap-y-2 border-y border-y-accent/20 py-4 sm:gap-y-4 sm:py-5 md:my-6 md:gap-x-6">
      {teamLinks.map((link, i) => (
        <Link
          href={link.link}
          className={` flex rounded border-1 border-gray-300/75 bg-slate-100 px-4 py-1 text-xs font-semibold tracking-wide transition-colors  duration-300 ease-in-out hover:text-primary-500 ${
            currentPath === link.link
              ? "text-sky-800 shadow-xl"
              : "text-slate-700"
          }`}
          key={i}
        >
          {link.title}
        </Link>
      ))}
    </section>
  );
};

export default TeamLinks;
