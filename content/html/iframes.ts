import { Tutorial } from '@/app/types/tutorial';

export const iframes: Tutorial = {
  slug: 'iframes',

  title: 'IFrames',

  description:
    'Learn how to embed another web page inside your page using the iframe element, and understand its security considerations.',

  level: 'Advanced',

  readingTime: '12 min',

  lesson: 'Lesson 22 of 27',

  sections: [
    {
      type: 'paragraph',
      title: 'The iframe Element',
      content:
        'An <iframe> embeds another HTML document inside the current page, rendered in its own independent browsing context. It’s commonly used for embedding maps, videos, and third-party widgets.',
    },

    {
      type: 'code',
      title: 'Basic IFrame',
      language: 'html',
      code: `<iframe
  src="https://www.example.com"
  width="600"
  height="400"
  title="Example website"
></iframe>`,
    },

    {
      type: 'table',
      title: 'Common Attributes',
      headers: ['Attribute', 'Purpose'],
      rows: [
        ['src', 'URL of the page to embed'],
        ['title', 'Accessible name describing the embedded content'],
        ['width / height', 'Dimensions of the iframe'],
        ['loading', '"lazy" defers loading until the iframe is near the viewport'],
        ['allow', 'Grants permissions like camera, microphone, or fullscreen'],
        ['sandbox', 'Restricts what the embedded page is allowed to do'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Embedding a Video',
      content:
        'Iframes are the standard way to embed content from platforms like YouTube, since it lets the video run in its own isolated context without exposing your page’s code to it.',
    },

    {
      type: 'code',
      title: 'YouTube Embed Example',
      language: 'html',
      code: `<iframe
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="YouTube video player"
  loading="lazy"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>`,
    },

    {
      type: 'paragraph',
      title: 'The sandbox Attribute',
      content:
        'sandbox applies a set of restrictions to the embedded content — for example, disabling scripts or form submission — as a security measure when embedding untrusted content.',
    },

    {
      type: 'code',
      title: 'Sandboxed IFrame',
      language: 'html',
      code: `<iframe
  src="untrusted-widget.html"
  sandbox="allow-scripts"
  title="Untrusted widget"
></iframe>`,
    },

    {
      type: 'warning',
      title: 'Security Considerations',
      content:
        'Never embed untrusted content without a sandbox attribute, since a malicious iframe could otherwise attempt to manipulate your page. Only embed sources you trust or have explicitly restricted.',
    },

    {
      type: 'note',
      title: 'Always Add a title',
      content:
        'The title attribute is required for accessibility — it tells screen reader users what the embedded content is before they enter it.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Always set a descriptive title, use loading="lazy" for below-the-fold embeds, and apply the narrowest sandbox permissions necessary when embedding third-party content.',
    },
  ],

  quiz: [
    {
      question: 'What does the src attribute of an <iframe> specify?',
      options: [
        'The iframe’s CSS styles',
        'The URL of the page to embed',
        'The iframe’s accessible name',
        'The JavaScript file to run',
      ],
      answer: 1,
    },
    {
      question: 'Which attribute restricts what an embedded page is allowed to do?',
      options: ['allow', 'sandbox', 'restrict', 'loading'],
      answer: 1,
    },
    {
      question: 'Why should every iframe have a title attribute?',
      options: [
        'It is required for the page to render',
        'It improves accessibility for screen reader users',
        'It speeds up page load',
        'It is only needed for videos',
      ],
      answer: 1,
    },
  ],

  previous: 'head-elements',
  next: 'audio-and-video',
};
