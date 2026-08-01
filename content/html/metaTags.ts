import { Tutorial } from '@/app/types/tutorial';

export const metaTags: Tutorial = {
  slug: 'meta-tags',

  title: 'Meta Tags & SEO',

  description:
    'Learn how meta tags describe your page to browsers, search engines, and social media platforms.',

  level: 'Advanced',

  readingTime: '16 min',

  lesson: 'Lesson 24 of 27',

  sections: [
    {
      type: 'paragraph',
      title: 'What Are Meta Tags?',
      content:
        'Meta tags are <meta> elements placed in the <head> that provide metadata about the page — information used by browsers, search engines, and social platforms, but never shown directly on the page.',
    },

    {
      type: 'code',
      title: 'Essential Meta Tags',
      language: 'html',
      code: `<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="Learn HTML, CSS, and JavaScript with free tutorials." />`,
    },

    {
      type: 'table',
      title: 'Common name Values',
      headers: ['name', 'Purpose'],
      rows: [
        ['description', 'A short summary shown in search engine results'],
        ['keywords', 'Historically used for SEO; largely ignored by modern search engines'],
        ['author', 'The page or content author'],
        ['robots', 'Controls whether search engines index/follow the page (e.g. "noindex, nofollow")'],
        ['theme-color', 'Sets the browser UI color on supporting mobile browsers'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Social Media Previews with Open Graph',
      content:
        'Open Graph meta tags (prefixed og:) control how a link looks when shared on platforms like Facebook, LinkedIn, and Slack — the preview title, description, and image.',
    },

    {
      type: 'code',
      title: 'Open Graph Tags',
      language: 'html',
      code: `<meta property="og:title" content="DevAcademy — Learn to Code" />
<meta property="og:description" content="Free tutorials for HTML, CSS, and JavaScript." />
<meta property="og:image" content="https://devacademy.com/preview.png" />
<meta property="og:url" content="https://devacademy.com" />`,
    },

    {
      type: 'paragraph',
      title: 'Twitter Cards',
      content:
        'Twitter/X uses its own set of meta tags (prefixed twitter:) for link previews, though it also falls back to Open Graph tags if Twitter-specific ones aren’t present.',
    },

    {
      type: 'code',
      title: 'Twitter Card Tags',
      language: 'html',
      code: `<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="DevAcademy" />
<meta name="twitter:image" content="https://devacademy.com/preview.png" />`,
    },

    {
      type: 'paragraph',
      title: 'Controlling Search Engine Indexing',
      content:
        'The robots meta tag can prevent a page from being indexed or having its links followed — useful for staging environments or duplicate content.',
    },

    {
      type: 'code',
      title: 'robots Meta Tag',
      language: 'html',
      code: `<meta name="robots" content="noindex, nofollow" />`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Give every page a unique, descriptive title and meta description, and include Open Graph tags so shared links look polished across social platforms.',
    },
  ],

  quiz: [
    {
      question: 'Where are meta tags placed?',
      options: ['Inside <body>', 'Inside <head>', 'At the end of the file', 'Inside <footer>'],
      answer: 1,
    },
    {
      question: 'What do Open Graph meta tags control?',
      options: [
        'Page load speed',
        'How a link preview appears when shared on social media',
        'Browser tab color',
        'Form validation',
      ],
      answer: 1,
    },
    {
      question: 'What does <meta name="robots" content="noindex" /> do?',
      options: [
        'Blocks all JavaScript on the page',
        'Tells search engines not to index the page',
        'Hides the page from users',
        'Disables comments',
      ],
      answer: 1,
    },
  ],

  previous: 'audio-and-video',
  next: 'data-attributes',
};
