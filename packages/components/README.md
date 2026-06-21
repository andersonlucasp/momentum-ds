# @andersonlucasp/components

Web Components for Momentum DS using Stencil. These components are the foundation for all framework wrappers (React, Vue, Angular) and the base for React Native components.

## Installation

```bash
npm install @andersonlucasp/components
```

## Usage

### Web Components (vanilla)
```html
<link rel="stylesheet" href="@andersonlucasp/components/css">
<script src="@andersonlucasp/components"></script>

<ds-button variant="primary">Click me</ds-button>
```

### React
```bash
npm install @andersonlucasp/react
```

```jsx
import { DsButton } from '@andersonlucasp/react';

export function App() {
  return <DsButton variant="primary">Click me</DsButton>;
}
```

### Vue
```bash
npm install @andersonlucasp/vue
```

```vue
<template>
  <DsButton variant="primary">Click me</DsButton>
</template>

<script>
import { DsButton } from '@andersonlucasp/vue';
export default {
  components: { DsButton }
};
</script>
```

### Angular
```bash
npm install @andersonlucasp/angular
```

```typescript
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DsButton } from '@andersonlucasp/angular';

@NgModule({
  declarations: [DsButton],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
```

## Components

### Buttons & Actions
- `ds-button` - Primary action button

### Form Controls
- `ds-input` - Text input field
- `ds-checkbox` - Checkbox control
- `ds-radio` - Radio button
- `ds-select` - Select dropdown
- `ds-textarea` - Multi-line text input

### Layout
- `ds-modal` - Dialog/modal component
- `ds-card` - Card container
- `ds-tabs` - Tabbed interface

### Data Display
- `ds-badge` - Status badge
- `ds-list` - List component
- `ds-table` - Data table

### Feedback
- `ds-toast` - Toast notification
- `ds-alert` - Alert message
- `ds-spinner` - Loading spinner

### Navigation
- `ds-breadcrumb` - Breadcrumb navigation
- `ds-pagination` - Pagination controls
- `ds-dropdown` - Dropdown menu

## CSS Custom Properties

All components use CSS custom properties for styling:

```css
:root {
  /* Colors */
  --color-primary-500: #0ea5e9;
  --color-primary-600: #0284c7;
  
  /* Spacing */
  --spacing-4: 1rem;
  --spacing-6: 1.5rem;
  
  /* Typography */
  --font-size-base: 1rem;
  --font-weight-semibold: 600;
  
  /* Border Radius */
  --border-radius-md: 0.5rem;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
```

Override them in your stylesheet:

```css
:root {
  --color-primary-600: #your-color;
}
```

## Accessibility

All components follow WCAG 2.1 AA guidelines:
- Semantic HTML
- Keyboard navigation
- ARIA attributes
- Screen reader support
- Focus management
- Color contrast ≥4.5:1

Test with: `axe-core`, `WAVE`, screen readers (NVDA, JAWS, VoiceOver)

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- iOS Safari 14+
- Chrome Android 90+

## Events

Components emit custom events:

```javascript
const button = document.querySelector('ds-button');
button.addEventListener('dsClick', () => {
  console.log('Button clicked!');
});
```

## Theming

Components use CSS custom properties for theming. Change colors globally:

```css
:root {
  --color-primary-600: #0284c7;
  --color-primary-700: #0369a1;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --color-primary-600: #38bdf8;
    --color-primary-700: #0284c7;
  }
}
```

## Development

```bash
npm install
npm run build      # Build all outputs
npm run start      # Dev server with live reload
npm run test       # Run tests
npm run test:e2e   # End-to-end tests
```

## Contributing

See [CONTRIBUTING.md](../../CONTRIBUTING.md)

## License

MIT
