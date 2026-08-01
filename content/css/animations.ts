import { Tutorial } from '@/app/types/tutorial';

export const animations: Tutorial = {
  slug: 'animations',

  title: 'Animations',

  description:
    'Learn how to build multi-step animations with @keyframes and the animation property.',

  level: 'Advanced',

  readingTime: '18 min',

  lesson: 'Lesson 25 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'Transitions vs Animations',
      content:
        'A transition animates between two states (start and end), usually triggered by an event like :hover. A CSS animation, defined with @keyframes, can have many steps, run automatically, and repeat without any trigger at all.',
    },

    {
      type: 'code',
      title: 'A Basic Keyframe Animation',
      language: 'html',
      code: `<style>
  @keyframes bounce {
    0%   { transform: translateY(0); }
    50%  { transform: translateY(-20px); }
    100% { transform: translateY(0); }
  }

  .ball {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: crimson;
    animation: bounce 1s ease-in-out infinite;
  }
</style>

<div class="ball"></div>`,
    },

    {
      type: 'table',
      title: 'animation Shorthand Parts',
      headers: ['Part', 'Purpose'],
      rows: [
        ['name', 'The @keyframes name to run'],
        ['duration', 'How long one cycle takes'],
        ['timing-function', 'The speed curve, e.g. ease, linear'],
        ['delay', 'How long to wait before starting'],
        ['iteration-count', 'How many times to repeat, or infinite'],
        ['direction', 'normal, reverse, alternate, or alternate-reverse'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Using Percentages in @keyframes',
      content:
        '@keyframes can define as many steps as needed using percentages from 0% to 100%, giving fine control over multi-stage animations. from and to are shorthand for 0% and 100%.',
    },

    {
      type: 'code',
      title: 'Multi-Step Animation',
      language: 'html',
      code: `<style>
  @keyframes pulse-color {
    0%   { background: steelblue; }
    50%  { background: #764ba2; }
    100% { background: steelblue; }
  }

  .banner {
    padding: 20px;
    color: white;
    text-align: center;
    animation: pulse-color 2s ease-in-out infinite;
  }
</style>

<div class="banner">Pulsing background</div>`,
    },

    {
      type: 'paragraph',
      title: 'Controlling Playback',
      content:
        'animation-iteration-count controls how many times the animation runs (a number, or infinite), and animation-direction can alternate the animation back and forth instead of resetting each cycle.',
    },

    {
      type: 'code',
      title: 'Alternating Direction',
      language: 'css',
      code: `.icon {
  animation: spin 3s linear infinite alternate;
}`,
    },

    {
      type: 'note',
      title: 'animation-fill-mode',
      content:
        'By default, an element reverts to its original styles after an animation ends. animation-fill-mode: forwards keeps the styles from the last keyframe instead, useful for entrance animations that shouldn’t reset.',
    },

    {
      type: 'warning',
      title: 'Respect Reduced Motion',
      content:
        'Some users prefer reduced motion due to vestibular disorders. Wrap non-essential animations in @media (prefers-reduced-motion: no-preference) so they’re skipped for users who have requested reduced motion in their OS settings.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use transitions for simple, event-triggered state changes, and reserve @keyframes animations for looping or multi-step effects that need to run independently of user interaction.',
    },
  ],

  quiz: [
    {
      question: 'What is the main difference between a transition and an animation?',
      options: [
        'There is no difference',
        'Animations can have multiple steps and run automatically/repeat, transitions animate only between two states',
        'Transitions only work on colors',
        'Animations require JavaScript',
      ],
      answer: 1,
    },
    {
      question: 'Which at-rule defines the steps of a CSS animation?',
      options: ['@media', '@keyframes', '@supports', '@font-face'],
      answer: 1,
    },
    {
      question: 'Which media feature should wrap non-essential animations for accessibility?',
      options: ['prefers-color-scheme', 'prefers-reduced-motion', 'prefers-contrast', 'orientation'],
      answer: 1,
    },
  ],

  previous: 'transitions',
  next: 'transforms',
};
