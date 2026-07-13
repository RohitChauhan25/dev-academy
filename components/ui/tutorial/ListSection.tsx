export default function ListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold">{title}</h2>

      <ul className="mt-5 list-disc space-y-2 pl-6">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
