interface TeamLinksProps {}
import Link from "next/link";
import { Chip } from "@nextui-org/react";
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

const TeamLinks: React.FC<TeamLinksProps> = ({}) => {
  return (
    <section className="my-6 flex justify-center gap-x-12 border-y border-y-gray-500/30 py-2.5">
      {teamLinks.map((link, i) => (
        <Chip key={i}>
          <Link
            href={link.link}
            className="font-semibold transition-colors duration-300 ease-in-out hover:text-primary-500"
          >
            {link.title}
          </Link>
        </Chip>
      ))}
    </section>
  );
};

export default TeamLinks;
