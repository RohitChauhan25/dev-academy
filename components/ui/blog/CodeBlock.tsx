'use client';

import { isValidElement, useState, type ReactNode } from 'react';
import { Check, Copy } from 'lucide-react';

function getCodeText(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(getCodeText).join('');
  if (isValidElement(node)) {
    const props = node.props as { children?: ReactNode };
    return getCodeText(props.children);
  }
  return '';
}

interface CodeElementProps {
  className?: string;
  children?: ReactNode;
}

export default function CodeBlock({ children }: { children?: ReactNode }) {
  const [copied, setCopied] = useState(false);

  let language = '';
  let code = '';

  if (isValidElement<CodeElementProps>(children)) {
    language = children.props.className?.replace('language-', '') ?? '';
    code = getCodeText(children.props.children).replace(/\n$/, '');
  } else {
    code = getCodeText(children);
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="not-prose my-6 overflow-hidden rounded-xl border border-white/5 bg-[#1f1f20] dark:bg-[#2a292e]">
      <div className="flex items-center justify-between border-b border-white/5 px-4 py-2.5">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
          </div>
          {language && (
            <span className="text-xs font-medium uppercase tracking-wide text-white">
              {language}
            </span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="cursor-pointer text-white transition hover:text-foreground"
          aria-label="Copy code"
        >
          {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
      <pre className="overflow-x-auto p-4">
        <code className="font-mono text-[0.85rem] leading-6 text-zinc-200">{code}</code>
      </pre>
    </div>
  );
}
