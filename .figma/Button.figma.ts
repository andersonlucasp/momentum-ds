import figma from '@figma/code-connect';
import { DsButton } from '../packages/react/src';

/**
 * Maps Figma Button component to React DsButton
 * Opens on: Double-click the Button component in Figma → View code
 */
figma.connect(
  DsButton,
  'https://www.figma.com/design/FcocM09j8RbzY7rosjqKOz/DesignSystem---Teste?node-id=821-687',
  {
    example: (props) => (
      <DsButton
        variant={props.variant || 'primary'}
        size={props.size || 'md'}
        disabled={props.disabled}
        loading={props.loading}
      >
        {props.label || 'Button'}
      </DsButton>
    ),
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
 * How to use Code Connect:
 *
 * 1. In Figma, select a Button component
 * 2. Click the Code Connect icon (plugin)
 * 3. See the React code that maps to this design
 * 4. Copy and use in your app
 *
 * Resources:
 * - https://www.figma.com/developers/api/code-connect/
 * - https://github.com/figma/code-connect
 */
