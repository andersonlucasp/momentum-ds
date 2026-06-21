# Figma Code Connect - Momentum DS

This directory contains Code Connect mappings that link your Figma design components to **Momentum DS** code implementations.

When you select a component in Figma and view Code Connect, you'll see the exact React Native code needed to implement that design.

## What is Code Connect?

Code Connect is a Figma plugin that:
1. Shows code snippets directly in Figma
2. Keeps design and code synchronized
3. Copies code with a single click
4. Enables design-to-code workflow

## How to Use with Your Figma File

### For Designers/Developers

**Your Figma File:**
https://www.figma.com/design/FcocM09j8RbzY7rosjqKOz/DesignSystem---Teste?node-id=821-687

**To see Code Connect mappings:**

1. Open Figma file (link above)
2. Select a component (Button, Input, Card, Badge, etc.)
3. **Open Code Connect plugin** (Plugins menu → Code Connect)
4. See the React Native code snippet appear
5. Click "Copy" to copy code to clipboard
6. Paste into your project

**Mapped Components:**
- ✅ Button → `<DsButton />`
- ✅ Card → `<DsCard />`
- ✅ Badge → `<DsBadge />`
- ✅ Input → `<DsInput />`
- 🔄 More coming soon...

### For Code/Design Sync

**When to add Code Connect mappings:**
1. You create a new component in Figma
2. You implement it in code
3. Add a new `.figma.ts` file mapping them
4. Developers can then see code in Figma instantly

## File Structure

```
.figma/
├── Button.figma.ts       # Button component mapping
├── Input.figma.ts        # Input component mapping
├── Modal.figma.ts        # Modal component mapping
└── ... (one file per component)
```

## Creating a New Mapping

1. Create a new file: `.figma/ComponentName.figma.ts`
2. Import the component and figma SDK:
   ```typescript
   import figma from '@figma/code-connect';
   import { DsButton } from '../packages/react/src';
   ```
3. Use `figma.connect()` to map:
   ```typescript
   figma.connect(
     DsButton,
     'https://www.figma.com/design/...?node-id=...',
     {
       example: (props) => <DsButton {...props}>Label</DsButton>,
       props: {
         variant: figma.enum('Variant', { ... }),
         size: figma.enum('Size', { ... }),
       }
     }
   );
   ```
4. Run `npm run figma:connect` to publish

## Resources

- [Figma Code Connect Docs](https://www.figma.com/developers/api/code-connect/)
- [GitHub: Code Connect Examples](https://github.com/figma/code-connect)
- [Best Practices](https://www.figma.com/developers/api/code-connect/#best-practices)

## CLI Commands

```bash
# Upload all mappings to Figma
npm run figma:connect

# Validate mappings locally
npx figma connect validate

# List all mappings
npx figma connect list
```

## Tips

- **Keep mappings in sync** with actual component props
- **Test in Figma** before publishing
- **Use semantic property names** (variant, size, disabled)
- **Document edge cases** in code examples
- **Update on every component change** (especially props)

## Troubleshooting

### "Code Connect plugin not installed"
→ Install from Figma Plugins: Search "Code Connect"

### "Mapping not appearing in Figma"
→ Run `npm run figma:connect` again
→ Reload Figma (Cmd+R)

### "Props not showing correctly"
→ Check that `figma.enum()` matches Figma component properties
→ Verify Figma node IDs are correct

---

**Goal:** Keep design and code synchronized with zero manual effort.
