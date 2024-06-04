// "use client";
import React, { Suspense } from "react";
import Albums from "@/components/ui/gallery/Albums";
import { Skeleton } from "@/components/shadcn/ui/skeleton";

const GalleryPage = () => {
  return (
    <main className="">
      <section className="max-w-8xl mx-auto py-4">
        <section id="banner" className="border-b border-gray-700/25 pb-3">
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
                <div className="mx-auto max-w-2xl text-center">
                  <p className="inline-block bg-gradient-to-l from-blue-600 to-violet-500 bg-clip-text text-sm font-medium text-transparent">
                    View Our Adventures
                  </p>

                  <div className="mt-5 max-w-2xl">
                    <h1 className="block text-3xl font-semibold tracking-tight text-gray-800 md:text-5xl lg:text-6xl">
                      Gallery
                    </h1>
                  </div>

                  <div className="mt-5 max-w-3xl">
                    <p className="text-lg text-gray-600 ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsa dolores ipsum aspernatur officia ex, soluta est
                      laborum ducimus iusto dolorum aut reprehenderit veniam
                      repellendus possimus vero adipisci ut.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Suspense fallback={<Skeleton className="h-44 w-44" />}>
          <Albums />
        </Suspense>
      </section>
    </main>
  );
};

export default GalleryPage;
