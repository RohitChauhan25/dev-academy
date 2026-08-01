import { Tutorial } from '@/app/types/tutorial';

export const textAndFonts: Tutorial = {
  slug: 'text-and-fonts',

  title: 'Text & Fonts',

  description:
    'Style text with font family, size, weight, spacing, alignment, and line height.',

  level: 'Beginner',

  readingTime: '16 min',

  lesson: 'Lesson 8 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'Font Properties',
      content:
        'CSS provides several properties to control typography: font-family for the typeface, font-size for scale, font-weight for boldness, and more.',
    },

    {
      type: 'code',
      title: 'Basic Font Styling',
      language: 'html',
      code: `<style>
  p {
    font-family: 'Segoe UI', Arial, sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.6;
  }
</style>

<p>This text is styled with a custom font family, size, and weight.</p>`,
    },

    {
      type: 'table',
      title: 'Common Text Properties',
      headers: ['Property', 'Purpose'],
      rows: [
        ['font-family', 'The typeface, with fallbacks'],
        ['font-size', 'The size of the text'],
        ['font-weight', 'Boldness, from 100 (thin) to 900 (black)'],
        ['font-style', 'italic or normal'],
        ['line-height', 'Vertical spacing between lines'],
        ['letter-spacing', 'Horizontal space between characters'],
        ['text-align', 'left, center, right, or justify'],
        ['text-decoration', 'underline, line-through, or none'],
        ['text-transform', 'uppercase, lowercase, or capitalize'],
      ],
    },

    {
      type: 'code',
      title: 'Text Alignment and Decoration',
      language: 'html',
      code: `<style>
  .centered {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  .link {
    text-decoration: none;
    color: steelblue;
  }
  .link:hover {
    text-decoration: underline;
  }
</style>

<h2 class="centered">Section Title</h2>
<a href="#" class="link">Hover this link</a>`,
    },

    {
      type: 'paragraph',
      title: 'Font Fallbacks',
      content:
        'font-family accepts a comma-separated list. The browser uses the first font available on the user’s system, falling back to the next, ending in a generic family like sans-serif or serif as a safety net.',
    },

    {
      type: 'paragraph',
      title: 'Web Fonts',
      content:
        'Custom web fonts (like Google Fonts) are loaded with @font-face or a <link> tag, then referenced by name in font-family just like a system font.',
    },

    {
      type: 'code',
      title: 'Loading a Web Font',
      language: 'html',
      code: `<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
  rel="stylesheet"
/>

<style>
  body {
    font-family: 'Inter', sans-serif;
  }
</style>`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Always end a font-family list with a generic fallback (sans-serif or serif), and keep line-height around 1.4–1.6 for comfortable reading on body text.',
    },
  ],

  quiz: [
    {
      question: 'Which property sets the boldness of text?',
      options: ['font-style', 'font-weight', 'text-decoration', 'font-family'],
      answer: 1,
    },
    {
      question: 'Why should font-family end with a generic fallback like sans-serif?',
      options: [
        'It is required by the CSS spec',
        'It ensures readable text even if none of the listed fonts are available',
        'It improves page load speed',
        'It only affects headings',
      ],
      answer: 1,
    },
    {
      question: 'Which property controls spacing between lines of text?',
      options: ['letter-spacing', 'line-height', 'text-indent', 'word-spacing'],
      answer: 1,
    },
  ],

  previous: 'box-model',
  next: 'backgrounds',
};
