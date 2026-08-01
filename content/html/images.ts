import { Tutorial } from '@/app/types/tutorial';

export const images: Tutorial = {
  slug: 'images',

  title: 'HTML Images',

  description:
    'Learn how to embed images with the img element, write meaningful alt text, and serve responsive images.',

  level: 'Beginner',

  readingTime: '14 min',

  lesson: 'Lesson 10 of 27',

  sections: [
    {
      type: 'paragraph',
      title: 'The img Element',
      content:
        'Images are embedded using the <img> element, a void element with no closing tag. The src attribute points to the image file, and alt provides a text alternative.',
    },

    {
      type: 'code',
      title: 'Basic Image',
      language: 'html',
      code: `<img src="photo.jpg" alt="A sunset over the mountains" />`,
    },

    {
      type: 'table',
      title: 'Common Attributes',
      headers: ['Attribute', 'Purpose'],
      rows: [
        ['src', 'Path to the image file'],
        ['alt', 'Text alternative for accessibility and when the image fails to load'],
        ['width / height', 'Sets the display dimensions in pixels'],
        ['loading', '"lazy" defers loading offscreen images'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Why alt Text Matters',
      content:
        'The alt attribute is read aloud by screen readers, displayed if the image fails to load, and used by search engines to understand image content. Every meaningful image should have descriptive alt text.',
    },

    {
      type: 'code',
      title: 'Decorative Images',
      language: 'html',
      code: `<!-- Purely decorative image: use an empty alt so screen readers skip it -->
<img src="divider.png" alt="" />`,
    },

    {
      type: 'paragraph',
      title: 'Setting Dimensions',
      content:
        'Specifying width and height helps the browser reserve space for the image before it loads, preventing content from jumping around as the page renders (layout shift).',
    },

    {
      type: 'code',
      title: 'Width and Height',
      language: 'html',
      code: `<img src="logo.png" alt="Company logo" width="200" height="80" />`,
    },

    {
      type: 'paragraph',
      title: 'Lazy Loading',
      content:
        'The loading="lazy" attribute tells the browser to defer loading images that are outside the initial viewport, improving page load performance.',
    },

    {
      type: 'code',
      title: 'Lazy Loading Example',
      language: 'html',
      code: `<img src="gallery-1.jpg" alt="Gallery photo 1" loading="lazy" />`,
    },

    {
      type: 'warning',
      title: 'Never Skip alt',
      content:
        'Omitting the alt attribute entirely (rather than setting it to an empty string) is a common accessibility mistake — screen readers may read out the full file name instead.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use descriptive alt text for meaningful images, an empty alt="" for purely decorative ones, and always set width/height to avoid layout shift.',
    },
  ],

  quiz: [
    {
      question: 'Which attribute provides a text alternative for an image?',
      options: ['title', 'alt', 'label', 'text'],
      answer: 1,
    },
    {
      question: 'What alt value should a purely decorative image use?',
      options: ['"decorative"', '"none"', 'An empty string ""', 'The image file name'],
      answer: 2,
    },
    {
      question: 'Which attribute defers loading of offscreen images?',
      options: ['defer', 'async', 'loading="lazy"', 'delay'],
      answer: 2,
    },
  ],

  previous: 'links',
  next: 'lists',
};
