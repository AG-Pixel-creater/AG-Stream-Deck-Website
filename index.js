/* =========================================================
   AG Stream Deck — index.js
   v0.0.1 — Theme + i18n (EN/UR) + interactions
   ========================================================= */

(function () {
  'use strict';

  /* =========================================================
     1. TRANSLATIONS
  ========================================================= */
  const I18N = {
    en: {
      'brand.name': 'Stream Deck',
      'brand.tag': 'AG Software',

      'nav.features': 'Features',
      'nav.dubbing': 'Dubbing',
      'nav.how': 'How it works',
      'nav.devices': 'Devices',
      'nav.faq': 'FAQ',
      'nav.download': 'Download',

      'hero.pill': 'Version v0.0.1 — Early Access',
      'hero.title1': 'Your PC becomes a',
      'hero.title2': 'personal streaming server.',
      'hero.desc': 'AG Stream Deck turns your system into a local server. Watch and dub your videos and movies on any device — mobile, tablet or laptop — right from the browser. No app needed on the client device.',
      'hero.cta1': 'Download v0.0.1',
      'hero.cta2': 'How it works',
      'hero.meta1': 'No app on client device',
      'hero.meta2': 'Works over Wi-Fi / LAN',
      'hero.meta3': 'Multi-language dubbing',

      'card.status': 'Status',
      'card.streaming': 'Streaming',
      'card.url': 'Server URL',
      'card.copied': 'Copied!',
      'card.library': 'Library',
      'card.files': '248 files',
      'card.connected': 'Connected',
      'card.devices': '3 devices',
      'phone.dubbed': 'DUBBED',
      'phone.info': '1080p • Urdu dub',

      'stats.1': 'Setup time',
      'stats.2': 'Apps required',
      'stats.3': 'Dub languages',
      'stats.4': 'Ready to stream',

      'features.eyebrow': 'Features',
      'features.title': 'Everything you need',
      'features.desc': 'A lightweight app that turns your system into a powerful media server — simple and fast.',
      'feat1.title': 'Instant Local Server',
      'feat1.desc': 'One click — and your system becomes a streaming server on the local network.',
      'feat2.title': 'Browser Playback',
      'feat2.desc': 'No app on the client device — just open the browser and start streaming.',
      'feat3.title': 'Multi-Device',
      'feat3.desc': 'Connect multiple devices at once — everyone watches what they want.',
      'feat4.title': 'Wide Format Support',
      'feat4.desc': 'MP4, MKV, AVI, MOV, WEBM and many more — stream directly.',
      'feat5.title': 'Subtitle Support',
      'feat5.desc': '.srt and .vtt subtitles load automatically.',
      'feat6.title': 'Video Dubbing',
      'feat6.desc': 'Dub any video in real-time into Urdu, Hindi, English or 20+ languages.',

      'dub.eyebrow': 'AI Dubbing',
      'dub.title': 'Hear videos in your language',
      'dub.desc': 'Built-in dubbing engine — detects the original audio, translates it, and dubs it in your preferred language. Real-time, right in your browser.',
      'dub.langTitle': 'Supported Languages',
      'dub.engine': 'Dubbing Engine',
      'dub.panelTitle': 'Live Dubbing Panel',
      'dub.original': 'Original',
      'dub.dubbed': 'Dubbed',
      'dub.btnPlay': '▶ Play dub',
      'dub.btnCompare': 'Compare',

      'how.eyebrow': 'How it works',
      'how.title': 'Three simple steps',
      'how.desc': 'From setup to streaming — just a minute of work.',
      'how.s1.title': 'Install & Launch',
      'how.s1.desc': 'Install AG Stream Deck on your PC and open it.',
      'how.s2.title': 'Add Your Folders',
      'how.s2.desc': 'Add the folders where your movies and videos are stored.',
      'how.s3.title': 'Open URL / Scan QR',
      'how.s3.desc': 'Open the server URL in your mobile browser or scan the QR — and stream.',

      'dev.eyebrow': 'Compatibility',
      'dev.title': 'Works on every device',
      'dev.desc': 'Any device with a modern browser works with AG Stream Deck. No platform lock-in.',
      'dev.cta': 'Get Started',

      'dl.pill': 'Latest Release — v0.0.1',
      'dl.title': 'AG Stream Deck Download',
      'dl.desc': 'Early access build. Pick your platform and turn your PC into a streaming server.',
      'dl.win': '.exe • 64-bit • Download',
      'dl.comingSoon': 'Coming Soon',
      'dl.badgeSoon': 'Soon',
      'dl.note': 'Note: Nothing to install on the client device — just open the server URL in a browser.',
      'dl.subnote': 'Currently only the Windows build is available. macOS and Linux versions are in development.',

      'faq.eyebrow': 'FAQ',
      'faq.title': 'Common questions',
      'faq.q1': 'Do I need to install an app on the client device?',
      'faq.a1': 'No. AG Stream Deck runs on your PC, and the client device (mobile/tablet/TV) simply opens the server URL in a browser.',
      'faq.q2': 'Is an internet connection required?',
      'faq.a2': 'No. It works purely on the local network (Wi-Fi / LAN). Streaming works without internet.',
      'faq.q3': 'How does video dubbing work?',
      'faq.a3': 'AG Stream Deck uses a built-in AI dubbing engine that analyzes the original audio, translates it into your chosen language, and generates a real-time dub. You can pick from 20+ languages.',
      'faq.q4': 'Which video formats are supported?',
      'faq.a4': 'MP4, MKV, AVI, MOV, WEBM, FLV and many other common formats. .srt and .vtt subtitles are supported.',
      'faq.q5': 'Is it free?',
      'faq.a5': 'This is v0.0.1 early access. Pricing and features will be updated in future versions.',

      'footer.by': 'by AG',
      'footer.tag': 'Turn your system into a personal streaming server.',
      'footer.product': 'Product',
      'footer.support': 'Support',
      'footer.company': 'Company',
      'footer.docs': 'Documentation',
      'footer.about': 'About AG',
      'footer.contact': 'Contact',
      'footer.privacy': 'Privacy',
      'footer.rights': 'All rights reserved.'
    },

    ur: {
      'brand.name': 'اسٹریم ڈیک',
      'brand.tag': 'AG سافٹ ویئر',

      'nav.features': 'خصوصیات',
      'nav.dubbing': 'ڈبنگ',
      'nav.how': 'کیسے کام کرتا ہے',
      'nav.devices': 'ڈیوائسز',
      'nav.faq': 'سوالات',
      'nav.download': 'ڈاؤن لوڈ',

      'hero.pill': 'ورژن v0.0.1 — ابتدائی رسائی',
      'hero.title1': 'آپ کا پی سی بن جاتا ہے',
      'hero.title2': 'ذاتی اسٹریمنگ سرور۔',
      'hero.desc': 'AG اسٹریم ڈیک آپ کے سسٹم کو ایک لوکل سرور بنا دیتا ہے۔ اب اپنی ویڈیوز اور فلمیں کسی بھی ڈیوائس — موبائل، ٹیبلٹ یا لیپ ٹاپ — کے براؤزر میں دیکھیں اور ڈب کریں۔ کلائنٹ ڈیوائس پر کوئی ایپ انسٹال کرنے کی ضرورت نہیں۔',
      'hero.cta1': 'ڈاؤن لوڈ v0.0.1',
      'hero.cta2': 'کیسے کام کرتا ہے',
      'hero.meta1': 'کلائنٹ ڈیوائس پر کوئی ایپ نہیں',
      'hero.meta2': 'وائی فائی / LAN پر چلتا ہے',
      'hero.meta3': 'کثیر لسانی ڈبنگ',

      'card.status': 'حالت',
      'card.streaming': 'اسٹریمنگ',
      'card.url': 'سرور یو آر ایل',
      'card.copied': 'کاپی ہو گیا!',
      'card.library': 'لائبریری',
      'card.files': '248 فائلیں',
      'card.connected': 'منسلک',
      'card.devices': '3 ڈیوائسز',
      'phone.dubbed': 'ڈب شدہ',
      'phone.info': '1080p • اردو ڈب',

      'stats.1': 'سیٹ اپ کا وقت',
      'stats.2': 'ایپس کی ضرورت',
      'stats.3': 'ڈب زبانیں',
      'stats.4': 'اسٹریم کے لیے تیار',

      'features.eyebrow': 'خصوصیات',
      'features.title': 'سب کچھ جو آپ کو چاہیے',
      'features.desc': 'ایک ہلکی پھلکی ایپ جو آپ کے سسٹم کو ایک طاقتور میڈیا سرور میں بدل دیتی ہے — بالکل سادہ اور تیز۔',
      'feat1.title': 'فوری لوکل سرور',
      'feat1.desc': 'صرف ایک کلک — اور آپ کا سسٹم لوکل نیٹ ورک پر اسٹریمنگ سرور بن جاتا ہے۔',
      'feat2.title': 'براؤزر پلے بیک',
      'feat2.desc': 'کلائنٹ ڈیوائس پر کوئی ایپ نہیں — صرف براؤزر کھولیں اور اسٹریم شروع۔',
      'feat3.title': 'کثیر ڈیوائس',
      'feat3.desc': 'ایک وقت میں کئی ڈیوائسز منسلک کریں — سب اپنی مرضی کی ویڈیو دیکھیں۔',
      'feat4.title': 'وسیع فارمیٹ سپورٹ',
      'feat4.desc': 'MP4، MKV، AVI، MOV، WEBM اور بہت کچھ — براہ راست اسٹریم کریں۔',
      'feat5.title': 'سب ٹائٹل سپورٹ',
      'feat5.desc': '.srt اور .vtt سب ٹائٹلز خودکار طور پر لوڈ ہو جاتی ہیں۔',
      'feat6.title': 'ویڈیو ڈبنگ',
      'feat6.desc': 'کسی بھی ویڈیو کو ریئل ٹائم میں اردو، ہندی، انگریزی یا 20+ زبانوں میں ڈب کریں۔',

      'dub.eyebrow': 'AI ڈبنگ',
      'dub.title': 'ویڈیو کو اپنی زبان میں سنیں',
      'dub.desc': 'بلٹ اِن ڈبنگ انجن — کسی بھی ویڈیو کی اصل آواز کو پہچان کر، اسے آپ کی پسندیدہ زبان میں ترجمہ اور ڈب کر دیتا ہے۔ ریئل ٹائم، براہ راست براؤزر میں۔',
      'dub.langTitle': 'معاون زبانیں',
      'dub.engine': 'ڈبنگ انجن',
      'dub.panelTitle': 'لائیو ڈبنگ پینل',
      'dub.original': 'اصل',
      'dub.dubbed': 'ڈب شدہ',
      'dub.btnPlay': '▶ ڈب چلائیں',
      'dub.btnCompare': 'موازنہ کریں',

      'how.eyebrow': 'کیسے کام کرتا ہے',
      'how.title': 'تین آسان مراحل',
      'how.desc': 'سیٹ اپ سے اسٹریمنگ تک — بس ایک منٹ کا کام۔',
      'how.s1.title': 'انسٹال اور لانچ کریں',
      'how.s1.desc': 'AG اسٹریم ڈیک اپنے پی سی پر انسٹال کریں اور کھولیں۔',
      'how.s2.title': 'اپنے فولڈرز شامل کریں',
      'how.s2.desc': 'وہ فولڈرز شامل کریں جہاں آپ کی فلمیں اور ویڈیوز موجود ہیں۔',
      'how.s3.title': 'یو آر ایل کھولیں / QR اسکین کریں',
      'how.s3.desc': 'موبائل کے براؤزر میں سرور یو آر ایل کھولیں یا QR اسکین کریں — اور اسٹریم کریں۔',

      'dev.eyebrow': 'مطابقت',
      'dev.title': 'ہر ڈیوائس پر چلتا ہے',
      'dev.desc': 'جس ڈیوائس میں جدید براؤزر ہو، وہ AG اسٹریم ڈیک کے ساتھ کام کرتا ہے۔ کوئی پلیٹ فارم لاک اِن نہیں۔',
      'dev.cta': 'شروع کریں',

      'dl.pill': 'تازہ ترین ریلیز — v0.0.1',
      'dl.title': 'AG اسٹریم ڈیک ڈاؤن لوڈ',
      'dl.desc': 'ابتدائی رسائی بلڈ۔ اپنا پلیٹ فارم چنیں اور اپنے پی سی کو اسٹریمنگ سرور بنائیں۔',
      'dl.win': '.exe • 64-bit • ڈاؤن لوڈ',
      'dl.comingSoon': 'جلد آ رہا ہے',
      'dl.badgeSoon': 'جلد',
      'dl.note': 'نوٹ: کلائنٹ ڈیوائس پر کچھ انسٹال نہیں کرنا — صرف براؤزر میں سرور یو آر ایل کھولیں۔',
      'dl.subnote': 'فی الحال صرف ونڈوز بلڈ دستیاب ہے۔ میک او ایس اور لینکس ورژنز پر کام جاری ہے۔',

      'faq.eyebrow': 'سوالات',
      'faq.title': 'عام سوالات',
      'faq.q1': 'کیا کلائنٹ ڈیوائس پر ایپ انسٹال کرنی پڑتی ہے؟',
      'faq.a1': 'نہیں۔ AG اسٹریم ڈیک آپ کے پی سی پر چلتا ہے، اور کلائنٹ ڈیوائس (موبائل/ٹیبلٹ/ٹی وی) صرف براؤزر سے سرور یو آر ایل کھولتی ہے۔',
      'faq.q2': 'کیا انٹرنیٹ کنکشن ضروری ہے؟',
      'faq.a2': 'نہیں۔ یہ خالصتاً لوکل نیٹ ورک (وائی فائی / LAN) پر کام کرتا ہے۔ انٹرنیٹ کے بغیر بھی اسٹریمنگ ہوتی ہے۔',
      'faq.q3': 'ویڈیو ڈبنگ کیسے کام کرتی ہے؟',
      'faq.a3': 'AG اسٹریم ڈیک ایک بلٹ اِن AI ڈبنگ انجن استعمال کرتا ہے جو ویڈیو کی اصل آڈیو کا تجزیہ کرتا ہے، اسے آپ کی چنی ہوئی زبان میں ترجمہ کرتا ہے، اور ریئل ٹائم ڈب بناتا ہے۔ آپ 20+ زبانوں میں سے کوئی بھی چن سکتے ہیں۔',
      'faq.q4': 'کون سے ویڈیو فارمیٹس معاون ہیں؟',
      'faq.a4': 'MP4، MKV، AVI، MOV، WEBM، FLV اور بہت سے دوسرے عام فارمیٹس۔ سب ٹائٹلز کے لیے .srt اور .vtt معاون ہیں۔',
      'faq.q5': 'کیا یہ مفت ہے؟',
      'faq.a5': 'ابھی یہ v0.0.1 ابتدائی رسائی بلڈ ہے۔ آنے والے ورژنز میں قیمتوں اور خصوصیات کو اپ ڈیٹ کیا جائے گا۔',

      'footer.by': 'AG کی جانب سے',
      'footer.tag': 'اپنے سسٹم کو ذاتی اسٹریمنگ سرور بنائیں۔',
      'footer.product': 'پروڈکٹ',
      'footer.support': 'سپورٹ',
      'footer.company': 'کمپنی',
      'footer.docs': 'دستاویزات',
      'footer.about': 'AG کے بارے میں',
      'footer.contact': 'رابطہ',
      'footer.privacy': 'پرائیویسی',
      'footer.rights': 'جملہ حقوق محفوظ ہیں۔'
    }
  };

  const STORAGE_THEME = 'ag-theme';
  const STORAGE_LANG = 'ag-lang';
  const DEFAULT_THEME = 'dark';
  const DEFAULT_LANG = 'en';

  const html = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const langToggle = document.getElementById('langToggle');
  const langLabel = document.getElementById('langLabel');

  let currentLang = localStorage.getItem(STORAGE_LANG) || DEFAULT_LANG;
  let currentTheme = localStorage.getItem(STORAGE_THEME) || DEFAULT_THEME;

  /* =========================================================
     2. THEME
  ========================================================= */
  function applyTheme(theme) {
    currentTheme = theme;
    html.setAttribute('data-theme', theme);
    try { localStorage.setItem(STORAGE_THEME, theme); } catch (e) {}

    // Update meta theme-color
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'light' ? '#f5f7fc' : '#070a12');
  }

  function toggleTheme() {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  }

  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);

  /* =========================================================
     3. LANGUAGE / i18n
  ========================================================= */
  function applyLang(lang) {
    currentLang = lang;
    const dict = I18N[lang] || I18N[DEFAULT_LANG];

    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ur' ? 'rtl' : 'ltr');
    try { localStorage.setItem(STORAGE_LANG, lang); } catch (e) {}

    // Translate all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Update toggle label — shows the OTHER language
    if (langLabel) {
      langLabel.textContent = lang === 'ur' ? 'EN' : 'اردو';
    }

    // Recalculate FAQ heights after text change
    document.querySelectorAll('.faq__item.open .faq__a').forEach(function (el) {
      el.style.maxHeight = el.scrollHeight + 'px';
    });
  }

  function toggleLang() {
    applyLang(currentLang === 'en' ? 'ur' : 'en');
  }

  if (langToggle) langToggle.addEventListener('click', toggleLang);

  /* =========================================================
     4. NAVBAR — scroll
  ========================================================= */
  const nav = document.getElementById('nav');

  function handleScroll() {
    if (!nav) return;
    if (window.scrollY > 20) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  /* =========================================================
     5. MOBILE MENU
  ========================================================= */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.classList.toggle('active', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* =========================================================
     6. SCROLL REVEAL
  ========================================================= */
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* =========================================================
     7. FAQ ACCORDION
  ========================================================= */
  const faqItems = document.querySelectorAll('.faq__item');

  faqItems.forEach(function (item) {
    const question = item.querySelector('.faq__q');
    const answer = item.querySelector('.faq__a');
    if (!question || !answer) return;

    question.addEventListener('click', function () {
      const isOpen = item.classList.contains('open');

      faqItems.forEach(function (other) {
        if (other !== item && other.classList.contains('open')) {
          other.classList.remove('open');
          const otherAnswer = other.querySelector('.faq__a');
          if (otherAnswer) otherAnswer.style.maxHeight = null;
        }
      });

      if (isOpen) {
        item.classList.remove('open');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  /* =========================================================
     8. COPY SERVER URL
  ========================================================= */
  const copyBtn = document.getElementById('copyUrl');

  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      const url = copyBtn.getAttribute('data-url') || '';

      function showCopied() {
        copyBtn.classList.add('copied');
        setTimeout(function () { copyBtn.classList.remove('copied'); }, 1600);
      }

      function fallbackCopy(text) {
        const temp = document.createElement('textarea');
        temp.value = text;
        temp.style.position = 'fixed';
        temp.style.opacity = '0';
        document.body.appendChild(temp);
        temp.select();
        try { document.execCommand('copy'); showCopied(); } catch (err) {}
        document.body.removeChild(temp);
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(showCopied).catch(function () {
          fallbackCopy(url);
        });
      } else {
        fallbackCopy(url);
      }
    });
  }

  /* =========================================================
     9. FOOTER YEAR
  ========================================================= */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* =========================================================
     10. SMOOTH SCROLL
  ========================================================= */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const navHeight = nav ? nav.offsetHeight : 70;
      const targetTop =
        target.getBoundingClientRect().top + window.pageYOffset - navHeight;

      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    });
  });

  /* =========================================================
     11. RESIZE — FAQ recalc
  ========================================================= */
  let resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      document.querySelectorAll('.faq__item.open .faq__a').forEach(function (el) {
        el.style.maxHeight = el.scrollHeight + 'px';
      });
    }, 150);
  });

  /* =========================================================
     12. INIT — apply saved preferences
  ========================================================= */
  applyTheme(currentTheme);
  applyLang(currentLang);
  handleScroll();

})();