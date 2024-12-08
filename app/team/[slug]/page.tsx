// pages/categories/[slug].tsx
import React from "react";
import { client } from "../../../sanity/lib/client";
import Image from "next/image";
import { GraduationCap } from "lucide-react";
import TeamLinks from "@/components/ui/team/TeamLinks";
import CTA from "@/components/ui/CTA";

export interface PersonProps {
  _id: string;
  _type: "person";
  name: string;
  nickname?: string;
  image?: any;
  position: string;
  biography: string;
  qualifications?: string[];
  category: any;
}

interface CategoryPageProps {
  params: { slug: string };
}

const fetchMembers = async (slug: string) => {
  const query = `
        *[_type == "person" && category->slug.current == $slug] {
        _id,
        name,
        position,
        nickname,
        image{..., asset->{id, url}},
        biography,
        category->{title, description},
        qualifications[],
        }
    `;

  const teamMembers = await client.fetch(query, {
    slug,
    next: { revalidate: 3600 },
  });

  return teamMembers;
};

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const teamMembers: PersonProps[] = await fetchMembers(params.slug as string);
  return (
    <main className="mx-auto flex max-w-8xl flex-col justify-between gap-x-6 px-6 pt-6">
      <div
        aria-hidden="true"
        className="absolute -top-96 start-1/2 flex max-w-[100vw] -translate-x-1/2 transform"
      >
        <div className="h-[44rem] w-[25rem] -translate-x-[10rem] rotate-[-60deg] transform bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl "></div>
        <div className="rounded-fulls h-[50rem] w-[90rem] origin-top-left -translate-x-[15rem] -rotate-12 bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl "></div>
      </div>
      <div className="relative overflow-hidden">
        <div className="relative">
          <div className="mx-auto max-w-[85rem] px-4 py-6 sm:px-6 lg:px-8">
            <div className="container flex flex-col items-center text-center">
              <p className="semibold">We&apos;re hiring</p>
              <h2 className="text-pretty my-6 text-2xl font-bold lg:text-4xl">
                Meet our team
              </h2>
              <p className="mb-6 max-w-3xl text-muted-foreground lg:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
                doloremque mollitia fugiat omnis! Porro facilis quo animi
                consequatur. Explicabo.
              </p>
            </div>
            <div className="pb-4">
              <TeamLinks currentLink={params.slug} />
            </div>
          </div>
        </div>
      </div>
      <ul className="grid justify-between gap-x-4 gap-y-10  pb-12 md:divide-y-1 md:divide-slate-200">
        {teamMembers.map((member) => (
          <li key={member._id} className="pt-10">
            <div className="grid grid-cols-5 gap-x-12">
              <figure
                className={`col-span-2 mx-auto rounded bg-gradient-to-br  from-slate-50 to-slate-200 shadow-xl ${
                  member.image?.asset?.url
                    ? "max-h-[23rem] max-w-[20rem]"
                    : "max-h-[20rem] max-w-[20rem] p-6"
                }`}
              >
                <Image
                  src={member.image?.asset?.url || "/images/team/avatar.png"}
                  alt={member.name}
                  width={1920}
                  height={1400}
                  className={`mx-auto mb-2 rounded object-cover object-top ${
                    member.image?.asset?.url
                      ? "h-full w-full"
                      : "h-auto w-auto opacity-75"
                  }`}
                />
              </figure>
              <div className="col-span-3 grid h-fit justify-between">
                <figcaption className="mb-2.5 text-3xl font-semibold">
                  {member.name}
                </figcaption>
                <p className="mb-3 text-sm font-semibold italic text-gray-600">
                  {member.nickname}
                </p>
                {member.qualifications && (
                  <div className="mb-6 flex items-center justify-start gap-x-3">
                    <GraduationCap
                      strokeWidth={1.4}
                      className="mr-2 rounded-full border border-[#f2bae8] p-0.5 shadow-sm shadow-[#0C7BB3]"
                    />
                    <p className="inline-block text-center text-sm font-medium">
                      {member.qualifications?.join(",  ")}
                    </p>
                  </div>
                )}
                <p className="max-w-3xl text-base leading-8 text-gray-700">
                  {member.biography}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <CTA />
    </main>
  );
};

export default CategoryPage;
