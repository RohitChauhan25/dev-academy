import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import CodeBlock from '@/components/ui/blog/CodeBlock';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1 className="mt-12 scroll-mt-24 text-3xl font-black leading-tight md:text-4xl" {...props} />
    ),
    h2: (props) => (
      <h2 className="mt-12 scroll-mt-24 text-2xl font-bold leading-tight" {...props} />
    ),
    h3: (props) => (
      <h3 className="mt-8 scroll-mt-24 text-xl font-bold leading-tight" {...props} />
    ),
    h4: (props) => <h4 className="mt-6 scroll-mt-24 text-lg font-semibold" {...props} />,
    p: (props) => <p className="mt-5 text-[1.05rem] leading-8 text-muted-foreground" {...props} />,
    a: ({ href, ...props }) => (
      <Link
        href={href ?? '#'}
        className="font-medium text-violet-600 underline underline-offset-4 transition hover:text-violet-500 dark:text-violet-400"
        {...props}
      />
    ),
    ul: (props) => (
      <ul className="mt-5 list-disc space-y-2 pl-6 marker:text-violet-500" {...props} />
    ),
    ol: (props) => (
      <ol className="mt-5 list-decimal space-y-2 pl-6 marker:text-violet-500" {...props} />
    ),
    li: (props) => <li className="text-[1.05rem] leading-8 text-muted-foreground" {...props} />,
    blockquote: (props) => (
      <blockquote
        className="mt-6 border-l-4 border-violet-500/50 bg-violet-500/5 py-3 pl-5 italic text-muted-foreground"
        {...props}
      />
    ),
    strong: (props) => <strong className="font-semibold text-foreground" {...props} />,
    hr: (props) => <hr className="my-10 border-border" {...props} />,
    img: ({ alt, ...props }) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img alt={alt ?? ''} className="my-8 w-full rounded-xl border" {...props} />
    ),
    table: (props) => (
      <div className="mt-6 overflow-x-auto rounded-xl border">
        <table className="w-full text-left text-sm" {...props} />
      </div>
    ),
    thead: (props) => <thead className="bg-muted/50" {...props} />,
    th: (props) => <th className="px-4 py-2.5 font-semibold" {...props} />,
    td: (props) => <td className="border-t px-4 py-2.5 text-muted-foreground" {...props} />,
    code: ({ className, ...props }) =>
      className ? (
        <code className={className} {...props} />
      ) : (
        <code
          className="rounded bg-violet-500/10 px-1.5 py-0.5 font-mono text-[0.85em] text-violet-700 dark:text-violet-300"
          {...props}
        />
      ),
    pre: ({ children }) => <CodeBlock>{children}</CodeBlock>,
    ...components,
  };
}
