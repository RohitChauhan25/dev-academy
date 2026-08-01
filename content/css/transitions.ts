import { Tutorial } from '@/app/types/tutorial';

export const transitions: Tutorial = {
  slug: 'transitions',

  title: 'Transitions',

  description:
    'Learn how to animate changes to a CSS property smoothly over time using the transition property.',

  level: 'Advanced',

  readingTime: '14 min',

  lesson: 'Lesson 24 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'What is a Transition?',
      content:
        'A transition smooths out a property change over a duration, instead of it happening instantly. Transitions are commonly combined with pseudo-classes like :hover.',
    },

    {
      type: 'code',
      title: 'A Basic Transition',
      language: 'html',
      code: `<style>
  .btn {
    background: steelblue;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  .btn:hover {
    background-color: #1f4260;
    transform: scale(1.05);
  }
</style>

<button class="btn">Hover me</button>`,
    },

    {
      type: 'table',
      title: 'transition Shorthand Parts',
      headers: ['Part', 'Purpose'],
      rows: [
        ['property', 'Which property to animate, or "all"'],
        ['duration', 'How long the transition takes, e.g. 0.3s'],
        ['timing-function', 'The speed curve, e.g. ease, linear, ease-in-out'],
        ['delay', 'How long to wait before starting'],
      ],
    },

    {
      type: 'code',
      title: 'Full Transition Shorthand',
      language: 'css',
      code: `.card {
  transition: transform 0.4s ease-in-out 0.1s;
}
/* property: transform, duration: 0.4s, easing: ease-in-out, delay: 0.1s */`,
    },

    {
      type: 'paragraph',
      title: 'Transitioning Multiple Properties',
      content:
        'Multiple properties can transition at once, either by listing them comma-separated with their own timing, or by using transition: all to animate every changing property with the same settings.',
    },

    {
      type: 'code',
      title: 'Card Hover Effect',
      language: 'html',
      code: `<style>
  .card {
    width: 180px;
    padding: 16px;
    background: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
  }
  .card:hover {
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    transform: translateY(-4px);
  }
</style>

<div class="card">Hover this card</div>`,
    },

    {
      type: 'note',
      title: 'Not Every Property Can Transition',
      content:
        'Only properties with an intermediate value between the start and end state can animate smoothly (like color, width, opacity, transform). Properties like display cannot be smoothly transitioned since there’s no "halfway" state between block and none.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Prefer transitioning transform and opacity over properties like width, height, or top — they can be animated efficiently by the browser’s compositor without triggering expensive layout recalculations.',
    },
  ],

  quiz: [
    {
      question: 'Which property makes a CSS value change animate smoothly instead of instantly?',
      options: ['animation', 'transition', 'transform', 'ease'],
      answer: 1,
    },
    {
      question: 'What does the timing-function part of a transition control?',
      options: ['How long it lasts', 'The speed curve, e.g. ease or linear', 'Which property animates', 'The delay before starting'],
      answer: 1,
    },
    {
      question: 'Why are transform and opacity often preferred for animations?',
      options: [
        'They are the only properties CSS allows animating',
        'They can be animated efficiently without triggering expensive layout recalculations',
        'They require less CSS to write',
        'They work only with JavaScript',
      ],
      answer: 1,
    },
  ],

  previous: 'css-variables',
  next: 'animations',
};
