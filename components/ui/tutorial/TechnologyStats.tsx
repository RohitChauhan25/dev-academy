interface TechnologyStatsProps {
  technology: any;
}

export default function TechnologyStats({ technology }: TechnologyStatsProps) {
  return (
    <section className="container mx-auto px-6 py-10">
      <div className="rounded-xl border bg-card p-6">
        <h2 className="text-xl font-semibold">What You'll Learn in {technology.title}</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div>✔ Core Concepts</div>
          <div>✔ Modern Syntax</div>
          <div>✔ Practical Examples</div>
          <div>✔ Interview Questions</div>
          <div>✔ Best Practices</div>
          <div>✔ Hands-on Exercises</div>
        </div>
      </div>
    </section>
  );
}
