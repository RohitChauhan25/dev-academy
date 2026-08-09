import { Tutorial } from '@/app/types/tutorial';

export const passwordHashing: Tutorial = {
  slug: 'password-hashing',

  title: 'Password Hashing',

  description: 'Never store plain-text passwords — hash them properly with bcrypt.',

  level: 'Advanced',

  readingTime: '12 min',

  lesson: 'Lesson 31 of 34',

  sections: [
    {
      type: 'paragraph',
      title: 'Why Hash Passwords?',
      content:
        'If a database is ever breached, plain-text passwords hand attackers immediate access to every account — and since people reuse passwords, often accounts on other sites too. Hashing stores an irreversible transformation of the password instead of the password itself.',
    },

    {
      type: 'code',
      title: 'Hashing on Signup',
      language: 'bash',
      code: `npm install bcrypt`,
    },

    {
      type: 'code',
      title: 'Hashing and Comparing Passwords',
      language: 'javascript',
      code: `import bcrypt from 'bcrypt';

async function hashPassword(plainPassword) {
  const saltRounds = 12;
  return bcrypt.hash(plainPassword, saltRounds);
}

async function comparePassword(plainPassword, hash) {
  return bcrypt.compare(plainPassword, hash);
}`,
    },

    {
      type: 'code',
      title: 'Using It in a Signup Route',
      language: 'javascript',
      code: `app.post('/api/signup', async (req, res, next) => {
  try {
    const passwordHash = await hashPassword(req.body.password);
    const user = await User.create({ email: req.body.email, passwordHash });
    res.status(201).json({ id: user.id });
  } catch (err) {
    next(err);
  }
});`,
    },

    {
      type: 'paragraph',
      title: 'Why bcrypt (Not MD5 or SHA-256)',
      content:
        'General-purpose hash functions like MD5 or SHA-256 are designed to be fast — exactly the wrong property for passwords, since it lets attackers try billions of guesses per second. bcrypt is deliberately slow and includes a "salt" automatically, making brute-force attacks impractical.',
    },

    {
      type: 'note',
      title: 'What a Salt Does',
      content:
        'A salt is random data mixed into the password before hashing, unique per user. It ensures two users with the same password get completely different hashes, and prevents attackers from using precomputed "rainbow table" lookups.',
    },

    {
      type: 'warning',
      title: 'Never Log or Return a Password (Hashed or Not)',
      content:
        'Even a hashed password should never appear in API responses or application logs — exclude the passwordHash field explicitly whenever a user document is serialized, similar to the projection technique covered in the MongoDB course.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Always use a well-vetted library like bcrypt (or argon2) for password hashing — never invent your own hashing scheme, and never use a fast general-purpose hash function for passwords.',
    },
  ],

  quiz: [
    {
      question: 'Why is a fast hash function like plain SHA-256 a poor choice for passwords?',
      options: [
        'It is not actually fast',
        'Its speed lets attackers try billions of password guesses per second',
        'It cannot hash strings',
        'It is more secure than bcrypt',
      ],
      answer: 1,
    },
    {
      question: 'What does a salt do?',
      options: [
        'Encrypts the password reversibly',
        'Ensures identical passwords produce different hashes and defeats precomputed lookup tables',
        'Makes the password shorter',
        'Speeds up hashing',
      ],
      answer: 1,
    },
    {
      question: 'Should a hashed password ever be included in an API response?',
      options: ['Yes, it is safe since it is hashed', 'No, it should always be excluded from responses and logs', 'Only for admin users', 'Only in development'],
      answer: 1,
    },
  ],

  previous: 'jwt',
  next: 'cors-and-security-headers',
};
