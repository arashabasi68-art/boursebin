// فایل‌های سایت را برای بسته‌بندی اندروید در پوشهٔ www کپی می‌کند.
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const out = path.join(root, 'www');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
for (const f of ['index.html', 'manifest.webmanifest', 'sw.js']) fs.copyFileSync(path.join(root, f), path.join(out, f));
fs.cpSync(path.join(root, 'icons'), path.join(out, 'icons'), { recursive: true });
console.log('www ready:', fs.readdirSync(out).join(', '));
