import React, { useState } from 'react';

export function BugReporter() {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const [honeypot, setHoneypot] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Honeypot check: If the hidden field is filled, it's a bot.
    // We silently pretend it succeeded to trick the bot.
    if (honeypot) {
      setStatus('success');
      setMessage('');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('submitting');
    try {
      // Use the Cloudflare Worker URL instead of directly calling Discord
      const apiUrl = import.meta.env.VITE_API_URL || '';
      
      if (!apiUrl) {
        throw new Error('API URL is not configured.');
      }
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: `🐛 **New Anonymous Bug Report:**\n${message}`
        }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('');
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Failed to send bug report:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400">Feedback</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Noticed a bug? Let us know anonymously!
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Don't forget to include info about your phone, it helps!
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto mt-6 flex max-w-md flex-col gap-y-4">
          {/* Honeypot field - hidden from real users */}
          <div className="absolute left-[-9999px] top-[-9999px]" aria-hidden="true">
            <label htmlFor="website-url">Website URL (Leave blank)</label>
            <input
              type="text"
              id="website-url"
              name="website-url"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          <label htmlFor="bug-report" className="sr-only">
            Bug description
          </label>
          <textarea
            id="bug-report"
            name="bug-report"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = 'auto';
              target.style.height = `${target.scrollHeight}px`;
            }}
            disabled={status === 'submitting'}
            placeholder="Describe the issue..."
            rows={1}
            className="w-full rounded-xl border-0 bg-gray-50/50 dark:bg-white/5 px-4 py-3 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-200 dark:ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 transition-colors resize-none overflow-hidden"
          />
          <button
            type="submit"
            disabled={status === 'submitting' || !message.trim()}
            className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Sent! 🎉' : status === 'error' ? 'Error!' : 'Send Report'}
          </button>
        </form>
      </div>
    </div>
  );
}
