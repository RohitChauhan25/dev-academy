import { Tutorial } from '@/app/types/tutorial';

export const semanticHtml: Tutorial = {
  slug: 'semantic-html',

  title: 'Semantic HTML',

  description:
    'Learn how to use semantic HTML5 elements to describe page structure meaningfully, improving accessibility and SEO.',

  level: 'Intermediate',

  readingTime: '16 min',

  lesson: 'Lesson 17 of 27',

  sections: [
    {
      type: 'paragraph',
      title: 'What is Semantic HTML?',
      content:
        'Semantic elements clearly describe their meaning to both the browser and the developer, unlike generic <div> or <span> elements. HTML5 introduced a set of semantic elements to describe common page regions.',
    },

    {
      type: 'code',
      title: 'A Semantic Page Layout',
      language: 'html',
      code: `<header>
  <h1>My Website</h1>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>

<main>
  <article>
    <h2>Blog Post Title</h2>
    <p>Article content...</p>
  </article>

  <aside>
    <h3>Related Links</h3>
  </aside>
</main>

<footer>
  <p>&copy; 2026 My Website</p>
</footer>`,
    },

    {
      type: 'table',
      title: 'Common Semantic Elements',
      headers: ['Element', 'Purpose'],
      rows: [
        ['<header>', 'Introductory content or navigation for a page/section'],
        ['<nav>', 'A block of navigation links'],
        ['<main>', 'The dominant, unique content of the page (one per page)'],
        ['<article>', 'Self-contained content that could stand alone, like a blog post'],
        ['<section>', 'A thematic grouping of content, usually with a heading'],
        ['<aside>', 'Content tangentially related to the main content, like a sidebar'],
        ['<footer>', 'Footer content for a page or section'],
        ['<figure> / <figcaption>', 'An image, diagram, or code block with a caption'],
        ['<time>', 'A specific date or time value'],
      ],
    },

    {
      type: 'paragraph',
      title: 'section vs article vs div',
      content:
        'Use <article> for content that makes sense on its own (a blog post, a product card). Use <section> for a thematic grouping within a page that usually has its own heading. Fall back to <div> only when neither applies and you just need a styling wrapper.',
    },

    {
      type: 'code',
      title: 'figure and figcaption',
      language: 'html',
      code: `<figure>
  <img src="chart.png" alt="Quarterly revenue chart" />
  <figcaption>Figure 1: Quarterly revenue growth.</figcaption>
</figure>`,
    },

    {
      type: 'paragraph',
      title: 'Why Semantic HTML Matters',
      content:
        'Semantic markup helps screen readers announce page regions correctly, lets search engines better understand content importance, and makes code easier for other developers to read.',
    },

    {
      type: 'note',
      title: 'One main Per Page',
      content:
        'There should only be one <main> element per page, representing the primary content — excluding repeated elements like headers, footers, and navigation.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Reach for a semantic element before a <div> whenever one accurately describes the content’s role. It costs nothing extra and pays off in accessibility and SEO.',
    },
  ],

  quiz: [
    {
      question: 'Which element should wrap a page’s primary, unique content?',
      options: ['<section>', '<main>', '<div>', '<content>'],
      answer: 1,
    },
    {
      question: 'Which element is best for content that could stand alone, like a blog post?',
      options: ['<article>', '<aside>', '<section>', '<div>'],
      answer: 0,
    },
    {
      question: 'What does <figcaption> provide?',
      options: [
        'A caption for a <figure>',
        'A form validation message',
        'A table header',
        'A navigation link'
      ],
      answer: 0,
    },
  ],

  previous: 'form-validation',
  next: 'block-vs-inline',
};
