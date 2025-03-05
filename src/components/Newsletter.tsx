import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="bg-emerald-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with QuickMart
          </h2>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get exclusive deals, recipes, and shopping tips delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-l-full focus:outline-none focus:ring-2 focus:ring-white/20"
                required
              />
              <button
                type="submit"
                className="bg-white text-emerald-600 px-6 py-3 rounded-r-full font-semibold hover:bg-emerald-50 transition-colors flex items-center"
              >
                Subscribe
                <Send className="ml-2 h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}