#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const tokensDir = path.join(__dirname, 'tokens');
const buildDir = path.join(__dirname, 'build');

// Ensure build directory exists
if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir, { recursive: true });
}

// Read all JSON files
const tokenFiles = fs.readdirSync(tokensDir).filter(f => f.endsWith('.json'));
const allTokens = {};

tokenFiles.forEach(file => {
  const content = fs.readFileSync(path.join(tokensDir, file), 'utf-8');
  const tokens = JSON.parse(content);
  Object.assign(allTokens, tokens);
});

// Generate CSS variables
function flattenTokens(obj, prefix = '') {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}-${key}` : key;
    if (typeof value === 'object' && value !== null && !value.value) {
      Object.assign(result, flattenTokens(value, fullKey));
    } else if (value && value.value) {
      result[fullKey] = value.value;
    }
  }
  return result;
}

const flatTokens = flattenTokens(allTokens);

// Generate CSS file
let cssContent = ':root {\n';
for (const [key, value] of Object.entries(flatTokens)) {
  const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
  cssContent += `  --${cssKey}: ${value};\n`;
}
cssContent += '}\n';

fs.writeFileSync(path.join(buildDir, 'tokens.css'), cssContent);
console.log('✓ Generated tokens.css');

// Generate TypeScript file
let tsContent = `// Auto-generated design tokens
// DO NOT EDIT MANUALLY

export const colors = ${JSON.stringify(allTokens.color, null, 2)};\n\n`;
tsContent += `export const spacing = ${JSON.stringify(allTokens.spacing, null, 2)};\n\n`;
tsContent += `export const fontSize = ${JSON.stringify(allTokens.fontSize, null, 2)};\n\n`;
tsContent += `export const fontWeight = ${JSON.stringify(allTokens.fontWeight, null, 2)};\n\n`;
tsContent += `export const semantic = ${JSON.stringify(allTokens.semantic, null, 2)};\n\n`;
tsContent += `export default {\n  colors,\n  spacing,\n  fontSize,\n  fontWeight,\n  semantic,\n};\n`;

fs.writeFileSync(path.join(buildDir, 'index.ts'), tsContent);
console.log('✓ Generated index.ts');

// Generate TypeScript definitions
let dtsContent = `export declare const colors: Record<string, any>;\n`;
dtsContent += `export declare const spacing: Record<string, any>;\n`;
dtsContent += `export declare const fontSize: Record<string, any>;\n`;
dtsContent += `export declare const fontWeight: Record<string, any>;\n`;
dtsContent += `export declare const semantic: Record<string, any>;\n`;
dtsContent += `declare const _default: {\n  colors: typeof colors;\n  spacing: typeof spacing;\n  fontSize: typeof fontSize;\n  fontWeight: typeof fontWeight;\n  semantic: typeof semantic;\n};\n`;
dtsContent += `export default _default;\n`;

fs.writeFileSync(path.join(buildDir, 'index.d.ts'), dtsContent);
console.log('✓ Generated index.d.ts');

console.log('\n✅ Tokens built successfully!');
