import React, { useState } from "react";
import { GetStaticProps } from "next";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { GraduationCap } from "lucide-react";
import Seo from "@/components/Seo";
import CTA from "@/components/ui/CTA";
import Modal from "@/components/ui/Modal";
import InitialsAvatar from "@/components/ui/InitialsAvatar";

export interface PersonProps {
  _id: string;
  name: string;
  nickname?: string;
  image?: any;
  position: string;
  biography: string;
  qualifications?: string[];
  categorySlug: string;
  categoryTitle: string;
}

// Fixed display order for categories — Sanity doesn't guarantee an order,
// and this keeps the page's section order stable regardless of entry order.
const categoryOrder = [
  "liquidators",
  "senior-management",
  "liquidation",
  "conveyancing-subsale",
  "accounts",
  "admin",
  "consultants",
];

const fallbackTitle = (slug: string) =>
  slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

export const getStaticProps: GetStaticProps = async () => {
  const query = `
    *[_type == "person"] {
      _id,
      name,
      position,
      nickname,
      image{..., asset->{id, url}},
      biography,
      qualifications[],
      "categorySlug": category->slug.current,
      "categoryTitle": category->title,
    }
  `;
  const members: PersonProps[] = await client.fetch(query);
  return {
    props: { members },
    revalidate: 3600,
  };
};

interface TeamPageProps {
  members: PersonProps[];
}

const MemberAvatar: React.FC<{
  member: PersonProps;
  className?: string;
  sizes?: string;
}> = ({ member, className, sizes }) =>
  member.image?.asset?.url ? (
    <Image
      src={member.image.asset.url}
      alt={member.name}
      width={640}
      height={640}
      sizes={sizes}
      className={`h-full w-full object-cover object-top ${className || ""}`}
    />
  ) : (
    <InitialsAvatar name={member.name} />
  );

const TeamPage: React.FC<TeamPageProps> = ({ members }) => {
  const [selected, setSelected] = useState<PersonProps | null>(null);

  const sections = new Map<string, PersonProps[]>();
  for (const member of members) {
    const slug = member.categorySlug || "other";
    const list = sections.get(slug) ?? [];
    list.push(member);
    sections.set(slug, list);
  }

  // Order known categories first (in our fixed order), then anything else.
  const orderedSlugs = [
    ...categoryOrder.filter((slug) => sections.has(slug)),
    ...Array.from(sections.keys()).filter(
      (slug) => !categoryOrder.includes(slug),
    ),
  ];

  return (
    <main>
      <Seo
        title="Our Team"
        description="Meet The Liquidator's licensed specialists across liquidation, conveyancing, accounts and management."
        path="/team"
      />
      <header className="hero-wash py-16 sm:py-20">
        <div className="container mx-auto max-w-[1120px] px-4 text-center lg:px-8">
          <span className="mb-2.5 block text-xs font-semibold uppercase tracking-[0.1em] text-primary/70">
            Our People
          </span>
          <h1 className="font-serif text-3xl font-medium text-text sm:text-4xl">
            Meet the team
          </h1>
          <p className="mx-auto mt-4 max-w-[54ch] text-base text-text/70">
            Licensed specialists across liquidation, conveyancing, accounts
            and management, working as one coordinated team.
          </p>
        </div>
        {orderedSlugs.length > 1 && (
          <div className="container mx-auto max-w-[1120px] px-4 lg:px-8">
            <nav
              aria-label="Jump to team section"
              className="mt-6 flex flex-wrap justify-center gap-2 border-y border-black/10 py-5"
            >
              {orderedSlugs.map((slug) => (
                <a
                  key={slug}
                  href={`#${slug}`}
                  className="rounded bg-secondary/60 px-4 py-1.5 text-xs font-semibold tracking-wide text-text/70 transition-colors duration-200 ease-in-out hover:bg-secondary hover:text-text"
                >
                  {sections.get(slug)?.[0]?.categoryTitle ||
                    fallbackTitle(slug)}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {members.length === 0 && (
        <div className="container mx-auto max-w-[1120px] px-4 py-16 text-center lg:px-8">
          <p className="text-sm text-text/50">
            No team members have been added yet.
          </p>
        </div>
      )}

      {orderedSlugs.map((slug) => {
        const sectionMembers = sections.get(slug) || [];
        const title = sectionMembers[0]?.categoryTitle || fallbackTitle(slug);
        return (
          <section
            key={slug}
            id={slug}
            className="scroll-mt-20 border-t border-black/10 py-14 first:border-t-0"
          >
            <div className="container mx-auto max-w-[1120px] px-4 lg:px-8">
              <h2 className="mb-8 font-serif text-2xl font-medium text-text">
                {title}
              </h2>
              <div className="grid grid-cols-2 items-start gap-5 sm:grid-cols-3 lg:grid-cols-4">
                {sectionMembers.map((member) => (
                  <button
                    key={member._id}
                    onClick={() => setSelected(member)}
                    className="group text-left"
                  >
                    <div className="aspect-square w-full overflow-hidden rounded border border-black/10 bg-secondary/40 transition-shadow group-hover:shadow-md">
                      <MemberAvatar
                        member={member}
                        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 265px"
                      />
                    </div>
                    <h3 className="mt-3 line-clamp-2 font-serif text-base font-medium text-text group-hover:text-primary">
                      {member.name}
                    </h3>
                    {(member.position || member.categoryTitle) && (
                      <p className="mt-0.5 text-xs text-text/60">
                        {member.position || member.categoryTitle}
                      </p>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </section>
        );
      })}
      <CTA />

      {selected && (
        <Modal onClose={() => setSelected(null)} labelledBy="member-name">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-5">
            <div className="mx-auto aspect-square w-full max-w-[10rem] shrink-0 overflow-hidden rounded border border-black/10 bg-secondary/40 sm:col-span-2 sm:max-w-none">
              <MemberAvatar member={selected} sizes="(max-width: 640px) 160px, 220px" />
            </div>
            <div className="col-span-3 text-center sm:text-left">
              <h2
                id="member-name"
                className="font-serif text-2xl font-medium text-text"
              >
                {selected.name}
              </h2>
              {(selected.position || selected.categoryTitle) && (
                <p className="mt-1 text-sm font-medium text-primary">
                  {selected.position || selected.categoryTitle}
                </p>
              )}
              {selected.nickname && (
                <p className="mt-1 text-sm italic text-text/50">
                  {selected.nickname}
                </p>
              )}
              {selected.qualifications && selected.qualifications.length > 0 && (
                <div className="mt-4 flex items-center justify-center gap-2.5 sm:justify-start">
                  <GraduationCap
                    size={18}
                    strokeWidth={1.5}
                    className="shrink-0 text-accent"
                  />
                  <p className="text-xs font-medium text-text/70">
                    {selected.qualifications?.join(", ")}
                  </p>
                </div>
              )}
            </div>
          </div>
          <p className="mt-6 text-sm leading-7 text-text/70">
            {selected.biography}
          </p>
        </Modal>
      )}
    </main>
  );
};

export default TeamPage;
