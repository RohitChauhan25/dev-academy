import { Tutorial } from '@/app/types/tutorial';

export const links: Tutorial = {
  slug: 'links',

  title: 'HTML Links',

  description:
    'Learn how to create links between pages and websites using the anchor element, and understand relative vs absolute URLs.',

  level: 'Beginner',

  readingTime: '14 min',

  lesson: 'Lesson 9 of 27',

  sections: [
    {
      type: 'paragraph',
      title: 'The Anchor Element',
      content:
        'Links are created with the <a> (anchor) element. The href attribute specifies the destination the link points to.',
    },

    {
      type: 'code',
      title: 'Basic Link',
      language: 'html',
      code: `<a href="https://example.com">Visit Example</a>`,
    },

    {
      type: 'paragraph',
      title: 'Absolute vs Relative URLs',
      content:
        'An absolute URL includes the full address, including protocol and domain (https://example.com/about). A relative URL points to a location relative to the current page (about.html or /about).',
    },

    {
      type: 'code',
      title: 'Absolute and Relative Links',
      language: 'html',
      code: `<!-- Absolute -->
<a href="https://example.com/contact">Contact</a>

<!-- Relative -->
<a href="about.html">About</a>
<a href="/blog/post-1">Blog Post</a>`,
    },

    {
      type: 'paragraph',
      title: 'Opening Links in a New Tab',
      content:
        'The target="_blank" attribute opens a link in a new browser tab. When used, it should be paired with rel="noopener noreferrer" to prevent the new page from accessing the original page via window.opener.',
    },

    {
      type: 'code',
      title: 'Opening in a New Tab Safely',
      language: 'html',
      code: `<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Open in a new tab
</a>`,
    },

    {
      type: 'paragraph',
      title: 'Linking to a Section on the Same Page',
      content:
        'You can link to a specific element on the page using a fragment identifier — a hash (#) followed by the target element’s id.',
    },

    {
      type: 'code',
      title: 'Same-Page Anchors',
      language: 'html',
      code: `<a href="#contact">Jump to Contact</a>

<!-- Later in the page -->
<h2 id="contact">Contact Us</h2>`,
    },

    {
      type: 'list',
      title: 'Other Common href Values',
      items: [
        'mailto:someone@example.com — opens the default email client',
        'tel:+15551234567 — starts a phone call on mobile devices',
        '# — links to the top of the current page',
      ],
    },

    {
      type: 'warning',
      title: 'Avoid Vague Link Text',
      content:
        'Avoid link text like "click here". Screen reader users often navigate by jumping between links, so text should describe the destination, e.g. "Read our privacy policy".',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Always add rel="noopener noreferrer" when using target="_blank", and write descriptive link text for accessibility and SEO.',
    },
  ],

  quiz: [
    {
      question: 'Which attribute specifies the destination of a link?',
      options: ['src', 'href', 'link', 'to'],
      answer: 1,
    },
    {
      question: 'What does target="_blank" do?',
      options: [
        'Disables the link',
        'Opens the link in the same tab',
        'Opens the link in a new tab',
        'Removes the link styling',
      ],
      answer: 2,
    },
    {
      question: 'Which href value opens the user’s default email client?',
      options: ['email:', 'mailto:', 'send:', 'contact:'],
      answer: 1,
    },
  ],

  previous: 'text-formatting',
  next: 'images',
};
