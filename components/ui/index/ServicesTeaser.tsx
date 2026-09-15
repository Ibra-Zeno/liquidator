import { Service } from "@/lib/sanityQueries";

interface ServicesTeaserProps {
  services: Service[];
}

const ServicesTeaser: React.FC<ServicesTeaserProps> = ({ services }) => {
  return (
    <section className="py-20 sm:py-24">
      <div className="container mx-auto max-w-[1120px] px-4 lg:px-8">
        <div className="mb-12 max-w-[600px]">
          <span className="mb-2.5 block text-xs font-semibold uppercase tracking-[0.1em] text-primary/70">
            What We Handle
          </span>
          <h2 className="font-serif text-3xl font-medium text-text sm:text-4xl">
            Our services
          </h2>
          <p className="mt-3.5 text-base text-text/70">
            Six areas of practice, each led by licensed specialists — from
            first filing to final discharge.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 sm:grid-cols-2">
          {services.map((s, i) => (
            <div
              key={s._id}
              className="flex gap-4 border-t border-black/10 py-6"
            >
              <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-serif text-lg font-medium text-text">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-text/70">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesTeaser;
