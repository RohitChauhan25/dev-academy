import { Tutorial } from '@/app/types/tutorial';

export const testingReact: Tutorial = {
  slug: 'testing-react',

  title: 'Testing React Components',

  description:
    'Learn how to test React components using React Testing Library, focusing on behavior rather than implementation details.',

  level: 'Advanced',

  readingTime: '18 min',

  lesson: 'Lesson 39 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'What to Test',
      content:
        'React Testing Library encourages testing components the way a user actually experiences them — rendering the component, interacting with it, and asserting on what appears on screen — rather than inspecting internal state or implementation details directly.',
    },

    {
      type: 'code',
      title: 'A Basic Component Test',
      language: 'jsx',
      code: `import { render, screen } from "@testing-library/react";

function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

test("renders a greeting with the given name", () => {
  render(<Greeting name="Alice" />);
  expect(screen.getByText("Hello, Alice!")).toBeInTheDocument();
});`,
    },

    {
      type: 'paragraph',
      title: 'Simulating User Interaction',
      content:
        'The userEvent library simulates real user interactions — clicks, typing, tabbing — more realistically than firing raw DOM events directly.',
    },

    {
      type: 'code',
      title: 'Testing a Click Interaction',
      language: 'jsx',
      code: `import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}

test("increments the count when clicked", async () => {
  const user = userEvent.setup();
  render(<Counter />);

  const button = screen.getByRole("button");
  expect(button).toHaveTextContent("Count: 0");

  await user.click(button);
  expect(button).toHaveTextContent("Count: 1");
});`,
    },

    {
      type: 'table',
      title: 'Common Queries',
      headers: ['Query', 'Finds'],
      rows: [
        ['getByRole', 'An element by its accessible role, like "button" or "heading" (preferred)'],
        ['getByText', 'An element containing specific text'],
        ['getByLabelText', 'A form input by its associated label'],
        ['getByTestId', 'An element by a data-testid attribute (last resort)'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Testing Asynchronous Behavior',
      content:
        'For components that fetch data or update after a delay, findBy* queries wait for an element to appear, and waitFor() waits for an arbitrary assertion to pass — both essential for testing anything involving useEffect or async state updates.',
    },

    {
      type: 'code',
      title: 'Testing an Async Component',
      language: 'jsx',
      code: `test("shows the user's name after loading", async () => {
  render(<UserProfile userId={1} />);

  expect(screen.getByText("Loading...")).toBeInTheDocument();

  const heading = await screen.findByRole("heading", { name: "Alice" });
  expect(heading).toBeInTheDocument();
});`,
    },

    {
      type: 'note',
      title: 'Avoid Testing Implementation Details',
      content:
        'A test that reaches into a component’s internal state or checks how many times a function was called tends to break whenever you refactor, even if the user-facing behavior didn’t change. Testing what’s rendered and how it responds to interaction is far more resilient.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Prefer getByRole over getByTestId whenever possible — it verifies the component is actually accessible (a real button, a real heading) while also being resilient to markup changes that don’t affect behavior.',
    },
  ],

  quiz: [
    {
      question: 'What does React Testing Library encourage testing?',
      options: [
        'Internal component state directly',
        'Behavior — what’s rendered and how it responds to user interaction',
        'CSS class names only',
        'The number of times a function is called'
      ],
      answer: 1,
    },
    {
      question: 'Which query is generally preferred for finding elements in a test?',
      options: ['getByTestId', 'getByRole', 'querySelector', 'getByClassName'],
      answer: 1,
    },
    {
      question: 'Why use findByRole instead of getByRole for content that loads asynchronously?',
      options: [
        'They are identical',
        'findBy* queries wait for the element to appear, which getBy* does not',
        'findByRole is faster',
        'getByRole doesn’t support roles',
      ],
      answer: 1,
    },
  ],

  previous: 'data-fetching',
  next: 'react-19-features',
};
