/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_B8rAXt8w.mjs';
import 'kleur/colors';
import { $ as $$Layout, T as TypingEngine } from '../chunks/TypingEngine_DCNnD5m4.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
function getStaticPaths() {
  const stacks = [
    { id: "javascript", name: "JavaScript", description: "Master your JS syntax typing speed." },
    { id: "python", name: "Python", description: "Practice indentation and Pythonic patterns." },
    { id: "rust", name: "Rust", description: "Be fast with those angle brackets and lifetimes." },
    { id: "docker", name: "Docker", description: "Type Dockerfiles and YAML faster." },
    { id: "sql", name: "SQL", description: "Practice complex queries and JOINs." }
  ];
  return stacks.map((stack) => ({
    params: { stack: stack.id },
    props: { stack }
  }));
}
const $$TypingTestForstack = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TypingTestForstack;
  const { stack } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${stack.name} Typing Test | TypeForge`, "description": `Improve your ${stack.name} typing speed with real-world code snippets. ${stack.description}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-12 space-y-12"> <div class="text-center space-y-4"> <h1 class="text-4xl font-black italic tracking-tighter uppercase">${stack.name} TYPING CHALLENGE</h1> <p class="text-muted-foreground max-w-2xl mx-auto">${stack.description}</p> </div> ${renderComponent($$result2, "TypingEngine", TypingEngine, { "client:load": true, "initialMode": "developer", "initialLanguage": stack.id, "client:component-hydration": "load", "client:component-path": "/Users/sharwankumar/typingForg/src/features/typing/TypingEngine", "client:component-export": "TypingEngine" })} <section class="max-w-4xl mx-auto space-y-8 pt-24 border-t border-white/5"> <h2 class="text-2xl font-bold">Frequently Asked Questions</h2> <div class="grid gap-6"> <div class="glass p-6 rounded-2xl border border-white/5"> <h3 class="font-bold mb-2">How does the ${stack.name} typing test work?</h3> <p class="text-sm text-muted-foreground">We fetch real code snippets from actual open source projects. You'll practice typing variables, function declarations, and common syntax patterns specific to ${stack.name}.</p> </div> <div class="glass p-6 rounded-2xl border border-white/5"> <h3 class="font-bold mb-2">Can this improve my coding speed?</h3> <p class="text-sm text-muted-foreground">Yes! Reducing the friction between your thoughts and the keyboard is key to 10x engineering. Practice makes perfect.</p> </div> </div> </section> </div> ` })}`;
}, "/Users/sharwankumar/typingForg/src/pages/typing-test-for-[stack].astro", void 0);

const $$file = "/Users/sharwankumar/typingForg/src/pages/typing-test-for-[stack].astro";
const $$url = "/typing-test-for-[stack]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TypingTestForstack,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
