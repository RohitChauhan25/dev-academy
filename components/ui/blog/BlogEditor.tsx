'use client';

import { useMemo, useState } from 'react';
import { Calendar, Clock, Download, Eye, PenLine, User } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { htmlToMarkdown } from '@/lib/html-to-markdown';
import { formatBlogDate } from '@/lib/blog';
import CodeBlock from './CodeBlock';
import RichTextEditor from './RichTextEditor';
import { PROSE_CLASS } from './proseClass';

const SAMPLE_CONTENT = `
  <p>Start writing your post here.</p>
  <h2>A heading</h2>
  <p>Some <strong>bold text</strong>, some <code>inline code</code>, and a <a href="https://example.com">link</a>.</p>
  <pre><code>console.log('code blocks work too');</code></pre>
  <ul>
    <li>bullet point one</li>
    <li>bullet point two</li>
  </ul>
`;

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function pascalCase(slug: string) {
  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

function camelCase(slug: string) {
  const pascal = pascalCase(slug);
  return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}

export default function BlogEditor() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [content, setContent] = useState(SAMPLE_CONTENT);
  const [wordCount, setWordCount] = useState(0);
  const [mode, setMode] = useState<'write' | 'preview'>('write');

  const slug = useMemo(() => slugify(title) || 'untitled-post', [title]);
  const tags = useMemo(
    () =>
      tagsInput
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
    [tagsInput],
  );

  const readingTime = `${Math.max(1, Math.round(wordCount / 200))} min read`;

  const registrationSnippet = useMemo(() => {
    const importName = pascalCase(slug) || 'Post';
    const metaName = `${camelCase(slug) || 'post'}Meta`;

    return `import ${importName}, { metadata as ${metaName} } from './${slug}.mdx';

// then add this entry to the \`posts\` array:
{
  slug: '${slug}',
  meta: ${metaName} as unknown as BlogPostMeta,
  Content: ${importName},
},`;
  }, [slug]);

  const handleDownload = () => {
    const metadata = {
      title: title || 'Untitled Post',
      description,
      date: new Date().toISOString().slice(0, 10),
      author: author || 'Guest Author',
      tags,
      readingTime,
    };

    const fileContents = `export const metadata = ${JSON.stringify(metadata, null, 2)};

${htmlToMarkdown(content)}
`;

    const blob = new Blob([fileContents], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${slug}.mdx`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="grid gap-8">
      {/* Post details */}
      <div className="grid gap-5 rounded-2xl border bg-card p-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-sm font-medium">Title</label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Understanding Closures in JavaScript"
            className="h-11 rounded-lg"
          />
          <p className="mt-1.5 text-xs text-muted-foreground">
            Slug: <span className="font-mono text-violet-600 dark:text-violet-400">{slug}</span>
          </p>
        </div>

        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-sm font-medium">Description</label>
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="A one or two sentence summary shown on the blog listing card."
            className="h-11 rounded-lg"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium">Author</label>
          <Input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Your name"
            className="h-11 rounded-lg"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium">Tags</label>
          <Input
            value={tagsInput}
            onChange={(e) => setTagsInput(e.target.value)}
            placeholder="javascript, closures, fundamentals"
            className="h-11 rounded-lg"
          />
        </div>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 sm:col-span-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="rounded-full border-violet-500/25 bg-violet-500/10 text-violet-700 dark:text-violet-300"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Rich text editor / preview */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <div className="flex gap-2">
            <button
              onClick={() => setMode('write')}
              className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-medium transition ${
                mode === 'write'
                  ? 'border-violet-500 bg-violet-500 text-white'
                  : 'text-muted-foreground'
              }`}
            >
              <PenLine className="h-3.5 w-3.5" />
              Write
            </button>
            <button
              onClick={() => setMode('preview')}
              className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-medium transition ${
                mode === 'preview'
                  ? 'border-violet-500 bg-violet-500 text-white'
                  : 'text-muted-foreground'
              }`}
            >
              <Eye className="h-3.5 w-3.5" />
              Preview
            </button>
          </div>
          <span className="text-xs text-muted-foreground">
            {wordCount} words · {readingTime}
          </span>
        </div>

        {mode === 'write' ? (
          <RichTextEditor content={content} onChange={setContent} onWordCountChange={setWordCount} />
        ) : (
          <div className="rounded-xl border bg-card p-6 sm:p-8">
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="rounded-full border-violet-500/25 bg-violet-500/10 text-violet-700 dark:text-violet-300"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            <h1 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
              {title || 'Untitled Post'}
            </h1>

            {description && (
              <p className="mt-3 text-lg leading-8 text-muted-foreground">{description}</p>
            )}

            <div className="mt-5 flex flex-wrap items-center gap-5 border-b pb-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                {author || 'Guest Author'}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formatBlogDate(new Date().toISOString().slice(0, 10))}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {readingTime}
              </span>
            </div>

            <div className={PROSE_CLASS} dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        )}
      </div>

      {/* Export */}
      <div className="rounded-2xl border bg-card p-6">
        <h3 className="text-lg font-bold">Publish this post</h3>
        <p className="mt-1.5 text-sm text-muted-foreground">
          This editor doesn&apos;t save to a server — posts are plain{' '}
          <code className="rounded bg-violet-500/10 px-1.5 py-0.5 font-mono text-[0.85em] text-violet-700 dark:text-violet-300">
            .mdx
          </code>{' '}
          files in the repo. Download the file, drop it into{' '}
          <code className="rounded bg-violet-500/10 px-1.5 py-0.5 font-mono text-[0.85em] text-violet-700 dark:text-violet-300">
            content/blog/
          </code>
          , then register it in{' '}
          <code className="rounded bg-violet-500/10 px-1.5 py-0.5 font-mono text-[0.85em] text-violet-700 dark:text-violet-300">
            content/blog/index.ts
          </code>{' '}
          using the snippet below.
        </p>

        <button
          onClick={handleDownload}
          className="mt-5 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-400 px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
        >
          <Download className="h-4 w-4" />
          Download {slug}.mdx
        </button>

        <div className="mt-6">
          <span className="mb-2 block text-sm font-medium text-muted-foreground">
            Add to content/blog/index.ts
          </span>
          <CodeBlock>
            <code className="language-ts">{registrationSnippet}</code>
          </CodeBlock>
        </div>
      </div>
    </div>
  );
}
