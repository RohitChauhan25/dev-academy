import { Tutorial } from '@/app/types/tutorial';

export const htmlEntities: Tutorial = {
  slug: 'html-entities',

  title: 'HTML Entities',

  description:
    'Learn how to safely display reserved characters and special symbols in HTML using character entities.',

  level: 'Intermediate',

  readingTime: '10 min',

  lesson: 'Lesson 20 of 27',

  sections: [
    {
      type: 'paragraph',
      title: 'Why Entities Exist',
      content:
        'Some characters, like < and >, have special meaning in HTML because they define tags. To display them as literal text rather than markup, you need to use an entity instead.',
    },

    {
      type: 'table',
      title: 'Common Entities',
      headers: ['Entity', 'Renders As', 'Meaning'],
      rows: [
        ['&lt;', '<', 'Less than'],
        ['&gt;', '>', 'Greater than'],
        ['&amp;', '&', 'Ampersand'],
        ['&quot;', '"', 'Double quote'],
        ['&apos;', "'", 'Apostrophe'],
        ['&nbsp;', ' ', 'Non-breaking space'],
        ['&copy;', '©', 'Copyright symbol'],
        ['&hearts;', '♥', 'Heart symbol'],
      ],
    },

    {
      type: 'code',
      title: 'Using Entities',
      language: 'html',
      code: `<p>Use &lt;div&gt; to group content.</p>
<p>Terms &amp; Conditions</p>
<p>&copy; 2026 DevAcademy</p>`,
    },

    {
      type: 'paragraph',
      title: 'Numeric Character References',
      content:
        'Any Unicode character can also be written using a numeric reference: &#160; for a non-breaking space, or &#x00A9; using its hexadecimal code point.',
    },

    {
      type: 'code',
      title: 'Numeric References',
      language: 'html',
      code: `<p>&#169; 2026 DevAcademy</p>
<p>&#x2764; I love HTML</p>`,
    },

    {
      type: 'paragraph',
      title: 'The Non-Breaking Space',
      content:
        '&nbsp; inserts a space that browsers will not collapse or break a line at — useful for keeping two words together, like "10&nbsp;km".',
    },

    {
      type: 'warning',
      title: 'Escape User-Generated Content',
      content:
        'When displaying text that comes from users (comments, form input), always escape characters like < and & to entities on the server, or use a templating system that does so automatically. Failing to do this can lead to cross-site scripting (XSS) vulnerabilities.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use named entities (&amp;, &lt;) for readability when writing markup by hand, and rely on your framework’s automatic escaping when rendering dynamic, user-supplied content.',
    },
  ],

  quiz: [
    {
      question: 'Which entity displays a literal less-than sign (<)?',
      options: ['&lt;', '&gt;', '&amp;', '&lt'],
      answer: 0,
    },
    {
      question: 'Which entity represents a non-breaking space?',
      options: ['&sp;', '&nbsp;', '&space;', '&nbs;'],
      answer: 1,
    },
    {
      question: 'Why is escaping user-generated content important?',
      options: [
        'It makes pages load faster',
        'It prevents cross-site scripting (XSS) vulnerabilities',
        'It is required for SEO',
        'It reduces file size',
      ],
      answer: 1,
    },
  ],

  previous: 'classes-and-ids',
  next: 'head-elements',
};
