import { Tutorial } from '@/app/types/tutorial';

export const pseudoClasses: Tutorial = {
  slug: 'pseudo-classes',

  title: 'Pseudo-classes',

  description:
    'Learn how to style elements based on state or position using pseudo-classes like :hover, :focus, and :nth-child.',

  level: 'Intermediate',

  readingTime: '16 min',

  lesson: 'Lesson 18 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'What is a Pseudo-class?',
      content:
        'A pseudo-class targets an element in a particular state or position, without needing an extra class or attribute in the HTML. It’s written with a single colon, e.g. :hover.',
    },

    {
      type: 'code',
      title: 'Interactive States',
      language: 'html',
      code: `<style>
  .btn {
    background: steelblue;
    color: white;
    border: none;
    padding: 10px 16px;
    border-radius: 6px;
    cursor: pointer;
  }
  .btn:hover {
    background: #2c5d84;
  }
  .btn:active {
    background: #1f4260;
  }
  .btn:focus {
    outline: 3px solid #ffeaa7;
  }
</style>

<button class="btn">Hover, click, or tab to me</button>`,
    },

    {
      type: 'table',
      title: 'Common State Pseudo-classes',
      headers: ['Pseudo-class', 'Matches'],
      rows: [
        [':hover', 'When the pointer is over the element'],
        [':focus', 'When the element has keyboard focus'],
        [':active', 'While the element is being clicked/pressed'],
        [':disabled', 'A form element that is disabled'],
        [':checked', 'A checked checkbox or radio button'],
        [':visited', 'A link the user has already visited'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Structural Pseudo-classes',
      content:
        'Structural pseudo-classes select elements based on their position among siblings, without needing to add classes to specific children manually.',
    },

    {
      type: 'code',
      title: 'Zebra-Striped List with nth-child',
      language: 'html',
      code: `<style>
  li {
    padding: 8px;
  }
  li:nth-child(odd) {
    background: #f4f4f4;
  }
  li:first-child {
    font-weight: bold;
  }
  li:last-child {
    color: crimson;
  }
</style>

<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
  <li>Fourth item</li>
</ul>`,
    },

    {
      type: 'table',
      title: 'Common Structural Pseudo-classes',
      headers: ['Pseudo-class', 'Matches'],
      rows: [
        [':first-child', 'An element that is the first child of its parent'],
        [':last-child', 'An element that is the last child of its parent'],
        [':nth-child(n)', 'The nth child, supports formulas like 2n or odd/even'],
        [':not(selector)', 'Any element that does not match the given selector'],
      ],
    },

    {
      type: 'note',
      title: 'Pseudo-classes Need No Extra HTML',
      content:
        'The power of pseudo-classes is that they respond to state and structure that already exists — no extra classes, IDs, or JavaScript required to style a hover effect or every other row.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Always style :focus (or focus-visible) on interactive elements, not just :hover — keyboard and screen-reader users rely on visible focus indicators to know where they are on the page.',
    },
  ],

  quiz: [
    {
      question: 'Which pseudo-class matches an element while the pointer is over it?',
      options: [':active', ':hover', ':focus', ':visited'],
      answer: 1,
    },
    {
      question: 'Which pseudo-class selects every other list item for a zebra-stripe effect?',
      options: [':nth-child(odd)', ':first-child', ':not(li)', ':checked'],
      answer: 0,
    },
    {
      question: 'Why is styling :focus important, not just :hover?',
      options: [
        'It looks nicer',
        'Keyboard and screen-reader users rely on visible focus indicators',
        ':focus is required by CSS syntax',
        'It has no real purpose',
      ],
      answer: 1,
    },
  ],

  previous: 'z-index-and-stacking',
  next: 'pseudo-elements',
};
