import { Tutorial } from '@/app/types/tutorial';

export const combinators: Tutorial = {
  slug: 'combinators',

  title: 'Combinators',

  description:
    'Learn how to combine selectors to target descendants, direct children, and siblings.',

  level: 'Intermediate',

  readingTime: '14 min',

  lesson: 'Lesson 21 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'What is a Combinator?',
      content:
        'A combinator is a symbol placed between two selectors that describes the relationship between the elements they match — descendant, direct child, or sibling.',
    },

    {
      type: 'table',
      title: 'Combinator Types',
      headers: ['Combinator', 'Syntax', 'Matches'],
      rows: [
        ['Descendant', 'A B', 'Any B inside A, at any depth'],
        ['Child', 'A > B', 'Any B that is a direct child of A'],
        ['Adjacent sibling', 'A + B', 'The B that comes immediately after A'],
        ['General sibling', 'A ~ B', 'Any B that comes after A, sharing the same parent'],
      ],
    },

    {
      type: 'code',
      title: 'Descendant vs Child Combinator',
      language: 'html',
      code: `<style>
  .card p {
    color: steelblue; /* every <p>, no matter how deeply nested */
  }
  .card > p {
    font-weight: bold; /* only direct <p> children of .card */
  }
</style>

<div class="card">
  <p>Direct child — bold and blue.</p>
  <div>
    <p>Nested deeper — blue, but not bold.</p>
  </div>
</div>`,
    },

    {
      type: 'code',
      title: 'Adjacent and General Sibling Combinators',
      language: 'html',
      code: `<style>
  h2 + p {
    font-weight: bold; /* only the paragraph immediately after an h2 */
  }
  h2 ~ p {
    color: gray; /* every paragraph after an h2, sharing the same parent */
  }
</style>

<h2>Title</h2>
<p>Right after the heading — bold and gray.</p>
<p>Also after the heading — gray, but not bold.</p>`,
    },

    {
      type: 'paragraph',
      title: 'Combining with Other Selectors',
      content:
        'Combinators can be chained with classes, IDs, and pseudo-classes to build precise selectors, like .nav > li:hover to target only the direct <li> children of a nav on hover.',
    },

    {
      type: 'code',
      title: 'A Precise Combined Selector',
      language: 'html',
      code: `<style>
  .nav > li:hover {
    background: #eef4fb;
  }
</style>

<ul class="nav" style="list-style: none; padding: 0;">
  <li style="padding: 8px;">Home</li>
  <li style="padding: 8px;">About</li>
</ul>`,
    },

    {
      type: 'note',
      title: 'Descendant is the Most Common (and Loosest)',
      content:
        'The descendant combinator (a plain space) is the most frequently used but also the loosest — it matches at any depth, which can unintentionally style elements you didn’t mean to target as your markup grows.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Prefer the child combinator (>) over the descendant combinator when you specifically mean "direct children only" — it keeps styles from leaking into deeply nested, unrelated elements.',
    },
  ],

  quiz: [
    {
      question: 'Which combinator selects only direct children?',
      options: ['A B', 'A > B', 'A + B', 'A ~ B'],
      answer: 1,
    },
    {
      question: 'Which combinator selects the single element immediately following another?',
      options: ['A B', 'A > B', 'A + B', 'A ~ B'],
      answer: 2,
    },
    {
      question: 'What does the descendant combinator (a space) match?',
      options: [
        'Only direct children',
        'Any matching element nested at any depth',
        'Only the next sibling',
        'Only elements with the same class',
      ],
      answer: 1,
    },
  ],

  previous: 'specificity-and-cascade',
  next: 'responsive-design',
};
