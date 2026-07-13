import { Lightbulb } from 'lucide-react';

interface NoteSectionProps {
  title: string;
  content: string;
}

export default function NoteSection({ title, content }: NoteSectionProps) {
  return (
    <section className="mt-10 rounded-xl border-l-4 border-yellow-500 bg-yellow-500/10 p-5">
      <div className="flex items-start gap-3">
        <Lightbulb className="mt-1 h-5 w-5 text-yellow-500" />

        <div>
          <h3 className="font-semibold">{title}</h3>

          <p className="mt-2 text-muted-foreground">{content}</p>
        </div>
      </div>
    </section>
  );
}
