import { Tutorial } from '@/app/types/tutorial';

export const bestPractices: Tutorial = {
  slug: 'best-practices',

  title: 'TypeScript Best Practices',

  description:
    'Learn conventions and habits for writing maintainable, strict TypeScript as a project grows.',

  level: 'Advanced',

  readingTime: '16 min',

  lesson: 'Lesson 30 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'Start Strict, Stay Strict',
      content:
        'Enable "strict": true from day one. Retrofitting strict mode onto a large, loosely-typed codebase later requires fixing hundreds of newly surfaced errors at once — starting strict spreads that cost out naturally as you write each file.',
    },

    {
      type: 'list',
      title: 'General Guidelines',
      items: [
        'Avoid any — prefer unknown plus narrowing for genuinely unknown data.',
        'Let inference handle simple local variables; annotate function parameters explicitly.',
        'Prefer discriminated unions over loosely related optional properties.',
        'Reach for a utility type (Partial, Pick, Omit) before writing a near-duplicate interface.',
        'Use type predicates (is Type) to centralize repeated narrowing logic.',
        'Avoid type assertions (as) except at true boundaries, like typed DOM access.',
      ],
    },

    {
      type: 'paragraph',
      title: 'Model Your Domain with Types',
      content:
        'Instead of a single loosely-typed object with many optional fields, model distinct states as a discriminated union — it makes invalid states genuinely unrepresentable, not just discouraged by convention.',
    },

    {
      type: 'code',
      title: 'Loose vs Modeled State',
      language: 'typescript',
      code: `// Loose: many fields could be missing or contradictory
interface RequestState {
  loading: boolean;
  data?: string;
  error?: string;
}

// Modeled: each state is explicit and mutually exclusive
type RequestState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: string }
  | { status: "error"; error: string };`,
    },

    {
      type: 'paragraph',
      title: 'Avoid Over-Engineering Types',
      content:
        'Not every value needs a named type or a generic utility. A quick inline object type for a single-use function parameter is often clearer than a one-off named type that’s referenced nowhere else.',
    },

    {
      type: 'paragraph',
      title: 'Validate at the Boundary',
      content:
        'TypeScript types disappear at runtime. Data coming from outside your program — API responses, form input, environment variables — should be validated (with a type guard or a library like Zod) at the point it enters your system, not just assumed to match its declared type.',
    },

    {
      type: 'code',
      title: 'Validating at a Boundary',
      language: 'typescript',
      code: `interface User {
  id: number;
  name: string;
}

function isUser(value: unknown): value is User {
  return (
    typeof value === "object" &&
    value !== null &&
    typeof (value as User).id === "number" &&
    typeof (value as User).name === "string"
  );
}

async function fetchUser(id: number): Promise<User> {
  const response = await fetch(\`/api/users/\${id}\`);
  const data: unknown = await response.json();

  if (!isUser(data)) {
    throw new Error("Invalid user response from API");
  }

  return data; // safely typed as User from here on
}`,
    },

    {
      type: 'warning',
      title: 'A Common Trap: Trusting fetch()’s Type',
      content:
        'response.json() is typed as Promise<any> by default — TypeScript will happily let you treat the result as any shape you claim, even if the API actually returns something completely different. Always validate, don’t just assert.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Treat the type system as a tool for making illegal states unrepresentable, not just documentation. The stricter and more precise your types are, the more bugs TypeScript catches for you before your code ever runs.',
    },

    {
      type: 'note',
      title: 'Summary',
      content:
        'Great TypeScript isn’t about typing every single thing exhaustively — it’s about modeling your actual domain accurately, keeping strict mode on, validating data at the edges, and trusting inference for everything else.',
    },
  ],

  quiz: [
    {
      question: 'Why start a project with strict mode enabled from the beginning?',
      options: [
        'It compiles faster',
        'Retrofitting strict mode onto a large codebase later requires fixing many errors at once',
        'It’s required by npm',
        'It disables type checking',
      ],
      answer: 1,
    },
    {
      question: 'Why should data from an external API be validated, not just typed?',
      options: [
        'TypeScript automatically validates API responses',
        'TypeScript types are erased at runtime and don’t check that real data actually matches',
        'Validation is only needed for arrays',
        'fetch() automatically validates JSON',
      ],
      answer: 1,
    },
    {
      question: 'What is the benefit of modeling state as a discriminated union instead of many optional fields?',
      options: [
        'It uses less memory',
        'It makes invalid or contradictory states genuinely unrepresentable, not just discouraged',
        'It compiles to smaller JavaScript',
        'It removes the need for interfaces',
      ],
      answer: 1,
    },
  ],

  previous: 'tsconfig-deep-dive',
};
