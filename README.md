# وب‌سایت شخصی آرمین دارایی 🚀

سایت رزومه دوزبانه (فارسی / انگلیسی) با ظاهر شیشه‌ای (Glassmorphism)، تم مشکی و بنفش‌آبی — آماده برای انتشار روی **GitHub Pages**.

---

## 📤 آموزش انتشار روی GitHub Pages (قدم به قدم)

### روش ۱ — با مرورگر (ساده‌ترین راه، بدون نصب چیزی)

1. وارد حساب **GitHub** خود شوید (اگر ندارید در github.com ثبت‌نام کنید).
2. روی دکمه **+** بالای صفحه بزنید و **New repository** را انتخاب کنید.
3. نام مخزن را دقیقاً این بگذارید:
   ```
   armindaraei1381.github.io
   ```
   (به‌جای `armindaraei1381` همان نام کاربری GitHub خودتان — این‌طوری آدرس سایت مستقیم می‌شود `https://armindaraei1381.github.io`)
4. گزینه **Public** را انتخاب کنید و روی **Create repository** بزنید.
5. در صفحه جدید روی **uploading an existing file** کلیک کنید.
6. **همه فایل‌های داخل پوشه `armin-portfolio`** (یعنی `index.html`، پوشه `css`، پوشه `js`، پوشه `assets`، `favicon.svg` و همین `README.md`) را با درگ‌اند‌دراپ بیندازید و روی **Commit changes** بزنید.
   > ⚠️ مهم: خودِ پوشه `armin-portfolio` را آپلود نکنید؛ فایل‌های **داخل** آن باید مستقیم در ریشه مخزن باشند تا `index.html` در ریشه قرار بگیرد.
7. به مسیر **Settings → Pages** بروید.
8. در بخش **Build and deployment**:
   - **Source** را روی `Deploy from a branch` بگذارید.
   - **Branch** را روی `main` و پوشه را روی `/ (root)` بگذارید و **Save** بزنید.
9. بعد از ۱ تا ۲ دقیقه صفحه را رفرش کنید؛ بالای صفحه یک باکس سبز ظاهر می‌شود که آدرس سایتتان را نشان می‌دهد:
   ```
   https://armindaraei1381.github.io
   ```
🎉 تمام! سایتتان بالا آمده.

### روش ۲ — با Git (اگر با ترمینال راحت هستید)

```bash
# داخل پوشه armin-portfolio
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/armindaraei1381/armindaraei1381.github.io.git
git push -u origin main
```
سپس مثل روش ۱، بخش **Settings → Pages → Branch: main / (root)** را ذخیره کنید.

### اگر می‌خواهید آدرس سفارشی داشته باشید (اختیاری)

مخزن را با هر نام دیگری بسازید (مثلاً `portfolio`) و بعد از فعال‌کردن Pages، سایت روی این آدرس در دسترس است:
```
https://armindaraei1381.github.io/portfolio/
```

---

## 🌐 زبان سایت

- سایت به‌صورت خودکار زبان مرورگر کاربر را تشخیص می‌دهد (فارسی پیش‌فرض است).
- با دکمه **EN / فا** در نویگیشن بالای سایت، بین فارسی و انگلیسی جابه‌جا شوید؛ انتخاب کاربر در مرورگرش ذخیره می‌شود (`localStorage`).
- فارسی کاملاً راست‌چین (RTL) و انگلیسی چپ‌چین (LTR) رندر می‌شود.

## ✏️ ویرایش محتوا

- **متن‌های فارسی و انگلیسی:** فایل `js/script.js` — در شیء `I18N` هر دو زبان کنار هم قرار دارند.
- **عکس پروفایل:** فایل `assets/profile.jpg` را با عکس دلخواه (ترجیحاً مربعی) جایگزین کنید.
- **رزومه PDF:** فایل `assets/Armin-Daraei-CV.pdf` را با نسخه جدید رزومه عوض کنید (هم‌نام بماند).
- **رنگ‌ها:** فایل `css/style.css` — بخش `:root` (متغیرهای `--accent`، `--accent-2` و `--grad`).

## 🗂 ساختار فایل‌ها

```
armin-portfolio/
├── index.html          ← صفحه اصلی
├── css/
│   └── style.css       ← استایل (گلس‌مورفیسم + تم تیره)
├── js/
│   └── script.js       ← دوزبانه‌سازی + انیمیشن‌ها
├── assets/
│   ├── profile.jpg     ← عکس پروفایل
│   ├── Armin-Daraei-CV.pdf
│   └── fonts/          ← فونت‌ها (میزبانی محلی، بدون نیاز به فیلترشکن)
│       ├── vazirmatn-arabic-wght-normal.woff2
│       ├── vazirmatn-latin-wght-normal.woff2
│       ├── inter-latin-wght-normal.woff2
│       └── space-grotesk-latin-wght-normal.woff2
├── favicon.svg
└── README.md
```

## 👁 پیش‌نمایش روی سیستم خودتان

فایل `index.html` را مستقیم در مرورگر باز کنید، یا:

```bash
cd armin-portfolio
python3 -m http.server 8000
# سپس در مرورگر: http://localhost:8000
```

## 🛠 تکنولوژی

HTML5 + CSS3 + JavaScript خالص (بدون هیچ فریم‌ورک و بدون هیچ وابستگی خارجی) — سریع، سبک و سازگار با GitHub Pages.
