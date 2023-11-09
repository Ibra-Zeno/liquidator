// pages/categories/[slug].tsx
import React from "react";
import { client } from "../../../sanity/lib/client";
import Image from "next/image";
import { Sparkles } from "lucide-react";

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

  const teamMembers = await client.fetch(query, { slug });

  return teamMembers;
};

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const teamMembers: PersonProps[] = await fetchMembers(params.slug as string);
  const slug = params.slug;

  return (
    <main className="mx-auto flex max-w-7xl justify-between gap-x-6 px-6 pt-12">
      <div className="w-fit max-w-md">
        <h1 className="mb-12 mt-2 w-fit text-center text-4xl font-bold">
          Team Members in {teamMembers[0].category.title}
        </h1>
        <p>{teamMembers[0].category.description}</p>
      </div>
      <ul className="grid grid-cols-2 justify-between gap-x-4">
        {teamMembers.map((member) => (
          <li key={member._id} className="mb-6 w-fit">
            {member.image ? (
              <figure className="">
                <Image
                  src={member.image.asset.url}
                  alt={member.name}
                  width={400}
                  height={100}
                  className="mx-auto mb-2 aspect-auto h-[20rem] w-[20rem] rounded-sm object-cover object-top shadow-xl"
                />
                <figcaption className="mb-1.5 text-center text-xl font-semibold">
                  {member.name}
                </figcaption>
              </figure>
            ) : (
              <h3 className="mb-3 text-center text-2xl font-semibold">
                {member.name}
              </h3>
            )}
            <p className="mb-3 text-center text-sm font-bold">
              {member.nickname}
            </p>
            <div className="mx-auto mb-6 flex items-center justify-center gap-x-3">
              <Sparkles
                strokeWidth={1.4}
                className="mr-2 rounded-full border border-gray-700/75 p-0.5"
              />
              {member.qualifications?.map((qualification, i) => (
                <p
                  key={i}
                  className="inline-block max-w-sm text-center font-medium"
                >
                  {qualification}
                </p>
              ))}
            </div>
            <p className="mx-auto max-w-md px-4 text-center leading-7">
              {member.biography}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default CategoryPage;
