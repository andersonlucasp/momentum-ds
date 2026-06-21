import figma from '@figma/code-connect';

/**
 * Momentum DS - Button Code Connect
 *
 * Maps Figma Button component to DsButton (React Native / Web)
 *
 * How to use:
 * 1. In Figma, double-click the Button component
 * 2. Click "Inspect" → Code Connect plugin (bottom panel)
 * 3. See generated code
 * 4. Copy snippet to your project
 */

// React Native Example
figma.connect(
  'DsButton',
  'https://www.figma.com/design/FcocM09j8RbzY7rosjqKOz/DesignSystem---Teste?node-id=821-687',
  {
    example: (props) => `
import { DsButton } from '@andersonlucasp/rn';

<DsButton
  variant="${props.variant || 'primary'}"
  size="${props.size || 'md'}"
  disabled={${props.disabled || false}}
  loading={${props.loading || false}}
  onPress={() => handlePress()}
>
  ${props.label || 'Button'}
</DsButton>
    `,
    props: {
      variant: figma.enum('Variant', {
        Primary: 'primary',
        Secondary: 'secondary',
        Danger: 'danger',
      }),
      size: figma.enum('Size', {
        SM: 'sm',
        MD: 'md',
        LG: 'lg',
      }),
      disabled: figma.boolean('Disabled'),
      loading: figma.boolean('Loading'),
      label: figma.string('Label'),
    },
  }
);

/**
 * Installation:
 * npm install @andersonlucasp/rn @andersonlucasp/tokens
 *
 * Sizes: sm (32px), md (40px), lg (48px)
 * Variants: primary (blue), secondary (gray), danger (red)
 */
