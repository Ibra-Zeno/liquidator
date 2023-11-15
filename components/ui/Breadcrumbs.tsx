"use client";
// import { usepathname } from 'next/router';
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";

const Breadcrumbs = () => {
  const pathname = usePathname();

  // Function to capitalize the first letter of a string
  const capitalize = (s: string) =>
    s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();

  // Split the pathname on '/' and filter out empty values
  const pathSegments = pathname.split("/").filter((v) => v.length > 0);

  // Create a breadcrumbs array
  const breadcrumbs = pathSegments.map((segment, index) => {
    // Reconstruct the path for each segment
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    // Capitalize the segment name for display
    const name = capitalize(segment.replace(/-/g, " ")); // also replace hyphens with spaces if needed
    return { name, href };
  });

  return (
    <section
      aria-label="breadcrumbs"
      className="mx-auto max-w-7xl bg-[#f7f7f7] px-4 py-2.5 text-sm opacity-90"
    >
      <ol className="flex">
        <li>
          <Link href="/" className="flex items-center text-opacity-40">
            <Home size={17} className="mr-2" />
            <p>Home</p>
          </Link>
        </li>
        {breadcrumbs.map((crumb, index) => (
          <li key={index} className="flex items-center  ">
            <ChevronRight size={17} className="mx-2.5" />
            <Link
              href={crumb.href}
              className="items-center hover:text-opacity-60"
            >
              <p>{crumb.name}</p>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Breadcrumbs;
