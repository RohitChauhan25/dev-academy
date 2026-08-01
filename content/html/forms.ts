import { Tutorial } from '@/app/types/tutorial';

export const forms: Tutorial = {
  slug: 'forms',

  title: 'HTML Forms',

  description:
    'Learn how to collect user input using the form element, labels, and the most common form controls.',

  level: 'Intermediate',

  readingTime: '20 min',

  lesson: 'Lesson 14 of 27',

  sections: [
    {
      type: 'paragraph',
      title: 'The form Element',
      content:
        'The <form> element wraps a group of related input controls. The action attribute specifies where the form data is sent, and method specifies how (GET or POST).',
    },

    {
      type: 'code',
      title: 'Basic Form',
      language: 'html',
      code: `<form action="/submit" method="post">
  <label for="name">Name</label>
  <input type="text" id="name" name="name" />

  <button type="submit">Submit</button>
</form>`,
    },

    {
      type: 'table',
      title: 'Key form Attributes',
      headers: ['Attribute', 'Purpose'],
      rows: [
        ['action', 'URL the form data is submitted to'],
        ['method', '"get" appends data to the URL, "post" sends it in the request body'],
        ['name', 'Identifies each field’s data when submitted'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Labels',
      content:
        'The <label> element describes an input field. Associating a label with its input using a matching for/id pair makes the input clickable via its label and is essential for accessibility.',
    },

    {
      type: 'code',
      title: 'Label and Input',
      language: 'html',
      code: `<label for="email">Email Address</label>
<input type="email" id="email" name="email" />`,
    },

    {
      type: 'paragraph',
      title: 'Common Form Controls',
      content:
        'Beyond text inputs, forms can include textareas for multi-line text, select dropdowns for choosing from a list, and buttons for submitting or resetting.',
    },

    {
      type: 'code',
      title: 'Textarea and Select',
      language: 'html',
      code: `<label for="message">Message</label>
<textarea id="message" name="message" rows="4"></textarea>

<label for="country">Country</label>
<select id="country" name="country">
  <option value="us">United States</option>
  <option value="in">India</option>
  <option value="uk">United Kingdom</option>
</select>`,
    },

    {
      type: 'paragraph',
      title: 'Grouping Fields with fieldset',
      content:
        '<fieldset> groups related controls together, and <legend> provides a caption for the group — useful for radio button groups or sections of a longer form.',
    },

    {
      type: 'code',
      title: 'fieldset and legend',
      language: 'html',
      code: `<fieldset>
  <legend>Preferred Contact Method</legend>

  <label><input type="radio" name="contact" value="email" /> Email</label>
  <label><input type="radio" name="contact" value="phone" /> Phone</label>
</fieldset>`,
    },

    {
      type: 'warning',
      title: 'Never Skip Labels',
      content:
        'An <input> without an associated <label> is a common accessibility failure — screen reader users won’t know what the field is for. A placeholder is not a substitute for a label.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Always pair every input with a <label>, use the correct input type for the data being collected, and group related fields with <fieldset> for longer forms.',
    },
  ],

  quiz: [
    {
      question: 'Which attribute of <form> specifies where the data is sent?',
      options: ['href', 'action', 'src', 'target'],
      answer: 1,
    },
    {
      question: 'How do you associate a <label> with an input?',
      options: [
        'They are automatically linked',
        'Matching the label’s for attribute to the input’s id',
        'Placing them in the same <div>',
        'Using the same name attribute',
      ],
      answer: 1,
    },
    {
      question: 'What does <fieldset> do?',
      options: [
        'Validates form fields',
        'Groups related form controls together',
        'Submits the form',
        'Styles the form with CSS',
      ],
      answer: 1,
    },
  ],

  previous: 'tables',
  next: 'form-input-types',
};
