import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'How do I increase my typing speed?',
    a: `Improving typing speed is all about deliberate practice and proper technique. Start by learning touch-typing — placing all ten fingers on the home row (ASDF JKL;) and never looking at the keyboard. Begin slowly to build muscle memory, then gradually increase your pace. Set aside 10–15 minutes of focused daily practice rather than long infrequent sessions. Use TypeForge's various modes to train across different word sets and code snippets. Most typists see meaningful improvement within 2–4 weeks of consistent practice.`,
  },
  {
    q: 'How fast should I type?',
    a: `The average person types around 40 WPM (words per minute). A professional typist typically reaches 65–75 WPM, while power users and developers often exceed 100 WPM. For most office and daily tasks, 60+ WPM is considered proficient. Expert-level typists on platforms like TypeRacer and Monkeytype regularly hit 140–200 WPM. Don't focus on comparing yourself to others — focus on improving your own personal best, even a few WPM at a time.`,
  },
  {
    q: 'How is typing speed measured?',
    a: `Typing speed is measured in WPM — Words Per Minute. One "word" in WPM is standardized as five characters, including spaces. So if you type 250 characters in one minute, that's 50 WPM. TypeForge also tracks Raw WPM (total keystrokes including errors divided by time) and Accuracy (the percentage of correctly pressed keys). A high WPM with low accuracy is less useful than consistent, accurate typing, which is why accuracy is equally important in your training.`,
  },
  {
    q: 'Why is it important to take a typing speed test?',
    a: `Typing is one of the most fundamental productivity skills in the modern world. A speed test gives you an objective baseline so you can track real progress over time. It also reveals patterns in your mistakes — which keys or letter combinations slow you down — so you can focus your practice intentionally. For developers and writers especially, faster and more accurate typing means less cognitive friction, allowing your fingers to keep up with your thoughts. Think of it as a fitness benchmark for your hands.`,
  },
];

export const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="faq-section">
      <div className="faq-header">
        <span className="faq-badge">FAQ</span>
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know about typing speed and practice.</p>
      </div>

      <div className="faq-list">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={i}
              layout
              className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}
            >
              <button
                className="faq-trigger"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span className="faq-question">{item.q}</span>
                <span className="faq-icon">
                  {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p className="faq-answer">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <style>{`
        .faq-section {
          max-width: 780px;
          margin: 0 auto;
          padding: 5rem 1rem 4rem;
        }
        .faq-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }
        .faq-badge {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          padding: 0.35rem 0.9rem;
          border-radius: 9999px;
          background: var(--tf-primary, #818cf8)22;
          color: var(--tf-primary, #818cf8);
          border: 1px solid var(--tf-primary, #818cf8)44;
          margin-bottom: 1.2rem;
        }
        .faq-title {
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 900;
          font-style: italic;
          letter-spacing: -0.04em;
          color: var(--tf-text, #e2e8f0);
          margin: 0 0 0.75rem;
        }
        .faq-subtitle {
          font-size: 1rem;
          color: var(--tf-muted, #475569);
          margin: 0;
        }
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
        }
        .faq-item {
          border-radius: 1.25rem;
          border: 1px solid var(--tf-border, rgba(255,255,255,0.06));
          background: var(--tf-surface, rgba(255,255,255,0.04));
          overflow: hidden;
          transition: border-color 0.25s, background 0.25s, box-shadow 0.25s;
        }
        .faq-item--open {
          border-color: var(--tf-primary, #818cf8)55 !important;
          box-shadow: 0 0 0 1px var(--tf-primary, #818cf8)22, 0 8px 40px rgba(0,0,0,0.2);
        }
        .faq-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.4rem 1.75rem;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
        }
        .faq-question {
          font-size: 1rem;
          font-weight: 700;
          color: var(--tf-text, #e2e8f0);
          line-height: 1.4;
          flex: 1;
        }
        .faq-icon {
          flex-shrink: 0;
          width: 2rem;
          height: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--tf-primary, #818cf8)22;
          color: var(--tf-primary, #818cf8);
          transition: background 0.2s;
        }
        .faq-item--open .faq-icon {
          background: var(--tf-primary, #818cf8)44;
        }
        .faq-answer {
          padding: 0 1.75rem 1.5rem;
          font-size: 0.9375rem;
          line-height: 1.75;
          color: var(--tf-muted, #475569);
          margin: 0;
        }

        @media (max-width: 600px) {
          .faq-trigger { padding: 1.2rem 1.25rem; }
          .faq-answer { padding: 0 1.25rem 1.2rem; }
        }
      `}</style>
    </section>
  );
};
