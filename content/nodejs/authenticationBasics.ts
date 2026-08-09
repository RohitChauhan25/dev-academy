import { Tutorial } from '@/app/types/tutorial';

export const authenticationBasics: Tutorial = {
  slug: 'authentication-basics',

  title: 'Authentication Basics',

  description: 'Understand the difference between authentication and authorization, and common ways to implement login.',

  level: 'Advanced',

  readingTime: '12 min',

  lesson: 'Lesson 29 of 34',

  sections: [
    {
      type: 'paragraph',
      title: 'Authentication vs Authorization',
      content:
        'Authentication answers "who are you?" — verifying identity, typically via a password or a third-party login. Authorization answers "what are you allowed to do?" — checking permissions after identity is already known. They are related but distinct concerns.',
    },

    {
      type: 'table',
      title: 'Common Authentication Approaches',
      headers: ['Approach', 'How It Works'],
      rows: [
        ['Session-based', 'Server stores session state, client holds a session ID cookie'],
        ['Token-based (JWT)', 'Server issues a signed token the client sends with every request'],
        ['OAuth / Social login', 'Delegating identity verification to Google, GitHub, etc.'],
      ],
    },

    {
      type: 'paragraph',
      title: 'A Typical Login Flow',
      content:
        'A user submits credentials, the server verifies them against the database (comparing a hashed password, covered next), and on success issues something the client can use to prove its identity on future requests — a session cookie or a token.',
    },

    {
      type: 'code',
      title: 'A Basic Login Route',
      language: 'javascript',
      code: `app.post('/api/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await comparePassword(password, user.passwordHash))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = generateToken(user);
    res.json({ token });
  } catch (err) {
    next(err);
  }
});`,
    },

    {
      type: 'warning',
      title: 'Never Reveal Which Part of the Login Failed',
      content:
        'Return the same generic error ("Invalid credentials") whether the email doesn\'t exist or the password is wrong — telling an attacker "no such user" vs "wrong password" separately makes it trivial to enumerate valid accounts.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Rarely build authentication entirely from scratch for a real production app — established libraries (Passport.js) or hosted services (Auth0, Clerk) handle a huge amount of nuanced security detail that\'s easy to get subtly wrong on your own.',
    },
  ],

  quiz: [
    {
      question: 'What is the difference between authentication and authorization?',
      options: [
        'They are the same thing',
        'Authentication verifies identity; authorization checks what an authenticated user is allowed to do',
        'Authorization always happens first',
        'Authentication only applies to admins',
      ],
      answer: 1,
    },
    {
      question: 'Why return the same generic error for "user not found" and "wrong password"?',
      options: [
        'It has no real reason',
        'Distinguishing them lets an attacker enumerate which emails have accounts',
        'It is required by HTTP',
        'It makes debugging harder for developers',
      ],
      answer: 1,
    },
    {
      question: 'Why is it often recommended to use an established library or service for authentication instead of building it entirely from scratch?',
      options: [
        'Custom authentication is always faster',
        'Authentication has many subtle security details that are easy to get wrong',
        'Express does not support custom authentication',
        'There is no real benefit',
      ],
      answer: 1,
    },
  ],

  previous: 'connecting-to-sql',
  next: 'jwt',
};
