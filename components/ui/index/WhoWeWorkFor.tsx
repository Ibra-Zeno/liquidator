const cohorts = [
  {
    title: "SMEs",
    desc: "Facing financial difficulty or in need of a restructuring plan.",
  },
  {
    title: "Corporations",
    desc: "Requiring advanced insolvency, restructuring or legal support.",
  },
  {
    title: "Developers",
    desc: "Seeking to revive stalled residential or commercial projects.",
  },
  {
    title: "Institutions",
    desc: "Managing distressed assets and insolvency portfolios.",
  },
];

const recognisedBy = [
  "SSM",
  "MDI",
  "JKPTG",
  "JUPEM",
  "KPKT",
  "MIA",
  "Bar Council",
  "REHDA",
];

const WhoWeWorkFor: React.FC = () => {
  return (
    <section className="bg-secondary/60 py-20 sm:py-24">
      <div className="container mx-auto max-w-[1120px] px-4 lg:px-8">
        <div className="mb-11 max-w-[600px]">
          <span className="mb-2.5 block text-xs font-semibold uppercase tracking-[0.1em] text-primary/70">
            Who We Work For{" "}
            <span className="italic text-text/40">
              · Untuk Siapa Kami Bekerja
            </span>
          </span>
          <h2 className="font-serif text-3xl font-medium text-text sm:text-4xl">
            Businesses at every stage
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-px border border-primary/15 bg-primary/15 sm:grid-cols-2 lg:grid-cols-4">
          {cohorts.map((c) => (
            <div key={c.title} className="bg-secondary/60 p-6">
              <h3 className="font-serif text-lg font-medium text-text">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-text/70">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-baseline gap-x-6 gap-y-2 border-t border-primary/15 pt-7 text-xs text-text/60">
          <span>
            Recognised by <span className="italic text-text/40">· Diiktiraf oleh</span>
          </span>
          {recognisedBy.map((b) => (
            <span key={b}>{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkFor;
