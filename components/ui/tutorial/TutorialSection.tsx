import TutorialCard from './TutorialCard';

export default function TutorialSection({ technology }: { technology: any }) {
  return (
    <section className="container mx-auto px-6 py-12">
      {technology.tutorials.map((section: any) => (
        <div key={section.level} className="mb-12">
          <h2 className="mb-6 text-3xl font-bold">{section.level}</h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {section.items.map((tutorial: any) => (
              <TutorialCard key={tutorial.slug} technology={technology.slug} tutorial={tutorial} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
