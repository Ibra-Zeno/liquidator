import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Seo from "@/components/Seo";
import { Button } from "@/components/shadcn/ui/button";

export default function NotFound() {
  return (
    <main className="hero-wash flex min-h-[60vh] items-center py-20">
      <Seo
        title="Page Not Found"
        description="The page you're looking for doesn't exist or may have moved."
      />
      <div className="container mx-auto max-w-[1120px] px-4 lg:px-8">
        <span className="mb-2.5 block text-xs font-semibold uppercase tracking-[0.1em] text-primary/70">
          404
        </span>
        <h1 className="font-serif text-3xl font-medium text-text sm:text-4xl">
          We can&apos;t find that page.
        </h1>
        <p className="mt-5 max-w-[52ch] text-base text-text/70">
          The page you&apos;re looking for doesn&apos;t exist, or may have
          moved. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap gap-3.5">
          <Link href="/">
            <Button variant="default" size="lg" className="text-sm">
              Back to Home
              <ChevronRight className="ml-1.5" size={16} />
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="text-sm">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
