'use client';

import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';


export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setStatus('success');
        formRef.current?.reset();
      })
      .catch(() => {
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="text-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h4 className="text-3xl font-bold mb-4">Send me a message!</h4>
        <p className="text-lg">
          Have any questions or proposals? Just want to say hello?
        </p>
        <p className="mb-10 text-lg">
          Leave your details and I'll get back as soon as possible.
        </p>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-6 text-left max-w-md mx-auto">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="from_name"
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="bg-white text-black px-6 py-3 rounded hover:bg-opacity-80 transition"
          >
            {status === 'sending' ? 'Sending...' : 'Send'}
          </button>

          {status === 'success' && <p className="text-green-400 mt-4">Message sent!</p>}
          {status === 'error' && <p className="text-red-400 mt-4">Something went wrong. Try again.</p>}
        </form>
      </div>
    </section>
  );
}