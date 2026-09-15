import { Service } from "@/lib/sanityQueries";

interface ServicesCompProps {
  services: Service[];
}

const ServicesComp: React.FC<ServicesCompProps> = ({ services }) => {
  return (
    <div className="grid grid-cols-1 gap-x-12 sm:grid-cols-2">
      {services.map((s, i) => (
        <div
          className="flex gap-4 border-t border-black/10 py-6"
          key={s._id}
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
  );
};

export default ServicesComp;
