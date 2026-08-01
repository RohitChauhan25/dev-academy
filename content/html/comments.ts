import { Tutorial } from '@/app/types/tutorial';

export const comments: Tutorial = {
  slug: 'comments',

  title: 'HTML Comments',

  description:
    'Learn how to write comments in HTML to leave notes for yourself and other developers without affecting the rendered page.',

  level: 'Beginner',

  readingTime: '6 min',

  lesson: 'Lesson 6 of 27',

  sections: [
    {
      type: 'paragraph',
      title: 'Why Use Comments?',
      content:
        'Comments let you leave notes inside your markup that are completely ignored by the browser. They are useful for explaining tricky sections, leaving reminders, or temporarily disabling a block of code.',
    },

    {
      type: 'code',
      title: 'Comment Syntax',
      language: 'html',
      code: `<!-- This is a comment and will not be displayed -->
<p>This paragraph is visible.</p>

<!--
  Comments can also
  span multiple lines.
-->`,
    },

    {
      type: 'paragraph',
      title: 'Commenting Out Code',
      content:
        'Comments are handy for temporarily removing a section of markup while testing, without deleting it entirely.',
    },

    {
      type: 'code',
      title: 'Disabling a Section',
      language: 'html',
      code: `<!--
<section class="promo">
  <h2>Limited Time Offer</h2>
</section>
-->`,
    },

    {
      type: 'warning',
      title: 'Comments Are Not Truly Hidden',
      content:
        'Anyone can view the page source and read your HTML comments. Never put sensitive information — like API keys or internal notes — inside them.',
    },

    {
      type: 'note',
      title: 'No Nested Comments',
      content:
        'HTML comments cannot be nested. Placing <!-- --> inside another comment will close the outer comment early and can produce unexpected markup.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use comments sparingly and only where the intent of a block of markup isn’t obvious. Well-structured, semantic HTML usually needs very few comments.',
    },
  ],

  quiz: [
    {
      question: 'What is the correct syntax for an HTML comment?',
      options: ['// comment', '/* comment */', '<!-- comment -->', '# comment'],
      answer: 2,
    },
    {
      question: 'Are HTML comments visible in the page source?',
      options: ['Yes, anyone can view them', 'No, they are encrypted', 'Only in Chrome', 'Only in development mode'],
      answer: 0,
    },
    {
      question: 'Can HTML comments be nested inside each other?',
      options: ['Yes, always', 'No', 'Only in HTML5', 'Only inside <head>'],
      answer: 1,
    },
  ],

  previous: 'attributes',
  next: 'headings-and-paragraphs',
};
