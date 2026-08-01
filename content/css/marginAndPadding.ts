import { Tutorial } from '@/app/types/tutorial';

export const marginAndPadding: Tutorial = {
  slug: 'margin-and-padding',

  title: 'Margin & Padding',

  description:
    'Learn how margin and padding control spacing outside and inside an element, including shorthand notation and margin collapsing.',

  level: 'Beginner',

  readingTime: '14 min',

  lesson: 'Lesson 11 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'Margin vs Padding',
      content:
        'padding adds space inside an element, between its content and its border. margin adds space outside an element, separating it from its neighbors.',
    },

    {
      type: 'code',
      title: 'Margin and Padding Compared',
      language: 'html',
      code: `<style>
  .box {
    background: #eef4fb;
    border: 2px solid steelblue;
    padding: 20px;
    margin: 20px;
  }
</style>

<div class="box">Padding is inside the border, margin is outside.</div>`,
    },

    {
      type: 'paragraph',
      title: 'Shorthand Notation',
      content:
        'Both properties accept one, two, three, or four values to control each side, always in clockwise order starting from the top.',
    },

    {
      type: 'table',
      title: 'Shorthand Values',
      headers: ['Values', 'Meaning'],
      rows: [
        ['margin: 10px;', 'All four sides: 10px'],
        ['margin: 10px 20px;', 'Top/bottom: 10px, left/right: 20px'],
        ['margin: 10px 20px 30px;', 'Top: 10px, left/right: 20px, bottom: 30px'],
        ['margin: 10px 20px 30px 40px;', 'Top, right, bottom, left (clockwise)'],
      ],
    },

    {
      type: 'code',
      title: 'Individual Sides',
      language: 'css',
      code: `.box {
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 10px;
  margin-left: 20px;
}`,
    },

    {
      type: 'paragraph',
      title: 'Centering with Auto Margins',
      content:
        'Setting margin-left and margin-right to auto on a block element with a defined width centers it horizontally within its parent.',
    },

    {
      type: 'code',
      title: 'Centering a Block',
      language: 'html',
      code: `<style>
  .centered {
    width: 200px;
    margin: 0 auto;
    background: #ffeaa7;
    padding: 10px;
    text-align: center;
  }
</style>

<div class="centered">Centered box</div>`,
    },

    {
      type: 'warning',
      title: 'Margin Collapsing',
      content:
        'Vertical margins between adjacent block elements can "collapse" into a single margin equal to the larger of the two, rather than adding together. This only happens with vertical margins, never horizontal ones.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Prefer padding for space inside a component’s own border, and margin for space between separate components. Being consistent about this makes spacing bugs much easier to track down.',
    },
  ],

  quiz: [
    {
      question: 'Which property adds space inside an element’s border?',
      options: ['margin', 'padding', 'gap', 'spacing'],
      answer: 1,
    },
    {
      question: 'What does margin: 10px 20px; set?',
      options: [
        'All sides to 10px',
        'Top/bottom to 10px, left/right to 20px',
        'Top to 10px, the rest to 20px',
        'Left to 10px, right to 20px',
      ],
      answer: 1,
    },
    {
      question: 'What does margin: 0 auto; do to a block element with a set width?',
      options: [
        'Removes all margin',
        'Centers it horizontally',
        'Centers it vertically',
        'Stretches it to full width',
      ],
      answer: 1,
    },
  ],

  previous: 'borders',
  next: 'display',
};
