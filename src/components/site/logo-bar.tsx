const companies = ["Northwind", "Arcadia", "Meridian", "Helix", "Vantage"];

export function LogoBar() {
  return (
    <section className="border-y border-line px-6 py-12">
      <div className="mx-auto max-w-[72rem]">
        <p className="text-center font-mono text-[0.8125rem] uppercase tracking-[0.1em] text-muted">
          Trusted by engineering teams at
        </p>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {companies.map((name) => (
            <li
              key={name}
              className="text-lg font-semibold text-paper/40 transition-colors hover:text-paper/70"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
