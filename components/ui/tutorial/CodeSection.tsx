import { codeToHtml } from 'shiki';
import { slugify } from '@/lib/utils';

interface CodeSectionProps {
  title: string;
  code: string;
  language?: string;
}

const SUPPORTED_LANGUAGES = new Set([
  'html',
  'css',
  'javascript',
  'typescript',
  'jsx',
  'json',
  'bash',
]);

export default async function CodeSection({ title, code, language }: CodeSectionProps) {
  const isHtml = language === 'html';
  const lang = language && SUPPORTED_LANGUAGES.has(language) ? language : 'text';

  const highlighted = await codeToHtml(code, {
    lang,
    theme: 'dark-plus',
  });

  return (
    <section id={slugify(title)} className="mt-12 scroll-mt-24">
      <h2 className="text-3xl font-bold">{title}</h2>

      <div
        className="tutorial-code mt-5 overflow-hidden rounded-xl border border-white/10"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />

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
