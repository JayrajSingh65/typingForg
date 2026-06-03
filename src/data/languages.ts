export interface Language {
  code: string;
  name: string;
  nativeName: string;
  script: 'latin' | 'devanagari' | 'tamil' | 'telugu' | 'gujarati' | 'arabic' | 'cyrillic' | 'chinese' | 'japanese' | 'korean' | 'other';
  sampleText: string;
}

export const LANGUAGES: Language[] = [
  // Indian Languages
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', script: 'tamil', sampleText: 'வணக்கம் உலகம் தமிழ் மொழி மிகவும் பழமையான மொழி இது நம் பண்பாட்டின் அடையாளம் தமிழர் பெருமை தமிழ் இலக்கியம் உலக மொழிகளில் சிறந்தது நாம் தமிழை காக்க வேண்டும் மொழி கலாச்சாரம் பாரம்பரியம்' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', script: 'telugu', sampleText: 'నమస్కారం తెలుగు భాష చాలా అందమైనది ఇది మనుషుల మనసులను కలిపే భాష తెలుగు సాహిత్యం చాలా సంపన్నమైనది మన సంస్కృతి మన గర్వం తెలుగు మాతృభాష' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', script: 'devanagari', sampleText: 'नमस्कार मराठी भाषा महाराष्ट्राची भाषा आहे मराठी साहित्य खूप समृद्ध आहे आपली भाषा आपली ओळख आहे मराठी माणूस कुठेही गेला तरी मराठी विसरत नाही' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', script: 'gujarati', sampleText: 'નમસ્તે ગુજરાતી ભાષા ગુજરાત રાજ્યની ભાષા છે ગુજરાતી સાહિત્ય ખૂબ સમૃદ્ધ છે આપણી ભાષા આપણી ઓળખ છે ગુજરાતી લોકો ખૂબ મહેનતુ છે' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', script: 'devanagari', sampleText: 'नमस्ते हिंदी भारत की राजभाषा है यह एक समृद्ध भाषा है हिंदी साहित्य बहुत विस्तृत है भारत में करोड़ों लोग हिंदी बोलते हैं हमारी संस्कृति हमारी पहचान है' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', script: 'other', sampleText: 'নমস্কার বাংলা ভাষা একটি সমৃদ্ধ ভাষা রবীন্দ্রনাথ ঠাকুর বাংলা সাহিত্যের মহান কবি বাংলাদেশ এবং ভারতে কোটি কোটি মানুষ বাংলায় কথা বলেন' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', script: 'other', sampleText: 'ನಮಸ್ಕಾರ ಕನ್ನಡ ಭಾಷೆ ಕರ್ನಾಟಕದ ಭಾಷೆ ಕನ್ನಡ ಸಾಹಿತ್ಯ ತುಂಬಾ ಶ್ರೀಮಂತ ನಮ್ಮ ಭಾಷೆ ನಮ್ಮ ಹೆಮ್ಮೆ ಕನ್ನಡ ನಾಡಿನ ಸಂಸ್ಕೃತಿ ವಿಶ್ವ ಮಟ್ಟದಲ್ಲಿ ಹೆಸರು ಪಡೆದಿದೆ' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', script: 'other', sampleText: 'നമസ്കാരം മലയാളം കേരളസംസ്ഥാനത്തിന്റെ ഭാഷയാണ് മലയാള സാഹിത്യം വളരെ സമ്പന്നമാണ് നമ്മുടെ ഭാഷ നമ്മുടെ അഭിമാനം' },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', script: 'other', sampleText: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਪੰਜਾਬ ਦੀ ਸ਼ਾਨ ਹੈ ਪੰਜਾਬੀ ਸਾਹਿਤ ਬਹੁਤ ਅਮੀਰ ਹੈ ਸਾਡੀ ਭਾਸ਼ਾ ਸਾਡੀ ਪਹਿਚਾਣ ਹੈ' },
  { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ', script: 'other', sampleText: 'ନମସ୍କାର ଓଡ଼ିଆ ଓଡ଼ିଶାର ଭାଷା ଏହା ଏକ ସମୃଦ୍ଧ ଭାଷା ଆମ ଭାଷା ଆମ ଗର୍ବ ଓଡ଼ିଆ ସ୍ ଓଡ଼ିଶ ଅ ମ ଗ' },
  { code: 'as', name: 'Assamese', nativeName: 'অসমীয়া', script: 'other', sampleText: 'নমস্কাৰ অসমীয়া অসমৰ ভাষা এইটো এটা চমৃদ্ধ ভাষা আমাৰ ভাষা আমাৰ গৌৰৱ অসমীয়া সংস্কৃতি বিশ্বত প্ৰসিদ্ধ' },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو', script: 'arabic', sampleText: 'آداب اردو پاکستان اور بھارت کی زبان ہے اردو ادب بہت امیر ہے ہماری زبان ہماری پہچان ہے اردو شاعری دنیا میں مشہور ہے' },
  { code: 'sa', name: 'Sanskrit', nativeName: 'संस्कृत', script: 'devanagari', sampleText: 'नमस्ते संस्कृत भाषा प्राचीना अस्ति इयं देववाणी इति कथ्यते संस्कृत साहित्यं बहु समृद्धम् अस्ति वेदाः उपनिषदश्च संस्कृते लिखिताः सन्ति' },
  { code: 'si', name: 'Sinhala', nativeName: 'සිංහල', script: 'other', sampleText: 'ආයුබෝවන් සිංහල ශ්‍රී ලංකාවේ භාෂාවයි සිංහල සාහිත්‍යය ඉතා සෞභාග්‍යමත් ය අපේ භාෂාව අපේ ආඩම්බරය' },
  { code: 'ne', name: 'Nepali', nativeName: 'नेपाली', script: 'devanagari', sampleText: 'नमस्ते नेपाली नेपालको भाषा हो नेपाली साहित्य धेरै समृद्ध छ हाम्रो भाषा हाम्रो पहिचान हो नेपाल सुन्दर देश हो' },
  { code: 'dz', name: 'Dzongkha', nativeName: 'རྫོང་ཁ', script: 'other', sampleText: 'བཀྲ་ཤིས་བདེ་ལེགས་རྫོང་ཁ་འབྲུག་གི་ཀྱི་རྒྱལ་ཡོངས་སྐད། འདི་ཡི་ཡིག་གཟུགས་བོད་ཡིག་དང་འདྲ། ཞིང་ཁམས་འདིའི་ཆོས་སྐད།' },

  // European Languages - Latin Script
  { code: 'en', name: 'English', nativeName: 'English', script: 'latin', sampleText: 'the quick brown fox jumps over the lazy dog and the five boxing wizards jump quickly pack my box with five dozen liquor jugs how vexingly quick daft zebras jump' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', script: 'latin', sampleText: 'el rápido zorro marrón salta sobre el perro perezoso hola mundo bienvenidos a este hermoso planeta la vida es bella y llena de colores el español es el idioma del amor' },
  { code: 'fr', name: 'French', nativeName: 'Français', script: 'latin', sampleText: 'le renard brun rapide saute par dessus le chien paresseux bonjour monde la vie est belle et pleine de couleurs le français est la langue de lamour et de la culture' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', script: 'latin', sampleText: 'der schnelle braune fuchs springt über den faulen hund guten morgen welt das leben ist schön und voller farben die deutsche sprache ist reich und komplex' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', script: 'latin', sampleText: 'il veloce volpe marrone salta sopra il cane pigro ciao mondo la vita è bella e piena di colori la lingua italiana è la musica delle lingue europee' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', script: 'latin', sampleText: 'a rápida raposa marrom salta sobre o cão preguiçoso olá mundo a vida é bela e cheia de cores a língua portuguesa é falada em muitos países do mundo' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', script: 'latin', sampleText: 'de snelle bruine vos springt over de luie hond hallo wereld het leven is mooi en vol kleuren de Nederlandse taal is een rijke en prachtige taal' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', script: 'latin', sampleText: 'szybki brązowy lis skacze nad leniwym psem cześć świat życie jest piękne i pełne kolorów język polski jest bogatym i złożonym językiem słowiańskim' },
  { code: 'cs', name: 'Czech', nativeName: 'Čeština', script: 'latin', sampleText: 'rychlá hnědá liška skáče přes líného psa ahoj světe život je krásný a plný barev česky jazyk je bohatý slovanský jazyk s dlouhou historií' },
  { code: 'sk', name: 'Slovak', nativeName: 'Slovenčina', script: 'latin', sampleText: 'rýchla hnedá líška skáče cez lenivého psa ahoj svete život je krásny a plný farieb slovenský jazyk je slovanský jazyk strednej európy' },
  { code: 'sv', name: 'Swedish', nativeName: 'Svenska', script: 'latin', sampleText: 'den snabba bruna räven hoppar över den lata hunden hej världen livet är vackert och fullt av färger svenska är ett nordgermanskt språk' },
  { code: 'no', name: 'Norwegian', nativeName: 'Norsk', script: 'latin', sampleText: 'den raske brune reven hopper over den late hunden hei verden livet er vakkert og fullt av farger norsk er et nordgermansk skandinavisk språk' },
  { code: 'da', name: 'Danish', nativeName: 'Dansk', script: 'latin', sampleText: 'den hurtige brune ræv hopper over den dovne hund hej verden livet er smukt og fuldt af farver dansk er et nordgermansk skandinavisk sprog' },
  { code: 'fi', name: 'Finnish', nativeName: 'Suomi', script: 'latin', sampleText: 'nopea ruskea kettu hyppää laiskan koiran yli hei maailma elämä on kaunista ja täynnä värejä suomi on suomalais ugrilainen kieli' },
  { code: 'hu', name: 'Hungarian', nativeName: 'Magyar', script: 'latin', sampleText: 'a gyors barna róka átugorja a lusta kutyát szia világ az élet szép és tele van színekkel a magyar egy uráli finnugor nyelv' },
  { code: 'ro', name: 'Romanian', nativeName: 'Română', script: 'latin', sampleText: 'vulpea brună rapidă sare peste câinele leneș salut lume viața este frumoasă și plină de culori limba română este o limbă romanică' },
  { code: 'bg', name: 'Bulgarian', nativeName: 'Български', script: 'cyrillic', sampleText: 'бързата кафява лисица прескача мързеливото куче здравей свят животът е красив и пълен с цветове българският език е славянски език' },
  { code: 'hr', name: 'Croatian', nativeName: 'Hrvatski', script: 'latin', sampleText: 'brza smeđa lisica preskače lijenost psa zdravo svijete život je lijep i pun boja hrvatski je južnoslavenski jezik koji se piše latinicom' },
  { code: 'sr', name: 'Serbian', nativeName: 'Српски', script: 'cyrillic', sampleText: 'брза смеђа лисица прескаче ленствог пса здраво свете живот је леп и пун боја српски је јужнословенски језик' },
  { code: 'sl', name: 'Slovenian', nativeName: 'Slovenščina', script: 'latin', sampleText: 'hitra rjava lisica preskoči lenobnega psa pozdravljeni svet življenje je lepo in polno barv slovenščina je južnoslovanski jezik' },
  { code: 'lt', name: 'Lithuanian', nativeName: 'Lietuvių', script: 'latin', sampleText: 'greita ruda lapė peršoka tinginį šunį labas pasaulis gyvenimas yra gražus ir pilnas spalvų lietuvių kalba yra baltų kalbų grupė' },
  { code: 'lv', name: 'Latvian', nativeName: 'Latviešu', script: 'latin', sampleText: 'ātrā brūnā lapsa pārlido slinkajam sunim sveika pasaule dzīve ir skaista un pilna krāsu latviešu valoda pieder Baltijas valodu grupai' },
  { code: 'et', name: 'Estonian', nativeName: 'Eesti', script: 'latin', sampleText: 'kiire pruun rebane hüppab laisa koera üle tere maailm elu on ilus ja täis värve eesti keel on soome ugri keelkonda kuuluv keel' },
  { code: 'ga', name: 'Irish', nativeName: 'Gaeilge', script: 'latin', sampleText: 'léimeann an sionnach donn tapa thar an madra leisciúil dia dhuit a dhomhan tá an saol álainn agus lán de dhathanna tá an Ghaeilge ina teanga cheiltis' },
  { code: 'cy', name: 'Welsh', nativeName: 'Cymraeg', script: 'latin', sampleText: 'mae y llwynog brown cyflym yn neidio dros y ci diog helo byd mae bywyd yn hardd ac yn llawn lliwiau mae cymraeg yn iaith geltaidd' },
  { code: 'eu', name: 'Basque', nativeName: 'Euskara', script: 'latin', sampleText: 'azeri marroi azkarra nagia txakurraren gainetik jauzi egiten du kaixo mundua bizitza ederra eta kolorez betea da euskara isolamendu hizkuntza bat da' },
  { code: 'ca', name: 'Catalan', nativeName: 'Català', script: 'latin', sampleText: 'la guineu marró ràpida salta per sobre el gos mandrós hola món la vida és bella i plena de colors el català és una llengua romànica' },
  { code: 'gl', name: 'Galician', nativeName: 'Galego', script: 'latin', sampleText: 'a rápida raposa marrón salta sobre o preguiceiro can ola mundo a vida é fermosa e chea de cores o galego é unha lingua románica' },
  { code: 'is', name: 'Icelandic', nativeName: 'Íslenska', script: 'latin', sampleText: 'fljótur brúnn refur hoppar yfir latan hundinn halló heimur lífið er fallegt og fullt af litum íslenska er norrænt germanskt tungumál' },
  { code: 'mt', name: 'Maltese', nativeName: 'Malti', script: 'latin', sampleText: 'il volpi kannella veloċi taqbeż il kelb pigru bongu dinja il ħajja hija sabiħa u mimlija kuluri il malti huwa lingwa semitika' },
  { code: 'lb', name: 'Luxembourgish', nativeName: 'Lëtzebuergesch', script: 'latin', sampleText: 'de séier brong Fuuss spréngt iwwert de faulen Hond moie Welt d Leben ass schéin a voll Faarwen d Lëtzebuerger Sprooch ass e germaanesch' },
  { code: 'af', name: 'Afrikaans', nativeName: 'Afrikaans', script: 'latin', sampleText: 'die vinnige bruin jakkals spring oor die lui hond hallo wêreld die lewe is mooi en vol kleure afrikaans is n germaanse taal ontwikkel in suid afrika' },

  // Slavic with Cyrillic
  { code: 'ru', name: 'Russian', nativeName: 'Русский', script: 'cyrillic', sampleText: 'быстрая коричневая лиса прыгает через ленивую собаку привет мир жизнь прекрасна и полна красок русский язык один из самых богатых языков мира' },
  { code: 'uk', name: 'Ukrainian', nativeName: 'Українська', script: 'cyrillic', sampleText: 'швидка коричнева лисиця стрибає через ледачого пса привіт світ життя прекрасне і сповнене барв українська мова слов янська мова' },
  { code: 'be', name: 'Belarusian', nativeName: 'Беларуская', script: 'cyrillic', sampleText: 'хуткая карычневая ліса скача праз лянівага сабаку прывітанне свет жыццё цудоўна і поўна фарбаў беларуская мова ўсходнеславянская мова' },
  { code: 'mk', name: 'Macedonian', nativeName: 'Македонски', script: 'cyrillic', sampleText: 'брзата кафена лисица прескокнува мрзливото куче здраво свете животот е убав и полн со бои македонскиот јазик е јужнословенски јазик' },
  { code: 'kk', name: 'Kazakh', nativeName: 'Қазақша', script: 'cyrillic', sampleText: 'жылдам қоңыр түлкі жалқау иттің үстінен атып өтеді сәлем дүние өмір сұлу және түрлі түсті қазақ тілі түркі тілдер тобына жатады' },
  { code: 'ky', name: 'Kyrgyz', nativeName: 'Кыргызча', script: 'cyrillic', sampleText: 'тез жаш кызыл түлкү жалкоо иттин үстүнөн секирип өтөт саламатсызбы дүйнө жашоо кооз жана түстүү кыргыз тили түрк тил тобуна кирет' },
  { code: 'mn', name: 'Mongolian', nativeName: 'Монгол', script: 'cyrillic', sampleText: 'хурдан хүрэн үнэг залхуу нохойн дээр үсэрч гардаг сайн уу ертөнц амьдрал үзэсгэлэнтэй монгол хэл алтай хэлний гэр бүлд хамаардаг' },

  // Middle Eastern
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', script: 'arabic', sampleText: 'الثعلب البني السريع يقفز فوق الكلب الكسول مرحبا بالعالم الحياة جميلة ومليئة بالألوان اللغة العربية لغة القرآن الكريم وهي من أقدم اللغات في العالم' },
  { code: 'fa', name: 'Persian', nativeName: 'فارسی', script: 'arabic', sampleText: 'روباه قهوه ای سریع از روی سگ تنبل می پرد سلام دنیا زندگی زیباست و پر از رنگ است زبان فارسی یکی از قدیمی ترین زبان های جهان است' },
  { code: 'he', name: 'Hebrew', nativeName: 'עברית', script: 'other', sampleText: 'השועל החום המהיר קופץ מעל הכלב העצלן שלום עולם החיים יפים ומלאים בצבעים השפה העברית היא שפה שמית עתיקה שהתחדשה במאה העשרים' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', script: 'latin', sampleText: 'hızlı kahverengi tilki tembel köpeğin üzerinden atlar merhaba dünya hayat güzel ve renklerle dolu türkçe batı oğuz türkçesi dil ailesine ait bir dildir' },

  // East Asian
  { code: 'zh', name: 'Chinese (Simplified)', nativeName: '中文 (简体)', script: 'chinese', sampleText: '快速的棕色狐狸跳过了懒狗 你好世界 生活是美丽的 充满了色彩 中文是世界上使用人口最多的语言之一 汉字是象形文字 有着悠久的历史' },
  { code: 'zh-TW', name: 'Chinese (Traditional)', nativeName: '中文 (繁體)', script: 'chinese', sampleText: '快速的棕色狐狸跳過了懶狗 你好世界 生活是美麗的 充滿了色彩 中文是世界上使用人口最多的語言之一 漢字是象形文字 有著悠久的歷史' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', script: 'japanese', sampleText: 'すばしっこい茶色のキツネが怠け者の犬を飛び越えた こんにちは世界 日本語は美しい言語です 日本文化は世界中で愛されています' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', script: 'korean', sampleText: '빠른 갈색 여우가 게으른 개 위를 뛰어넘는다 안녕 세상아 삶은 아름답고 색깔이 넘친다 한국어는 한반도에서 사용되는 언어입니다' },

  // Southeast Asian
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', script: 'latin', sampleText: 'con cáo nâu nhanh nhẹn nhảy qua con chó lười biếng xin chào thế giới cuộc sống thật tuyệt vời và đầy màu sắc tiếng việt là ngôn ngữ của việt nam' },
  { code: 'th', name: 'Thai', nativeName: 'ภาษาไทย', script: 'other', sampleText: 'สุนัขจิ้งจอกสีน้ำตาลวิ่งข้ามสุนัขขี้เกียจ สวัสดีโลก ชีวิตสวยงามและเต็มไปด้วยสีสัน ภาษาไทยเป็นภาษาประจำชาติของประเทศไทย' },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', script: 'latin', sampleText: 'rubah coklat yang cepat melompati anjing malas halo dunia kehidupan itu indah dan penuh warna bahasa indonesia adalah bahasa persatuan bangsa indonesia' },
  { code: 'ms', name: 'Malay', nativeName: 'Bahasa Melayu', script: 'latin', sampleText: 'musang perang yang pantas melompati anjing malas helo dunia kehidupan itu indah dan penuh warna bahasa melayu adalah bahasa rasmi malaysia' },
  { code: 'tl', name: 'Filipino', nativeName: 'Filipino', script: 'latin', sampleText: 'ang mabilis na kayumangging lobo ay lumundag sa tamad na aso kamusta mundo ang buhay ay maganda at puno ng kulay wikang pilipino ay pambansang wika' },
  { code: 'km', name: 'Khmer', nativeName: 'ខ្មែរ', script: 'other', sampleText: 'ចចក ត្នោត ខៀវ លឿន លោត ឆ្លងលើ ឆ្កែ ខ្ជិល ជំរាប សួរ ពិភព លោក ជីវិត គឺ ស្អាត ហើយ ពោរ ពេញ ដោយ ពណ៌' },
  { code: 'lo', name: 'Lao', nativeName: 'ພາສາລາວ', script: 'other', sampleText: 'ດ ຈ ກ ນ ໄ ວ ຂ ໂ ດ ດ ໝ າ ເ ຊ ື່ ອ ງ ທ ຳ ສ ວ ັ ດ ດ ີ ໂ ລ ກ ຊ ີ ວ ິ ດ ສ ວ ຍ ງ າ ມ' },
  { code: 'my', name: 'Burmese', nativeName: 'မြန်မာဘာသာ', script: 'other', sampleText: 'မြန်မာဘာသာ မြန်မာနိုင်ငံ၏ တရားဝင်ဘာသာစကားဖြစ်သည် မင်္ဂလာပါ ကမ္ဘာ ဘဝသည် လှပ၍ အရောင်အသွေးများ ပြည့်နှက်နေသည်' },
  { code: 'jv', name: 'Javanese', nativeName: 'Basa Jawa', script: 'latin', sampleText: 'asu abang sing cepet mlumpat ngilewati asu kesed halo donya urip iku endah lan kebak warna basa jawa iku basa daerah kang paling akeh dituturana' },
  { code: 'su', name: 'Sundanese', nativeName: 'Basa Sunda', script: 'latin', sampleText: 'careuh coklat anu gancang lumpat ngaliwatan anjing anu kesed halo dunya kahirupan éndah sareng pinuh ku warna basa sunda ngagunakeun aksara sunda' },

  // African Languages
  { code: 'sw', name: 'Swahili', nativeName: 'Kiswahili', script: 'latin', sampleText: 'mbweha wa kahawia anayeenda kwa kasi anaruka juu ya mbwa mvivu hujambo dunia maisha ni mazuri na yenye rangi kiswahili ni lugha ya waafrika mashariki' },
  { code: 'am', name: 'Amharic', nativeName: 'አማርኛ', script: 'other', sampleText: 'ፈጣን ቡናማ ቀበሮ ሰነፍ ውሻን ዘሏ ሰላም ዓለም ህይወት ቆንጆ ናት እና ቀለሞችን ሞልቷት አማርኛ የኢትዮጵያ ብሔራዊ ቋንቋ ነው' },
  { code: 'ha', name: 'Hausa', nativeName: 'Hausa', script: 'latin', sampleText: 'doguwar fox mai saurin gudu ta haye kan yankan kyankyaso sannu duniya rayuwa tana da kyau kuma cike da launuka harshen hausa yana kudu maso yammacin afirka' },
  { code: 'yo', name: 'Yoruba', nativeName: 'Yorùbá', script: 'latin', sampleText: 'kọlọkọlọ brown ti o yara fẹ gba aja alairika kọja ẹ káàbọ ayé aye jẹ ẹwà ó sì kún fun awọ èdè yorùbá jẹ ọkan ninu awọn ede ti o tobi julọ ni afirika' },
  { code: 'ig', name: 'Igbo', nativeName: 'Asụsụ Igbo', script: 'latin', sampleText: 'oke ọṅụ nke ọṅụ na ọṅụ na alaala n elu nkịta na enweghị ike ọ dị mma ụwa ndụ dị mma ma ọ dị na agba asụsụ igbo bu asụsụ nke ndị igbo' },
  { code: 'zu', name: 'Zulu', nativeName: 'isiZulu', script: 'latin', sampleText: 'impungushe emnyama enamandla iyagxuma phezu kwenja engasikhathali sawubona mhlaba impilo iyinhle futhi igcwele izibhakabhaka isizulu yilulimi lwabantu baseningizimu africa' },
  { code: 'xh', name: 'Xhosa', nativeName: 'isiXhosa', script: 'latin', sampleText: 'impungushe emthubi ekhawulezayo iyagxuma phezu kwenja evilikaqayo molo hlabathi ubomi buhle kwaye buzele iimbala isixhosa lulwimi lwabantu baseningizimu africa' },
  { code: 'so', name: 'Somali', nativeName: 'Soomaali', script: 'latin', sampleText: 'dacawo casaan ah oo degdeg ah ayaa xoog ugu dhex booday eey xun nabadgelyo adduunka nolosha waa qurux badan oo midab leh af soomaali waa luqadda soomaalida' },
  { code: 'rw', name: 'Kinyarwanda', nativeName: 'Ikinyarwanda', script: 'latin', sampleText: 'imbawa ya brown ikidende irasimbukira imbwa inengwa mwiriwe si isi ubuzima burashimishije kandi bugwira amabara ikinyarwanda ni ururimi rwa leta yo rwanda' },

  // More South/Central Asian
  { code: 'az', name: 'Azerbaijani', nativeName: 'Azərbaycan', script: 'latin', sampleText: 'sürətli qəhvəyi tülkü tənbəl köpəyin üstündən atladı salam dünya həyat gözəl ve rəngarəngdir azərbaycan dili türk dil ailəsinə aiddir' },
  { code: 'ka', name: 'Georgian', nativeName: 'ქართული', script: 'other', sampleText: 'სწრაფი ყავისფერი მელა ზარმაც ძაღლს გადახტა გამარჯობა სამყაროს სიცოცხლე ლამაზია და ფერებით სავსე ქართული ენა ქართველური ენების ოჯახს მიეკუთვნება' },
  { code: 'hy', name: 'Armenian', nativeName: 'Հայերեն', script: 'other', sampleText: 'արագ շագանակագույն աղվեսը ցատկեց ծույլ շան վրայով բարև աշխարհ կյանքը գեղեցիկ է ու լի գույներով հայերենը հայ ժողովրդի մայրենի լեզուն է' },
  { code: 'uz', name: 'Uzbek', nativeName: 'Oʻzbek', script: 'latin', sampleText: 'tez yuruvchi jigarrang tulki dangasa itning ustidan sakrab otdi salom dunyo hayot go zal va ranglar bilan to la o zbek tili turk tillar oilasiga kiradi' },
  { code: 'tk', name: 'Turkmen', nativeName: 'Türkmen', script: 'latin', sampleText: 'çalt goňur tilki ýalta itiň üstünden böküp geçdi salam dünýä ýaşaýyş owadan we reňkli türkmen dili türki dilleriň günbatar oguz şahasyna degişlidir' },
  { code: 'tg', name: 'Tajik', nativeName: 'Тоҷикӣ', script: 'cyrillic', sampleText: 'рӯбоҳи қарангӯш тезрав аз болои сагхи танбал парид салом ба ҷаҳон зиндагӣ зебост ва пур аз рангҳост забони тоҷикӣ ба гурӯҳи забонҳои эронӣ тааллуқ дорад' },
  { code: 'ps', name: 'Pashto', nativeName: 'پښتو', script: 'arabic', sampleText: 'ژر نسواري مرغه د تنبل سپي پر سر وپرخوت سلام نړۍ ژوند ښکلی دی او د رنگونو ډک دی پښتو یو له هغو لرغونو ژبو سره ده چي افغانستان کي ويل کيږي' },
  { code: 'ku', name: 'Kurdish', nativeName: 'Kurdî', script: 'latin', sampleText: 'roviya qehweyî ya bilez ji ser kûçika tembel re firiya silav dinya jiyan xweş e û tije reng e zimanê kurdî zimanekî îrânî ya bakurî ye' },

  // Constructed / Others
  { code: 'eo', name: 'Esperanto', nativeName: 'Esperanto', script: 'latin', sampleText: 'la bruna rapida vulpo saltis trans la maldiligenta hundo saluton mondo la vivo estas bela kaj plena de koloroj esperanto estas planlingvo kreita por internacia komunikado' },
  { code: 'la', name: 'Latin', nativeName: 'Latina', script: 'latin', sampleText: 'vulpes velocissima brunnea super canem pigrum saluit salve mundus vita pulchra est et plena colorum lingua latina antiqua est et mater linguarum romanarum' },
  { code: 'sq', name: 'Albanian', nativeName: 'Shqip', script: 'latin', sampleText: 'dhelpra e shpejtë kafe kërcen mbi qenin dembel përshëndetje botë jeta është e bukur dhe plot ngjyra gjuha shqipe është gjuhë indoevropiane' },

  // Pacific
  { code: 'mi', name: 'Maori', nativeName: 'Te Reo Māori', script: 'latin', sampleText: 'ka tere te kurī parauri i tāheke ana i runga i te kurī māngere tēnā koe ao mārama he ātaahua te ao nei ā he maha ngā tae' },
  { code: 'sm', name: 'Samoan', nativeName: 'Gagana fa a Sāmoa', script: 'latin', sampleText: 'o le fox vaveʻeʻe lanu mumu e uia luga o le maʻi ago talofa le lalolagi o le olaga e matagofie ma fiafia lanu gagana samoa o le gagana o suamalie' },
  { code: 'haw', name: 'Hawaiian', nativeName: 'ʻŌlelo Hawaiʻi', script: 'latin', sampleText: 'ua lele ka ʻīlio ʻōmaʻomaʻo māoli ma luna o ka ʻīlio pōloli aloha kākou ke ao nei maiau ka ola ʻōlelo hawaiʻi ka ʻōlelo makuahine o hawaiʻi' },
  { code: 'fj', name: 'Fijian', nativeName: 'Na Vosa Vakaviti', script: 'latin', sampleText: 'e cegu mai na vuaka na kaloka vinaka vakalevu na vanua e dina ni bula vakadewa na vosa vakaviti ko koya na vosa vakaorisi ni viti' },

  // More Constructed  
  { code: 'fy', name: 'West Frisian', nativeName: 'Frysk', script: 'latin', sampleText: 'de fluche brune foks springe oer de lûle hûn hallo wrâld it libben is moai en fol fan kleuren it westfrysk is in germanske taal' },
  { code: 'sc', name: 'Sardinian', nativeName: 'Sardu', script: 'latin', sampleText: 'sa murigliona brùnida e ratta colat asuba de su cani pigru salude mundu sa vida est bella e china de colors su sardu est una limba romànica' },
  { code: 'oc', name: 'Occitan', nativeName: 'Occitan', script: 'latin', sampleText: 'lo renard brun rapid salta per dessús lo chiin peresós bonjorn mundo la vida es bela e plena de colors l occitan es una lenga romanica o neo latina' },
  { code: 'br', name: 'Breton', nativeName: 'Brezhoneg', script: 'latin', sampleText: 'ar louarn gell buan a lamm dreist ar ki diog demat bed ar vuhez a zo kaer ha leun a livioù ar brezhoneg a zo ur yezh keltiek' },
  { code: 'fo', name: 'Faroese', nativeName: 'Føroyskt', script: 'latin', sampleText: 'tann skjóti brúni revurin hoppar yvir tann dovna hundinn halló heimur lívið er fagurt og fult av litum føroyskt er eitt norðurgermanskt mál' },
  { code: 'rm', name: 'Romansh', nativeName: 'Rumantsch', script: 'latin', sampleText: 'la volp bruna svelta sa sgulpa sur il chaun pigren allegra mund la vita è bella e plaina da colurs il rumantsch è ina lingua romanica da la svizra' },
  { code: 'bs', name: 'Bosnian', nativeName: 'Bosanski', script: 'latin', sampleText: 'brza smeđa lisica preskakuje lijenost psa zdravo svete život je lijep i pun boja bosanski jezik je južnoslavenski jezik koji se piše latinicom' },
  { code: 'wls', name: 'Walloon', nativeName: 'Walon', script: 'latin', sampleText: 'el renård broulet vike sovår el tchén perèsseus bondjoû monde el veye est bèle et plinde di coleurs li walon est ene langue romane' },

  // More diverse
  { code: 'ay', name: 'Aymara', nativeName: 'Aymar Aru', script: 'latin', sampleText: 'achachilaxa lurawa allchu larani sarnaqata phaxsimpi amuyu uñstawi suma sarxañataki aymara aru qullasuyu jaqinakana arupaxa' },
  { code: 'qu', name: 'Quechua', nativeName: 'Runa Simi', script: 'latin', sampleText: 'puka atuqmi puriy paqarimanta wañu aychata hap iy hina rimanki runa simi andiskunap hatun simim' },
  { code: 'gn', name: 'Guaraní', nativeName: 'Avañe ẽ', script: 'latin', sampleText: 'aguara yvate hepyoky pumbero rehe osapukai tereré ha pykachu guive guarani ñee paraguay rembiporâ' },
  { code: 'ny', name: 'Chichewa', nativeName: 'Chichewa', script: 'latin', sampleText: 'mboni yolimba yolimba ya brown inasika pamwamba pa galu wokhala bwino dzuwa dziko la moyo ndiwokongola ndi wodzaza ndi mabarwe chichewa ndi chilankhulo cha malawi' },
  { code: 'mg', name: 'Malagasy', nativeName: 'Malagasy', script: 'latin', sampleText: 'ny amboa mena haingana dia nifototra tao ambonin ny alika kamo salama izao tontolo izao ny fiainana dia tsara sy feno loko ny teny malagasy dia teny nasionalin i madagasikara' },
  { code: 'sn', name: 'Shona', nativeName: 'ChiShona', script: 'latin', sampleText: 'gava rakajeka rakamhanya pamusoro pezimbwa raro makadii nyika upenyu yakanaka uye yazere mavara chishona mutauro wevazhinji veZimbabwe' },

  // Computer
  { code: 'tsx', name: 'TypeScript/React', nativeName: 'TypeScript', script: 'latin', sampleText: 'const App: React.FC = () => { const [count, setCount] = useState(0); return <button onClick={() => setCount(c => c + 1)}>{count}</button>; };' },
  { code: 'py', name: 'Python', nativeName: 'Python', script: 'latin', sampleText: 'def fibonacci(n: int) -> int:\n    if n <= 1:\n        return n\n    return fibonacci(n - 1) + fibonacci(n - 2)\n\nresult = [fibonacci(i) for i in range(10)]' },
  { code: 'rs', name: 'Rust', nativeName: 'Rust', script: 'latin', sampleText: 'fn main() { let mut v: Vec<i32> = Vec::new(); v.push(1); v.push(2); let sum: i32 = v.iter().sum(); println!("Sum: {}", sum); }' },
  { code: 'go', name: 'Go', nativeName: 'Golang', script: 'latin', sampleText: 'package main\nimport "fmt"\nfunc main() {\n    for i := 0; i < 10; i++ {\n        fmt.Println(i)\n    }\n}' },
];

export const LANGUAGE_GROUPS = [
  { label: '🇮🇳 Indian Languages', codes: ['ta', 'te', 'mr', 'gu', 'hi', 'bn', 'kn', 'ml', 'pa', 'or', 'as', 'ur', 'sa', 'si', 'ne', 'dz'] },
  { label: '🌍 African Languages', codes: ['sw', 'am', 'ha', 'yo', 'ig', 'zu', 'xh', 'so', 'rw', 'ny', 'mg', 'sn'] },
  { label: '🌏 East Asian', codes: ['zh', 'zh-TW', 'ja', 'ko', 'mn'] },
  { label: '🌏 Southeast Asian', codes: ['vi', 'th', 'id', 'ms', 'tl', 'km', 'lo', 'my', 'jv', 'su'] },
  { label: '🌍 Middle East & Central Asia', codes: ['ar', 'fa', 'he', 'tr', 'az', 'ka', 'hy', 'uz', 'tk', 'tg', 'ps', 'ku'] },
  { label: '🌍 Pacific', codes: ['mi', 'sm', 'haw', 'fj'] },
  { label: '🌎 Americas Indigenous', codes: ['ay', 'qu', 'gn'] },
  { label: '🇪🇺 Western European', codes: ['en', 'es', 'fr', 'de', 'it', 'pt', 'nl', 'da', 'sv', 'no', 'fi', 'is', 'ga', 'cy', 'eu', 'ca', 'gl', 'mt', 'lb', 'af', 'eo', 'la', 'sq'] },
  { label: '🇪🇺 Central & Eastern European', codes: ['pl', 'cs', 'sk', 'hu', 'ro', 'hr', 'bs', 'sl', 'mk', 'lt', 'lv', 'et', 'bg', 'sr'] },
  { label: '🇷🇺 Slavic (Cyrillic)', codes: ['ru', 'uk', 'be', 'kk', 'ky'] },
  { label: '🔤 Regional', codes: ['fy', 'sc', 'oc', 'br', 'fo', 'rm', 'wls'] },
  { label: '💻 Programming Languages', codes: ['tsx', 'py', 'rs', 'go'] },
];

export function getLanguageByCode(code: string): Language | undefined {
  return LANGUAGES.find(l => l.code === code);
}
