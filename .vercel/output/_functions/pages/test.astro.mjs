/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B8rAXt8w.mjs';
import 'kleur/colors';
import { $ as $$Layout, T as TypingEngine } from '../chunks/TypingEngine_DCNnD5m4.mjs';
export { renderers } from '../renderers.mjs';

const $$Test = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Practice | TypeForge" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-12"> ${renderComponent($$result2, "TypingEngine", TypingEngine, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/sharwankumar/typingForg/src/features/typing/TypingEngine", "client:component-export": "TypingEngine" })} </div> ` })}`;
}, "/Users/sharwankumar/typingForg/src/pages/test.astro", void 0);

const $$file = "/Users/sharwankumar/typingForg/src/pages/test.astro";
const $$url = "/test";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Test,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
