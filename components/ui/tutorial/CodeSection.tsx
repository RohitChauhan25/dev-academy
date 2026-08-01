import { slugify } from '@/lib/utils';

interface CodeSectionProps {
  title: string;
  code: string;
  language?: string;
}

export default function CodeSection({ title, code, language }: CodeSectionProps) {
  const isHtml = language === 'html';

  return (
    <section id={slugify(title)} className="mt-12 scroll-mt-24">
      <h2 className="text-3xl font-bold">{title}</h2>

      <pre className="mt-5 overflow-auto rounded-xl bg-zinc-950 p-5 text-green-400">
        <code>{code}</code>
      </pre>

      {isHtml && (
        <div className="mt-4 overflow-hidden rounded-xl border">
          <div className="border-b bg-muted/40 px-4 py-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Output
          </div>

          <iframe
            title={`${title} output`}
            srcDoc={code}
            sandbox="allow-forms allow-same-origin"
            className="h-56 w-full bg-white"
          />
        </div>
      )}
    </section>
  );
}
