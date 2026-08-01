import { Tutorial } from '@/app/types/tutorial';

export const display: Tutorial = {
  slug: 'display',

  title: 'The display Property',

  description:
    'Learn how the display property controls whether an element behaves as block, inline, inline-block, or is removed from the layout entirely.',

  level: 'Beginner',

  readingTime: '14 min',

  lesson: 'Lesson 12 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'Controlling Display Behavior',
      content:
        'Every element has a default display value, but CSS can override it with the display property — one of the most powerful tools for controlling layout.',
    },

    {
      type: 'table',
      title: 'Common display Values',
      headers: ['Value', 'Behavior'],
      rows: [
        ['block', 'Starts on a new line, takes full available width'],
        ['inline', 'Flows with text, only as wide as its content'],
        ['inline-block', 'Flows like inline, but accepts width/height like block'],
        ['none', 'Removed from the layout entirely, as if it doesn’t exist'],
        ['flex', 'Turns the element into a flex container'],
        ['grid', 'Turns the element into a grid container'],
      ],
    },

    {
      type: 'code',
      title: 'inline-block in Action',
      language: 'html',
      code: `<style>
  .pill {
    display: inline-block;
    width: 100px;
    padding: 6px 0;
    text-align: center;
    background: steelblue;
    color: white;
    border-radius: 999px;
    margin-right: 6px;
  }
</style>

<span class="pill">One</span>
<span class="pill">Two</span>
<span class="pill">Three</span>`,
    },

    {
      type: 'paragraph',
      title: 'display: none vs visibility: hidden',
      content:
        'display: none removes the element completely — it takes up no space and is not rendered. visibility: hidden hides the element visually but still reserves its space in the layout.',
    },

    {
      type: 'code',
      title: 'none vs hidden',
      language: 'html',
      code: `<style>
  .gone { display: none; }
  .invisible { visibility: hidden; }
</style>

<p>Visible paragraph</p>
<p class="gone">You will never see this, and it takes no space.</p>
<p class="invisible">This is invisible, but its space is still reserved.</p>
<p>Another visible paragraph</p>`,
    },

    {
      type: 'note',
      title: 'flex and grid are Also display Values',
      content:
        'display: flex and display: grid turn an element into a layout container, changing how its direct children are positioned. These power modern CSS layout, covered in the Flexbox and Grid lessons.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use display: none for elements that should be conditionally hidden and removed from the page flow entirely (like a closed modal or an inactive tab), and visibility: hidden only when you need to preserve layout space.',
    },
  ],

  quiz: [
    {
      question: 'What does display: none do to an element?',
      options: [
        'Makes it transparent but keeps its space',
        'Removes it from the layout entirely, taking no space',
        'Makes it inline',
        'Disables its CSS'
      ],
      answer: 1,
    },
    {
      question: 'Which display value flows inline but accepts width and height?',
      options: ['inline', 'block', 'inline-block', 'flex'],
      answer: 2,
    },
    {
      question: 'What is the difference between display: none and visibility: hidden?',
      options: [
        'There is no difference',
        'visibility: hidden still reserves the element’s layout space',
        'display: none only works on images',
        'visibility: hidden removes the element from the DOM',
      ],
      answer: 1,
    },
  ],

  previous: 'margin-and-padding',
  next: 'position',
};
