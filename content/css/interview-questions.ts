import type { InterviewQuestionTopic } from '@/content/javascript/interview-questions';

export const cssInterviewQuestions: InterviewQuestionTopic[] = [
  {
    slug: 'introduction',
    title: 'CSS Introduction',
    questions: [
      {
        question: 'What does CSS stand for, and what does it do?',
        answer:
          'Cascading Style Sheets. It styles HTML — controlling colors, fonts, spacing, layout, and animation — without changing the underlying content or structure.',
        difficulty: 'beginner',
      },
      {
        question: 'What are the two main parts of a CSS rule?',
        answer:
          'A selector, which determines which elements are targeted, and a declaration block, which contains the property/value pairs to apply to them.',
        difficulty: 'beginner',
      },
      {
        question: 'What does "cascading" mean in CSS?',
        answer:
          'It describes how CSS resolves conflicts when multiple rules target the same element — based on source order, specificity, and importance — rather than the last rule always simply overwriting the others.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'setup',
    title: 'CSS Setup',
    questions: [
      {
        question: 'What are the three ways to add CSS to a page?',
        answer:
          'Inline (a style attribute on an element), internal (a <style> block in the document), and external (a linked .css file).',
        difficulty: 'beginner',
      },
      {
        question: 'Why are external stylesheets preferred for real projects?',
        answer:
          'They are cached by the browser, keep styles consistent across many pages, and cleanly separate content (HTML) from presentation (CSS).',
        difficulty: 'beginner',
      },
      {
        question: 'Why are inline styles generally discouraged?',
        answer:
          'They mix content with presentation, are hard to override due to high specificity, and can’t be reused across elements or cached separately from the HTML.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'syntax',
    title: 'CSS Syntax',
    questions: [
      {
        question: 'What separates a property from its value, and what ends a declaration?',
        answer:
          'A colon separates property and value (e.g. color: red), and a semicolon ends each declaration.',
        difficulty: 'beginner',
      },
      {
        question: 'What happens if you forget a semicolon between declarations?',
        answer:
          'The next declaration gets merged into the value of the previous one, silently breaking both — always terminate every declaration with a semicolon.',
        difficulty: 'intermediate',
      },
      {
        question: 'How do you write a comment in CSS?',
        answer:
          'Between /* and */. Comments can span multiple lines and are ignored entirely by the browser.',
        difficulty: 'beginner',
      },
    ],
  },
  {
    slug: 'selectors',
    title: 'CSS Selectors',
    questions: [
      {
        question: 'What is the difference between a class selector and an ID selector?',
        answer:
          'A class selector (.name) can match many elements and is reusable; an ID selector (#name) should match only one unique element per page and carries much higher specificity.',
        difficulty: 'beginner',
      },
      {
        question: 'What does an attribute selector like [type="email"] match?',
        answer:
          'Every element that has a matching attribute and value — useful for styling form inputs by type without adding extra classes.',
        difficulty: 'intermediate',
      },
      {
        question: 'How do you apply the same rule to multiple selectors at once?',
        answer:
          'By grouping them with commas, e.g. h1, h2, h3 { color: #222; }, avoiding repeated declaration blocks.',
        difficulty: 'beginner',
      },
    ],
  },
  {
    slug: 'colors',
    title: 'CSS Colors',
    questions: [
      {
        question: 'What are the main ways to specify a color in CSS?',
        answer:
          'Named colors (tomato), hex (#ff6347), rgb()/rgba(), and hsl()/hsla() — all interchangeable wherever a color value is expected.',
        difficulty: 'beginner',
      },
      {
        question: 'What does the alpha value in rgba() or hsla() control?',
        answer:
          'Transparency, from 0 (fully transparent) to 1 (fully opaque), letting you layer a semi-transparent color over other content.',
        difficulty: 'beginner',
      },
      {
        question: 'Why do some developers prefer HSL over hex or RGB?',
        answer:
          'HSL describes color the way humans think about it — hue, saturation, lightness — making it far easier to create consistent variations, like a slightly darker hover state, than guessing new hex values.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'units',
    title: 'Units & Values',
    questions: [
      {
        question: 'What is the difference between em and rem?',
        answer:
          'em is relative to the current element’s own font size (and compounds with nesting), while rem is always relative to the root <html> element’s font size, making it more predictable.',
        difficulty: 'intermediate',
      },
      {
        question: 'What do vw and vh represent?',
        answer:
          '1vw is 1% of the viewport width and 1vh is 1% of the viewport height, useful for elements that should scale with the browser window.',
        difficulty: 'beginner',
      },
      {
        question: 'Why is rem often recommended for font sizes over px?',
        answer:
          'rem scales with the user’s root font size setting, which matters for accessibility — users who increase their browser’s default font size for readability will see rem-based text scale accordingly, unlike fixed px values.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'box-model',
    title: 'The Box Model',
    questions: [
      {
        question: 'What are the four layers of the CSS box model?',
        answer:
          'From innermost to outermost: content, padding, border, and margin.',
        difficulty: 'beginner',
      },
      {
        question: 'With the default box-sizing, does padding increase an element’s total rendered width?',
        answer:
          'Yes — with the default content-box sizing, width only refers to the content area, so padding and border are added on top of it, increasing the total rendered size.',
        difficulty: 'intermediate',
      },
      {
        question: 'What does box-sizing: border-box change?',
        answer:
          'It makes the specified width/height include padding and border, so the element’s total rendered size matches the value you set — a very common global reset.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'text-and-fonts',
    title: 'Text & Fonts',
    questions: [
      {
        question: 'Why should a font-family list always end with a generic fallback?',
        answer:
          'If none of the listed fonts are available on the user’s system, the browser falls back to the generic family (like sans-serif), ensuring text always renders reasonably instead of using an unpredictable default.',
        difficulty: 'intermediate',
      },
      {
        question: 'What does font-weight control?',
        answer:
          'The boldness of text, typically from 100 (thin) to 900 (black), with 400 being normal and 700 being bold.',
        difficulty: 'beginner',
      },
      {
        question: 'What is a reasonable line-height for comfortable body text?',
        answer:
          'Roughly 1.4 to 1.6 (a unitless value, so it scales with the element’s own font size) — tighter values feel cramped, and much looser values feel disconnected.',
        difficulty: 'beginner',
      },
    ],
  },
  {
    slug: 'backgrounds',
    title: 'CSS Backgrounds',
    questions: [
      {
        question: 'What is the difference between background-size: cover and contain?',
        answer:
          'cover scales the image to fully cover the box, cropping if necessary. contain scales it to fit entirely within the box, potentially leaving empty space.',
        difficulty: 'intermediate',
      },
      {
        question: 'Why should you set a fallback background-color alongside a background-image?',
        answer:
          'It gives a reasonable appearance while the image is loading or if it fails to load entirely, especially important for text readability over what would otherwise be an empty background.',
        difficulty: 'intermediate',
      },
      {
        question: 'How do you prevent a background image from tiling?',
        answer:
          'With background-repeat: no-repeat.',
        difficulty: 'beginner',
      },
    ],
  },
  {
    slug: 'borders',
    title: 'Borders & Border Radius',
    questions: [
      {
        question: 'What three things does the border shorthand combine?',
        answer:
          'Width, style, and color, in that order — e.g. border: 2px solid black.',
        difficulty: 'beginner',
      },
      {
        question: 'What border-radius value turns a square element into a perfect circle?',
        answer:
          '50%, applied to an element with equal width and height.',
        difficulty: 'beginner',
      },
      {
        question: 'How do you style just one side of an element’s border?',
        answer:
          'Using a directional property like border-left, border-top, border-right, or border-bottom, each accepting the same width/style/color shorthand.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'margin-and-padding',
    title: 'Margin & Padding',
    questions: [
      {
        question: 'What is the difference between margin and padding?',
        answer:
          'padding adds space inside an element, between its content and its border. margin adds space outside an element, separating it from its neighbors.',
        difficulty: 'beginner',
      },
      {
        question: 'What does margin: 0 auto; do to a block element with a fixed width?',
        answer:
          'It centers the element horizontally within its parent, by splitting the remaining horizontal space equally between the left and right margins.',
        difficulty: 'intermediate',
      },
      {
        question: 'What is margin collapsing?',
        answer:
          'When adjacent vertical margins between block elements combine into a single margin equal to the larger of the two, rather than adding together. It only happens with vertical margins, never horizontal ones.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'display',
    title: 'The display Property',
    questions: [
      {
        question: 'What is the difference between display: none and visibility: hidden?',
        answer:
          'display: none removes the element entirely — it takes up no space. visibility: hidden hides it visually but still reserves its layout space.',
        difficulty: 'beginner',
      },
      {
        question: 'What does display: inline-block allow that display: inline does not?',
        answer:
          'It lets the element accept width and height like a block element, while still flowing inline alongside surrounding content.',
        difficulty: 'intermediate',
      },
      {
        question: 'What does display: flex do to an element’s direct children?',
        answer:
          'It turns them into flex items, enabling properties like justify-content, align-items, and flex to control their alignment and sizing along a row or column.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'position',
    title: 'CSS Positioning',
    questions: [
      {
        question: 'What is the default position value, and what does it mean?',
        answer:
          'static — the element follows normal document flow, and top/right/bottom/left have no effect on it.',
        difficulty: 'beginner',
      },
      {
        question: 'What is an absolutely positioned element positioned relative to?',
        answer:
          'Its nearest ancestor with a position value other than static. If no such ancestor exists, it’s positioned relative to the entire page.',
        difficulty: 'intermediate',
      },
      {
        question: 'How does position: sticky behave?',
        answer:
          'It behaves like relative until the page scrolls past a defined threshold (e.g. top: 0), then it behaves like fixed within its containing block.',
        difficulty: 'intermediate',
      },
      {
        question: 'What is the difference between fixed and absolute positioning?',
        answer:
          'fixed is always positioned relative to the viewport and stays in place while scrolling. absolute is positioned relative to the nearest positioned ancestor and scrolls with the page.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'flexbox',
    title: 'Flexbox',
    questions: [
      {
        question: 'What does display: flex do?',
        answer:
          'It turns an element into a flex container, making its direct children flex items that can be aligned and distributed along a row or column using Flexbox properties.',
        difficulty: 'beginner',
      },
      {
        question: 'What is the difference between justify-content and align-items?',
        answer:
          'justify-content aligns items along the main axis (e.g. horizontally in a row), while align-items aligns them along the cross axis (e.g. vertically in a row).',
        difficulty: 'intermediate',
      },
      {
        question: 'What does flex: 1 do to a flex item?',
        answer:
          'It allows the item to grow and shrink to fill the available space in the container, sharing that space proportionally with any other flexible siblings.',
        difficulty: 'intermediate',
      },
      {
        question: 'How do you center content both horizontally and vertically with Flexbox?',
        answer:
          'By setting display: flex, justify-content: center, and align-items: center on the container.',
        difficulty: 'beginner',
      },
    ],
  },
  {
    slug: 'grid',
    title: 'CSS Grid',
    questions: [
      {
        question: 'What is the key difference between CSS Grid and Flexbox?',
        answer:
          'Grid is a two-dimensional layout system, controlling rows and columns together. Flexbox is one-dimensional, aligning items along a single row or column.',
        difficulty: 'intermediate',
      },
      {
        question: 'What does the fr unit represent in a grid?',
        answer:
          'A fraction of the available space in the grid container — grid-template-columns: 1fr 2fr creates two columns, the second twice as wide as the first.',
        difficulty: 'intermediate',
      },
      {
        question: 'What does grid-template-areas let you do?',
        answer:
          'It lets you visually sketch a layout using named regions directly in your CSS, then assign each child element to a named area with grid-area.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'overflow',
    title: 'Overflow & Visibility',
    questions: [
      {
        question: 'What is the difference between overflow: hidden and overflow: auto?',
        answer:
          'hidden clips extra content with no scrollbar at all. auto shows a scrollbar only when the content actually overflows its container.',
        difficulty: 'beginner',
      },
      {
        question: 'How do you truncate long text with an ellipsis?',
        answer:
          'By combining white-space: nowrap, overflow: hidden, and text-overflow: ellipsis on the element.',
        difficulty: 'intermediate',
      },
      {
        question: 'What is the difference between overflow-x and overflow-y?',
        answer:
          'They control overflow behavior independently per axis — overflow-x for horizontal, overflow-y for vertical — useful for a horizontally scrolling carousel with hidden vertical overflow.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'z-index-and-stacking',
    title: 'z-index & Stacking',
    questions: [
      {
        question: 'Does z-index work on an element with position: static?',
        answer:
          'No — z-index only has an effect on positioned elements (relative, absolute, fixed, or sticky).',
        difficulty: 'intermediate',
      },
      {
        question: 'What is a stacking context, and what can create one besides z-index?',
        answer:
          'A stacking context groups elements so z-index comparisons happen within it, not globally. Besides position + z-index, properties like opacity less than 1, transform, and filter can also create a new stacking context.',
        difficulty: 'advanced',
      },
      {
        question: 'Why might a child with z-index: 9999 still render behind another element?',
        answer:
          'If its parent is in a separate stacking context with a lower z-index than a competing element, the child can never escape that stacking context to appear above it, regardless of its own z-index value.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'pseudo-classes',
    title: 'Pseudo-classes',
    questions: [
      {
        question: 'What is a pseudo-class, and how is it written?',
        answer:
          'It targets an element in a particular state or position without needing extra markup, written with a single colon, e.g. :hover or :nth-child(2).',
        difficulty: 'beginner',
      },
      {
        question: 'Why should :focus be styled in addition to :hover?',
        answer:
          'Keyboard and screen-reader users rely on visible focus indicators to know where they are on the page — :hover alone provides no feedback for non-mouse interaction.',
        difficulty: 'intermediate',
      },
      {
        question: 'How would you style every other row of a list for a zebra-stripe effect?',
        answer:
          'Using li:nth-child(odd) or li:nth-child(even), which targets alternating children without needing extra classes.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'pseudo-elements',
    title: 'Pseudo-elements',
    questions: [
      {
        question: 'How do pseudo-elements differ from pseudo-classes in syntax and purpose?',
        answer:
          'Pseudo-elements use a double colon (::before) and target a specific part of an element or insert generated content, while pseudo-classes (single colon) target an existing element in a certain state.',
        difficulty: 'intermediate',
      },
      {
        question: 'What property is required for ::before or ::after to render anything?',
        answer:
          'The content property — even content: "" (empty string) is valid and commonly used just to insert a styled shape.',
        difficulty: 'beginner',
      },
      {
        question: 'Why should ::before/::after avoid holding essential information?',
        answer:
          'Generated content isn’t part of the real DOM and may not be reliably read by all assistive technology, so it should be reserved for purely decorative purposes.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'specificity-and-cascade',
    title: 'Specificity & the Cascade',
    questions: [
      {
        question: 'Which has higher specificity: a class selector or an ID selector?',
        answer:
          'An ID selector — IDs outweigh any number of class, attribute, or pseudo-class selectors combined, but are themselves outweighed by inline styles.',
        difficulty: 'intermediate',
      },
      {
        question: 'When two rules have equal specificity, which one wins?',
        answer:
          'The one that appears later in the stylesheet — this is the "cascading" part of Cascading Style Sheets.',
        difficulty: 'beginner',
      },
      {
        question: 'Why should !important be used sparingly?',
        answer:
          'It overrides normal specificity almost entirely, making styles unpredictable and hard to override later — often forcing even more !important rules to work around it.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'combinators',
    title: 'Combinators',
    questions: [
      {
        question: 'What is the difference between the descendant combinator and the child combinator?',
        answer:
          'The descendant combinator (a space, e.g. "div p") matches any matching element nested at any depth. The child combinator (>, e.g. "div > p") matches only direct children.',
        difficulty: 'intermediate',
      },
      {
        question: 'What does the adjacent sibling combinator (+) select?',
        answer:
          'The single element that comes immediately after another, sharing the same parent — e.g. h2 + p selects only the paragraph directly following an h2.',
        difficulty: 'intermediate',
      },
      {
        question: 'When would you prefer > over a plain descendant selector?',
        answer:
          'When you specifically mean "direct children only" — it keeps styles from unintentionally leaking into deeply nested, unrelated elements as markup grows.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'responsive-design',
    title: 'Responsive Design',
    questions: [
      {
        question: 'What is a media query, and how is a basic one written?',
        answer:
          'A block of CSS that only applies when certain conditions are met, most commonly viewport width, e.g. @media (max-width: 480px) { ... }.',
        difficulty: 'beginner',
      },
      {
        question: 'What does "mobile-first" mean in responsive design?',
        answer:
          'Writing base styles for small screens first, then progressively adding complexity for larger screens using min-width media queries, rather than starting from desktop and overriding down.',
        difficulty: 'intermediate',
      },
      {
        question: 'Why is the viewport meta tag necessary for responsive design to work correctly?',
        answer:
          'Without <meta name="viewport" content="width=device-width, initial-scale=1.0" />, mobile browsers render the page at a zoomed-out desktop width, which breaks the intent of media queries.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'css-variables',
    title: 'CSS Variables',
    questions: [
      {
        question: 'How do you define and use a CSS custom property?',
        answer:
          'Define it with two leading dashes, typically on :root, e.g. --brand-color: #764ba2;, and reference it anywhere with var(--brand-color).',
        difficulty: 'beginner',
      },
      {
        question: 'What is the key advantage of CSS variables over Sass/Less variables?',
        answer:
          'CSS variables are live in the browser at runtime — they can be read and updated dynamically (even via JavaScript), unlike preprocessor variables which are compiled away and fixed at build time.',
        difficulty: 'advanced',
      },
      {
        question: 'How do you provide a fallback value for a CSS variable?',
        answer:
          'By passing a second argument to var(), e.g. var(--spacing, 10px), which is used if --spacing is not defined.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'transitions',
    title: 'Transitions',
    questions: [
      {
        question: 'What does the transition property do?',
        answer:
          'It smooths out a property change over a duration instead of it happening instantly, commonly combined with a state change like :hover.',
        difficulty: 'beginner',
      },
      {
        question: 'What four parts make up the transition shorthand?',
        answer:
          'Property, duration, timing-function, and delay — e.g. transition: transform 0.4s ease-in-out 0.1s.',
        difficulty: 'intermediate',
      },
      {
        question: 'Why are transform and opacity preferred for animated properties?',
        answer:
          'They can be animated efficiently by the browser’s compositor without triggering expensive layout recalculations, unlike properties like width, height, or top.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'animations',
    title: 'Animations',
    questions: [
      {
        question: 'What is the main difference between a CSS transition and a CSS animation?',
        answer:
          'A transition animates between exactly two states, usually triggered by an event. An animation, defined with @keyframes, can have multiple steps and run automatically or repeat without any trigger.',
        difficulty: 'intermediate',
      },
      {
        question: 'What does animation-iteration-count: infinite do?',
        answer:
          'It makes the animation loop indefinitely instead of stopping after a fixed number of cycles.',
        difficulty: 'beginner',
      },
      {
        question: 'Why should non-essential animations be wrapped in prefers-reduced-motion?',
        answer:
          'Some users experience discomfort from motion due to vestibular disorders. Wrapping animations in @media (prefers-reduced-motion: no-preference) respects the OS-level accessibility setting some users enable.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'transforms',
    title: 'Transforms',
    questions: [
      {
        question: 'Does changing an element’s transform affect the layout of surrounding elements?',
        answer:
          'No — transform is purely visual and does not reflow surrounding content, unlike changing width, margin, or position offsets.',
        difficulty: 'intermediate',
      },
      {
        question: 'What does transform-origin control?',
        answer:
          'The pivot point that transforms like rotate() and scale() are calculated from — by default the center of the element.',
        difficulty: 'intermediate',
      },
      {
        question: 'In what order are multiple transform functions applied?',
        answer:
          'In the order they are written — e.g. transform: translateX(20px) rotate(10deg) first translates the element, then rotates it around its (already translated) origin.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'shadows-and-filters',
    title: 'Shadows & Filters',
    questions: [
      {
        question: 'What does the inset keyword do in a box-shadow?',
        answer:
          'It makes the shadow appear inside the element’s box instead of outside, creating a "pressed in" appearance.',
        difficulty: 'intermediate',
      },
      {
        question: 'What is the difference between box-shadow and text-shadow?',
        answer:
          'box-shadow adds a shadow around an element’s entire box, while text-shadow applies specifically to the glyphs of text.',
        difficulty: 'beginner',
      },
      {
        question: 'What kinds of effects does the filter property provide?',
        answer:
          'Graphical effects like blur(), brightness(), grayscale(), and contrast(), often used for image effects or interactive hover states.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'gradients',
    title: 'Gradients',
    questions: [
      {
        question: 'What is the difference between linear-gradient() and radial-gradient()?',
        answer:
          'linear-gradient() transitions colors along a straight line at a given angle, while radial-gradient() radiates outward from a center point.',
        difficulty: 'beginner',
      },
      {
        question: 'How are gradients typically applied to an element?',
        answer:
          'Through background-image (or the background shorthand) — gradients are treated as images in CSS, not colors.',
        difficulty: 'intermediate',
      },
      {
        question: 'What does conic-gradient() do differently from the other gradient types?',
        answer:
          'It sweeps colors around a center point like a color wheel or pie chart, rather than radiating outward or moving along a line.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'css-functions',
    title: 'CSS Functions',
    questions: [
      {
        question: 'What does calc() allow that a plain CSS value cannot?',
        answer:
          'It performs math directly in a value and can mix different units, e.g. calc(100% - 150px), which isn’t possible with a plain arithmetic value.',
        difficulty: 'intermediate',
      },
      {
        question: 'What does clamp(min, preferred, max) do?',
        answer:
          'It picks a value that scales with the preferred expression but never goes below min or above max — commonly used for fluid typography that scales with the viewport within safe bounds.',
        difficulty: 'advanced',
      },
      {
        question: 'What is the difference between min() and max() in CSS?',
        answer:
          'min() resolves to the smallest of a list of values, and max() resolves to the largest — both evaluated live, so they respond to viewport or container size changes.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'best-practices',
    title: 'CSS Best Practices',
    questions: [
      {
        question: 'What does BEM stand for, and what problem does it solve?',
        answer:
          'Block, Element, Modifier — a naming convention (.block__element--modifier) that keeps class names descriptive and flat, avoiding deep selector nesting and specificity conflicts.',
        difficulty: 'intermediate',
      },
      {
        question: 'Why is box-sizing: border-box commonly included in a CSS reset?',
        answer:
          'It makes width/height calculations include padding and border, so an element’s specified size matches its actual rendered size, avoiding a very common layout surprise.',
        difficulty: 'intermediate',
      },
      {
        question: 'Why is consistency more important than which specific naming convention you choose?',
        answer:
          'Any convention applied unpredictably becomes as confusing as no convention at all. Consistently applying one system lets any developer predict what a class does without hunting through the whole stylesheet.',
        difficulty: 'advanced',
      },
    ],
  },
];
