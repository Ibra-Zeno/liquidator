"use client";
// import { usepathname } from 'next/router';
import { usePathname } from "next/navigation";
import Link from "next/link";

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
    <nav aria-label="breadcrumbs">
      <ol>
        <li>
          <Link href="/">Home</Link>
        </li>
        {breadcrumbs.map((crumb, index) => (
          <li key={index}>
            <Link href={crumb.href}>{crumb.name}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
