# Renova Landing Page

Landing page عربية/إنجليزية جاهزة للنشر على Cloudflare Pages.

## تعديل سريع
- افتح `index.html` لتعديل النصوص وروابط الأزرار.
- افتح `style.css` لتغيير الألوان، الخطوط، والمسافات.
- ضع لوجو Renova داخل `images/` ويمكن استبدال مربع R في `index.html` بصورة اللوجو.
- رابط زر Android موجود في `index.html` ويمكن تغييره إلى أي رابط APK جديد.

## Cloudflare Pages
ارفع المجلد إلى GitHub ثم:
Workers & Pages → Create application → Pages → Import an existing Git repository

لصفحة HTML عادية:
Build command: `exit 0`
Build output directory: `/` أو اترك إعدادات النشر التي يطلبها Cloudflare حسب طريقة الربط.

الصفحة لا تحتاج قاعدة بيانات أو سيرفر.

## Logo
تم دمج لوجو Reinova المرفوع بصيغة PNG بخلفية شفافة داخل `images/renova-logo.png`.
