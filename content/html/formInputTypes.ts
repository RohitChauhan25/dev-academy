import { Tutorial } from '@/app/types/tutorial';

export const formInputTypes: Tutorial = {
  slug: 'form-input-types',

  title: 'Input Types',

  description:
    'Explore the many HTML5 input types available, each providing tailored keyboards and built-in behavior.',

  level: 'Intermediate',

  readingTime: '16 min',

  lesson: 'Lesson 15 of 27',

  sections: [
    {
      type: 'paragraph',
      title: 'The type Attribute',
      content:
        'The <input> element’s type attribute determines what kind of data it collects and how the browser renders it. HTML5 introduced many specialized types beyond plain text.',
    },

    {
      type: 'table',
      title: 'Common Input Types',
      headers: ['Type', 'Purpose'],
      rows: [
        ['text', 'Single-line free text'],
        ['email', 'Email address, validated and shows an @ keyboard on mobile'],
        ['password', 'Masks the entered characters'],
        ['number', 'Numeric input with increment/decrement controls'],
        ['checkbox', 'A single on/off toggle'],
        ['radio', 'One choice among a group with the same name'],
        ['date', 'A date picker'],
        ['file', 'Uploads a file from the device'],
        ['range', 'A slider between a min and max value'],
        ['search', 'A text field styled and behaving like a search box'],
        ['tel', 'A telephone number, shows a numeric keypad on mobile'],
        ['url', 'A web address, validated for URL format'],
        ['color', 'A color picker'],
      ],
    },

    {
      type: 'code',
      title: 'Input Type Examples',
      language: 'html',
      code: `<input type="email" name="email" />
<input type="password" name="password" />
<input type="number" name="quantity" min="1" max="10" />
<input type="date" name="birthday" />
<input type="range" name="volume" min="0" max="100" />
<input type="color" name="theme" />`,
    },

    {
      type: 'paragraph',
      title: 'Checkboxes and Radio Buttons',
      content:
        'Checkboxes allow multiple independent selections, while radio buttons restrict selection to one option per group. Radio buttons are grouped by sharing the same name attribute.',
    },

    {
      type: 'code',
      title: 'Checkbox vs Radio',
      language: 'html',
      code: `<!-- Checkboxes: any number can be checked -->
<label><input type="checkbox" name="topping" value="cheese" /> Cheese</label>
<label><input type="checkbox" name="topping" value="olives" /> Olives</label>

<!-- Radio buttons: only one can be selected per name -->
<label><input type="radio" name="size" value="small" /> Small</label>
<label><input type="radio" name="size" value="large" /> Large</label>`,
    },

    {
      type: 'paragraph',
      title: 'File Uploads',
      content:
        'The file type lets users select one or more files to upload. The accept attribute restricts which file types are shown, and multiple allows selecting several files at once.',
    },

    {
      type: 'code',
      title: 'File Input',
      language: 'html',
      code: `<input type="file" accept="image/png, image/jpeg" multiple />`,
    },

    {
      type: 'note',
      title: 'Mobile Keyboards',
      content:
        'Using the correct input type (email, tel, number, url) automatically shows the most appropriate keyboard layout on mobile devices, improving the user experience without any JavaScript.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Always choose the most specific input type available for the data you’re collecting — it improves usability, gives free client-side validation, and requires no extra code.',
    },
  ],

  quiz: [
    {
      question: 'Which input type masks the characters the user types?',
      options: ['text', 'password', 'hidden', 'search'],
      answer: 1,
    },
    {
      question: 'How are radio buttons grouped so only one can be selected?',
      options: [
        'By using the same id',
        'By using the same name attribute',
        'By wrapping them in a <fieldset>',
        'They are grouped automatically',
      ],
      answer: 1,
    },
    {
      question: 'Which attribute restricts which file types can be selected in a file input?',
      options: ['type', 'accept', 'filter', 'format'],
      answer: 1,
    },
  ],

  previous: 'forms',
  next: 'form-validation',
};
