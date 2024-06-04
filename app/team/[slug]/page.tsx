// pages/categories/[slug].tsx
import React from "react";
// import Link from "next/link";
import { client } from "../../../sanity/lib/client";
import Image from "next/image";
import { ScrollShadow } from "@nextui-org/react";
import { GraduationCap } from "lucide-react";
import TeamLinks from "@/components/ui/team/TeamLinks";

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
        // ... other person fields you want to include
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
    <main className="max-w-8xl mx-auto flex flex-col justify-between gap-x-6 px-6 pt-6">
      <div
        aria-hidden="true"
        className="absolute -top-96 start-1/2 flex max-w-[100vw] max-w-[100vw] -translate-x-1/2 transform"
      >
        <div className="h-[44rem] w-[25rem] -translate-x-[10rem] rotate-[-60deg] transform bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl "></div>
        <div className="rounded-fulls h-[50rem] w-[90rem] origin-top-left -translate-x-[15rem] -rotate-12 bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl "></div>
      </div>
      <div className="relative overflow-hidden">
        <div className="relative">
          <div className="mx-auto max-w-[85rem] px-4 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="inline-block bg-gradient-to-l from-blue-600 to-violet-500 bg-clip-text text-sm font-medium text-transparent">
                Who dunnit?
              </p>

              <div className="mt-5 max-w-2xl">
                <h1 className="block text-4xl font-semibold tracking-tight text-gray-800 md:text-5xl lg:text-6xl">
                  {teamMembers[0].category.title}
                </h1>
              </div>

              <div className="mt-5 max-w-3xl">
                <p className="text-lg text-gray-600 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  dolores ipsum aspernatur officia ex, soluta est laborum
                  ducimus iusto dolorum aut reprehenderit veniam repellendus
                  possimus vero adipisci ut.
                </p>
              </div>
            </div>
            <div className="pb-4 pt-2.5">
              <TeamLinks currentLink={params.slug} />
            </div>
          </div>
        </div>
      </div>
      {
        // Address error in Hydration due to list elements below.
      }
      <ul className="grid justify-between gap-x-4">
        {teamMembers.map((member) => (
          <li key={member._id} className=" mb-6">
            {member.image ? (
              <div className=" grid grid-cols-5 gap-x-12">
                <figure className="col-span-2">
                  <Image
                    src={member.image.asset.url}
                    alt={member.name}
                    width={1920}
                    height={1400}
                    className="mx-auto mb-2 aspect-auto max-h-[25rem] max-w-[20rem] rounded-sm object-cover object-top shadow-xl"
                    style={{ width: "100%", height: "100%" }}
                  />
                </figure>
                <div className="col-span-3 grid h-fit justify-between">
                  <figcaption className="mb-2.5 text-3xl font-semibold">
                    {member.name}
                  </figcaption>
                  <p className="mb-3 text-sm font-bold">{member.nickname}</p>
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
                  <p className="mx-auto max-w-6xl  leading-7">
                    {member.biography}
                  </p>
                </div>
              </div>
            ) : (
              <div className="">
                <figcaption className="mb-2.5 text-3xl font-semibold">
                  {member.name}
                </figcaption>
                <p className="mb-3 text-sm font-bold">{member.nickname}</p>
                {member.qualifications && (
                  <div className="mb-6 flex items-center justify-start gap-x-3 pt-2">
                    <GraduationCap
                      strokeWidth={1.4}
                      className="mr-2 rounded-full border border-[#f2bae8] p-0.5 shadow-sm shadow-[#0C7BB3]"
                    />
                    <p className="inline-block text-center text-sm font-medium">
                      {member.qualifications?.join(",\u00a0  ")}
                    </p>
                  </div>
                )}
                <p className="mx-auto max-w-6xl  leading-7">
                  {member.biography}
                </p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default CategoryPage;
