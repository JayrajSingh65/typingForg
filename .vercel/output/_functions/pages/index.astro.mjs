/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B8rAXt8w.mjs';
import 'kleur/colors';
import { $ as $$Layout, T as TypingEngine } from '../chunks/TypingEngine_DCNnD5m4.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const faqs = [
  {
    q: "How do I increase my typing speed?",
    a: `Improving typing speed is all about deliberate practice and proper technique. Start by learning touch-typing — placing all ten fingers on the home row (ASDF JKL;) and never looking at the keyboard. Begin slowly to build muscle memory, then gradually increase your pace. Set aside 10–15 minutes of focused daily practice rather than long infrequent sessions. Use TypeForge's various modes to train across different word sets and code snippets. Most typists see meaningful improvement within 2–4 weeks of consistent practice.`
  },
  {
    q: "How fast should I type?",
    a: `The average person types around 40 WPM (words per minute). A professional typist typically reaches 65–75 WPM, while power users and developers often exceed 100 WPM. For most office and daily tasks, 60+ WPM is considered proficient. Expert-level typists on platforms like TypeRacer and Monkeytype regularly hit 140–200 WPM. Don't focus on comparing yourself to others — focus on improving your own personal best, even a few WPM at a time.`
  },
  {
    q: "How is typing speed measured?",
    a: `Typing speed is measured in WPM — Words Per Minute. One "word" in WPM is standardized as five characters, including spaces. So if you type 250 characters in one minute, that's 50 WPM. TypeForge also tracks Raw WPM (total keystrokes including errors divided by time) and Accuracy (the percentage of correctly pressed keys). A high WPM with low accuracy is less useful than consistent, accurate typing, which is why accuracy is equally important in your training.`
  },
  {
    q: "Why is it important to take a typing speed test?",
    a: `Typing is one of the most fundamental productivity skills in the modern world. A speed test gives you an objective baseline so you can track real progress over time. It also reveals patterns in your mistakes — which keys or letter combinations slow you down — so you can focus your practice intentionally. For developers and writers especially, faster and more accurate typing means less cognitive friction, allowing your fingers to keep up with your thoughts. Think of it as a fitness benchmark for your hands.`
  }
];
const FAQ = () => {
  const [open, setOpen] = useState(0);
  return /* @__PURE__ */ jsxs("section", { className: "faq-section", children: [
    /* @__PURE__ */ jsxs("div", { className: "faq-header", children: [
      /* @__PURE__ */ jsx("span", { className: "faq-badge", children: "FAQ" }),
      /* @__PURE__ */ jsx("h2", { className: "faq-title", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsx("p", { className: "faq-subtitle", children: "Everything you need to know about typing speed and practice." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "faq-list", children: faqs.map((item, i) => {
      const isOpen = open === i;
      return /* @__PURE__ */ jsxs(
        motion.div,
        {
          layout: true,
          className: `faq-item ${isOpen ? "faq-item--open" : ""}`,
          children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                className: "faq-trigger",
                onClick: () => setOpen(isOpen ? null : i),
                "aria-expanded": isOpen,
                children: [
                  /* @__PURE__ */ jsx("span", { className: "faq-question", children: item.q }),
                  /* @__PURE__ */ jsx("span", { className: "faq-icon", children: isOpen ? /* @__PURE__ */ jsx(Minus, { size: 18 }) : /* @__PURE__ */ jsx(Plus, { size: 18 }) })
                ]
              }
            ),
            /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: { height: 0, opacity: 0 },
                transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                style: { overflow: "hidden" },
                children: /* @__PURE__ */ jsx("p", { className: "faq-answer", children: item.a })
              },
              "answer"
            ) })
          ]
        },
        i
      );
    }) }),
    /* @__PURE__ */ jsx("style", { children: `
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
      ` })
  ] });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "TypeForge | Minimalist Typing Practice" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-12"> ${renderComponent($$result2, "TypingEngine", TypingEngine, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/sharwankumar/typingForg/src/features/typing/TypingEngine", "client:component-export": "TypingEngine" })} </div> <section id="features" class="py-24 grid md:grid-cols-2 gap-8" style="max-width: 900px; margin: 0 auto; padding-left: 1rem; padding-right: 1rem;"> <div class="p-8 glass rounded-3xl border border-white/5 space-y-4"> <div class="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-500"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg> </div> <h3 class="text-xl font-bold" style="color: var(--tf-text)">Developer Mode</h3> <p style="color: var(--tf-muted)">Practice with real code snippets. Improve your coding speed and muscle memory for syntax.</p> </div> <div class="p-8 glass rounded-3xl border border-white/5 space-y-4"> <div class="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center text-green-500"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20v-6M6 20V10M18 20V4"></path></svg> </div> <h3 class="text-xl font-bold" style="color: var(--tf-text)">Pure Performance</h3> <p style="color: var(--tf-muted)">No distractions. Just you and the text. Track your WPM and Accuracy in real-time.</p> </div> </section> ${renderComponent($$result2, "FAQ", FAQ, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/sharwankumar/typingForg/src/components/FAQ", "client:component-export": "FAQ" })} ` })}`;
}, "/Users/sharwankumar/typingForg/src/pages/index.astro", void 0);

const $$file = "/Users/sharwankumar/typingForg/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
