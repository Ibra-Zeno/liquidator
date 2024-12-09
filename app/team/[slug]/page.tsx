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
    <main className="mx-auto flex max-w-8xl flex-col justify-between gap-x-6 pt-6">
      <div className="relative overflow-hidden">
        <div className="relative">
          <div className="mx-auto max-w-[85rem] py-6 sm:px-6 lg:px-8">
            <div className="container flex flex-col items-center text-center">
              <p className="text-semibold w-fit text-xs font-semibold italic leading-7 text-primary md:text-sm">
                We&apos;re hiring
              </p>
              <h2 className="text-pretty mb-4 mt-2 text-2xl font-bold lg:text-4xl">
                Meet our team
              </h2>
              <p className="max-w-4xl text-sm font-medium leading-5 text-gray-700  sm:leading-7 md:text-base xl:leading-8">
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
          <li key={member._id} className="sm:pt-6 xl:pt-10">
            <div className="grid grid-cols-1 px-3 text-center sm:grid-cols-5 sm:gap-x-12 sm:text-left md:px-10">
              {/* sm screens */}
              <div className="flex flex-col sm:hidden">
                <figcaption className="mb-2.5 text-xl font-semibold ">
                  {member.name}
                </figcaption>
                <p className="mb-3 text-xs font-semibold italic text-gray-600 sm:hidden">
                  {member.nickname}
                </p>
                {member.qualifications && (
                  <div className="mb-6 flex items-center justify-center gap-x-3 text-xs">
                    <GraduationCap
                      strokeWidth={1.4}
                      className="mr-2 rounded-full border border-[#f2bae8] p-0.5 shadow-sm shadow-[#0C7BB3]"
                    />
                    <p className="inline-block  text-justify font-medium">
                      {member.qualifications?.join(",  ")}
                    </p>
                  </div>
                )}
                <figure
                  className={`mx-auto mb-10 aspect-square max-h-[15rem] rounded bg-gradient-to-br from-slate-50  to-slate-200 shadow-xl ${
                    member.image?.asset?.url ? "" : "p-6"
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
              </div>
              {/* Larger screens */}
              <figure
                className={`mx-auto hidden aspect-square rounded border-2 border-s-secondary/60  bg-gradient-to-br from-slate-50 to-slate-200 shadow-xl  sm:col-span-2 sm:block xl:aspect-auto ${
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
                  className={`mx-auto mb-2 rounded  object-cover object-top ${
                    member.image?.asset?.url
                      ? "h-full w-full"
                      : "h-auto w-auto opacity-75"
                  }`}
                />
              </figure>
              <div className="col-span-3 grid h-fit justify-between">
                <div className="hidden sm:block">
                  <figcaption className="mb-2.5 hidden text-3xl font-semibold sm:block">
                    {member.name}
                  </figcaption>
                  <p className="mb-3 hidden text-sm font-semibold italic text-gray-600 sm:block">
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
                </div>
                <p className="max-w-3xl pb-4 text-sm leading-6 text-gray-700 md:text-base md:leading-8">
                  {member.biography}
                </p>
                <div className="relative mx-auto -mb-12 h-[1px] w-12 bg-accent sm:hidden">
                  <div className="absolute inset-0 -ml-32 h-[1px] w-32 bg-gradient-to-r from-transparent to-accent"></div>
                  <div className="absolute left-0 ml-12 h-[1px] w-32 bg-gradient-to-r from-accent to-transparent"></div>
                </div>
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
