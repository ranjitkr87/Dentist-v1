import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, '../public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// CRC32 implementation for PNG chunks
function createCRC32Table() {
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[i] = c;
  }
  return table;
}

const crcTable = createCRC32Table();
function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function makeChunk(type, data) {
  const typeBuf = Buffer.from(type, 'ascii');
  const len = data.length;
  const chunk = Buffer.alloc(12 + len);
  chunk.writeUInt32BE(len, 0);
  typeBuf.copy(chunk, 4);
  data.copy(chunk, 8);
  const crcTarget = Buffer.concat([typeBuf, data]);
  const crcVal = crc32(crcTarget);
  chunk.writeUInt32BE(crcVal, 8 + len);
  return chunk;
}

// Generate valid RGBA PNG Buffer
function generatePng(width, height, drawFn) {
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  // IHDR
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // 8 bits per channel
  ihdr[9] = 6; // RGBA
  ihdr[10] = 0; // Deflate
  ihdr[11] = 0; // Filter
  ihdr[12] = 0; // No interlace
  const ihdrChunk = makeChunk('IHDR', ihdr);

  // Scanlines with filter byte 0
  const rowSize = 1 + width * 4;
  const rawData = Buffer.alloc(height * rowSize);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize;
    rawData[rowOffset] = 0; // Filter type 0 (None)
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = drawFn(x, y, width, height);
      const pxOffset = rowOffset + 1 + x * 4;
      rawData[pxOffset] = r;
      rawData[pxOffset + 1] = g;
      rawData[pxOffset + 2] = b;
      rawData[pxOffset + 3] = a;
    }
  }

  const compressed = zlib.deflateSync(rawData);
  const idatChunk = makeChunk('IDAT', compressed);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

// Dental icon drawer: rounded background in primary teal (#00685f) with crisp white tooth silhouette & gold/emerald accent
function drawAuraIcon(x, y, w, h, isMaskable = false) {
  const cx = w / 2;
  const cy = h / 2;
  const nx = (x - cx) / (w / 2);
  const ny = (y - cy) / (h / 2);
  const dist = Math.sqrt(nx * nx + ny * ny);

  // Background squircle or circle
  const cornerRadius = isMaskable ? 0 : 0.82;
  const inBackground = isMaskable || (Math.abs(nx) < cornerRadius && Math.abs(ny) < cornerRadius) || dist < 0.95;

  if (!inBackground) {
    return [0, 0, 0, 0]; // Transparent outside
  }

  // Teal background gradient: #00685f to #004d46
  const bgGrad = 1 - (ny * 0.5 + 0.5) * 0.25;
  const rBg = Math.round(0x00 * bgGrad);
  const gBg = Math.round(0x68 * bgGrad);
  const bBg = Math.round(0x5f * bgGrad);

  // Central dental silhouette shape
  const scale = isMaskable ? 0.65 : 0.78;
  const tx = nx / scale;
  const ty = ny / scale;

  // Crest / tooth equation
  const toothDist = Math.sqrt(tx * tx + (ty + 0.15) * (ty + 0.15));
  const inToothCrown = (toothDist < 0.58 && ty < 0.25) || (Math.abs(tx) < 0.45 && ty >= 0.25 && ty < 0.65);
  const inRootLeft = (tx > -0.42 && tx < -0.06 && ty >= 0.25 && ty < 0.72);
  const inRootRight = (tx > 0.06 && tx < 0.42 && ty >= 0.25 && ty < 0.72);
  const inCuspValley = (Math.abs(tx) < 0.12 && ty > 0.35);

  const inTooth = (inToothCrown || inRootLeft || inRootRight) && !inCuspValley;

  if (inTooth) {
    // Inner sparkle / jewel center
    const jewelDist = Math.sqrt(tx * tx + (ty + 0.08) * (ty + 0.08));
    if (jewelDist < 0.14) {
      // Light turquoise sparkle (#89f5e7)
      return [137, 245, 231, 255];
    }
    // White porcelain tooth
    return [255, 255, 255, 255];
  }

  // Background primary teal
  return [rBg, gBg, bBg, 255];
}

// Generate all sizes
const sizes = [
  { name: 'favicon-16x16.png', size: 16, maskable: false },
  { name: 'favicon-32x32.png', size: 32, maskable: false },
  { name: 'apple-touch-icon.png', size: 180, maskable: false },
  { name: 'pwa-192x192.png', size: 192, maskable: false },
  { name: 'pwa-512x512.png', size: 512, maskable: false },
  { name: 'pwa-maskable-512x512.png', size: 512, maskable: true },
];

for (const { name, size, maskable } of sizes) {
  const buf = generatePng(size, size, (x, y, w, h) => drawAuraIcon(x, y, w, h, maskable));
  fs.writeFileSync(path.join(publicDir, name), buf);
  console.log(`Generated ${name} (${size}x${size})`);
}

// Generate favicon.ico by wrapping 16x16 and 32x32 PNGs
const png16 = fs.readFileSync(path.join(publicDir, 'favicon-16x16.png'));
const png32 = fs.readFileSync(path.join(publicDir, 'favicon-32x32.png'));

function createIco(images) {
  const count = images.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // ICO format
  header.writeUInt16LE(count, 4);

  let currentOffset = 6 + count * 16;
  const direntries = [];
  const imageBuffers = [];

  for (const img of images) {
    const entry = Buffer.alloc(16);
    entry[0] = img.width >= 256 ? 0 : img.width;
    entry[1] = img.height >= 256 ? 0 : img.height;
    entry[2] = 0; // color palette
    entry[3] = 0; // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(img.buffer.length, 8); // image size
    entry.writeUInt32LE(currentOffset, 12); // offset

    direntries.push(entry);
    imageBuffers.push(img.buffer);
    currentOffset += img.buffer.length;
  }

  return Buffer.concat([header, ...direntries, ...imageBuffers]);
}

const icoBuf = createIco([
  { width: 16, height: 16, buffer: png16 },
  { width: 32, height: 32, buffer: png32 },
]);
fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuf);
console.log('Generated favicon.ico');

// SVG Favicon
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="auraTeal" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00685f" />
      <stop offset="100%" stop-color="#004d46" />
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="128" fill="url(#auraTeal)"/>
  <path d="M256 105 C190 105, 145 150, 145 220 C145 272, 170 315, 200 378 C214 408, 236 408, 246 345 C251 312, 261 312, 266 345 C276 408, 298 408, 312 378 C342 315, 367 272, 367 220 C367 150, 322 105, 256 105 Z" fill="#ffffff"/>
  <circle cx="256" cy="210" r="34" fill="#89f5e7"/>
  <path d="M256 186 L262 203 L279 210 L262 217 L256 234 L250 217 L233 210 L250 203 Z" fill="#00685f"/>
</svg>`;
fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgContent, 'utf-8');
console.log('Generated favicon.svg');

// Safari Pinned Tab SVG
const safariSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <path d="M256 90 C185 90, 140 140, 140 215 C140 270, 168 315, 198 380 C212 410, 235 410, 245 345 C250 312, 262 312, 267 345 C277 410, 300 410, 314 380 C344 315, 372 270, 372 215 C372 140, 327 90, 256 90 Z" fill="#000000"/>
</svg>`;
fs.writeFileSync(path.join(publicDir, 'safari-pinned-tab.svg'), safariSvg, 'utf-8');
console.log('Generated safari-pinned-tab.svg');
