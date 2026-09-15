import Link from "next/link";
import { Button } from "@/components/shadcn/ui/button";
import { FC } from "react";
import { ChevronRight } from "lucide-react";

interface CTAProps {}

const CTA: FC<CTAProps> = ({}) => {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-[1120px] px-4 lg:px-8">
        <div className="flex flex-col items-center gap-6 rounded border border-primary/20 border-l-4 border-l-primary bg-secondary/50 px-8 py-9 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-7 sm:px-11 sm:text-left">
          <div>
            <h2 className="font-serif text-2xl font-medium text-text sm:text-3xl">
              Speak to a licensed liquidator.
            </h2>
            <p className="mt-2 text-sm text-text/70">
              Confidential, no-obligation consultations.
            </p>
          </div>
          <Link href="/contact">
            <Button variant="default" size="lg" className="text-sm">
              Contact Us
              <ChevronRight className="ml-1.5" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
