'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { CheckCircle2, Send } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<{
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const errors: typeof fieldErrors = {};
    if (!name.trim()) errors.name = 'Name is required.';
    if (!email.trim()) errors.email = 'Email is required.';
    if (!subject.trim()) errors.subject = 'Subject is required.';
    if (!message.trim()) errors.message = 'Message is required.';

    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setSending(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { name: name.trim(), email: email.trim(), subject: subject.trim(), message: message.trim() },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitted(true);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setFieldErrors({});
      setTimeout(() => setSubmitted(false), 3000);
    } catch {
      setError('Something went wrong sending your message. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="rounded-2xl border bg-card p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium">Name</label>
          <Input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setFieldErrors((prev) => ({ ...prev, name: undefined }));
            }}
            placeholder="Your name"
            className="h-11 rounded-lg"
            required
          />
          {fieldErrors.name && (
            <p className="mt-1.5 text-sm text-destructive">{fieldErrors.name}</p>
          )}
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium">Email</label>
          <Input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setFieldErrors((prev) => ({ ...prev, email: undefined }));
            }}
            placeholder="you@example.com"
            className="h-11 rounded-lg"
            required
          />
          {fieldErrors.email && (
            <p className="mt-1.5 text-sm text-destructive">{fieldErrors.email}</p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-sm font-medium">Subject</label>
          <Input
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
              setFieldErrors((prev) => ({ ...prev, subject: undefined }));
            }}
            placeholder="What's this about?"
            className="h-11 rounded-lg"
            required
          />
          {fieldErrors.subject && (
            <p className="mt-1.5 text-sm text-destructive">{fieldErrors.subject}</p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-sm font-medium">Message</label>
          <Textarea
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              setFieldErrors((prev) => ({ ...prev, message: undefined }));
            }}
            placeholder="Tell us what's on your mind..."
            rows={6}
            className="rounded-lg"
            required
          />
          {fieldErrors.message && (
            <p className="mt-1.5 text-sm text-destructive">{fieldErrors.message}</p>
          )}
        </div>
      </div>

      {error && <p className="mt-4 text-sm text-destructive">{error}</p>}

      <button
        type="submit"
        disabled={sending || submitted}
        className={`mt-6 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition disabled:cursor-not-allowed ${
          submitted
            ? 'bg-emerald-500'
            : 'bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-400 hover:opacity-90 disabled:opacity-60'
        }`}
      >
        {sending ? (
          'Sending...'
        ) : submitted ? (
          <>
            <CheckCircle2 className="h-4 w-4" /> Message Sent!
          </>
        ) : (
          <>
            <Send className="h-4 w-4" /> Send Message
          </>
        )}
      </button>
    </motion.form>
  );
}
