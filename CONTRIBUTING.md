# Contributing to Momentum DS

Thank you for contributing to Momentum DS! This guide will help you get started.

## Code of Conduct

Be respectful, inclusive, and professional in all interactions.

## Getting Started

### Prerequisites
- Node.js 20+
- npm 10+
- Git
- Figma account (for design work)

### Setup
```bash
git clone https://github.com/andersonlucasp/momentum-ds.git
cd momentum-ds
npm install
```

### Development Workflow

1. **Create a branch**
   ```bash
   git checkout -b feat/component-button
   # or
   git checkout -b fix/button-padding
   git checkout -b docs/update-readme
   ```

2. **Make your changes**
   - Web components: `packages/components/src/components/ds-*/`
   - React Native: `packages/rn/src/components/*.tsx`
   - Tokens: `packages/tokens/tokens/*.json`
   - Tests: Add `.spec.ts` files alongside components
   - Docs: Stories in `packages/docs/stories/`

3. **Write tests**
   - Unit tests: Jest (`*.spec.ts`)
   - E2E tests: Puppeteer (web components)
   - Component tests: React Testing Library (React Native)

4. **Test locally**
   ```bash
   npm run test            # Run all tests
   npm run test:watch     # Watch mode
   npm run type-check     # TypeScript validation
   npm run lint           # Code quality
   ```

5. **Build and verify**
   ```bash
   npm run build          # Build all packages
   npm run build:tokens   # Build only tokens
   npm run build:components
   npm run build:rn
   ```

6. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add Button component"
   ```

7. **Create a changeset** (IMPORTANT!)
   ```bash
   npm run changeset
   # Follow prompts to select packages and version type
   # Commit the generated file in .changeset/
   ```

8. **Push and create PR**
   ```bash
   git push origin feat/component-button
   # Open PR on GitHub
   ```

## Component Development

### Creating a Web Component (Stencil)

```bash
npm run generate
# Select package: components
# Enter component name: my-component
# Component created at: packages/components/src/components/ds-my-component/
```

Then:
1. Edit `ds-my-component.tsx` - Component logic
2. Edit `ds-my-component.css` - Styles (use CSS custom properties)
3. Add tests in `ds-my-component.spec.ts`
4. Add stories in `packages/docs/stories/MyComponent.stories.ts`
5. Add Code Connect mapping in `.figma/MyComponent.figma.ts`

### Creating a React Native Component

1. Create file: `packages/rn/src/components/MyComponent.tsx`
2. Use design tokens: `import { lightTheme } from '../theme/light'`
3. Implement component using React Native primitives
4. Add TypeScript props interface
5. Add tests in `MyComponent.test.tsx`
6. Export from `packages/rn/src/components/index.ts`

### Design Token Updates

1. Edit `.json` file in `packages/tokens/tokens/`
   - `color.json` - Color palette
   - `spacing.json` - Spacing scale
   - `typography.json` - Font sizes, weights
   - `semantic.json` - Alias tokens

2. Rebuild tokens:
   ```bash
   npm run build:tokens
   ```

3. Tokens are available:
   ```typescript
   // JavaScript/TypeScript
   import { colors, spacing } from '@andersonlucasp/tokens';

   // CSS
   <link rel="stylesheet" href="@andersonlucasp/tokens/css">
   color: var(--color-primary-500);
   ```

## Testing Guidelines

### Unit Tests (Jest)
```typescript
import { newSpecPage } from '@stencil/core/testing';
import { DsButton } from './ds-button';

describe('ds-button', () => {
  it('renders a button', async () => {
    const page = await newSpecPage({
      components: [DsButton],
      html: `<ds-button>Click me</ds-button>`,
    });
    const button = page.root.querySelector('button');
    expect(button).toHaveTextContent('Click me');
  });
});
```

### Accessibility Tests (axe-core)
- All components must pass WCAG 2.1 AA
- Use semantic HTML
- Include ARIA labels where needed
- Test with keyboard navigation

### Coverage Target
- **70%** minimum coverage
- Focus on happy path and error cases
- Document edge cases

## Documentation

### Storybook Stories
Create `.stories.ts` for each component:

```typescript
import type { Meta, StoryObj } from '@storybook/web-components';
import '@andersonlucasp/components';

const meta: Meta = {
  title: 'Components/Button',
  component: 'ds-button',
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Click me',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Click me',
  },
};
```

### Code Connect
Map Figma components to code:

1. Edit `.figma/ComponentName.figma.ts`
2. Update props to match Figma component
3. Run `npm run figma:connect`
4. Test in Figma (open plugin and select component)

## Pull Request Guidelines

### Title Format
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `refactor:` - Code restructuring
- `test:` - Test additions
- `chore:` - Maintenance

Example: `feat: add Button component for web and mobile`

### Description
Include:
- What changed and why
- Screenshots/videos for UI changes
- Related Figma components
- Breaking changes (if any)

### Checklist
- [ ] Tests written and passing
- [ ] Code builds without errors
- [ ] No console warnings
- [ ] Accessibility checks pass
- [ ] Updated documentation
- [ ] Changeset created
- [ ] Storybook story added
- [ ] Code Connect mapping added

## Release Process

1. **Changesets are created** during PR review
2. **Release PR is auto-created** when changesets are present
3. **Merge release PR** → Auto publishes to npm
4. **CDN updated** automatically (unpkg)

### Manual Publishing (if needed)
```bash
npm run changeset:publish
```

## Troubleshooting

### Build fails
```bash
npm run clean
npm install
npm run build
```

### Tests fail
```bash
npm run test -- --update
npm run test:watch  # Debug mode
```

### Type errors
```bash
npm run type-check
```

### Module not found
```bash
npm install
npm run build
```

## Questions?

- 📖 Read the [README.md](./README.md)
- 📝 Check existing issues
- 💬 Start a discussion
- 📧 Email: andersonlucaspz@gmail.com

---

**Thank you for making Momentum DS better! 🎉**
