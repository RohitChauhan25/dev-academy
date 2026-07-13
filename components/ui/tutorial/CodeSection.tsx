export default function CodeSection({ title, code }: { title: string; code: string }) {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold">{title}</h2>

      <pre className="mt-5 overflow-auto rounded-xl bg-zinc-950 p-5 text-green-400">
        <code>{code}</code>
      </pre>
    </section>
  );
}
