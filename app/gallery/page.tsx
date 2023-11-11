"use client";
import React, { Suspense } from "react";
import Albums from "@/components/ui/gallery/Albums";
import { Skeleton } from "@/components/shadcn/ui/skeleton";

const GalleryPage = () => {
  return (
    <div>
      <h1>Gallery</h1>
      <Suspense fallback={<Skeleton className="h-44 w-44" />}>
        <Albums />
      </Suspense>
    </div>
  );
};

export default GalleryPage;
