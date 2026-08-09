import { Tutorial } from '@/app/types/tutorial';

export const jwt: Tutorial = {
  slug: 'jwt',

  title: 'JWT (JSON Web Tokens)',

  description: 'Issue and verify signed tokens for stateless authentication.',

  level: 'Advanced',

  readingTime: '14 min',

  lesson: 'Lesson 30 of 34',

  sections: [
    {
      type: 'paragraph',
      title: 'What a JWT Is',
      content:
        'A JWT is a compact, digitally signed token, typically containing claims about a user (like their id and role). Because it\'s signed with a secret key, the server can verify a token wasn\'t tampered with — without needing to look anything up in a database.',
    },

    {
      type: 'table',
      title: 'JWT Structure',
      headers: ['Part', 'Contains'],
      rows: [
        ['Header', 'The signing algorithm and token type'],
        ['Payload', 'The claims — e.g. { userId: 42, role: "admin" }'],
        ['Signature', 'A cryptographic signature verifying the header + payload weren\'t altered'],
      ],
    },

    {
      type: 'code',
      title: 'Issuing a Token',
      language: 'javascript',
      code: `import jsonwebtoken from 'jsonwebtoken';

function generateToken(user) {
  return jsonwebtoken.sign(
    { userId: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
}`,
    },

    {
      type: 'code',
      title: 'Verifying a Token in Middleware',
      language: 'javascript',
      code: `function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization; // "Bearer <token>"
  const token = authHeader?.split(' ')[1];

  if (!token) return res.status(401).json({ error: 'No token provided' });

  try {
    req.user = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
}

app.get('/api/profile', requireAuth, (req, res) => {
  res.json({ userId: req.user.userId });
});`,
    },

    {
      type: 'warning',
      title: 'A JWT\'s Payload is NOT Encrypted',
      content:
        'The payload is only base64-encoded, not encrypted — anyone can decode and read it, they just cannot forge a valid signature without the secret. Never put sensitive data (like a password) inside a JWT payload.',
    },

    {
      type: 'note',
      title: 'Stateless, With Trade-offs',
      content:
        'Because the server doesn\'t need to look up a session, JWTs scale easily across multiple servers. The trade-off: a JWT can\'t be instantly revoked before it expires (unlike a database-backed session, which can be deleted immediately) unless you add extra infrastructure like a token blocklist.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use short expiration times for JWTs (e.g. 15 minutes) paired with a longer-lived refresh token, rather than one long-lived token — it limits how long a stolen token remains useful.',
    },
  ],

  quiz: [
    {
      question: 'Is the payload of a JWT encrypted?',
      options: ['Yes, always', 'No, it is only base64-encoded and readable by anyone', 'Only with a secret key', 'Only in production'],
      answer: 1,
    },
    {
      question: 'What does the JWT signature protect against?',
      options: ['Nothing', 'The token being tampered with undetected', 'The token expiring', 'Network eavesdropping'],
      answer: 1,
    },
    {
      question: 'What is a downside of stateless JWTs compared to database-backed sessions?',
      options: [
        'They cannot be verified',
        'A JWT cannot be instantly revoked before it expires without extra infrastructure',
        'They are always slower',
        'They cannot contain a user ID',
      ],
      answer: 1,
    },
  ],

  previous: 'authentication-basics',
  next: 'password-hashing',
};
