const fs = require('fs');
const path = require('path');

const SUPPORT_DIR = path.join(__dirname, '../pages/support');
const outputPath = path.join(__dirname, '../../../public/faqList.json');

const folders = fs.readdirSync(SUPPORT_DIR, { withFileTypes: true });
const items = [];

for (const folder of folders) {
  if (!folder.isDirectory()) continue;

  const filePath = path.join(SUPPORT_DIR, folder.name, 'page.tsx');
  if (!fs.existsSync(filePath)) continue;

  const content = fs.readFileSync(filePath, 'utf8');

  // Match: export const metadata = { title: "Some Title" }
  const match = content.match(/metadata\s*=\s*\{[^}]*title\s*:\s*["'`](.*?)["'`]/);
  const title = match ? match[1] : folder.name;

  items.push({
    title,
    href: `/pages/support/${folder.name}`,
  });
}

fs.writeFileSync(outputPath, JSON.stringify(items, null, 2));
console.log('✅ FAQ list generated at public/faqList.json!');
