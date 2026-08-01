import { Tutorial } from '@/app/types/tutorial';

export const reactRouter: Tutorial = {
  slug: 'react-router',

  title: 'React Router',

  description:
    'Learn how to add client-side routing to a React app using React Router.',

  level: 'Advanced',

  readingTime: '20 min',

  lesson: 'Lesson 34 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'Why a Router?',
      content:
        'React itself has no concept of URLs or navigation. React Router is the most widely used library for mapping URL paths to components, enabling multi-page-feeling apps that never actually reload the page.',
    },

    {
      type: 'code',
      title: 'Installing React Router',
      language: 'bash',
      code: `npm install react-router-dom`,
    },

    {
      type: 'code',
      title: 'Basic Route Setup',
      language: 'jsx',
      code: `import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}`,
    },

    {
      type: 'paragraph',
      title: 'Navigating Between Pages',
      content:
        'The Link component renders an anchor tag that navigates client-side, updating the URL and swapping the rendered route without a full page reload.',
    },

    {
      type: 'code',
      title: 'Navigation with Link',
      language: 'jsx',
      code: `import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}`,
    },

    {
      type: 'paragraph',
      title: 'Dynamic Route Parameters',
      content:
        'A route path can include a parameter (prefixed with :), and useParams() reads its current value inside the matched component.',
    },

    {
      type: 'code',
      title: 'Dynamic Route with useParams',
      language: 'jsx',
      code: `import { useParams } from "react-router-dom";

<Route path="/users/:userId" element={<UserProfile />} />;

function UserProfile() {
  const { userId } = useParams();
  return <h1>Viewing user {userId}</h1>;
}`,
    },

    {
      type: 'paragraph',
      title: 'Programmatic Navigation',
      content:
        'The useNavigate hook lets you navigate imperatively from inside event handlers or effects — for example, redirecting after a successful form submission.',
    },

    {
      type: 'code',
      title: 'Navigating After a Form Submits',
      language: 'jsx',
      code: `import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    // ...log in the user...
    navigate("/dashboard");
  }

  return <form onSubmit={handleSubmit}>{/* ... */}</form>;
}`,
    },

    {
      type: 'note',
      title: 'Frameworks Often Handle Routing Differently',
      content:
        'Full-stack React frameworks like Next.js use file-based routing instead of declaring <Route> components manually — the folder structure under an app or pages directory determines the URL structure automatically.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Keep route definitions in one central place (or a small number of route files) rather than scattering <Route> elements throughout the codebase — it keeps the app’s overall URL structure easy to see at a glance.',
    },
  ],

  quiz: [
    {
      question: 'What does the Link component do differently from a regular <a> tag?',
      options: [
        'Nothing, they are identical',
        'It navigates client-side, updating the URL without a full page reload',
        'It only works for external links',
        'It requires a form to be submitted',
      ],
      answer: 1,
    },
    {
      question: 'Which hook reads a dynamic route parameter like :userId?',
      options: ['useLocation', 'useParams', 'useNavigate', 'useRoute'],
      answer: 1,
    },
    {
      question: 'Which hook lets you navigate to a new route from inside an event handler?',
      options: ['useParams', 'useNavigate', 'useLocation', 'useRoutes'],
      answer: 1,
    },
  ],

  previous: 'error-boundaries',
  next: 'performance-optimization',
};
