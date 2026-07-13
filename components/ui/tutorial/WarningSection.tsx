import { TriangleAlert } from 'lucide-react';

export default function WarningSection({ title, content }: { title: string; content: string }) {
  return (
    <section className="mt-10 rounded-xl border border-red-300 bg-red-500/10 p-6">
      <div className="flex gap-4">
        <TriangleAlert className="text-red-500" />

        <div>
          <h3 className="font-semibold">{title}</h3>

          <p className="mt-2 text-muted-foreground">{content}</p>
        </div>
      </div>
    </section>
  );
}
