# Momentum DS + Figma Setup Guide

This guide explains how to use **Code Connect** to bridge your Figma designs with Momentum DS code.

## 1. Install Code Connect Plugin in Figma

1. Open any Figma file
2. Go to **Plugins** (top menu) → **Browse all plugins**
3. Search: **Code Connect**
4. Click **Install** (by Figma)
5. Grant permissions when prompted

## 2. Open Your Design File

**URL:** https://www.figma.com/design/FcocM09j8RbzY7rosjqKOz/DesignSystem---Teste?node-id=821-687

This is your Momentum DS design file. It has Button, Input, Card, Badge, and other components.

## 3. Select a Component & View Code

1. In Figma, find the **Button** component (around node 821-687)
2. Click on it to select
3. Go to **Plugins** → **Code Connect** (or use the floating icon on right)
4. A panel opens showing:
   ```
   import { DsButton } from '@andersonlucasp/rn';
   
   <DsButton
     variant="primary"
     size="md"
     disabled={false}
     onPress={() => handlePress()}
   >
     Button
   </DsButton>
   ```
5. Copy the code and paste into your React Native project

## 4. Understand Component Props

### Button
```tsx
<DsButton
  variant="primary"      // primary, secondary, danger
  size="md"              // sm, md, lg
  disabled={false}       // boolean
  loading={false}        // boolean
  onPress={() => {}}     // callback
>
  Label
</DsButton>
```

### Card
```tsx
<DsCard
  variant="default"      // default, elevated, outlined
  padding="md"           // sm, md, lg
>
  {content}
</DsCard>
```

### Badge
```tsx
<DsBadge
  variant="success"      // default, success, warning, danger
  size="md"              // sm, md, lg
>
  Status
</DsBadge>
```

### Input
```tsx
<DsInput
  placeholder="Enter..."
  value={value}
  onChangeText={setValue}
  size="md"              // sm, md, lg
  variant="default"      // default, error, success
/>
```

## 5. Install Momentum DS in Your Project

```bash
# For React Native
npm install @andersonlucasp/rn @andersonlucasp/tokens

# Usage
import { DsButton, DsCard, DsInput, DsBadge } from '@andersonlucasp/rn';
import { colors, spacing } from '@andersonlucasp/tokens';
```

## 6. Use Tokens in Your Styling

Momentum DS includes design tokens (colors, spacing, etc) shared between Figma and code:

```typescript
import { colors, spacing, fontSize } from '@andersonlucasp/tokens';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.primary,
    padding: spacing.lg,
    gap: spacing.md,
  },
  text: {
    color: colors.text.primary,
    fontSize: fontSize.base,
  },
});
```

## 7. Workflow: Design → Code

1. **Designer** creates component in Figma (Button, Card, etc)
2. **Developer** adds Code Connect mapping (`.figma.ts` file)
3. **Designer** opens Figma, selects component → sees code instantly
4. **Developer** copies code from Figma and implements
5. Components stay synchronized

## 8. What Gets Generated Automatically

When you build Momentum DS, tokens are generated:

```bash
npm run build:tokens
```

Outputs:
- `tokens.css` - CSS custom properties for web
- `index.ts` - TypeScript exports for React/RN
- `index.d.ts` - Type definitions

## 9. Common Use Cases for Academy Apps

### Display Class Schedule
```tsx
<DsCard variant="elevated">
  <DsText weight="semibold">Yoga Class</DsText>
  <DsText color="secondary">Mon, 8:00 AM - 9:00 AM</DsText>
  <DsBadge variant="success">Available (5 spots)</DsBadge>
  <DsButton variant="primary" size="lg">
    Reserve Class
  </DsButton>
</DsCard>
```

### Login Form
```tsx
<DsView style={{ gap: spacing.md, padding: spacing.lg }}>
  <DsText variant="heading">Sign In</DsText>
  
  <DsInput
    placeholder="Email"
    value={email}
    onChangeText={setEmail}
  />
  
  <DsInput
    placeholder="Password"
    secureTextEntry
    value={password}
    onChangeText={setPassword}
  />
  
  <DsButton variant="primary" size="lg">
    Sign In
  </DsButton>
</DsView>
```

### Class List with Status
```tsx
{classes.map((c) => (
  <DsCard key={c.id} variant="default">
    <DsText weight="semibold">{c.name}</DsText>
    <DsText color="secondary">{c.instructor}</DsText>
    
    <DsBadge variant={c.available ? 'success' : 'danger'}>
      {c.available ? 'Available' : 'Full'}
    </DsBadge>
    
    {c.available && (
      <DsButton variant="primary" size="md">
        Reserve
      </DsButton>
    )}
  </DsCard>
))}
```

## 10. Next Steps

1. ✅ Install Code Connect plugin
2. ✅ Open your Figma file
3. ✅ Select Button component
4. ✅ View code in Code Connect
5. ✅ Copy code snippet
6. ✅ Install @andersonlucasp/rn in your project
7. ✅ Start building with Momentum DS!

## 🔗 Quick Links

- **Design File:** https://www.figma.com/design/FcocM09j8RbzY7rosjqKOz/DesignSystem---Teste
- **Code Repository:** https://github.com/andersonlucasp/momentum-ds
- **npm Package:** @andersonlucasp/rn
- **Documentation:** See README.md in repo root

## Questions?

Check:
1. `/figma` folder for Code Connect mappings
2. `/packages/rn` for component implementation
3. `/packages/tokens` for design tokens
4. README.md for full documentation

---

**Status:** Momentum DS Figma integration is live! 🎉

Next components coming soon:
- Modal, Toast, Alert
- Tabs, BottomTabBar
- Calendar, DatePicker
- Form controls
