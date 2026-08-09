'use client';

import { useEffect, useRef } from 'react';

import { PROSE_CLASS } from './proseClass';

const COPY_ICON =
  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>';

const CHECK_ICON =
  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4ade80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';

export default function DbContentEnhancer({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const blocks = container.querySelectorAll('pre:not([data-enhanced])');

    blocks.forEach((pre) => {
      pre.setAttribute('data-enhanced', 'true');

      const codeEl = pre.querySelector('code');
      const codeText = (codeEl ?? pre).textContent ?? '';
      const language = codeEl?.className.match(/language-(\w+)/)?.[1] ?? '';

      const wrapper = document.createElement('div');
      wrapper.className =
        'not-prose my-6 overflow-hidden rounded-xl border border-white/5 bg-[#1f1f20] dark:bg-[#2a292e]';

      const header = document.createElement('div');
      header.className = 'flex items-center justify-between border-b border-white/5 px-4 py-2.5';
      header.innerHTML = `
        <div class="flex items-center gap-3">
          <div class="flex gap-1.5">
            <span class="h-2.5 w-2.5 rounded-full bg-red-500/70"></span>
            <span class="h-2.5 w-2.5 rounded-full bg-yellow-500/70"></span>
            <span class="h-2.5 w-2.5 rounded-full bg-green-500/70"></span>
          </div>
          ${language ? `<span class="text-xs font-medium uppercase tracking-wide text-white">${language}</span>` : ''}
        </div>
      `;

      const button = document.createElement('button');
      button.className = 'cursor-pointer text-white transition hover:text-zinc-300';
      button.setAttribute('aria-label', 'Copy code');
      button.innerHTML = COPY_ICON;
      button.addEventListener('click', async () => {
        await navigator.clipboard.writeText(codeText);
        button.innerHTML = CHECK_ICON;
        setTimeout(() => {
          button.innerHTML = COPY_ICON;
        }, 1500);
      });
      header.appendChild(button);

      pre.parentNode?.insertBefore(wrapper, pre);
      wrapper.appendChild(header);
      pre.className = 'overflow-x-auto p-4 font-mono text-[0.85rem] leading-6 text-zinc-200';
      if (codeEl) {
        codeEl.className = 'rounded-none border-0 bg-transparent p-0 text-inherit';
      }
      wrapper.appendChild(pre);
    });
  }, [html]);

  return <div ref={ref} className={PROSE_CLASS} dangerouslySetInnerHTML={{ __html: html }} />;
}
