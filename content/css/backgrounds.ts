import { Tutorial } from '@/app/types/tutorial';

export const backgrounds: Tutorial = {
  slug: 'backgrounds',

  title: 'CSS Backgrounds',

  description:
    'Learn how to set background colors and images, and control their size, position, and repetition.',

  level: 'Beginner',

  readingTime: '14 min',

  lesson: 'Lesson 9 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'Background Color',
      content:
        'The background-color property sets a solid color behind an element’s content and padding.',
    },

    {
      type: 'code',
      title: 'Background Color',
      language: 'html',
      code: `<style>
  .box {
    background-color: #ffeaa7;
    padding: 20px;
  }
</style>

<div class="box">A box with a background color</div>`,
    },

    {
      type: 'table',
      title: 'Background Properties',
      headers: ['Property', 'Purpose'],
      rows: [
        ['background-color', 'A solid background color'],
        ['background-image', 'An image, gradient, or pattern'],
        ['background-size', 'How the image is scaled (cover, contain, or a size)'],
        ['background-position', 'Where the image is placed within the box'],
        ['background-repeat', 'Whether the image tiles (repeat, no-repeat)'],
      ],
    },

    {
      type: 'code',
      title: 'Background Image',
      language: 'html',
      code: `<style>
  .banner {
    height: 150px;
    background-image: linear-gradient(45deg, #667eea, #764ba2);
    background-size: cover;
    background-position: center;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }
</style>

<div class="banner">Banner with a gradient background</div>`,
    },

    {
      type: 'paragraph',
      title: 'The background Shorthand',
      content:
        'Instead of writing each background property separately, the background shorthand combines several of them into a single declaration.',
    },

    {
      type: 'code',
      title: 'background Shorthand',
      language: 'css',
      code: `.hero {
  background: url("hero.jpg") center / cover no-repeat, #333;
}
/* image, position, size, repeat, then a fallback color */`,
    },

    {
      type: 'note',
      title: 'background-size: cover vs contain',
      content:
        'cover scales the image to fully cover the box, cropping if needed. contain scales it to fit entirely within the box, potentially leaving empty space.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Always set a fallback background-color close to your image’s dominant color, so the layout looks acceptable while the image loads or if it fails to load.',
    },
  ],

  quiz: [
    {
      question: 'Which value makes a background image fully cover its box, cropping if necessary?',
      options: ['contain', 'cover', 'fill', 'auto'],
      answer: 1,
    },
    {
      question: 'Which property prevents a background image from tiling?',
      options: ['background-position', 'background-repeat: no-repeat', 'background-size', 'background-clip'],
      answer: 1,
    },
    {
      question: 'What is the benefit of setting a fallback background-color with an image?',
      options: [
        'It speeds up image loading',
        'It provides a reasonable look before the image loads or if it fails',
        'It is required by CSS',
        'It changes the image size',
      ],
      answer: 1,
    },
  ],

  previous: 'text-and-fonts',
  next: 'borders',
};
