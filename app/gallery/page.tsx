// "use client";
import React, { Suspense } from "react";
import Albums from "@/components/ui/gallery/Albums";
import { Skeleton } from "@/components/shadcn/ui/skeleton";

const GalleryPage = () => {
  return (
    <main className="">
      <section className="mx-auto max-w-7xl py-16">
        <h1>Gallery</h1>
        <Suspense fallback={<Skeleton className="h-44 w-44" />}>
          <Albums />
        </Suspense>
      </section>
    </main>
  );
};

export default GalleryPage;
