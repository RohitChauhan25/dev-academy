import { Lightbulb } from 'lucide-react';

export default function TipSection({ title, content }: { title: string; content: string }) {
  return (
    <section className="mt-10 rounded-xl border border-green-300 bg-green-500/10 p-6">
      <div className="flex gap-4">
        <Lightbulb className="text-green-500" />

        <div>
          <h3 className="font-semibold">{title}</h3>

          <p className="mt-2 text-muted-foreground">{content}</p>
        </div>
      </div>
    </section>
  );
}
