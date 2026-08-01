import { Tutorial } from '@/app/types/tutorial';

export const audioAndVideo: Tutorial = {
  slug: 'audio-and-video',

  title: 'Audio & Video',

  description:
    'Learn how to embed and control native audio and video playback in HTML5 without any third-party plugins.',

  level: 'Advanced',

  readingTime: '16 min',

  lesson: 'Lesson 23 of 27',

  sections: [
    {
      type: 'paragraph',
      title: 'Native Media Support',
      content:
        'HTML5 introduced the <audio> and <video> elements, allowing browsers to play media natively without plugins like Flash.',
    },

    {
      type: 'code',
      title: 'Video Element',
      language: 'html',
      code: `<video src="movie.mp4" width="640" height="360" controls></video>`,
    },

    {
      type: 'code',
      title: 'Audio Element',
      language: 'html',
      code: `<audio src="song.mp3" controls></audio>`,
    },

    {
      type: 'table',
      title: 'Common Attributes',
      headers: ['Attribute', 'Purpose'],
      rows: [
        ['controls', 'Shows the browser’s built-in play/pause/volume UI'],
        ['autoplay', 'Starts playback automatically (often blocked unless muted)'],
        ['loop', 'Restarts playback automatically when it ends'],
        ['muted', 'Starts the media muted'],
        ['poster', 'An image shown before a video starts playing (video only)'],
        ['preload', 'Hints how much to load ahead of time ("none", "metadata", "auto")'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Multiple Sources',
      content:
        'Browsers don’t all support the same video/audio formats. The <source> element lets you offer several formats — the browser picks the first one it supports.',
    },

    {
      type: 'code',
      title: 'Multiple Sources with Fallback',
      language: 'html',
      code: `<video controls poster="preview.jpg">
  <source src="movie.webm" type="video/webm" />
  <source src="movie.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>`,
    },

    {
      type: 'paragraph',
      title: 'Captions and Subtitles',
      content:
        'The <track> element adds text tracks like subtitles or captions to a video, loaded from a WebVTT (.vtt) file, improving accessibility for deaf and hard-of-hearing users.',
    },

    {
      type: 'code',
      title: 'Adding Captions',
      language: 'html',
      code: `<video controls>
  <source src="movie.mp4" type="video/mp4" />
  <track
    src="captions-en.vtt"
    kind="captions"
    srclang="en"
    label="English"
    default
  />
</video>`,
    },

    {
      type: 'warning',
      title: 'Autoplay Restrictions',
      content:
        'Most browsers block autoplaying video/audio with sound to avoid disrupting users. Autoplay generally only works reliably when the media is also muted.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Always provide the controls attribute unless you’re building fully custom playback controls with JavaScript, and include captions for video content whenever possible.',
    },
  ],

  quiz: [
    {
      question: 'Which attribute shows the browser’s built-in play/pause controls?',
      options: ['controls', 'play', 'buttons', 'ui'],
      answer: 0,
    },
    {
      question: 'Why would you use multiple <source> elements inside a <video>?',
      options: [
        'To play multiple videos at once',
        'To offer several formats since browsers support different ones',
        'To add captions',
        'To increase video resolution',
      ],
      answer: 1,
    },
    {
      question: 'What does the <track> element add to a video?',
      options: ['A poster image', 'Captions or subtitles', 'A play button', 'A download link'],
      answer: 1,
    },
  ],

  previous: 'iframes',
  next: 'meta-tags',
};
