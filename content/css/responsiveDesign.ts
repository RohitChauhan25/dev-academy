import { Tutorial } from '@/app/types/tutorial';

export const responsiveDesign: Tutorial = {
  slug: 'responsive-design',

  title: 'Responsive Design',

  description:
    'Learn how to build layouts that adapt to different screen sizes using media queries and a mobile-first approach.',

  level: 'Advanced',

  readingTime: '20 min',

  lesson: 'Lesson 22 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'What is Responsive Design?',
      content:
        'Responsive design means building pages that adapt their layout to fit any screen size — from a small phone to a large desktop monitor — using flexible layouts and media queries.',
    },

    {
      type: 'paragraph',
      title: 'Media Queries',
      content:
        'A media query applies a block of CSS only when certain conditions are met, most commonly a minimum or maximum viewport width.',
    },

    {
      type: 'code',
      title: 'A Basic Media Query',
      language: 'html',
      code: `<style>
  .box {
    background: steelblue;
    color: white;
    padding: 20px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    .box {
      background: crimson;
      font-size: 14px;
    }
  }
</style>

<div class="box">Resize the preview panel to see this change color below 480px.</div>`,
    },

    {
      type: 'paragraph',
      title: 'Mobile-First Design',
      content:
        'Mobile-first means writing your base CSS for small screens first, then using min-width media queries to add complexity as the screen grows — generally simpler than starting from desktop and overriding down.',
    },

    {
      type: 'code',
      title: 'Mobile-First Layout',
      language: 'html',
      code: `<style>
  .layout {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .layout div {
    background: #eef4fb;
    padding: 16px;
  }

  @media (min-width: 600px) {
    .layout {
      flex-direction: row;
    }
  }
</style>

<div class="layout">
  <div>Panel A</div>
  <div>Panel B</div>
</div>`,
    },

    {
      type: 'table',
      title: 'Common Breakpoints (as a starting point)',
      headers: ['Range', 'Typical Device'],
      rows: [
        ['< 600px', 'Mobile phones'],
        ['600px – 900px', 'Tablets'],
        ['900px – 1200px', 'Small laptops'],
        ['> 1200px', 'Desktops and large screens'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Fluid Layouts Reduce the Need for Breakpoints',
      content:
        'Using Flexbox, Grid, percentages, and the fr unit often lets a layout adapt smoothly without any media queries at all — reach for breakpoints when the layout needs a structural change, not just resizing.',
    },

    {
      type: 'note',
      title: 'Don’t Forget the Viewport Meta Tag',
      content:
        'Media queries only behave correctly on mobile if the HTML document includes <meta name="viewport" content="width=device-width, initial-scale=1.0" /> in its head — otherwise mobile browsers render at a zoomed-out desktop width.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Base your breakpoints on where your own content starts to look cramped or awkward, rather than copying exact device widths — devices and screen sizes change constantly, but your content’s natural breakpoints don’t.',
    },
  ],

  quiz: [
    {
      question: 'What does a media query with (max-width: 480px) do?',
      options: [
        'Applies its styles only on screens narrower than 480px',
        'Applies its styles only on screens wider than 480px',
        'Sets the element’s width to 480px',
        'Disables the element below 480px',
      ],
      answer: 0,
    },
    {
      question: 'What does "mobile-first" mean?',
      options: [
        'Only supporting mobile devices',
        'Writing base styles for small screens first, then adding complexity with min-width queries',
        'Testing only on mobile browsers',
        'Using larger font sizes',
      ],
      answer: 1,
    },
    {
      question: 'Why is the viewport meta tag important for responsive design?',
      options: [
        'It loads CSS faster',
        'Without it, mobile browsers render at a zoomed-out desktop width, breaking media queries',
        'It is only needed for images',
        'It replaces the need for media queries',
      ],
      answer: 1,
    },
  ],

  previous: 'combinators',
  next: 'css-variables',
};
