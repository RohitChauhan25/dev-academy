import TurndownService from 'turndown';

export function htmlToMarkdown(html: string): string {
  const service = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    fence: '```',
    bulletListMarker: '-',
    emDelimiter: '_',
  });

  service.addRule('fencedCodeBlockWithLanguage', {
    filter: (node) =>
      node.nodeName === 'PRE' && node.firstChild !== null && node.firstChild.nodeName === 'CODE',
    replacement: (_content, node) => {
      const codeEl = node.firstChild as HTMLElement;
      const language = codeEl.getAttribute('class')?.match(/language-(\S+)/)?.[1] ?? '';
      const code = codeEl.textContent ?? '';
      return `\n\n\`\`\`${language}\n${code}\n\`\`\`\n\n`;
    },
  });

  return service.turndown(html).trim();
}
