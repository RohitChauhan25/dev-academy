'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, Loader2, PenLine } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatBlogDate } from '@/lib/blog';
import { createBlog } from '@/lib/auth-api';
import { useAuth } from '@/components/providers/AuthProvider';
import SignUpModal from '@/components/ui/auth/SignUpModal';
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

export default function BlogEditor() {
  const router = useRouter();
  const { user, accessToken, status } = useAuth();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [content, setContent] = useState(SAMPLE_CONTENT);
  const [wordCount, setWordCount] = useState(0);
  const [mode, setMode] = useState<'write' | 'preview'>('write');
  const [publishing, setPublishing] = useState<'draft' | 'published' | null>(null);
  const [error, setError] = useState('');

  const tags = useMemo(
    () =>
      tagsInput
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
    [tagsInput],
  );

  const readingTime = `${Math.max(1, Math.round(wordCount / 200))} min read`;

  const publish = async (targetStatus: 'draft' | 'published') => {
    if (!accessToken) return;
    setError('');

    const plainTextLength = content.replace(/<[^>]*>/g, '').trim().length;
    if (title.trim().length < 3) {
      setError('Title must be at least 3 characters.');
      return;
    }
    if (description.trim().length < 10) {
      setError('Description must be at least 10 characters.');
      return;
    }
    if (plainTextLength < 20) {
      setError('Write a bit more before publishing — at least 20 characters of content.');
      return;
    }

    setPublishing(targetStatus);
    try {
      const { data } = await createBlog(accessToken, {
        title: title.trim(),
        shortDescription: description.trim(),
        content,
        tags,
        status: targetStatus,
      });
      if (!data) throw new Error('Something went wrong. Please try again.');
      router.push(`/blogs/${data.blog.slug}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setPublishing(null);
    }
  };

  if (status === 'loading') {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <Loader2 className="size-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (status === 'unauthenticated') {
    return (
      <div className="flex min-h-[40vh] flex-col items-center justify-center gap-4 rounded-2xl border bg-card text-center">
        <h2 className="text-xl font-semibold">Sign in to write a post</h2>
        <p className="max-w-sm text-sm text-muted-foreground">
          Your post is published under your DevAcademy profile.
        </p>
        <SignUpModal trigger={<Button>Sign In</Button>} />
      </div>
    );
  }

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

        <div className="sm:col-span-2">
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
              <span>{user?.name ?? 'You'}</span>
              <span>{formatBlogDate(new Date().toISOString())}</span>
              <span>{readingTime}</span>
            </div>

            <div className={PROSE_CLASS} dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        )}
      </div>

      {/* Publish */}
      <div className="rounded-2xl border bg-card p-6">
        <h3 className="text-lg font-bold">Publish this post</h3>
        <p className="mt-1.5 text-sm text-muted-foreground">
          Publish it live on the blog, or save it as a draft you can come back to and publish
          later.
        </p>

        {error && <p className="mt-3 text-sm text-destructive">{error}</p>}

        <div className="mt-5 flex flex-wrap gap-3">
          <Button
            onClick={() => publish('published')}
            disabled={publishing !== null}
            className="bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-400"
          >
            {publishing === 'published' && <Loader2 className="size-4 animate-spin" />}
            Publish
          </Button>
          <Button variant="outline" onClick={() => publish('draft')} disabled={publishing !== null}>
            {publishing === 'draft' && <Loader2 className="size-4 animate-spin" />}
            Save as draft
          </Button>
        </div>
      </div>
    </div>
  );
}
