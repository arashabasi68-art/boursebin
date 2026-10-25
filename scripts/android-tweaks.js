// بعد از «npx cap add android»: آیکون برنامه را جایگزین می‌کند.
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const res = path.join(root, 'android', 'app', 'src', 'main', 'res');
if (!fs.existsSync(res)) { console.error('android/ پیدا نشد؛ ابتدا npx cap add android را اجرا کنید.'); process.exit(1); }
// آیکون تطبیقی پیش‌فرض را حذف می‌کنیم تا آیکون PNG خودمان استفاده شود
fs.rmSync(path.join(res, 'mipmap-anydpi-v26'), { recursive: true, force: true });
const src = path.join(root, 'android-icons');
for (const d of fs.readdirSync(src)) {
  const dst = path.join(res, d);
  fs.mkdirSync(dst, { recursive: true });
  for (const f of fs.readdirSync(path.join(src, d))) fs.copyFileSync(path.join(src, d, f), path.join(dst, f));
}
console.log('icons replaced');
