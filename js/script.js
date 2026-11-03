/* ═══════════════════════════════════════════════════════════
   Armin Daraei — Portfolio  ·  i18n + interactions
   ═══════════════════════════════════════════════════════════ */
'use strict';

/* ─── Bilingual dictionary ─── */
const I18N = {
  fa: {
    'meta.title': 'آرمین دارائی — مهندس دواپس و توسعه‌دهنده پایتون',
    'nav.about': 'درباره من', 'nav.skills': 'مهارت‌ها', 'nav.exp': 'تجربه‌ها',
    'nav.projects': 'پروژه‌ها', 'nav.edu': 'تحصیلات', 'nav.contact': 'تماس',
    'hero.hello': 'سلام، من آرمین هستم 👋',
    'hero.first': 'آرمین', 'hero.last': 'دارائی',
    'hero.tagline': 'خطوط لوله CI/CD پایدار می‌سازم و ابزارهای پایتونی خلق می‌کنم — از نرم‌افزارهای پژوهشی دسکتاپ تا گردش‌کارهای استقرار خودکار.',
    'hero.cta1': 'تماس با من', 'hero.cta2': 'دانلود رزومه',
    'hero.loc': 'سمنان، ایران', 'hero.langs': 'فارسی · انگلیسی',
    'hero.badgeNum': '۴+', 'hero.badge2': 'سال تجربه',
    'stat1.v': '۴+', 'stat1.l': 'سال تجربه برنامه‌نویسی',
    'stat2.v': '۲', 'stat2.l': 'ابزار پژوهشی برای دانشگاه منچستر',
    'stat3.v': 'اولین', 'stat3.l': 'دوره فارسی CustomTkinter در ایران',
    'stat4.v': '۲', 'stat4.l': 'گواهینامه حرفه‌ای',
    'about.label': 'درباره من', 'about.title': 'کمی بیشتر از من بگوییم',
    'about.p1': 'مهندس دواپس و توسعه‌دهنده پایتون با بیش از ۴ سال تجربه برنامه‌نویسی؛ از توسعه اپلیکیشن‌های دسکتاپ با پایتون، CustomTkinter و PyQt تا ساخت نرم‌افزار پژوهشی برای دانشگاه منچستر انگلستان. در حال حاضر تمرکزم روی خطوط لوله CI/CD، گردش‌کارهای Git، لینوکس و کانتینرسازی است. به‌عنوان مربی فنی باتجربه، سبک ارتباطی شفافی دارم و سرعت یادگیری بالایی دارم.',
    'about.k1': 'موقعیت', 'about.v1': 'سمنان، ایران',
    'about.k2': 'ایمیل',
    'about.k3': 'تحصیلات', 'about.v3': 'ارشد مهندسی نرم‌افزار',
    'about.k4': 'زبان‌ها', 'about.v4': 'فارسی · انگلیسی',
    'skills.label': 'مهارت‌ها', 'skills.title': 'جعبه‌ابزار من',
    'skills.sub': 'فناوری‌هایی که هر روز با آن‌ها کار می‌کنم',
    'skills.devops.t': 'دواپس', 'skills.devops.s': 'اتوماسیون و استقرار',
    'skills.devops.p1': 'لینوکس و خط فرمان ویندوز', 'skills.devops.p2': 'مبانی شبکه',
    'skills.dev.t': 'توسعه', 'skills.dev.s': 'برنامه‌نویسی و اسکریپت‌نویسی',
    'skills.other.t': 'سایر', 'skills.other.s': 'مهارت‌های تکمیلی',
    'skills.other.p1': 'هوش مصنوعی و مهندسی پرامپت', 'skills.other.p2': 'آموزش فنی', 'skills.other.p3': 'زبان انگلیسی (متوسط)',
    'exp.label': 'تجربه کاری', 'exp.title': 'مسیر حرفه‌ای',
    'exp.j1.t': 'مهندس دواپس', 'exp.j1.d': 'ژوئن ۲۰۲۶ — اکنون',
    'exp.j1.o': 'آمرتکا دواپس یارا · تهران',
    'exp.j1.b1': 'ساخت و نگهداری خطوط لوله CI/CD برای خودکارسازی فرآیندهای بیلد، تست و استقرار اپلیکیشن‌ها.',
    'exp.j1.b2': 'مدیریت گردش‌کارهای Git شامل برنچینگ، پول‌ریکوئست و بازبینی کد؛ همکاری نزدیک با تیم‌های توسعه برای انتشار سریع‌تر و مطمئن‌تر نرم‌افزار.',
    'exp.j2.t': 'مدرس پایتون', 'exp.j2.d': 'ژوئن ۲۰۲۳ — اکنون',
    'exp.j2.o': 'موسسه آموزشی فرادرس · تهران',
    'exp.j2.b1': 'طراحی و تدریس دوره «CustomTkinter برای توسعه اپلیکیشن دسکتاپ» — نخستین دوره فارسی‌زبان روی این کتابخانه در ایران، همراه با گواهینامه پایان دوره.',
    'exp.j2.tag': 'تدریس',
    'prj.label': 'پروژه‌ها', 'prj.title': 'کارهای منتخب',
    'prj.sub': 'نرم‌افزارهای پژوهشی تحویل‌شده به دانشگاه منچستر',
    'prj.p1.flag': 'پژوهش بین‌المللی', 'prj.p1.t': 'ابزار ارزیابی راهبردهای غیرفعال',
    'prj.p1.m': 'دانشگاه منچستر، انگلستان · ژوئن ۲۰۲۴',
    'prj.p1.d': 'طراحی و ساخت اپلیکیشن دسکتاپ پایتون برای یک پروژه پژوهشی بین‌المللی؛ ابزاری برای ارزیابی و انتخاب راهبردهای غیرفعال بهینه‌سازی انرژی ساختمان با روش تصمیم‌گیری چندمعیاره (MCDM).',
    'prj.p2.flag': 'پژوهش بین‌المللی', 'prj.p2.t': 'ابزار ارزیابی ریسک واحدهای درسی',
    'prj.p2.m': 'دانشگاه منچستر، انگلستان · سپتامبر ۲۰۲۴',
    'prj.p2.d': 'طراحی و ساخت ابزار دسکتاپ با پایتون (CustomTkinter) برای تحلیل و ارزیابی ریسک واحدهای درسی؛ با رابط کاربری ساخت‌یافته و منطق محاسباتی کاملاً اختصاصی.',
    'edu.label': 'تحصیلات', 'edu.title': 'دانش و گواهینامه‌ها',
    'edu.col1': 'مدرک دانشگاهی', 'edu.col2': 'گواهینامه‌ها',
    'edu.e1.d': '۲۰۲۶ — اکنون', 'edu.e1.t': 'کارشناسی ارشد مهندسی نرم‌افزار', 'edu.e1.u': 'دانشگاه آزاد اسلامی · سمنان',
    'edu.e2.d': '۲۰۲۰ — ۲۰۲۵', 'edu.e2.t': 'کارشناسی مهندسی عمران', 'edu.e2.u': 'دانشگاه سمنان (دولتی)',
    'edu.c1.t': 'مهندسی دواپس', 'edu.c2.t': 'برنامه‌نویسی پایتون',
    'ct.label': 'تماس با من', 'ct.title': 'بیایید با هم چیزی بسازیم',
    'ct.sub': 'برای همکاری، فرصت شغلی یا حتی یک گفت‌وگوی فنی، خوشحال می‌شوم پیامت را بخوانم.',
    'foot.t1': 'طراحی و توسعه با', 'foot.t2': 'توسط آرمین دارایی', 'foot.t3': '۲۰۲۶',
    'toast': 'ایمیل کپی شد!',
    'roles': ['مهندس دواپس', 'توسعه‌دهنده پایتون', 'مربی فنی']
  },
  en: {
    'meta.title': 'Armin Daraei — DevOps Engineer & Python Developer',
    'nav.about': 'About', 'nav.skills': 'Skills', 'nav.exp': 'Experience',
    'nav.projects': 'Projects', 'nav.edu': 'Education', 'nav.contact': 'Contact',
    'hero.hello': "Hi, I'm Armin 👋",
    'hero.first': 'Armin', 'hero.last': 'Daraei',
    'hero.tagline': 'I build reliable CI/CD pipelines and craft Python tools — from research desktop software to automated deployment workflows.',
    'hero.cta1': 'Get in touch', 'hero.cta2': 'Download CV',
    'hero.loc': 'Semnan, Iran', 'hero.langs': 'Persian · English',
    'hero.badgeNum': '4+', 'hero.badge2': 'Years of Experience',
    'stat1.v': '4+', 'stat1.l': 'Years of Coding Experience',
    'stat2.v': '2', 'stat2.l': 'Research Tools for University of Manchester',
    'stat3.v': '1st', 'stat3.l': 'Persian CustomTkinter Course in Iran',
    'stat4.v': '2', 'stat4.l': 'Professional Certifications',
    'about.label': 'About Me', 'about.title': 'A little more about me',
    'about.p1': "DevOps engineer and Python developer with 4+ years of programming experience, including desktop application development (Python, CustomTkinter, PyQt) and delivery of research software for the University of Manchester. Currently focused on CI/CD pipelines, Git workflows, Linux, and containerization. Experienced technical instructor with a clear communication style and a fast learning curve.",
    'about.k1': 'Location', 'about.v1': 'Semnan, Iran',
    'about.k2': 'Email',
    'about.k3': 'Education', 'about.v3': 'MSc Software Engineering',
    'about.k4': 'Languages', 'about.v4': 'Persian · English',
    'skills.label': 'Skills', 'skills.title': 'My Toolbox',
    'skills.sub': 'Technologies I work with every day',
    'skills.devops.t': 'DevOps', 'skills.devops.s': 'Automation & Deployment',
    'skills.devops.p1': 'Linux & Windows CLI', 'skills.devops.p2': 'Networking Fundamentals',
    'skills.dev.t': 'Development', 'skills.dev.s': 'Programming & Scripting',
    'skills.other.t': 'Other', 'skills.other.s': 'Complementary skills',
    'skills.other.p1': 'AI & Prompt Engineering', 'skills.other.p2': 'Technical Training', 'skills.other.p3': 'English (Intermediate)',
    'exp.label': 'Experience', 'exp.title': 'Professional Journey',
    'exp.j1.t': 'DevOps Engineer', 'exp.j1.d': 'Jun 2026 — Present',
    'exp.j1.o': 'Amertka DevOps Yara · Tehran',
    'exp.j1.b1': 'Build and maintain CI/CD pipelines that automate the build, test, and deployment of applications.',
    'exp.j1.b2': 'Manage Git workflows (branching, pull requests, code review) and work closely with development teams to release software faster and more reliably.',
    'exp.j2.t': 'Python Instructor', 'exp.j2.d': 'Jun 2023 — Present',
    'exp.j2.o': 'Faradars Educational Platform · Tehran',
    'exp.j2.b1': 'Created and taught “CustomTkinter for Desktop App Development” — the first Persian-language course on this library in Iran, including a completion certificate.',
    'exp.j2.tag': 'Teaching',
    'prj.label': 'Projects', 'prj.title': 'Selected Work',
    'prj.sub': 'Research software delivered to the University of Manchester',
    'prj.p1.flag': 'International Research', 'prj.p1.t': 'Passive Strategy Assessment Tool',
    'prj.p1.m': 'University of Manchester, UK · Jun 2024',
    'prj.p1.d': 'Designed and built a Python desktop application for an international research project that helps evaluate and select passive building-energy-optimization strategies using a Multi-Criteria Decision Making (MCDM) methodology.',
    'prj.p2.flag': 'International Research', 'prj.p2.t': 'Course-Unit Risk Assessment Tool',
    'prj.p2.m': 'University of Manchester, UK · Sep 2024',
    'prj.p2.d': 'Designed and built a Python (CustomTkinter) desktop tool for analyzing and evaluating course-unit risk, with a structured UI and custom computational logic.',
    'edu.label': 'Education', 'edu.title': 'Knowledge & Credentials',
    'edu.col1': 'Academic Degrees', 'edu.col2': 'Certifications',
    'edu.e1.d': '2026 — Present', 'edu.e1.t': 'MSc in Software Engineering', 'edu.e1.u': 'Islamic Azad University · Semnan',
    'edu.e2.d': '2020 — 2025', 'edu.e2.t': 'BSc in Civil Engineering', 'edu.e2.u': 'Semnan University (Public)',
    'edu.c1.t': 'DevOps Engineering', 'edu.c2.t': 'Python Programming',
    'ct.label': 'Contact', 'ct.title': "Let's build something together",
    'ct.sub': "For collaborations, opportunities, or even a tech chat — I'd love to hear from you.",
    'foot.t1': 'Designed & built with', 'foot.t2': 'by Armin Daraei', 'foot.t3': '2026',
    'toast': 'Email copied to clipboard!',
    'roles': ['DevOps Engineer', 'Python Developer', 'Technical Instructor']
  }
};

/* ─── Elements ─── */
const html = document.documentElement;
const langLabel = document.getElementById('langLabel');
const roleText = document.getElementById('roleText');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav-links a');
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const toTop = document.getElementById('toTop');
const toast = document.getElementById('toast');

let lang = html.lang === 'en' ? 'en' : 'fa';

/* ─── Language engine ─── */
function applyLang(l) {
  lang = l;
  html.lang = l;
  html.dir = l === 'fa' ? 'rtl' : 'ltr';
  const dict = I18N[l];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.title = dict['meta.title'];
  langLabel.textContent = l === 'fa' ? 'EN' : 'فا';
  try { localStorage.setItem('lang', l); } catch (e) {}
  restartRoles();
}

document.getElementById('langToggle').addEventListener('click', () => {
  applyLang(lang === 'fa' ? 'en' : 'fa');
});

/* ─── Role typewriter ─── */
let roleIdx = 0, charIdx = 0, deleting = false, roleTimer = null;
function tick() {
  const roles = I18N[lang].roles;
  const cur = roles[roleIdx % roles.length];
  charIdx += deleting ? -1 : 1;
  roleText.textContent = cur.slice(0, charIdx);
  let delay = deleting ? 34 : 72;
  if (!deleting && charIdx >= cur.length) { delay = 2000; deleting = true; }
  else if (deleting && charIdx <= 0) { deleting = false; roleIdx++; delay = 420; }
  roleTimer = setTimeout(tick, delay);
}
function restartRoles() {
  clearTimeout(roleTimer);
  roleIdx = 0; charIdx = 0; deleting = false;
  roleText.textContent = '';
  roleTimer = setTimeout(tick, 350);
}

/* ─── Scroll reveal ─── */
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ─── Nav: scrolled state, active link, back-to-top ─── */
const sections = Array.from(document.querySelectorAll('section[id]'));
function onScroll() {
  const y = window.scrollY;
  nav.classList.toggle('scrolled', y > 10);
  toTop.classList.toggle('show', y > 640);
  let current = '';
  sections.forEach(s => { if (y >= s.offsetTop - 150) current = s.id; });
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
}
window.addEventListener('scroll', onScroll, { passive: true });

toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ─── Mobile menu ─── */
function closeMenu() {
  menuBtn.classList.remove('open');
  mobileMenu.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
  mobileMenu.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
menuBtn.addEventListener('click', () => {
  const open = menuBtn.classList.toggle('open');
  mobileMenu.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
  mobileMenu.setAttribute('aria-hidden', String(!open));
  document.body.style.overflow = open ? 'hidden' : '';
});
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

/* ─── Copy email + toast ─── */
const copyBtn = document.getElementById('copyEmail');
let toastTimer = null;
function showToast() {
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2300);
}
copyBtn.addEventListener('click', async () => {
  const email = copyBtn.getAttribute('data-email');
  try {
    await navigator.clipboard.writeText(email);
  } catch (e) {
    const ta = document.createElement('textarea');
    ta.value = email; document.body.appendChild(ta);
    ta.select(); document.execCommand('copy'); ta.remove();
  }
  showToast();
});

/* ─── Init ─── */
applyLang(lang);
onScroll();
