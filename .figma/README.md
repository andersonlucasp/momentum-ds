# Figma Code Connect

This directory contains Figma Code Connect mappings that link Figma components to their code implementations.

## What is Code Connect?

Code Connect is a Figma plugin that displays code snippets when you select a component in Figma. It's the bridge between your design and code.

## How to Use

### For Designers
1. Open the Figma file: https://www.figma.com/design/FcocM09j8RbzY7rosjqKOz/DesignSystem---Teste
2. Select a component (e.g., Button)
3. Open the Code Connect plugin
4. See the React/React Native code snippet
5. Copy and share with developers

### For Developers
1. Edit a `.figma.ts` file to update the mapping
2. Run `npm run figma:connect` to upload to Figma
3. Changes are immediately visible in Figma

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
