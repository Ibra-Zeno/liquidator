const steps = [
  {
    num: "1",
    title: "Consultation",
    desc: "An in-depth assessment of your financial position, so the approach we recommend fits your case.",
  },
  {
    num: "2",
    title: "Strategy Development",
    desc: "A course of action drafted against the relevant Companies Act provisions, reviewed with you.",
  },
  {
    num: "3",
    title: "Implementation",
    desc: "Filings, creditor coordination and asset management, reported on until the file is closed.",
  },
];

const Process: React.FC = () => {
  return (
    <section className="py-20 sm:py-24">
      <div className="container mx-auto max-w-[1120px] px-4 lg:px-8">
        <div className="mb-11 max-w-[600px]">
          <span className="mb-2.5 block text-xs font-semibold uppercase tracking-[0.1em] text-primary/70">
            How We Work
          </span>
          <h2 className="font-serif text-3xl font-medium text-text sm:text-4xl">
            Our process
          </h2>
          <p className="mt-3.5 text-base text-text/70">
            Insolvency can feel overwhelming from the outside. Internally, it
            follows the same three stages every time.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.num} className="border-t-2 border-accent pt-6">
              <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full border-[1.5px] border-accent bg-accent-soft font-serif text-lg italic text-accent">
                {s.num}
              </span>
              <h3 className="mt-4 font-serif text-lg font-medium text-text">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-text/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
