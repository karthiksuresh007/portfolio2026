const stats = [
  { value: "03", label: "Flagship case studies ready to personalize" },
  { value: "01", label: "Single content source driving all pages" },
  { value: "Fast", label: "Motion-first layout designed with performance in mind" },
  { value: "V1", label: "Built for founder and recruiter conversion" }
];

export function StatBand() {
  return (
    <section className="px-5 py-5 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-6xl gap-px overflow-hidden rounded-[2rem] border border-black/5 bg-black/5 shadow-panel md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white/75 p-6 backdrop-blur">
            <p className="font-serif text-3xl tracking-tight text-ink">{stat.value}</p>
            <p className="mt-3 text-sm leading-6 text-ink/70">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
