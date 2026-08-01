import { Tutorial } from '@/app/types/tutorial';

export const formValidation: Tutorial = {
  slug: 'form-validation',

  title: 'Form Validation',

  description:
    'Learn how to validate form input natively in HTML using required, patterns, and other validation attributes.',

  level: 'Intermediate',

  readingTime: '16 min',

  lesson: 'Lesson 16 of 27',

  sections: [
    {
      type: 'paragraph',
      title: 'Native HTML Validation',
      content:
        'Modern browsers can validate form input automatically, before any JavaScript runs, using built-in attributes. This is called constraint validation.',
    },

    {
      type: 'table',
      title: 'Validation Attributes',
      headers: ['Attribute', 'Effect'],
      rows: [
        ['required', 'Field must be filled before the form can submit'],
        ['minlength / maxlength', 'Restricts the number of characters'],
        ['min / max', 'Restricts numeric or date range'],
        ['pattern', 'Requires the value to match a regular expression'],
        ['step', 'Restricts numeric input to multiples of a value'],
      ],
    },

    {
      type: 'code',
      title: 'Required and Length Validation',
      language: 'html',
      code: `<input type="text" name="username" required minlength="3" maxlength="20" />`,
    },

    {
      type: 'code',
      title: 'Pattern Validation',
      language: 'html',
      code: `<input
  type="text"
  name="zip"
  pattern="[0-9]{5}"
  title="Enter a 5-digit ZIP code"
  required
/>`,
    },

    {
      type: 'paragraph',
      title: 'Numeric Ranges',
      content:
        'The min, max, and step attributes work with number, range, and date inputs to constrain acceptable values.',
    },

    {
      type: 'code',
      title: 'Numeric Range Validation',
      language: 'html',
      code: `<input type="number" name="age" min="18" max="99" step="1" required />`,
    },

    {
      type: 'paragraph',
      title: 'Built-in Type Validation',
      content:
        'Types like email and url validate their format automatically. An input of type="email" will reject a value without an @ symbol, with no extra attributes needed.',
    },

    {
      type: 'code',
      title: 'Email Validation',
      language: 'html',
      code: `<input type="email" name="email" required />`,
    },

    {
      type: 'paragraph',
      title: 'Custom Error Messages',
      content:
        'The title attribute is shown as part of the validation message when a pattern doesn’t match, giving users a hint about the expected format.',
    },

    {
      type: 'note',
      title: 'HTML Validation is Not Enough Alone',
      content:
        'Native HTML validation improves user experience but can be bypassed (e.g. by disabling JavaScript-free form submission via dev tools). Always validate data again on the server.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use HTML validation attributes as the first line of defense for a fast, accessible experience, and always re-validate submitted data on the server before trusting it.',
    },
  ],

  quiz: [
    {
      question: 'Which attribute makes a field mandatory before submission?',
      options: ['required', 'mandatory', 'validate', 'must'],
      answer: 0,
    },
    {
      question: 'Which attribute restricts input to match a regular expression?',
      options: ['format', 'pattern', 'match', 'regex'],
      answer: 1,
    },
    {
      question: 'Why should you also validate data on the server even if HTML validation passes?',
      options: [
        'Server validation is not necessary',
        'HTML validation can be bypassed, so the server must not trust client input alone',
        'HTML validation only works in Chrome',
        'It improves page load speed',
      ],
      answer: 1,
    },
  ],

  previous: 'form-input-types',
  next: 'semantic-html',
};
