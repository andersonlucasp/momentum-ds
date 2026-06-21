# @andersonlucasp/rn

React Native components for Momentum DS. Build beautiful academy and fitness apps for iOS and Android using design tokens and native components.

## Installation

```bash
npm install @andersonlucasp/rn @andersonlucasp/tokens
```

### Peer Dependencies
- react >= 18.0.0
- react-native >= 0.73.0

## Quick Start

```jsx
import { DsButton, DsText, DsView } from '@andersonlucasp/rn';
import { colors, spacing } from '@andersonlucasp/tokens';

export function App() {
  return (
    <DsView style={{ flex: 1, padding: spacing.lg, backgroundColor: colors.background.primary }}>
      <DsText variant="heading" size="2xl" weight="bold">
        Welcome to Momentum
      </DsText>
      
      <DsButton variant="primary" size="lg" onPress={() => alert('Pressed!')}>
        Reserve Class
      </DsButton>
    </DsView>
  );
}
```

## Components

### Buttons & Actions
- `DsButton` - Primary action button

### Form Controls
- `DsInput` - Text input field
- `DsCheckbox` - Checkbox control
- `DsRadio` - Radio button
- `DsSelect` - Select dropdown

### Typography
- `DsText` - Text component with variants
- `DsHeading` - Heading component

### Layout
- `DsView` - Layout container (wrapper over View)
- `DsModal` - Modal/dialog
- `DsCard` - Card container

### Feedback
- `DsToast` - Toast notification
- `DsAlert` - Alert message
- `DsSpinner` - Loading spinner

### Navigation
- `DsBottomTabBar` - Bottom tab navigation
- `DsBreadcrumb` - Breadcrumb navigation

## Design Tokens

All design tokens are available and shared with web:

```typescript
import { colors, spacing, fontSize, fontWeight } from '@andersonlucasp/tokens';

// Colors
colors.primary[500]              // #0ea5e9
colors.background.primary        // #ffffff
colors.text.secondary            // #4b5563

// Spacing
spacing.sm                        // 4
spacing.md                        // 6
spacing.lg                        // 8

// Typography
fontSize.base                     // 16
fontWeight.semibold              // 600
```

### Using Tokens in Styles

```jsx
import { StyleSheet } from 'react-native';
import { colors, spacing } from '@andersonlucasp/tokens';

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    backgroundColor: colors.background.primary,
  },
  text: {
    color: colors.text.primary,
    fontSize: 16,
  },
});
```

## Theming

Use the `useTheme()` hook to access the current theme:

```jsx
import { useTheme } from '@andersonlucasp/rn';

export function MyComponent() {
  const { theme, mode } = useTheme();
  
  return (
    <View style={{ backgroundColor: theme.colors.background.primary }}>
      {/* Content */}
    </View>
  );
}
```

### Light & Dark Mode

```jsx
import { lightTheme, darkTheme } from '@andersonlucasp/rn/theme';

// Automatically uses device preference
const theme = useColorScheme() === 'dark' ? darkTheme : lightTheme;
```

## Hooks

### useTheme()
Access the current theme and mode:
```typescript
const { theme, mode } = useTheme();
// mode: 'light' | 'dark'
```

### useToken()
Get design tokens:
```typescript
const { colors, spacing, borderRadius } = useToken();
```

### useResponsive()
Get device dimensions and orientation:
```typescript
const { width, height, isSmall, isMedium, isLarge, isPortrait } = useResponsive();
```

## Component Props

### DsButton
```typescript
interface DsButtonProps {
  variant?: 'primary' | 'secondary' | 'danger'; // default: 'primary'
  size?: 'sm' | 'md' | 'lg';                    // default: 'md'
  disabled?: boolean;                            // default: false
  loading?: boolean;                             // default: false
  onPress?: () => void;
  style?: ViewStyle;
  children?: React.ReactNode;
}
```

### DsInput
```typescript
interface DsInputProps extends TextInputProps {
  size?: 'sm' | 'md' | 'lg';                    // default: 'md'
  variant?: 'default' | 'error' | 'success';    // default: 'default'
  label?: string;
  containerStyle?: ViewStyle;
}
```

### DsText
```typescript
interface DsTextProps extends TextProps {
  variant?: 'heading' | 'body' | 'caption';     // default: 'body'
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl'; // default: 'base'
  weight?: 'regular' | 'medium' | 'semibold' | 'bold'; // default: 'regular'
  color?: 'primary' | 'secondary' | 'inverse' | 'disabled' | 'brand'; // default: 'primary'
}
```

## Accessibility

All components follow accessibility best practices:
- Semantic component structure
- Touch targets ≥ 48x48pt (WCAG 2.5.5)
- Color contrast ≥ 4.5:1
- Accessible labels and hints
- Screen reader friendly

## Platform Differences

Some props differ from web components due to React Native limitations:

| Feature | Web | Mobile |
|---------|-----|--------|
| Hover states | ✅ | ❌ (touch-based) |
| CSS custom props | ✅ | ❌ (StyleSheet) |
| z-index | ✅ | ⚠️ (limited) |
| Media queries | ✅ | ❌ (use `useResponsive()`) |
| Animations | ✅ | ✅ (Animated API) |

## Examples

### Form
```jsx
import { useState } from 'react';
import { DsInput, DsButton, DsView, DsText } from '@andersonlucasp/rn';
import { spacing } from '@andersonlucasp/tokens';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <DsView style={{ padding: spacing.lg, gap: spacing.md }}>
      <DsText variant="heading" size="xl">Login</DsText>
      
      <DsInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      
      <DsInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <DsButton variant="primary" size="lg">
        Sign In
      </DsButton>
    </DsView>
  );
}
```

### Card List
```jsx
import { FlatList } from 'react-native';
import { DsCard, DsText, DsButton } from '@andersonlucasp/rn';
import { spacing } from '@andersonlucasp/tokens';

export function ClassesList({ classes }) {
  return (
    <FlatList
      data={classes}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: spacing.lg, gap: spacing.md }}
      renderItem={({ item }) => (
        <DsCard>
          <DsText variant="heading" weight="semibold">
            {item.name}
          </DsText>
          <DsText color="secondary">
            {item.instructor} • {item.time}
          </DsText>
          <DsButton variant="primary" size="sm">
            Reserve
          </DsButton>
        </DsCard>
      )}
    />
  );
}
```

## Performance

- Memoized components by default
- Optimized for long lists (FlatList, SectionList)
- Tree-shakeable exports
- Minimal bundle size impact

## Testing

```typescript
import { render } from '@testing-library/react-native';
import { DsButton } from '@andersonlucasp/rn';

describe('DsButton', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <DsButton>Press me</DsButton>
    );
    expect(getByText('Press me')).toBeTruthy();
  });
});
```

## Development

```bash
npm install
npm run build      # Compile TypeScript
npm run test       # Run tests
npm run type-check # Type validation
```

## Contributing

See [CONTRIBUTING.md](../../CONTRIBUTING.md)

## License

MIT

## Support

- 📖 [Documentation](https://momentum-ds.io)
- 🎨 [Figma Design](https://www.figma.com/design/FcocM09j8RbzY7rosjqKOz/)
- 💬 [GitHub Discussions](https://github.com/andersonlucasp/momentum-ds/discussions)
- 📧 andersonlucaspz@gmail.com
