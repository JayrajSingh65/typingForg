import { c as createComponent, e as addAttribute, a as renderTemplate, b as createAstro, f as renderScript, r as renderComponent, g as renderHead, h as renderSlot } from './astro/server_B8rAXt8w.mjs';
import 'kleur/colors';
import { clsx } from 'clsx';
/* empty css                         */
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Timer, Hash, Quote, Code, Zap, Target, TrendingUp, RotateCcw, Globe, ChevronDown, Search, X, Palette } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const $$Astro$2 = createAstro();
const $$MetaTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MetaTags;
  const {
    title,
    description,
    image = "/og-default.jpg",
    canonicalURL = Astro2.url.href,
    type = "website"
  } = Astro2.props;
  return renderTemplate`<title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><meta property="og:type"${addAttribute(type, "content")}><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(canonicalURL, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}><link rel="canonical"${addAttribute(canonicalURL, "href")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="sitemap" href="/sitemap-index.xml">`;
}, "/Users/sharwankumar/typingForg/src/components/SEO/MetaTags.astro", void 0);

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/sharwankumar/typingForg/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/sharwankumar/typingForg/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "TypeForge | Master Your Typing",
    description = "The ultimate gamified typing platform for developers and enthusiasts.",
    image
  } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "MetaTags", $$MetaTags, { "title": title, "description": description, "image": image })}<!-- Google Fonts: Inter + Noto Sans for non-Latin scripts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,700;1,800;1,900&family=Noto+Sans:wght@400;500;700&family=Noto+Sans+Tamil:wght@400;500;700&family=Noto+Sans+Telugu:wght@400;500;700&family=Noto+Sans+Gujarati:wght@400;500;700&family=Noto+Sans+Devanagari:wght@400;500;700&family=Noto+Sans+Arabic:wght@400;500;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">${renderComponent($$result, "ViewTransitions", $$ClientRouter, {})}${renderHead()}</head> <body> <div class="relative min-h-screen flex flex-col"> <nav class="sticky top-0 z-50 w-full" style="border-bottom: 1px solid var(--tf-border); background: color-mix(in srgb, var(--tf-bg) 90%, transparent); backdrop-filter: blur(12px);"> <div style="max-width: 900px; margin: 0 auto; padding: 0 1rem; display: flex; height: 3.5rem; align-items: center; justify-content: space-between;"> <a href="/" style="font-size: 1.25rem; font-weight: 900; font-style: italic; letter-spacing: -0.03em; color: var(--tf-text); text-decoration: none;">
TypeForge
</a> <a href="/test" style="font-size: 0.875rem; font-weight: 600; color: var(--tf-muted); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='var(--tf-text)'" onmouseout="this.style.color='var(--tf-muted)'">
Test
</a> </div> </nav> <main style="flex: 1; max-width: 100%; padding: 0;"> ${renderSlot($$result, $$slots["default"])} </main> <footer style="border-top: 1px solid var(--tf-border); padding: 1.5rem 1rem; text-align: center; font-size: 0.75rem; color: var(--tf-muted);">
© 2026 TypeForge — Type in any language
</footer> </div> </body></html>`;
}, "/Users/sharwankumar/typingForg/src/layouts/Layout.astro", void 0);

const LANGUAGES = [
  // Indian Languages
  { code: "ta", name: "Tamil", nativeName: "தமிழ்", script: "tamil", sampleText: "வணக்கம் உலகம் தமிழ் மொழி மிகவும் பழமையான மொழி இது நம் பண்பாட்டின் அடையாளம் தமிழர் பெருமை தமிழ் இலக்கியம் உலக மொழிகளில் சிறந்தது நாம் தமிழை காக்க வேண்டும் மொழி கலாச்சாரம் பாரம்பரியம்" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు", script: "telugu", sampleText: "నమస్కారం తెలుగు భాష చాలా అందమైనది ఇది మనుషుల మనసులను కలిపే భాష తెలుగు సాహిత్యం చాలా సంపన్నమైనది మన సంస్కృతి మన గర్వం తెలుగు మాతృభాష" },
  { code: "mr", name: "Marathi", nativeName: "मराठी", script: "devanagari", sampleText: "नमस्कार मराठी भाषा महाराष्ट्राची भाषा आहे मराठी साहित्य खूप समृद्ध आहे आपली भाषा आपली ओळख आहे मराठी माणूस कुठेही गेला तरी मराठी विसरत नाही" },
  { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી", script: "gujarati", sampleText: "નમસ્તે ગુજરાતી ભાષા ગુજરાત રાજ્યની ભાષા છે ગુજરાતી સાહિત્ય ખૂબ સમૃદ્ધ છે આપણી ભાષા આપણી ઓળખ છે ગુજરાતી લોકો ખૂબ મહેનતુ છે" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", script: "devanagari", sampleText: "नमस्ते हिंदी भारत की राजभाषा है यह एक समृद्ध भाषा है हिंदी साहित्य बहुत विस्तृत है भारत में करोड़ों लोग हिंदी बोलते हैं हमारी संस्कृति हमारी पहचान है" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা", script: "other", sampleText: "নমস্কার বাংলা ভাষা একটি সমৃদ্ধ ভাষা রবীন্দ্রনাথ ঠাকুর বাংলা সাহিত্যের মহান কবি বাংলাদেশ এবং ভারতে কোটি কোটি মানুষ বাংলায় কথা বলেন" },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ", script: "other", sampleText: "ನಮಸ್ಕಾರ ಕನ್ನಡ ಭಾಷೆ ಕರ್ನಾಟಕದ ಭಾಷೆ ಕನ್ನಡ ಸಾಹಿತ್ಯ ತುಂಬಾ ಶ್ರೀಮಂತ ನಮ್ಮ ಭಾಷೆ ನಮ್ಮ ಹೆಮ್ಮೆ ಕನ್ನಡ ನಾಡಿನ ಸಂಸ್ಕೃತಿ ವಿಶ್ವ ಮಟ್ಟದಲ್ಲಿ ಹೆಸರು ಪಡೆದಿದೆ" },
  { code: "ml", name: "Malayalam", nativeName: "മലയാളം", script: "other", sampleText: "നമസ്കാരം മലയാളം കേരളസംസ്ഥാനത്തിന്റെ ഭാഷയാണ് മലയാള സാഹിത്യം വളരെ സമ്പന്നമാണ് നമ്മുടെ ഭാഷ നമ്മുടെ അഭിമാനം" },
  { code: "pa", name: "Punjabi", nativeName: "ਪੰਜਾਬੀ", script: "other", sampleText: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਪੰਜਾਬ ਦੀ ਸ਼ਾਨ ਹੈ ਪੰਜਾਬੀ ਸਾਹਿਤ ਬਹੁਤ ਅਮੀਰ ਹੈ ਸਾਡੀ ਭਾਸ਼ਾ ਸਾਡੀ ਪਹਿਚਾਣ ਹੈ" },
  { code: "or", name: "Odia", nativeName: "ଓଡ଼ିଆ", script: "other", sampleText: "ନମସ୍କାର ଓଡ଼ିଆ ଓଡ଼ିଶାର ଭାଷା ଏହା ଏକ ସମୃଦ୍ଧ ଭାଷା ଆମ ଭାଷା ଆମ ଗର୍ବ ଓଡ଼ିଆ ସ୍ ଓଡ଼ିଶ ଅ ମ ଗ" },
  { code: "as", name: "Assamese", nativeName: "অসমীয়া", script: "other", sampleText: "নমস্কাৰ অসমীয়া অসমৰ ভাষা এইটো এটা চমৃদ্ধ ভাষা আমাৰ ভাষা আমাৰ গৌৰৱ অসমীয়া সংস্কৃতি বিশ্বত প্ৰসিদ্ধ" },
  { code: "ur", name: "Urdu", nativeName: "اردو", script: "arabic", sampleText: "آداب اردو پاکستان اور بھارت کی زبان ہے اردو ادب بہت امیر ہے ہماری زبان ہماری پہچان ہے اردو شاعری دنیا میں مشہور ہے" },
  { code: "sa", name: "Sanskrit", nativeName: "संस्कृत", script: "devanagari", sampleText: "नमस्ते संस्कृत भाषा प्राचीना अस्ति इयं देववाणी इति कथ्यते संस्कृत साहित्यं बहु समृद्धम् अस्ति वेदाः उपनिषदश्च संस्कृते लिखिताः सन्ति" },
  { code: "si", name: "Sinhala", nativeName: "සිංහල", script: "other", sampleText: "ආයුබෝවන් සිංහල ශ්‍රී ලංකාවේ භාෂාවයි සිංහල සාහිත්‍යය ඉතා සෞභාග්‍යමත් ය අපේ භාෂාව අපේ ආඩම්බරය" },
  { code: "ne", name: "Nepali", nativeName: "नेपाली", script: "devanagari", sampleText: "नमस्ते नेपाली नेपालको भाषा हो नेपाली साहित्य धेरै समृद्ध छ हाम्रो भाषा हाम्रो पहिचान हो नेपाल सुन्दर देश हो" },
  { code: "dz", name: "Dzongkha", nativeName: "རྫོང་ཁ", script: "other", sampleText: "བཀྲ་ཤིས་བདེ་ལེགས་རྫོང་ཁ་འབྲུག་གི་ཀྱི་རྒྱལ་ཡོངས་སྐད། འདི་ཡི་ཡིག་གཟུགས་བོད་ཡིག་དང་འདྲ། ཞིང་ཁམས་འདིའི་ཆོས་སྐད།" },
  // European Languages - Latin Script
  { code: "en", name: "English", nativeName: "English", script: "latin", sampleText: "the quick brown fox jumps over the lazy dog and the five boxing wizards jump quickly pack my box with five dozen liquor jugs how vexingly quick daft zebras jump" },
  { code: "es", name: "Spanish", nativeName: "Español", script: "latin", sampleText: "el rápido zorro marrón salta sobre el perro perezoso hola mundo bienvenidos a este hermoso planeta la vida es bella y llena de colores el español es el idioma del amor" },
  { code: "fr", name: "French", nativeName: "Français", script: "latin", sampleText: "le renard brun rapide saute par dessus le chien paresseux bonjour monde la vie est belle et pleine de couleurs le français est la langue de lamour et de la culture" },
  { code: "de", name: "German", nativeName: "Deutsch", script: "latin", sampleText: "der schnelle braune fuchs springt über den faulen hund guten morgen welt das leben ist schön und voller farben die deutsche sprache ist reich und komplex" },
  { code: "it", name: "Italian", nativeName: "Italiano", script: "latin", sampleText: "il veloce volpe marrone salta sopra il cane pigro ciao mondo la vita è bella e piena di colori la lingua italiana è la musica delle lingue europee" },
  { code: "pt", name: "Portuguese", nativeName: "Português", script: "latin", sampleText: "a rápida raposa marrom salta sobre o cão preguiçoso olá mundo a vida é bela e cheia de cores a língua portuguesa é falada em muitos países do mundo" },
  { code: "nl", name: "Dutch", nativeName: "Nederlands", script: "latin", sampleText: "de snelle bruine vos springt over de luie hond hallo wereld het leven is mooi en vol kleuren de Nederlandse taal is een rijke en prachtige taal" },
  { code: "pl", name: "Polish", nativeName: "Polski", script: "latin", sampleText: "szybki brązowy lis skacze nad leniwym psem cześć świat życie jest piękne i pełne kolorów język polski jest bogatym i złożonym językiem słowiańskim" },
  { code: "cs", name: "Czech", nativeName: "Čeština", script: "latin", sampleText: "rychlá hnědá liška skáče přes líného psa ahoj světe život je krásný a plný barev česky jazyk je bohatý slovanský jazyk s dlouhou historií" },
  { code: "sk", name: "Slovak", nativeName: "Slovenčina", script: "latin", sampleText: "rýchla hnedá líška skáče cez lenivého psa ahoj svete život je krásny a plný farieb slovenský jazyk je slovanský jazyk strednej európy" },
  { code: "sv", name: "Swedish", nativeName: "Svenska", script: "latin", sampleText: "den snabba bruna räven hoppar över den lata hunden hej världen livet är vackert och fullt av färger svenska är ett nordgermanskt språk" },
  { code: "no", name: "Norwegian", nativeName: "Norsk", script: "latin", sampleText: "den raske brune reven hopper over den late hunden hei verden livet er vakkert og fullt av farger norsk er et nordgermansk skandinavisk språk" },
  { code: "da", name: "Danish", nativeName: "Dansk", script: "latin", sampleText: "den hurtige brune ræv hopper over den dovne hund hej verden livet er smukt og fuldt af farver dansk er et nordgermansk skandinavisk sprog" },
  { code: "fi", name: "Finnish", nativeName: "Suomi", script: "latin", sampleText: "nopea ruskea kettu hyppää laiskan koiran yli hei maailma elämä on kaunista ja täynnä värejä suomi on suomalais ugrilainen kieli" },
  { code: "hu", name: "Hungarian", nativeName: "Magyar", script: "latin", sampleText: "a gyors barna róka átugorja a lusta kutyát szia világ az élet szép és tele van színekkel a magyar egy uráli finnugor nyelv" },
  { code: "ro", name: "Romanian", nativeName: "Română", script: "latin", sampleText: "vulpea brună rapidă sare peste câinele leneș salut lume viața este frumoasă și plină de culori limba română este o limbă romanică" },
  { code: "bg", name: "Bulgarian", nativeName: "Български", script: "cyrillic", sampleText: "бързата кафява лисица прескача мързеливото куче здравей свят животът е красив и пълен с цветове българският език е славянски език" },
  { code: "hr", name: "Croatian", nativeName: "Hrvatski", script: "latin", sampleText: "brza smeđa lisica preskače lijenost psa zdravo svijete život je lijep i pun boja hrvatski je južnoslavenski jezik koji se piše latinicom" },
  { code: "sr", name: "Serbian", nativeName: "Српски", script: "cyrillic", sampleText: "брза смеђа лисица прескаче ленствог пса здраво свете живот је леп и пун боја српски је јужнословенски језик" },
  { code: "sl", name: "Slovenian", nativeName: "Slovenščina", script: "latin", sampleText: "hitra rjava lisica preskoči lenobnega psa pozdravljeni svet življenje je lepo in polno barv slovenščina je južnoslovanski jezik" },
  { code: "lt", name: "Lithuanian", nativeName: "Lietuvių", script: "latin", sampleText: "greita ruda lapė peršoka tinginį šunį labas pasaulis gyvenimas yra gražus ir pilnas spalvų lietuvių kalba yra baltų kalbų grupė" },
  { code: "lv", name: "Latvian", nativeName: "Latviešu", script: "latin", sampleText: "ātrā brūnā lapsa pārlido slinkajam sunim sveika pasaule dzīve ir skaista un pilna krāsu latviešu valoda pieder Baltijas valodu grupai" },
  { code: "et", name: "Estonian", nativeName: "Eesti", script: "latin", sampleText: "kiire pruun rebane hüppab laisa koera üle tere maailm elu on ilus ja täis värve eesti keel on soome ugri keelkonda kuuluv keel" },
  { code: "ga", name: "Irish", nativeName: "Gaeilge", script: "latin", sampleText: "léimeann an sionnach donn tapa thar an madra leisciúil dia dhuit a dhomhan tá an saol álainn agus lán de dhathanna tá an Ghaeilge ina teanga cheiltis" },
  { code: "cy", name: "Welsh", nativeName: "Cymraeg", script: "latin", sampleText: "mae y llwynog brown cyflym yn neidio dros y ci diog helo byd mae bywyd yn hardd ac yn llawn lliwiau mae cymraeg yn iaith geltaidd" },
  { code: "eu", name: "Basque", nativeName: "Euskara", script: "latin", sampleText: "azeri marroi azkarra nagia txakurraren gainetik jauzi egiten du kaixo mundua bizitza ederra eta kolorez betea da euskara isolamendu hizkuntza bat da" },
  { code: "ca", name: "Catalan", nativeName: "Català", script: "latin", sampleText: "la guineu marró ràpida salta per sobre el gos mandrós hola món la vida és bella i plena de colors el català és una llengua romànica" },
  { code: "gl", name: "Galician", nativeName: "Galego", script: "latin", sampleText: "a rápida raposa marrón salta sobre o preguiceiro can ola mundo a vida é fermosa e chea de cores o galego é unha lingua románica" },
  { code: "is", name: "Icelandic", nativeName: "Íslenska", script: "latin", sampleText: "fljótur brúnn refur hoppar yfir latan hundinn halló heimur lífið er fallegt og fullt af litum íslenska er norrænt germanskt tungumál" },
  { code: "mt", name: "Maltese", nativeName: "Malti", script: "latin", sampleText: "il volpi kannella veloċi taqbeż il kelb pigru bongu dinja il ħajja hija sabiħa u mimlija kuluri il malti huwa lingwa semitika" },
  { code: "lb", name: "Luxembourgish", nativeName: "Lëtzebuergesch", script: "latin", sampleText: "de séier brong Fuuss spréngt iwwert de faulen Hond moie Welt d Leben ass schéin a voll Faarwen d Lëtzebuerger Sprooch ass e germaanesch" },
  { code: "af", name: "Afrikaans", nativeName: "Afrikaans", script: "latin", sampleText: "die vinnige bruin jakkals spring oor die lui hond hallo wêreld die lewe is mooi en vol kleure afrikaans is n germaanse taal ontwikkel in suid afrika" },
  // Slavic with Cyrillic
  { code: "ru", name: "Russian", nativeName: "Русский", script: "cyrillic", sampleText: "быстрая коричневая лиса прыгает через ленивую собаку привет мир жизнь прекрасна и полна красок русский язык один из самых богатых языков мира" },
  { code: "uk", name: "Ukrainian", nativeName: "Українська", script: "cyrillic", sampleText: "швидка коричнева лисиця стрибає через ледачого пса привіт світ життя прекрасне і сповнене барв українська мова слов янська мова" },
  { code: "be", name: "Belarusian", nativeName: "Беларуская", script: "cyrillic", sampleText: "хуткая карычневая ліса скача праз лянівага сабаку прывітанне свет жыццё цудоўна і поўна фарбаў беларуская мова ўсходнеславянская мова" },
  { code: "mk", name: "Macedonian", nativeName: "Македонски", script: "cyrillic", sampleText: "брзата кафена лисица прескокнува мрзливото куче здраво свете животот е убав и полн со бои македонскиот јазик е јужнословенски јазик" },
  { code: "kk", name: "Kazakh", nativeName: "Қазақша", script: "cyrillic", sampleText: "жылдам қоңыр түлкі жалқау иттің үстінен атып өтеді сәлем дүние өмір сұлу және түрлі түсті қазақ тілі түркі тілдер тобына жатады" },
  { code: "ky", name: "Kyrgyz", nativeName: "Кыргызча", script: "cyrillic", sampleText: "тез жаш кызыл түлкү жалкоо иттин үстүнөн секирип өтөт саламатсызбы дүйнө жашоо кооз жана түстүү кыргыз тили түрк тил тобуна кирет" },
  { code: "mn", name: "Mongolian", nativeName: "Монгол", script: "cyrillic", sampleText: "хурдан хүрэн үнэг залхуу нохойн дээр үсэрч гардаг сайн уу ертөнц амьдрал үзэсгэлэнтэй монгол хэл алтай хэлний гэр бүлд хамаардаг" },
  // Middle Eastern
  { code: "ar", name: "Arabic", nativeName: "العربية", script: "arabic", sampleText: "الثعلب البني السريع يقفز فوق الكلب الكسول مرحبا بالعالم الحياة جميلة ومليئة بالألوان اللغة العربية لغة القرآن الكريم وهي من أقدم اللغات في العالم" },
  { code: "fa", name: "Persian", nativeName: "فارسی", script: "arabic", sampleText: "روباه قهوه ای سریع از روی سگ تنبل می پرد سلام دنیا زندگی زیباست و پر از رنگ است زبان فارسی یکی از قدیمی ترین زبان های جهان است" },
  { code: "he", name: "Hebrew", nativeName: "עברית", script: "other", sampleText: "השועל החום המהיר קופץ מעל הכלב העצלן שלום עולם החיים יפים ומלאים בצבעים השפה העברית היא שפה שמית עתיקה שהתחדשה במאה העשרים" },
  { code: "tr", name: "Turkish", nativeName: "Türkçe", script: "latin", sampleText: "hızlı kahverengi tilki tembel köpeğin üzerinden atlar merhaba dünya hayat güzel ve renklerle dolu türkçe batı oğuz türkçesi dil ailesine ait bir dildir" },
  // East Asian
  { code: "zh", name: "Chinese (Simplified)", nativeName: "中文 (简体)", script: "chinese", sampleText: "快速的棕色狐狸跳过了懒狗 你好世界 生活是美丽的 充满了色彩 中文是世界上使用人口最多的语言之一 汉字是象形文字 有着悠久的历史" },
  { code: "zh-TW", name: "Chinese (Traditional)", nativeName: "中文 (繁體)", script: "chinese", sampleText: "快速的棕色狐狸跳過了懶狗 你好世界 生活是美麗的 充滿了色彩 中文是世界上使用人口最多的語言之一 漢字是象形文字 有著悠久的歷史" },
  { code: "ja", name: "Japanese", nativeName: "日本語", script: "japanese", sampleText: "すばしっこい茶色のキツネが怠け者の犬を飛び越えた こんにちは世界 日本語は美しい言語です 日本文化は世界中で愛されています" },
  { code: "ko", name: "Korean", nativeName: "한국어", script: "korean", sampleText: "빠른 갈색 여우가 게으른 개 위를 뛰어넘는다 안녕 세상아 삶은 아름답고 색깔이 넘친다 한국어는 한반도에서 사용되는 언어입니다" },
  // Southeast Asian
  { code: "vi", name: "Vietnamese", nativeName: "Tiếng Việt", script: "latin", sampleText: "con cáo nâu nhanh nhẹn nhảy qua con chó lười biếng xin chào thế giới cuộc sống thật tuyệt vời và đầy màu sắc tiếng việt là ngôn ngữ của việt nam" },
  { code: "th", name: "Thai", nativeName: "ภาษาไทย", script: "other", sampleText: "สุนัขจิ้งจอกสีน้ำตาลวิ่งข้ามสุนัขขี้เกียจ สวัสดีโลก ชีวิตสวยงามและเต็มไปด้วยสีสัน ภาษาไทยเป็นภาษาประจำชาติของประเทศไทย" },
  { code: "id", name: "Indonesian", nativeName: "Bahasa Indonesia", script: "latin", sampleText: "rubah coklat yang cepat melompati anjing malas halo dunia kehidupan itu indah dan penuh warna bahasa indonesia adalah bahasa persatuan bangsa indonesia" },
  { code: "ms", name: "Malay", nativeName: "Bahasa Melayu", script: "latin", sampleText: "musang perang yang pantas melompati anjing malas helo dunia kehidupan itu indah dan penuh warna bahasa melayu adalah bahasa rasmi malaysia" },
  { code: "tl", name: "Filipino", nativeName: "Filipino", script: "latin", sampleText: "ang mabilis na kayumangging lobo ay lumundag sa tamad na aso kamusta mundo ang buhay ay maganda at puno ng kulay wikang pilipino ay pambansang wika" },
  { code: "km", name: "Khmer", nativeName: "ខ្មែរ", script: "other", sampleText: "ចចក ត្នោត ខៀវ លឿន លោត ឆ្លងលើ ឆ្កែ ខ្ជិល ជំរាប សួរ ពិភព លោក ជីវិត គឺ ស្អាត ហើយ ពោរ ពេញ ដោយ ពណ៌" },
  { code: "lo", name: "Lao", nativeName: "ພາສາລາວ", script: "other", sampleText: "ດ ຈ ກ ນ ໄ ວ ຂ ໂ ດ ດ ໝ າ ເ ຊ ື່ ອ ງ ທ ຳ ສ ວ ັ ດ ດ ີ ໂ ລ ກ ຊ ີ ວ ິ ດ ສ ວ ຍ ງ າ ມ" },
  { code: "my", name: "Burmese", nativeName: "မြန်မာဘာသာ", script: "other", sampleText: "မြန်မာဘာသာ မြန်မာနိုင်ငံ၏ တရားဝင်ဘာသာစကားဖြစ်သည် မင်္ဂလာပါ ကမ္ဘာ ဘဝသည် လှပ၍ အရောင်အသွေးများ ပြည့်နှက်နေသည်" },
  { code: "jv", name: "Javanese", nativeName: "Basa Jawa", script: "latin", sampleText: "asu abang sing cepet mlumpat ngilewati asu kesed halo donya urip iku endah lan kebak warna basa jawa iku basa daerah kang paling akeh dituturana" },
  { code: "su", name: "Sundanese", nativeName: "Basa Sunda", script: "latin", sampleText: "careuh coklat anu gancang lumpat ngaliwatan anjing anu kesed halo dunya kahirupan éndah sareng pinuh ku warna basa sunda ngagunakeun aksara sunda" },
  // African Languages
  { code: "sw", name: "Swahili", nativeName: "Kiswahili", script: "latin", sampleText: "mbweha wa kahawia anayeenda kwa kasi anaruka juu ya mbwa mvivu hujambo dunia maisha ni mazuri na yenye rangi kiswahili ni lugha ya waafrika mashariki" },
  { code: "am", name: "Amharic", nativeName: "አማርኛ", script: "other", sampleText: "ፈጣን ቡናማ ቀበሮ ሰነፍ ውሻን ዘሏ ሰላም ዓለም ህይወት ቆንጆ ናት እና ቀለሞችን ሞልቷት አማርኛ የኢትዮጵያ ብሔራዊ ቋንቋ ነው" },
  { code: "ha", name: "Hausa", nativeName: "Hausa", script: "latin", sampleText: "doguwar fox mai saurin gudu ta haye kan yankan kyankyaso sannu duniya rayuwa tana da kyau kuma cike da launuka harshen hausa yana kudu maso yammacin afirka" },
  { code: "yo", name: "Yoruba", nativeName: "Yorùbá", script: "latin", sampleText: "kọlọkọlọ brown ti o yara fẹ gba aja alairika kọja ẹ káàbọ ayé aye jẹ ẹwà ó sì kún fun awọ èdè yorùbá jẹ ọkan ninu awọn ede ti o tobi julọ ni afirika" },
  { code: "ig", name: "Igbo", nativeName: "Asụsụ Igbo", script: "latin", sampleText: "oke ọṅụ nke ọṅụ na ọṅụ na alaala n elu nkịta na enweghị ike ọ dị mma ụwa ndụ dị mma ma ọ dị na agba asụsụ igbo bu asụsụ nke ndị igbo" },
  { code: "zu", name: "Zulu", nativeName: "isiZulu", script: "latin", sampleText: "impungushe emnyama enamandla iyagxuma phezu kwenja engasikhathali sawubona mhlaba impilo iyinhle futhi igcwele izibhakabhaka isizulu yilulimi lwabantu baseningizimu africa" },
  { code: "xh", name: "Xhosa", nativeName: "isiXhosa", script: "latin", sampleText: "impungushe emthubi ekhawulezayo iyagxuma phezu kwenja evilikaqayo molo hlabathi ubomi buhle kwaye buzele iimbala isixhosa lulwimi lwabantu baseningizimu africa" },
  { code: "so", name: "Somali", nativeName: "Soomaali", script: "latin", sampleText: "dacawo casaan ah oo degdeg ah ayaa xoog ugu dhex booday eey xun nabadgelyo adduunka nolosha waa qurux badan oo midab leh af soomaali waa luqadda soomaalida" },
  { code: "rw", name: "Kinyarwanda", nativeName: "Ikinyarwanda", script: "latin", sampleText: "imbawa ya brown ikidende irasimbukira imbwa inengwa mwiriwe si isi ubuzima burashimishije kandi bugwira amabara ikinyarwanda ni ururimi rwa leta yo rwanda" },
  // More South/Central Asian
  { code: "az", name: "Azerbaijani", nativeName: "Azərbaycan", script: "latin", sampleText: "sürətli qəhvəyi tülkü tənbəl köpəyin üstündən atladı salam dünya həyat gözəl ve rəngarəngdir azərbaycan dili türk dil ailəsinə aiddir" },
  { code: "ka", name: "Georgian", nativeName: "ქართული", script: "other", sampleText: "სწრაფი ყავისფერი მელა ზარმაც ძაღლს გადახტა გამარჯობა სამყაროს სიცოცხლე ლამაზია და ფერებით სავსე ქართული ენა ქართველური ენების ოჯახს მიეკუთვნება" },
  { code: "hy", name: "Armenian", nativeName: "Հայերեն", script: "other", sampleText: "արագ շագանակագույն աղվեսը ցատկեց ծույլ շան վրայով բարև աշխարհ կյանքը գեղեցիկ է ու լի գույներով հայերենը հայ ժողովրդի մայրենի լեզուն է" },
  { code: "uz", name: "Uzbek", nativeName: "Oʻzbek", script: "latin", sampleText: "tez yuruvchi jigarrang tulki dangasa itning ustidan sakrab otdi salom dunyo hayot go zal va ranglar bilan to la o zbek tili turk tillar oilasiga kiradi" },
  { code: "tk", name: "Turkmen", nativeName: "Türkmen", script: "latin", sampleText: "çalt goňur tilki ýalta itiň üstünden böküp geçdi salam dünýä ýaşaýyş owadan we reňkli türkmen dili türki dilleriň günbatar oguz şahasyna degişlidir" },
  { code: "tg", name: "Tajik", nativeName: "Тоҷикӣ", script: "cyrillic", sampleText: "рӯбоҳи қарангӯш тезрав аз болои сагхи танбал парид салом ба ҷаҳон зиндагӣ зебост ва пур аз рангҳост забони тоҷикӣ ба гурӯҳи забонҳои эронӣ тааллуқ дорад" },
  { code: "ps", name: "Pashto", nativeName: "پښتو", script: "arabic", sampleText: "ژر نسواري مرغه د تنبل سپي پر سر وپرخوت سلام نړۍ ژوند ښکلی دی او د رنگونو ډک دی پښتو یو له هغو لرغونو ژبو سره ده چي افغانستان کي ويل کيږي" },
  { code: "ku", name: "Kurdish", nativeName: "Kurdî", script: "latin", sampleText: "roviya qehweyî ya bilez ji ser kûçika tembel re firiya silav dinya jiyan xweş e û tije reng e zimanê kurdî zimanekî îrânî ya bakurî ye" },
  // Constructed / Others
  { code: "eo", name: "Esperanto", nativeName: "Esperanto", script: "latin", sampleText: "la bruna rapida vulpo saltis trans la maldiligenta hundo saluton mondo la vivo estas bela kaj plena de koloroj esperanto estas planlingvo kreita por internacia komunikado" },
  { code: "la", name: "Latin", nativeName: "Latina", script: "latin", sampleText: "vulpes velocissima brunnea super canem pigrum saluit salve mundus vita pulchra est et plena colorum lingua latina antiqua est et mater linguarum romanarum" },
  { code: "sq", name: "Albanian", nativeName: "Shqip", script: "latin", sampleText: "dhelpra e shpejtë kafe kërcen mbi qenin dembel përshëndetje botë jeta është e bukur dhe plot ngjyra gjuha shqipe është gjuhë indoevropiane" },
  // Pacific
  { code: "mi", name: "Maori", nativeName: "Te Reo Māori", script: "latin", sampleText: "ka tere te kurī parauri i tāheke ana i runga i te kurī māngere tēnā koe ao mārama he ātaahua te ao nei ā he maha ngā tae" },
  { code: "sm", name: "Samoan", nativeName: "Gagana fa a Sāmoa", script: "latin", sampleText: "o le fox vaveʻeʻe lanu mumu e uia luga o le maʻi ago talofa le lalolagi o le olaga e matagofie ma fiafia lanu gagana samoa o le gagana o suamalie" },
  { code: "haw", name: "Hawaiian", nativeName: "ʻŌlelo Hawaiʻi", script: "latin", sampleText: "ua lele ka ʻīlio ʻōmaʻomaʻo māoli ma luna o ka ʻīlio pōloli aloha kākou ke ao nei maiau ka ola ʻōlelo hawaiʻi ka ʻōlelo makuahine o hawaiʻi" },
  { code: "fj", name: "Fijian", nativeName: "Na Vosa Vakaviti", script: "latin", sampleText: "e cegu mai na vuaka na kaloka vinaka vakalevu na vanua e dina ni bula vakadewa na vosa vakaviti ko koya na vosa vakaorisi ni viti" },
  // More Constructed  
  { code: "fy", name: "West Frisian", nativeName: "Frysk", script: "latin", sampleText: "de fluche brune foks springe oer de lûle hûn hallo wrâld it libben is moai en fol fan kleuren it westfrysk is in germanske taal" },
  { code: "sc", name: "Sardinian", nativeName: "Sardu", script: "latin", sampleText: "sa murigliona brùnida e ratta colat asuba de su cani pigru salude mundu sa vida est bella e china de colors su sardu est una limba romànica" },
  { code: "oc", name: "Occitan", nativeName: "Occitan", script: "latin", sampleText: "lo renard brun rapid salta per dessús lo chiin peresós bonjorn mundo la vida es bela e plena de colors l occitan es una lenga romanica o neo latina" },
  { code: "br", name: "Breton", nativeName: "Brezhoneg", script: "latin", sampleText: "ar louarn gell buan a lamm dreist ar ki diog demat bed ar vuhez a zo kaer ha leun a livioù ar brezhoneg a zo ur yezh keltiek" },
  { code: "fo", name: "Faroese", nativeName: "Føroyskt", script: "latin", sampleText: "tann skjóti brúni revurin hoppar yvir tann dovna hundinn halló heimur lívið er fagurt og fult av litum føroyskt er eitt norðurgermanskt mál" },
  { code: "rm", name: "Romansh", nativeName: "Rumantsch", script: "latin", sampleText: "la volp bruna svelta sa sgulpa sur il chaun pigren allegra mund la vita è bella e plaina da colurs il rumantsch è ina lingua romanica da la svizra" },
  { code: "bs", name: "Bosnian", nativeName: "Bosanski", script: "latin", sampleText: "brza smeđa lisica preskakuje lijenost psa zdravo svete život je lijep i pun boja bosanski jezik je južnoslavenski jezik koji se piše latinicom" },
  { code: "wls", name: "Walloon", nativeName: "Walon", script: "latin", sampleText: "el renård broulet vike sovår el tchén perèsseus bondjoû monde el veye est bèle et plinde di coleurs li walon est ene langue romane" },
  // More diverse
  { code: "ay", name: "Aymara", nativeName: "Aymar Aru", script: "latin", sampleText: "achachilaxa lurawa allchu larani sarnaqata phaxsimpi amuyu uñstawi suma sarxañataki aymara aru qullasuyu jaqinakana arupaxa" },
  { code: "qu", name: "Quechua", nativeName: "Runa Simi", script: "latin", sampleText: "puka atuqmi puriy paqarimanta wañu aychata hap iy hina rimanki runa simi andiskunap hatun simim" },
  { code: "gn", name: "Guaraní", nativeName: "Avañe ẽ", script: "latin", sampleText: "aguara yvate hepyoky pumbero rehe osapukai tereré ha pykachu guive guarani ñee paraguay rembiporâ" },
  { code: "ny", name: "Chichewa", nativeName: "Chichewa", script: "latin", sampleText: "mboni yolimba yolimba ya brown inasika pamwamba pa galu wokhala bwino dzuwa dziko la moyo ndiwokongola ndi wodzaza ndi mabarwe chichewa ndi chilankhulo cha malawi" },
  { code: "mg", name: "Malagasy", nativeName: "Malagasy", script: "latin", sampleText: "ny amboa mena haingana dia nifototra tao ambonin ny alika kamo salama izao tontolo izao ny fiainana dia tsara sy feno loko ny teny malagasy dia teny nasionalin i madagasikara" },
  { code: "sn", name: "Shona", nativeName: "ChiShona", script: "latin", sampleText: "gava rakajeka rakamhanya pamusoro pezimbwa raro makadii nyika upenyu yakanaka uye yazere mavara chishona mutauro wevazhinji veZimbabwe" },
  // Computer
  { code: "tsx", name: "TypeScript/React", nativeName: "TypeScript", script: "latin", sampleText: "const App: React.FC = () => { const [count, setCount] = useState(0); return <button onClick={() => setCount(c => c + 1)}>{count}</button>; };" },
  { code: "py", name: "Python", nativeName: "Python", script: "latin", sampleText: "def fibonacci(n: int) -> int:\n    if n <= 1:\n        return n\n    return fibonacci(n - 1) + fibonacci(n - 2)\n\nresult = [fibonacci(i) for i in range(10)]" },
  { code: "rs", name: "Rust", nativeName: "Rust", script: "latin", sampleText: 'fn main() { let mut v: Vec<i32> = Vec::new(); v.push(1); v.push(2); let sum: i32 = v.iter().sum(); println!("Sum: {}", sum); }' },
  { code: "go", name: "Go", nativeName: "Golang", script: "latin", sampleText: 'package main\nimport "fmt"\nfunc main() {\n    for i := 0; i < 10; i++ {\n        fmt.Println(i)\n    }\n}' }
];
const LANGUAGE_GROUPS = [
  { label: "🇮🇳 Indian Languages", codes: ["ta", "te", "mr", "gu", "hi", "bn", "kn", "ml", "pa", "or", "as", "ur", "sa", "si", "ne", "dz"] },
  { label: "🌍 African Languages", codes: ["sw", "am", "ha", "yo", "ig", "zu", "xh", "so", "rw", "ny", "mg", "sn"] },
  { label: "🌏 East Asian", codes: ["zh", "zh-TW", "ja", "ko", "mn"] },
  { label: "🌏 Southeast Asian", codes: ["vi", "th", "id", "ms", "tl", "km", "lo", "my", "jv", "su"] },
  { label: "🌍 Middle East & Central Asia", codes: ["ar", "fa", "he", "tr", "az", "ka", "hy", "uz", "tk", "tg", "ps", "ku"] },
  { label: "🌍 Pacific", codes: ["mi", "sm", "haw", "fj"] },
  { label: "🌎 Americas Indigenous", codes: ["ay", "qu", "gn"] },
  { label: "🇪🇺 Western European", codes: ["en", "es", "fr", "de", "it", "pt", "nl", "da", "sv", "no", "fi", "is", "ga", "cy", "eu", "ca", "gl", "mt", "lb", "af", "eo", "la", "sq"] },
  { label: "🇪🇺 Central & Eastern European", codes: ["pl", "cs", "sk", "hu", "ro", "hr", "bs", "sl", "mk", "lt", "lv", "et", "bg", "sr"] },
  { label: "🇷🇺 Slavic (Cyrillic)", codes: ["ru", "uk", "be", "kk", "ky"] },
  { label: "🔤 Regional", codes: ["fy", "sc", "oc", "br", "fo", "rm", "wls"] },
  { label: "💻 Programming Languages", codes: ["tsx", "py", "rs", "go"] }
];

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const THEMES = [
  {
    id: "midnight",
    name: "🌑 Midnight",
    bg: "#0a0a0f",
    surface: "rgba(255,255,255,0.04)",
    border: "rgba(255,255,255,0.06)",
    text: "#e2e8f0",
    muted: "#475569",
    primary: "#818cf8",
    correct: "#34d399",
    incorrect: "#f87171",
    accent: "#818cf8"
  },
  {
    id: "dracula",
    name: "🧛 Dracula",
    bg: "#282a36",
    surface: "rgba(68,71,90,0.6)",
    border: "rgba(98,114,164,0.4)",
    text: "#f8f8f2",
    muted: "#6272a4",
    primary: "#bd93f9",
    correct: "#50fa7b",
    incorrect: "#ff5555",
    accent: "#ff79c6"
  },
  {
    id: "nord",
    name: "🧊 Nord",
    bg: "#2e3440",
    surface: "rgba(59,66,82,0.6)",
    border: "rgba(76,86,106,0.5)",
    text: "#eceff4",
    muted: "#4c566a",
    primary: "#88c0d0",
    correct: "#a3be8c",
    incorrect: "#bf616a",
    accent: "#81a1c1"
  },
  {
    id: "solarized",
    name: "☀️ Solarized",
    bg: "#002b36",
    surface: "rgba(0,43,54,0.8)",
    border: "rgba(7,54,66,0.6)",
    text: "#839496",
    muted: "#586e75",
    primary: "#268bd2",
    correct: "#859900",
    incorrect: "#dc322f",
    accent: "#2aa198"
  },
  {
    id: "rose-pine",
    name: "🌹 Rosé Pine",
    bg: "#191724",
    surface: "rgba(31,29,46,0.7)",
    border: "rgba(64,60,83,0.5)",
    text: "#e0def4",
    muted: "#6e6a86",
    primary: "#c4a7e7",
    correct: "#9ccfd8",
    incorrect: "#eb6f92",
    accent: "#f6c177"
  },
  {
    id: "catppuccin",
    name: "🐱 Catppuccin",
    bg: "#1e1e2e",
    surface: "rgba(49,50,68,0.7)",
    border: "rgba(69,71,90,0.5)",
    text: "#cdd6f4",
    muted: "#6c7086",
    primary: "#cba6f7",
    correct: "#a6e3a1",
    incorrect: "#f38ba8",
    accent: "#89dceb"
  },
  {
    id: "gruvbox",
    name: "🍂 Gruvbox",
    bg: "#282828",
    surface: "rgba(50,48,47,0.7)",
    border: "rgba(80,73,69,0.5)",
    text: "#ebdbb2",
    muted: "#928374",
    primary: "#d79921",
    correct: "#98971a",
    incorrect: "#cc241d",
    accent: "#689d6a"
  },
  {
    id: "tokyo-night",
    name: "🌆 Tokyo Night",
    bg: "#1a1b26",
    surface: "rgba(26,27,38,0.8)",
    border: "rgba(41,46,66,0.6)",
    text: "#c0caf5",
    muted: "#565f89",
    primary: "#7aa2f7",
    correct: "#9ece6a",
    incorrect: "#f7768e",
    accent: "#bb9af7"
  },
  {
    id: "monokai",
    name: "🎨 Monokai",
    bg: "#272822",
    surface: "rgba(57,58,52,0.7)",
    border: "rgba(75,70,58,0.5)",
    text: "#f8f8f2",
    muted: "#75715e",
    primary: "#a6e22e",
    correct: "#66d9e8",
    incorrect: "#f92672",
    accent: "#fd971f"
  },
  {
    id: "light",
    name: "☀️ Light",
    bg: "#f8fafc",
    surface: "rgba(255,255,255,0.9)",
    border: "rgba(0,0,0,0.08)",
    text: "#1e293b",
    muted: "#94a3b8",
    primary: "#6366f1",
    correct: "#16a34a",
    incorrect: "#dc2626",
    accent: "#8b5cf6"
  }
];
const LanguageSelector = ({ selected, onSelect, theme }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef(null);
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  const filtered = useMemo(() => {
    if (!search) return LANGUAGE_GROUPS;
    const q = search.toLowerCase();
    return LANGUAGE_GROUPS.map((g) => ({
      ...g,
      codes: g.codes.filter((code) => {
        const lang = LANGUAGES.find((l) => l.code === code);
        return lang && (lang.name.toLowerCase().includes(q) || lang.nativeName.toLowerCase().includes(q));
      })
    })).filter((g) => g.codes.length > 0);
  }, [search]);
  return /* @__PURE__ */ jsxs("div", { className: "relative", ref, children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setOpen((v) => !v),
        style: {
          background: theme.surface,
          border: `1px solid ${theme.border}`,
          color: theme.text
        },
        className: "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-80",
        children: [
          /* @__PURE__ */ jsx(Globe, { size: 14, style: { color: theme.primary } }),
          /* @__PURE__ */ jsx("span", { children: selected.name }),
          /* @__PURE__ */ jsx("span", { style: { color: theme.muted }, className: "text-xs font-normal", children: selected.nativeName }),
          /* @__PURE__ */ jsx(ChevronDown, { size: 12, style: { color: theme.muted }, className: cn("transition-transform", open && "rotate-180") })
        ]
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -8, scale: 0.97 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -8, scale: 0.97 },
        transition: { duration: 0.15 },
        style: {
          background: theme.bg,
          border: `1px solid ${theme.border}`,
          boxShadow: `0 20px 60px rgba(0,0,0,0.5)`
        },
        className: "absolute top-full mt-2 left-0 w-80 max-h-96 rounded-2xl overflow-hidden z-50 flex flex-col",
        children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 border-b", style: { borderColor: theme.border }, children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-3 py-2 rounded-xl", style: { background: theme.surface }, children: [
            /* @__PURE__ */ jsx(Search, { size: 13, style: { color: theme.muted } }),
            /* @__PURE__ */ jsx(
              "input",
              {
                autoFocus: true,
                value: search,
                onChange: (e) => setSearch(e.target.value),
                placeholder: "Search languages...",
                style: { background: "transparent", color: theme.text, outline: "none" },
                className: "flex-1 text-sm"
              }
            ),
            search && /* @__PURE__ */ jsx("button", { onClick: () => setSearch(""), children: /* @__PURE__ */ jsx(X, { size: 13, style: { color: theme.muted } }) })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "overflow-y-auto flex-1 p-2", children: filtered.map((group) => /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsx("div", { className: "px-3 py-1 text-xs font-bold tracking-wider", style: { color: theme.muted }, children: group.label }),
            group.codes.map((code) => {
              const lang = LANGUAGES.find((l) => l.code === code);
              if (!lang) return null;
              const isSelected = lang.code === selected.code;
              return /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => {
                    onSelect(lang);
                    setOpen(false);
                    setSearch("");
                  },
                  style: {
                    background: isSelected ? `${theme.primary}22` : "transparent",
                    color: isSelected ? theme.primary : theme.text
                  },
                  className: "w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 hover:opacity-80 transition-colors",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "font-semibold", children: lang.name }),
                    /* @__PURE__ */ jsx("span", { className: "text-xs opacity-60", children: lang.nativeName })
                  ]
                },
                code
              );
            })
          ] }, group.label)) })
        ]
      }
    ) })
  ] });
};
const ThemeSelector = ({ selected, onSelect, theme }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "relative", ref, children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setOpen((v) => !v),
        style: { background: theme.surface, border: `1px solid ${theme.border}`, color: theme.text },
        className: "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-80",
        children: [
          /* @__PURE__ */ jsx(Palette, { size: 14, style: { color: theme.primary } }),
          /* @__PURE__ */ jsx("span", { children: selected.name }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-1", children: [selected.primary, selected.correct, selected.incorrect].map((c, i) => /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full", style: { background: c } }, i)) }),
          /* @__PURE__ */ jsx(ChevronDown, { size: 12, style: { color: theme.muted }, className: cn("transition-transform", open && "rotate-180") })
        ]
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: -8, scale: 0.97 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -8, scale: 0.97 },
        transition: { duration: 0.15 },
        style: { background: theme.bg, border: `1px solid ${theme.border}`, boxShadow: `0 20px 60px rgba(0,0,0,0.5)` },
        className: "absolute top-full mt-2 right-0 w-56 rounded-2xl overflow-hidden z-50 p-2",
        children: THEMES.map((t) => /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => {
              onSelect(t);
              setOpen(false);
            },
            style: {
              background: t.id === selected.id ? `${theme.primary}22` : "transparent",
              color: t.id === selected.id ? theme.primary : theme.text
            },
            className: "w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium hover:opacity-80 transition-colors",
            children: [
              /* @__PURE__ */ jsx("span", { children: t.name }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
                /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full", style: { background: t.primary } }),
                /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full", style: { background: t.correct } }),
                /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full", style: { background: t.incorrect } })
              ] })
            ]
          },
          t.id
        ))
      }
    ) })
  ] });
};
const TypingEngine = ({ initialMode = "time" }) => {
  const [mode, setMode] = useState(initialMode);
  const [duration, setDuration] = useState(30);
  const [selectedLang, setSelectedLang] = useState(LANGUAGES.find((l) => l.code === "en"));
  const [selectedTheme, setSelectedTheme] = useState(THEMES[0]);
  const [text, setText] = useState("");
  const [typed, setTyped] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isFinished, setIsFinished] = useState(false);
  const [stats, setStats] = useState(null);
  const inputRef = useRef(null);
  const textRef = useRef(null);
  const initGame = useCallback(() => {
    const words = selectedLang.sampleText.split(" ");
    const count = mode === "time" ? 80 : 30;
    let newText = selectedLang.sampleText;
    if (words.length < count) {
      const repeated = [];
      while (repeated.length < count) repeated.push(...words);
      newText = repeated.slice(0, count).join(" ");
    }
    setText(newText);
    setTyped("");
    setStartTime(null);
    setTimeLeft(duration);
    setIsFinished(false);
    setStats(null);
    setTimeout(() => inputRef.current?.focus(), 50);
  }, [selectedLang, mode, duration]);
  useEffect(() => {
    initGame();
  }, [initGame]);
  useEffect(() => {
    if (!startTime || isFinished) return;
    if (mode !== "time") return;
    const id = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          finish();
          return 0;
        }
        return prev - 1;
      });
    }, 1e3);
    return () => clearInterval(id);
  }, [startTime, isFinished, mode]);
  const finish = useCallback(() => {
    if (isFinished) return;
    setIsFinished(true);
    setStartTime((prev) => {
      if (!prev) return prev;
      const elapsed = (Date.now() - prev) / 6e4;
      let correct = 0, incorrect = 0;
      typed.split("").forEach((ch, i) => {
        if (text[i] === ch) correct++;
        else incorrect++;
      });
      const rawWpm = Math.round(typed.length / 5 / Math.max(elapsed, 1e-3));
      const wpm = Math.round(correct / 5 / Math.max(elapsed, 1e-3));
      const accuracy = typed.length > 0 ? Math.round(correct / typed.length * 100) : 0;
      setStats({ wpm, accuracy, rawWpm, correct, incorrect });
      return prev;
    });
  }, [isFinished, typed, text]);
  const onInput = (e) => {
    const val = e.target.value;
    if (!startTime && val.length > 0) setStartTime(Date.now());
    setTyped(val);
    if (mode !== "time" && val.length >= text.length) finish();
  };
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--tf-bg", selectedTheme.bg);
    root.style.setProperty("--tf-surface", selectedTheme.surface);
    root.style.setProperty("--tf-border", selectedTheme.border);
    root.style.setProperty("--tf-text", selectedTheme.text);
    root.style.setProperty("--tf-muted", selectedTheme.muted);
    root.style.setProperty("--tf-primary", selectedTheme.primary);
    root.style.setProperty("--tf-correct", selectedTheme.correct);
    root.style.setProperty("--tf-incorrect", selectedTheme.incorrect);
    root.style.setProperty("--tf-accent", selectedTheme.accent);
    document.body.style.background = selectedTheme.bg;
    document.body.style.color = selectedTheme.text;
  }, [selectedTheme]);
  const t = selectedTheme;
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: { fontFamily: '"Inter", sans-serif', color: t.text },
      className: "min-h-screen py-10 px-4 transition-colors duration-500",
      onClick: () => inputRef.current?.focus(),
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 items-center justify-between", children: [
          /* @__PURE__ */ jsx("div", { className: "flex gap-1 p-1 rounded-2xl", style: { background: t.surface, border: `1px solid ${t.border}` }, children: ["time", "words", "quote", "developer"].map((m) => {
            const Icon = m === "time" ? Timer : m === "words" ? Hash : m === "quote" ? Quote : Code;
            return /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => setMode(m),
                style: {
                  background: mode === m ? t.primary : "transparent",
                  color: mode === m ? "#fff" : t.muted,
                  boxShadow: mode === m ? `0 2px 12px ${t.primary}44` : "none"
                },
                className: "flex items-center gap-1.5 px-5 py-2 rounded-xl text-sm font-bold transition-all",
                children: [
                  /* @__PURE__ */ jsx(Icon, { size: 13 }),
                  m.toUpperCase()
                ]
              },
              m
            );
          }) }),
          mode === "time" && /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: [15, 30, 60, 120].map((d) => /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => {
                setDuration(d);
                setTimeLeft(d);
                initGame();
              },
              style: {
                background: duration === d ? `${t.primary}22` : "transparent",
                color: duration === d ? t.primary : t.muted,
                border: `1px solid ${duration === d ? t.primary : t.border}`
              },
              className: "px-3 py-1.5 rounded-lg text-sm font-bold transition-all",
              children: [
                d,
                "s"
              ]
            },
            d
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 items-center justify-between", children: [
          /* @__PURE__ */ jsx(LanguageSelector, { selected: selectedLang, onSelect: setSelectedLang, theme: t }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsx(ThemeSelector, { selected: selectedTheme, onSelect: setSelectedTheme, theme: t }) })
        ] }),
        mode === "time" && startTime && !isFinished && /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { scale: 1.15 },
            animate: { scale: 1 },
            style: { color: timeLeft <= 5 ? t.incorrect : t.primary },
            className: "text-6xl font-black tracking-tighter",
            children: timeLeft
          },
          timeLeft
        ) }),
        /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: !isFinished ? /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            style: {
              background: t.surface,
              border: `1px solid ${t.border}`,
              boxShadow: `0 0 60px rgba(0,0,0,0.3)`
            },
            className: "relative rounded-[2.5rem] p-10 md:p-14 min-h-[240px] cursor-text select-none",
            ref: textRef,
            children: [
              !startTime && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ jsx("p", { style: { color: t.muted }, className: "text-sm font-medium animate-pulse", children: "Click here and start typing…" }) }),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "text-2xl leading-[2.4] font-medium tracking-wide break-words whitespace-pre-wrap relative z-10",
                  style: { color: t.muted, fontFamily: selectedLang.script === "latin" ? '"Inter", sans-serif' : '"Noto Sans", sans-serif' },
                  children: text.split("").map((ch, i) => {
                    let color = t.muted;
                    if (i < typed.length) {
                      color = typed[i] === ch ? t.correct : t.incorrect;
                    }
                    const isCursor = i === typed.length;
                    return /* @__PURE__ */ jsxs("span", { style: { color, position: "relative" }, children: [
                      isCursor && /* @__PURE__ */ jsx(
                        motion.span,
                        {
                          animate: { opacity: [1, 0, 1] },
                          transition: { repeat: Infinity, duration: 0.9 },
                          style: {
                            position: "absolute",
                            left: 0,
                            top: "2px",
                            width: "2px",
                            height: "1.4em",
                            background: t.primary,
                            borderRadius: "1px"
                          }
                        }
                      ),
                      ch
                    ] }, i);
                  })
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  ref: inputRef,
                  value: typed,
                  onChange: onInput,
                  autoFocus: true,
                  autoComplete: "off",
                  autoCapitalize: "off",
                  autoCorrect: "off",
                  spellCheck: false,
                  className: "absolute opacity-0 inset-0 w-full h-full cursor-default"
                }
              )
            ]
          },
          "game"
        ) : /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            className: "grid grid-cols-1 sm:grid-cols-3 gap-5",
            children: [
              [
                { label: "WPM", val: stats?.wpm ?? 0, icon: Zap, color: t.primary },
                { label: "ACCURACY", val: `${stats?.accuracy ?? 0}%`, icon: Target, color: t.correct },
                { label: "RAW WPM", val: stats?.rawWpm ?? 0, icon: TrendingUp, color: t.accent }
              ].map((s, i) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: i * 0.1 },
                  style: { background: t.surface, border: `1px solid ${t.border}` },
                  className: "p-8 rounded-[2rem] text-center space-y-2",
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2", style: { color: t.muted }, children: [
                      /* @__PURE__ */ jsx(s.icon, { size: 14, style: { color: s.color } }),
                      /* @__PURE__ */ jsx("span", { className: "text-xs font-bold tracking-widest", children: s.label })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "text-5xl font-black", style: { color: s.color }, children: s.val })
                  ]
                },
                s.label
              )),
              /* @__PURE__ */ jsxs(
                "div",
                {
                  style: { background: t.surface, border: `1px solid ${t.border}` },
                  className: "sm:col-span-3 p-6 rounded-[1.5rem] flex justify-center gap-10 text-sm",
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", style: { color: t.correct }, children: [
                      /* @__PURE__ */ jsx("div", { className: "w-2.5 h-2.5 rounded-full", style: { background: t.correct } }),
                      /* @__PURE__ */ jsx("span", { className: "font-bold", children: stats?.correct }),
                      /* @__PURE__ */ jsx("span", { style: { color: t.muted }, children: "correct" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", style: { color: t.incorrect }, children: [
                      /* @__PURE__ */ jsx("div", { className: "w-2.5 h-2.5 rounded-full", style: { background: t.incorrect } }),
                      /* @__PURE__ */ jsx("span", { className: "font-bold", children: stats?.incorrect }),
                      /* @__PURE__ */ jsx("span", { style: { color: t.muted }, children: "errors" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", style: { color: t.muted }, children: [
                      "Language:",
                      /* @__PURE__ */ jsx("span", { style: { color: t.text }, className: "font-bold", children: selectedLang.name }),
                      /* @__PURE__ */ jsxs("span", { style: { color: t.muted }, children: [
                        "(",
                        selectedLang.nativeName,
                        ")"
                      ] })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.button,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 0.35 },
                  onClick: initGame,
                  style: { background: `${t.primary}22`, color: t.primary, border: `1px solid ${t.primary}44` },
                  className: "sm:col-span-3 py-5 rounded-[1.5rem] font-black text-xl flex items-center justify-center gap-3 transition-all hover:opacity-80 active:scale-95",
                  children: [
                    /* @__PURE__ */ jsx(RotateCcw, { size: 22 }),
                    "RETRY TEST"
                  ]
                }
              )
            ]
          },
          "results"
        ) }),
        !isFinished && /* @__PURE__ */ jsxs("p", { className: "text-center text-xs font-medium", style: { color: t.muted }, children: [
          "Press ",
          /* @__PURE__ */ jsx("kbd", { style: { background: t.surface, border: `1px solid ${t.border}`, color: t.text, padding: "1px 6px", borderRadius: 5 }, children: "Tab" }),
          " + ",
          /* @__PURE__ */ jsx("kbd", { style: { background: t.surface, border: `1px solid ${t.border}`, color: t.text, padding: "1px 6px", borderRadius: 5 }, children: "Enter" }),
          " to restart"
        ] })
      ] })
    }
  );
};

export { $$Layout as $, TypingEngine as T };
