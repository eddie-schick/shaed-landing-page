import sharp from 'sharp';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');

const logoBuffer = readFileSync(resolve(projectRoot, 'public/SHAEDLogo_updated.png'));

const WIDTH = 1200;
const HEIGHT = 627;

const svgOverlay = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0C1C19"/>
      <stop offset="50%" stop-color="#1E3A5F"/>
      <stop offset="100%" stop-color="#122339"/>
    </linearGradient>
    <linearGradient id="tealGlow" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#3B8C7D" stop-opacity="0.15"/>
      <stop offset="50%" stop-color="#3B8C7D" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#3B8C7D" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#3B8C7D"/>
      <stop offset="100%" stop-color="#53A393"/>
    </linearGradient>
  </defs>

  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
  <rect x="0" y="0" width="600" height="${HEIGHT}" fill="url(#tealGlow)"/>

  <circle cx="1100" cy="80" r="200" fill="#3B8C7D" opacity="0.06"/>
  <circle cx="100" cy="550" r="150" fill="#3B8C7D" opacity="0.04"/>

  <rect x="80" y="430" width="60" height="4" rx="2" fill="url(#accent)"/>

  <text x="80" y="280" font-family="system-ui, -apple-system, sans-serif" font-size="52" font-weight="700" fill="#FFFFFF" letter-spacing="-1">The smarter way to procure</text>
  <text x="80" y="345" font-family="system-ui, -apple-system, sans-serif" font-size="52" font-weight="700" fill="#53A393" letter-spacing="-1">commercial vehicles.</text>

  <text x="80" y="465" font-family="system-ui, -apple-system, sans-serif" font-size="20" fill="#A9D1C9" opacity="0.85">AI-powered procurement platform for fleets, dealers, and OEMs</text>

  <text x="80" y="560" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="600" fill="#3B8C7D" letter-spacing="2">SHAED.AI</text>
</svg>`;

const logoPadded = await sharp(logoBuffer)
  .resize(260, null, { fit: 'inside' })
  .toBuffer();

const logoMeta = await sharp(logoPadded).metadata();

await sharp(Buffer.from(svgOverlay))
  .png()
  .composite([
    {
      input: logoPadded,
      top: 80,
      left: 80,
    },
  ])
  .toFile(resolve(projectRoot, 'public/og-image.png'));

console.log('OG image generated: public/og-image.png');
