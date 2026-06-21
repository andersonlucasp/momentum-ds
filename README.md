# 🚀 Momentum DS - Design System for Academy Digital Products

A comprehensive, cross-platform design system built for academy and fitness digital products. Seamlessly supports **web**, **iOS**, and **Android** with a single source of truth.

## 📦 Packages

### Core
- **[@andersonlucasp/tokens](./packages/tokens)** - Design tokens (colors, spacing, typography)
- **[@andersonlucasp/components](./packages/components)** - Web components using Stencil

### Frameworks
- **[@andersonlucasp/react](./packages/react)** - React wrappers for web components
- **[@andersonlucasp/rn](./packages/rn)** - React Native components for iOS/Android

### Documentation
- **[Storybook](./packages/docs)** - Interactive web component documentation
- **[Expo App](./packages/docs-rn)** - React Native component showcase

## 🎯 Quick Start

### Installation

#### Web (React)
```bash
npm install @andersonlucasp/react @andersonlucasp/tokens
```

#### Mobile (React Native)
```bash
npm install @andersonlucasp/rn @andersonlucasp/tokens
```

### Usage

#### Web
```jsx
import { DsButton } from '@andersonlucasp/react';
import { colors } from '@andersonlucasp/tokens';

export function App() {
  return (
    <DsButton variant="primary" size="lg">
      Reserve Class
    </DsButton>
  );
}
```

#### React Native
```jsx
import { DsButton, DsText } from '@andersonlucasp/rn';
import { colors, spacing } from '@andersonlucasp/tokens';

export function App() {
  return (
    <DsView style={{ padding: spacing.lg }}>
      <DsButton variant="primary">Reserve Class</DsButton>
      <DsText color="brand">Coming soon to your academy</DsText>
    </DsView>
  );
}
```

## 🏗️ Architecture

```
tokens (design tokens)
  ├─ colors, spacing, typography
  ├─ exports: CSS, JavaScript, TypeScript
  └─ consumed by web & mobile

components (Stencil web components)
  ├─ web components (ds-button, ds-input, etc.)
  ├─ auto-generates React wrappers
  └─ published to npm + CDN (unpkg)

rn (React Native)
  ├─ native iOS/Android components
  ├─ uses same tokens as web
  └─ semantic props similar to web

react (generated wrappers)
  └─ auto-generated React components from Stencil

docs & docs-rn
  ├─ interactive component showcases
  └─ Storybook for web, Expo for mobile
```

## 🛠️ Development

### Prerequisites
- Node.js 20+
- npm 10+

### Setup
```bash
npm install
```

### Commands
```bash
# Build all packages
npm run build

# Watch mode (development)
npm run dev

# Run tests
npm run test

# Run type checking
npm run type-check

# Lint code
npm run lint

# Create a new changeset (before committing)
npm run changeset

# Version packages (creates commit)
npm run changeset:version

# Publish to npm (after version)
npm run changeset:publish
```

### Building Individual Packages
```bash
npm run build:tokens
npm run build:components
npm run build:rn
```

## 📚 Documentation

### Web Components
- Storybook: https://storybook.momentum-ds.io (deployed)
- Interactive stories with live code editing
- Accessibility checks (axe-core)
- Visual regression testing (Chromatic)

### React Native
- Expo App: Run locally with `npm run dev`
- Interactive component screens
- Theme switcher (light/dark)

### Figma Code Connect
- [Code Connect Docs](https://www.figma.com/developers/api/code-connect/)
- Maps Figma components → code snippets
- Located in `.figma/` directory

## 🎨 Design System Features

✅ **Design Tokens**
- Color palette (primitives + semantic)
- Typography scale
- Spacing system (8px grid)
- Border radius
- Shadows and elevation
- Motion (timing, easing)

✅ **Components**
- Button, Input, Modal, Card
- Badge, Toast, Dropdown
- Tabs, Breadcrumb, Calendar
- List, DataTable, Pagination
- Form controls and validation

✅ **Theming**
- Light and dark modes
- Custom color overrides
- Theme context providers
- CSS custom properties

✅ **Accessibility**
- WCAG 2.1 AA compliant
- Semantic HTML
- Keyboard navigation
- Screen reader support
- ARIA attributes

✅ **Documentation**
- Interactive Storybook
- Figma Code Connect
- Type definitions (TypeScript)
- Usage examples

## 📝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

### Workflow
1. Create feature branch: `git checkout -b feat/component-name`
2. Implement component (web + mobile)
3. Add stories and tests
4. Create changeset: `npm run changeset`
5. Open PR
6. After merge, publication is automatic

### Creating a New Component

```bash
# Web (Stencil)
npm run generate  # Follow prompts to create ds-component

# Mobile (React Native)
# Create new file in packages/rn/src/components/Component.tsx
```

## 🚀 Publishing

Publishing is automated via GitHub Actions:

1. Changes merged to `main` → `changeset` creates a PR
2. Merge PR → Publishes to npm automatically
3. npm publish → CDN (unpkg) updated automatically

### Manual Publishing (if needed)
```bash
npm run changeset:publish
```

## 📊 Metrics

- **40+ components** available
- **100%** test coverage target
- **WCAG 2.1 AA** compliance
- **<5s** Storybook build
- **<30KB** gzip (tokens + essentials)

## 🔗 Links

- [GitHub](https://github.com/andersonlucasp/momentum-ds)
- [npm (@andersonlucasp)](https://www.npmjs.com/org/andersonlucasp)
- [Figma Design File](https://www.figma.com/design/FcocM09j8RbzY7rosjqKOz/DesignSystem---Teste)

## 📄 License

MIT © Lucas Anderson

## 👥 Author

**Lucas Anderson** - [@andersonlucaspz](https://github.com/andersonlucasp)

---

**Made for academy and fitness digital products. Cross-platform. Beautiful. Accessible.**
