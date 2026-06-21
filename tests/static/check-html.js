const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

const root = path.resolve(__dirname, '../..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
if (!scriptMatch) throw new Error('No inline script found');

new vm.Script(scriptMatch[1], { filename: 'index.inline.js' });

const required = [
  'Content-Security-Policy',
  'ZK_SECURE_VAULT_V2',
  'PBKDF2',
  'AES-GCM',
  'function safeImageUrl',
  'blobToDataURL',
  'rel="noopener noreferrer"',
  'viewport-fit=cover'
];
for (const token of required) {
  if (!html.includes(token)) throw new Error(`Missing required hardening token: ${token}`);
}

if (/localStorage\.setItem\(KEY_PFX/.test(html)) {
  throw new Error('API keys must not be saved in clear text localStorage');
}
if (!/data:image\\\//.test(html) && !/data:image\//.test(html)) {
  throw new Error('Generated data image persistence is not allowed by sanitizer');
}

console.log('Static ZeroKey checks passed');
