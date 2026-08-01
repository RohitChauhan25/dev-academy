import type { InterviewQuestionTopic } from '@/content/javascript/interview-questions';

export const htmlInterviewQuestions: InterviewQuestionTopic[] = [
  {
    slug: 'introduction',
    title: 'HTML Introduction',
    questions: [
      {
        question: 'What does HTML stand for, and what is it used for?',
        answer:
          'HTML stands for HyperText Markup Language. It is used to structure content on the web — headings, paragraphs, links, images, and forms — so browsers know what to display and how.',
        difficulty: 'beginner',
      },
      {
        question: 'Is HTML a programming language?',
        answer:
          'No. HTML is a markup language, not a programming language — it has no variables, loops, or conditional logic. It only describes structure and meaning; logic comes from JavaScript.',
        difficulty: 'beginner',
      },
      {
        question: 'What is the DOM, and how does it relate to HTML?',
        answer:
          'The DOM (Document Object Model) is the tree-like structure a browser builds in memory after parsing an HTML document. JavaScript interacts with the page by reading and modifying this DOM, not the raw HTML text.',
        difficulty: 'intermediate',
      },
      {
        question: 'How do HTML, CSS, and JavaScript work together?',
        answer:
          'HTML provides structure and content, CSS controls presentation and layout, and JavaScript adds behavior and interactivity. They are separate layers that combine to build a complete web page.',
        difficulty: 'beginner',
      },
    ],
  },
  {
    slug: 'setup',
    title: 'HTML Setup',
    questions: [
      {
        question: 'What tools do you need to start writing HTML?',
        answer:
          'Just a text editor and a web browser. No compiler, build tool, or server is required to write and view a basic HTML page.',
        difficulty: 'beginner',
      },
      {
        question: 'What file extension do HTML files use?',
        answer:
          '.html (or the older .htm), which tells the operating system and browser to render the file as a web page.',
        difficulty: 'beginner',
      },
      {
        question: 'Why is a homepage conventionally named index.html?',
        answer:
          'Web servers are configured to automatically serve a file named index.html when a directory URL is requested without a specific filename, making it the default entry point.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'basic-structure',
    title: 'HTML Document Structure',
    questions: [
      {
        question: 'What does <!DOCTYPE html> do?',
        answer:
          'It tells the browser to render the page using the HTML5 standards mode, avoiding inconsistent "quirks mode" rendering used for very old, non-standard documents.',
        difficulty: 'beginner',
      },
      {
        question: 'What is the difference between <head> and <body>?',
        answer:
          '<head> contains metadata not shown directly on the page (title, stylesheets, meta tags), while <body> contains everything the user actually sees and interacts with.',
        difficulty: 'beginner',
      },
      {
        question: 'Why should <meta charset="UTF-8" /> be one of the first things in <head>?',
        answer:
          'It declares the character encoding early so the browser interprets all subsequent text — including special characters and emoji — correctly before rendering begins.',
        difficulty: 'intermediate',
      },
      {
        question: 'How many <html>, <head>, and <body> elements should a valid document have?',
        answer:
          'Exactly one of each. Having more than one of any of these elements produces invalid HTML and can lead to unpredictable rendering.',
        difficulty: 'beginner',
      },
    ],
  },
  {
    slug: 'elements-and-tags',
    title: 'Elements & Tags',
    questions: [
      {
        question: 'What is the difference between a tag and an element?',
        answer:
          'A tag is the markup itself, like <p> or </p>. An element is the opening tag, its content, and its closing tag together, e.g. <p>Hello</p>.',
        difficulty: 'beginner',
      },
      {
        question: 'What is a void element? Give examples.',
        answer:
          'A void element has no content and no closing tag, such as <img>, <br>, <hr>, and <input>. They are self-contained and self-closing by nature.',
        difficulty: 'beginner',
      },
      {
        question: 'What happens if you incorrectly nest closing tags?',
        answer:
          'Closing tags must close in the reverse order they were opened. Crossing tags (e.g. <p><strong>text</p></strong>) produces invalid HTML that browsers try to auto-correct, often causing unexpected rendering.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'attributes',
    title: 'HTML Attributes',
    questions: [
      {
        question: 'What is an HTML attribute, and where is it written?',
        answer:
          'An attribute provides extra information about an element, written as name="value" pairs inside the element’s opening tag, e.g. <a href="...">.',
        difficulty: 'beginner',
      },
      {
        question: 'What is a boolean attribute? Give an example.',
        answer:
          'A boolean attribute takes no value — its mere presence enables a feature. Examples include disabled, required, and checked.',
        difficulty: 'intermediate',
      },
      {
        question: 'What is the difference between the class and id attributes?',
        answer:
          'class can be applied to many elements and reused for shared styling, while id must be unique within the page and is typically used for a single, specific target like a same-page anchor or JavaScript hook.',
        difficulty: 'beginner',
      },
      {
        question: 'Why should attribute values always be quoted?',
        answer:
          'Unquoted values break as soon as they contain a space or special character. Quoting (single or double) keeps the value unambiguous and is considered best practice even when technically optional.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'comments',
    title: 'HTML Comments',
    questions: [
      {
        question: 'How do you write a comment in HTML?',
        answer:
          'With <!-- comment text -->. Anything between the markers is ignored by the browser and never rendered.',
        difficulty: 'beginner',
      },
      {
        question: 'Are HTML comments visible to users?',
        answer:
          'Not in the rendered page, but anyone can see them by viewing the page source, so sensitive information should never be placed inside a comment.',
        difficulty: 'beginner',
      },
      {
        question: 'Can HTML comments be nested?',
        answer:
          'No. Placing <!-- --> inside another comment closes the outer comment early, which can produce broken or unexpected markup.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'headings-and-paragraphs',
    title: 'Headings & Paragraphs',
    questions: [
      {
        question: 'How many heading levels does HTML provide?',
        answer:
          'Six, from <h1> (most important) to <h6> (least important), used to build a logical outline of the page content.',
        difficulty: 'beginner',
      },
      {
        question: 'How many <h1> elements should a well-structured page have?',
        answer:
          'Typically exactly one, representing the main topic of the page — similar to a book’s title — with subsequent sections using <h2> and deeper levels.',
        difficulty: 'intermediate',
      },
      {
        question: 'Why shouldn’t you choose a heading level just because of its default font size?',
        answer:
          'Heading levels should reflect document structure, not visual appearance. Skipping levels for styling purposes breaks the logical outline that screen readers rely on for navigation — use CSS for styling instead.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'text-formatting',
    title: 'Text Formatting',
    questions: [
      {
        question: 'What is the difference between <strong>/<em> and <b>/<i>?',
        answer:
          '<strong> and <em> carry semantic meaning (importance and emphasis) that screen readers announce differently, while <b> and <i> are purely visual with no added meaning.',
        difficulty: 'intermediate',
      },
      {
        question: 'What does <br> do, and when should it be avoided?',
        answer:
          '<br> forces a single line break within a block of text. It should not be used to create space between paragraphs — separate <p> elements or CSS margin are the correct tools for that.',
        difficulty: 'beginner',
      },
      {
        question: 'What are <sub> and <sup> used for?',
        answer:
          '<sub> renders subscript text (like the 2 in H2O) and <sup> renders superscript text (like the 10 in 2^10), both shifting the text’s baseline and typically reducing its size.',
        difficulty: 'beginner',
      },
    ],
  },
  {
    slug: 'links',
    title: 'HTML Links',
    questions: [
      {
        question: 'What is the difference between an absolute and a relative URL?',
        answer:
          'An absolute URL includes the full address (protocol and domain), like https://example.com/about. A relative URL points to a location relative to the current page, like about.html or /blog/post-1.',
        difficulty: 'beginner',
      },
      {
        question: 'Why should target="_blank" be paired with rel="noopener noreferrer"?',
        answer:
          'Without it, the new page opened in the tab can access the original page through window.opener, which is a security and performance risk. rel="noopener noreferrer" prevents that access.',
        difficulty: 'intermediate',
      },
      {
        question: 'How do you link to a specific section within the same page?',
        answer:
          'Using a fragment identifier — a hash followed by the target element’s id, e.g. <a href="#contact">, linking to an element like <h2 id="contact">.',
        difficulty: 'beginner',
      },
      {
        question: 'Why is link text like "click here" considered bad practice?',
        answer:
          'Screen reader users often navigate by jumping between links out of context, so vague text like "click here" gives them no information about the destination. Descriptive link text is far more accessible.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'images',
    title: 'HTML Images',
    questions: [
      {
        question: 'What is the purpose of the alt attribute on an <img>?',
        answer:
          'It provides a text alternative for the image — read aloud by screen readers, shown if the image fails to load, and used by search engines to understand the image content.',
        difficulty: 'beginner',
      },
      {
        question: 'What alt value should a purely decorative image use, and why?',
        answer:
          'An empty string, alt="", so screen readers skip over it entirely instead of reading out an unhelpful file name for an image that carries no meaning.',
        difficulty: 'intermediate',
      },
      {
        question: 'Why should you set width and height on an <img>?',
        answer:
          'It lets the browser reserve the correct space for the image before it finishes loading, preventing surrounding content from jumping around (layout shift) as the page renders.',
        difficulty: 'intermediate',
      },
      {
        question: 'What does loading="lazy" do on an image?',
        answer:
          'It tells the browser to defer loading that image until it is close to entering the viewport, improving initial page load performance for pages with many offscreen images.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'lists',
    title: 'HTML Lists',
    questions: [
      {
        question: 'What is the difference between <ul> and <ol>?',
        answer:
          '<ul> creates an unordered (bulleted) list for items with no particular sequence, while <ol> creates an ordered (numbered) list for sequential items.',
        difficulty: 'beginner',
      },
      {
        question: 'What must be the direct parent of an <li> element?',
        answer:
          'A <ul> or <ol> element. <li> elements placed directly inside anything else are invalid HTML.',
        difficulty: 'beginner',
      },
      {
        question: 'What is a description list used for?',
        answer:
          'A <dl> pairs terms (<dt>) with their definitions (<dd>) — useful for glossaries, metadata, or key-value style content.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'div-and-span',
    title: 'Div & Span',
    questions: [
      {
        question: 'What is the difference between <div> and <span>?',
        answer:
          '<div> is a block-level generic container, starting on a new line and taking full width. <span> is an inline generic container, flowing with surrounding text and only as wide as its content.',
        difficulty: 'beginner',
      },
      {
        question: 'Why should you consider semantic elements before using a <div>?',
        answer:
          'Semantic elements like <header>, <nav>, and <article> describe their content’s role, improving accessibility and SEO, whereas <div> carries no meaning at all — it should be a fallback, not a default.',
        difficulty: 'intermediate',
      },
      {
        question: 'What is "divitis"?',
        answer:
          'A term for markup that overuses <div> for everything, making the structure harder to read, style, and understand for both developers and assistive technology.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'tables',
    title: 'HTML Tables',
    questions: [
      {
        question: 'What is the difference between <th> and <td>?',
        answer:
          '<th> defines a header cell (bold and centered by default, with semantic meaning for assistive technology), while <td> defines a standard data cell.',
        difficulty: 'beginner',
      },
      {
        question: 'What do colspan and rowspan do?',
        answer:
          'colspan merges a cell across multiple columns, and rowspan merges a cell across multiple rows, letting a single cell visually span a larger area of the table.',
        difficulty: 'beginner',
      },
      {
        question: 'Why shouldn’t tables be used for overall page layout?',
        answer:
          'Using tables for layout (common in the early 2000s) hurts accessibility, since screen readers announce genuine tabular relationships that don’t exist, and it hurts responsiveness. CSS Grid or Flexbox should be used for layout instead.',
        difficulty: 'intermediate',
      },
      {
        question: 'What does the scope attribute on <th> do?',
        answer:
          'It tells assistive technology whether a header applies to a column ("col") or a row ("row"), which is especially important for complex tables with multiple header levels.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'forms',
    title: 'HTML Forms',
    questions: [
      {
        question: 'What do the action and method attributes of a <form> control?',
        answer:
          'action specifies the URL the form data is submitted to, and method specifies how — "get" appends data to the URL, "post" sends it in the request body.',
        difficulty: 'beginner',
      },
      {
        question: 'How do you correctly associate a <label> with an input?',
        answer:
          'By matching the label’s for attribute to the input’s id. This makes the input clickable via its label text and is essential for screen reader accessibility.',
        difficulty: 'beginner',
      },
      {
        question: 'Why is a placeholder not a substitute for a <label>?',
        answer:
          'Placeholder text disappears once the user starts typing and is not reliably announced by all screen readers, so relying on it alone leaves the field effectively unlabeled for many users.',
        difficulty: 'intermediate',
      },
      {
        question: 'What do <fieldset> and <legend> do?',
        answer:
          '<fieldset> groups related form controls together (like a set of radio buttons), and <legend> provides a caption describing that group.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'form-input-types',
    title: 'Input Types',
    questions: [
      {
        question: 'Why should you choose the most specific input type available?',
        answer:
          'Specific types like email, tel, and number trigger the most appropriate mobile keyboard and provide free client-side validation, improving usability without any extra code.',
        difficulty: 'beginner',
      },
      {
        question: 'How are radio buttons grouped so only one can be selected?',
        answer:
          'By giving them the same name attribute — the browser then treats them as a mutually exclusive group, regardless of how many there are.',
        difficulty: 'beginner',
      },
      {
        question: 'What is the difference between checkboxes and radio buttons?',
        answer:
          'Checkboxes allow any number of independent selections, while radio buttons restrict the user to exactly one selection per group (same name attribute).',
        difficulty: 'beginner',
      },
      {
        question: 'What does the accept attribute do on a file input?',
        answer:
          'It restricts which file types are shown/selectable in the file picker, e.g. accept="image/png, image/jpeg" limits selection to those image formats.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'form-validation',
    title: 'Form Validation',
    questions: [
      {
        question: 'What does the required attribute do?',
        answer:
          'It prevents the form from submitting until that field has a value, using the browser’s built-in constraint validation with no JavaScript needed.',
        difficulty: 'beginner',
      },
      {
        question: 'How does the pattern attribute work?',
        answer:
          'It requires the input’s value to match a given regular expression before the form can submit, useful for formats like ZIP codes that a specific input type doesn’t cover.',
        difficulty: 'intermediate',
      },
      {
        question: 'Why is client-side HTML validation not enough on its own?',
        answer:
          'Native validation can be bypassed (e.g. via dev tools or a direct request), so the server must always validate and sanitize incoming data again before trusting it.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'semantic-html',
    title: 'Semantic HTML',
    questions: [
      {
        question: 'What is semantic HTML, and why does it matter?',
        answer:
          'Semantic elements (like <header>, <nav>, <main>, <article>) describe their meaning and role, unlike generic <div>. This helps screen readers, search engines, and other developers understand the page structure.',
        difficulty: 'beginner',
      },
      {
        question: 'What is the difference between <section> and <article>?',
        answer:
          '<article> is for content that could stand alone, like a blog post. <section> is for a thematic grouping within a page, usually accompanied by its own heading.',
        difficulty: 'intermediate',
      },
      {
        question: 'How many <main> elements should a page have?',
        answer:
          'Exactly one, representing the page’s primary, unique content — excluding repeated elements like headers, footers, and navigation.',
        difficulty: 'intermediate',
      },
      {
        question: 'What is <figcaption> used for?',
        answer:
          'It provides a caption for a <figure>, such as an image, diagram, or code block, describing what it shows.',
        difficulty: 'beginner',
      },
    ],
  },
  {
    slug: 'block-vs-inline',
    title: 'Block vs Inline Elements',
    questions: [
      {
        question: 'What is the difference between a block-level and an inline element?',
        answer:
          'A block-level element starts on a new line and takes up the full available width by default; an inline element flows with surrounding content and only takes as much width as needed.',
        difficulty: 'beginner',
      },
      {
        question: 'Can CSS override an element’s default block/inline behavior?',
        answer:
          'Yes — the CSS display property (block, inline, inline-block, flex, grid, none) can change how any element behaves, regardless of its default.',
        difficulty: 'intermediate',
      },
      {
        question: 'Why is <img> considered a special case among inline elements?',
        answer:
          'Unlike text-based inline elements, <img> is a "replaced" element and accepts width and height even though it is inline-level by default.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'classes-and-ids',
    title: 'Classes & IDs',
    questions: [
      {
        question: 'What is the key difference between class and id?',
        answer:
          'class can be reused across many elements for shared styling, while id must be unique across the entire page.',
        difficulty: 'beginner',
      },
      {
        question: 'Why is it invalid to duplicate an id on a page?',
        answer:
          'A duplicate id can cause CSS to apply inconsistently and breaks JavaScript methods like document.getElementById() that expect exactly one match.',
        difficulty: 'intermediate',
      },
      {
        question: 'Can an element have multiple classes?',
        answer:
          'Yes, classes are space-separated in the class attribute, e.g. class="btn btn-primary btn-large", letting you compose small, reusable style rules.',
        difficulty: 'beginner',
      },
    ],
  },
  {
    slug: 'html-entities',
    title: 'HTML Entities',
    questions: [
      {
        question: 'Why can’t you write < or > directly as literal text in HTML?',
        answer:
          'Those characters have special meaning — they define tags. To display them as literal text, you must use entities like &lt; and &gt; instead.',
        difficulty: 'beginner',
      },
      {
        question: 'What is a numeric character reference?',
        answer:
          'A way to represent any Unicode character by its code point, like &#169; or &#x00A9; for the copyright symbol, as an alternative to named entities.',
        difficulty: 'intermediate',
      },
      {
        question: 'Why is escaping user-generated content important?',
        answer:
          'Failing to escape characters like < and & in content coming from users can allow malicious markup or scripts to be injected into the page — a cross-site scripting (XSS) vulnerability.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'head-elements',
    title: 'Head Elements',
    questions: [
      {
        question: 'What does the viewport meta tag do?',
        answer:
          'It controls how a page scales on mobile devices. Without it, mobile browsers render the page at a wide desktop width and zoom out, breaking responsive layouts.',
        difficulty: 'beginner',
      },
      {
        question: 'What is the difference between <style> and <link rel="stylesheet">?',
        answer:
          '<style> embeds CSS rules directly inline in the document, while <link rel="stylesheet"> loads CSS from a separate, cacheable file.',
        difficulty: 'beginner',
      },
      {
        question: 'What does the defer attribute do on a <script> tag?',
        answer:
          'It delays execution of the script until after the HTML has finished parsing, while still preserving the order scripts appear in — commonly used for scripts that need the full DOM.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'iframes',
    title: 'IFrames',
    questions: [
      {
        question: 'What does an <iframe> do?',
        answer:
          'It embeds another HTML document inside the current page, rendered in its own independent browsing context — commonly used for maps, videos, and third-party widgets.',
        difficulty: 'beginner',
      },
      {
        question: 'What does the sandbox attribute do on an iframe?',
        answer:
          'It applies restrictions to the embedded content, such as disabling scripts or form submission, as a security measure when embedding untrusted content.',
        difficulty: 'advanced',
      },
      {
        question: 'Why should every iframe have a title attribute?',
        answer:
          'It gives screen reader users an accessible name describing the embedded content before they enter it — without one, the iframe is announced with no useful context.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'audio-and-video',
    title: 'Audio & Video',
    questions: [
      {
        question: 'What does the controls attribute do on <video> or <audio>?',
        answer:
          'It shows the browser’s built-in play/pause/volume UI, letting users control playback without any custom JavaScript.',
        difficulty: 'beginner',
      },
      {
        question: 'Why would you provide multiple <source> elements inside a <video>?',
        answer:
          'Different browsers support different video formats. Multiple sources let the browser pick the first format it supports, providing broader compatibility.',
        difficulty: 'intermediate',
      },
      {
        question: 'What does the <track> element add to a video?',
        answer:
          'Captions or subtitles, loaded from a WebVTT file, improving accessibility for deaf and hard-of-hearing users.',
        difficulty: 'intermediate',
      },
      {
        question: 'Why is autoplay with sound often blocked by browsers?',
        answer:
          'Browsers restrict autoplaying audio/video with sound to avoid disrupting users unexpectedly. Autoplay generally only works reliably when the media is also muted.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'meta-tags',
    title: 'Meta Tags & SEO',
    questions: [
      {
        question: 'What is the purpose of the meta description tag?',
        answer:
          'It provides a short summary of the page, often shown as the snippet text in search engine results, influencing click-through rates.',
        difficulty: 'beginner',
      },
      {
        question: 'What do Open Graph meta tags control?',
        answer:
          'They control how a link preview appears when shared on social platforms like Facebook, LinkedIn, and Slack — the preview title, description, and image.',
        difficulty: 'intermediate',
      },
      {
        question: 'What does <meta name="robots" content="noindex, nofollow" /> do?',
        answer:
          'It tells search engines not to index the page or follow its links — useful for staging environments, thank-you pages, or duplicate content.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'data-attributes',
    title: 'Data Attributes',
    questions: [
      {
        question: 'What is a data-* attribute used for?',
        answer:
          'It stores custom data directly on an HTML element, without inventing new HTML attributes, for use by CSS attribute selectors or JavaScript.',
        difficulty: 'beginner',
      },
      {
        question: 'How do you read data attributes in JavaScript?',
        answer:
          'Through the element’s dataset property, e.g. element.dataset.userId, which automatically converts kebab-case attribute names to camelCase.',
        difficulty: 'intermediate',
      },
      {
        question: 'Should sensitive information be stored in data attributes?',
        answer:
          'No — data attributes are visible in the page source and can be read or modified by anyone using browser dev tools.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'svg-basics',
    title: 'SVG Basics',
    questions: [
      {
        question: 'What does SVG stand for, and why is it useful?',
        answer:
          'Scalable Vector Graphics — an XML-based format for drawing 2D graphics with shapes and paths instead of pixels, so it stays crisp at any zoom level or resolution.',
        difficulty: 'beginner',
      },
      {
        question: 'What does the viewBox attribute control?',
        answer:
          'It defines the internal coordinate system of the SVG canvas independently of its displayed width/height, which is what allows the graphic to scale cleanly.',
        difficulty: 'intermediate',
      },
      {
        question: 'What is the advantage of inline SVG over <img src="icon.svg">?',
        answer:
          'Inline SVG can be styled with CSS (fill, stroke) and manipulated or animated with JavaScript, while an <img>-referenced SVG is treated as an opaque image.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'accessibility',
    title: 'HTML Accessibility',
    questions: [
      {
        question: 'What is the single biggest accessibility win in HTML?',
        answer:
          'Using the correct semantic element for the job. Native elements like <button>, <a>, and <nav> come with built-in keyboard support and screen reader behavior for free.',
        difficulty: 'beginner',
      },
      {
        question: 'What is the "first rule of ARIA"?',
        answer:
          'No ARIA is better than bad ARIA — always prefer a native semantic element over adding ARIA attributes to a generic <div>. ARIA should fill gaps, not replace semantics you could get for free.',
        difficulty: 'advanced',
      },
      {
        question: 'What does aria-label do?',
        answer:
          'It provides an accessible name for an element when there is no visible text to describe it, such as an icon-only button.',
        difficulty: 'intermediate',
      },
      {
        question: 'Why must interactive elements be usable with a keyboard alone?',
        answer:
          'Many users navigate exclusively via keyboard or other assistive technology, not a mouse. Every interactive element must be reachable with Tab and operable with Enter or Space.',
        difficulty: 'intermediate',
      },
    ],
  },
];
