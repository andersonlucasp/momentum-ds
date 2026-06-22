# Momentum DS - Component Showcase (React Native)

Interactive Expo app to test and showcase all Momentum DS React Native components.

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- npm or yarn
- Expo Go app (iOS/Android) - [Download](https://expo.dev/go)

### Install & Run

```bash
# From project root
cd packages/docs-rn

# Install dependencies
npm install

# Start Expo
npm start

# Follow the prompts:
# Press 'i' for iOS simulator
# Press 'a' for Android emulator
# Press 'w' for web browser
# Scan QR code with Expo Go app
```

## 📱 What You'll See

Interactive showcase of:
- **Buttons** - All variants (primary, secondary, danger) and sizes (sm, md, lg)
- **Inputs** - Text input fields with different sizes and states
- **Badges** - Status badges (success, warning, danger)
- **Cards** - Container variations (default, elevated, outlined)
- **Design Tokens** - Color palette visualization

## 🎯 Use Cases - Academy Apps

Realistic examples included:
- Class schedule card with instructor and availability
- Badge showing "Available (5)", "Full", "Waitlist"
- Reserve button for booking classes
- Input fields for login/registration

## 🔧 How to Add More Components

1. Import component from `@andersonlucasp/rn`:
   ```tsx
   import { DsModal, DsText, DsButton } from '@andersonlucasp/rn';
   ```

2. Add section to App.tsx:
   ```tsx
   <View style={styles.section}>
     <DsText variant="heading">My Component</DsText>
     <DsCard variant="elevated">
       {/* Component showcase here */}
     </DsCard>
   </View>
   ```

3. Hot reload works automatically - save and see changes!

## 📚 Component Props Reference

### DsButton
```tsx
<DsButton
  variant="primary"      // primary | secondary | danger
  size="md"              // sm | md | lg
  disabled={false}
  loading={false}
  onPress={() => {}}
>
  Label
</DsButton>
```

### DsInput
```tsx
<DsInput
  placeholder="Enter..."
  value={value}
  onChangeText={setValue}
  size="md"              // sm | md | lg
  variant="default"      // default | error | success
/>
```

### DsCard
```tsx
<DsCard
  variant="default"      // default | elevated | outlined
  padding="md"           // sm | md | lg
>
  Content
</DsCard>
```

### DsBadge
```tsx
<DsBadge
  variant="success"      // default | success | warning | danger
  size="md"              // sm | md | lg
>
  Label
</DsBadge>
```

### DsText
```tsx
<DsText
  variant="body"         // heading | body | caption
  size="base"            // xs | sm | base | lg | xl | 2xl
  weight="regular"       // regular | medium | semibold | bold
  color="primary"        // primary | secondary | inverse | disabled | brand
>
  Text content
</DsText>
```

## 🎨 Using Design Tokens

```tsx
import { colors, spacing, fontSize } from '@andersonlucasp/tokens';

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    backgroundColor: colors.background.primary,
  },
  text: {
    color: colors.text.primary,
    fontSize: fontSize.base,
  },
});
```

## 🔄 Theme Switching (Coming Soon)

Currently using light theme. Dark theme support coming soon:

```tsx
import { useTheme } from '@andersonlucasp/rn';

const { theme, mode } = useTheme();
```

## 🐛 Troubleshooting

### "Cannot find module @andersonlucasp/rn"
```bash
# Run from project root
npm install
```

### Hot reload not working
- Press 'r' in Expo terminal to manually reload
- Or restart with Ctrl+C then npm start

### Components look different than expected
- Check you're using latest Momentum DS components
- Compare with this showcase app
- Open issue on GitHub if inconsistent

## 📖 Links

- **Momentum DS GitHub:** https://github.com/andersonlucasp/momentum-ds
- **Figma Design:** https://www.figma.com/design/FcocM09j8RbzY7rosjqKOz/DesignSystem---Teste
- **npm Package:** @andersonlucasp/rn
- **Expo Docs:** https://docs.expo.dev

## ✨ Features

✅ Live component testing  
✅ Real device preview  
✅ Hot reload (save = instant update)  
✅ Design tokens integration  
✅ Academy use case examples  
✅ All component variants  
✅ TypeScript support  
✅ Responsive layout  

---

**Happy testing!** 🎉

When ready, publish v0.1.0 to npm with `npm run changeset` from repo root.
