import figma from '@figma/code-connect';

/**
 * Momentum DS - Input Code Connect
 *
 * Maps Figma Input component to DsInput
 */

figma.connect(
  'DsInput',
  'https://www.figma.com/design/FcocM09j8RbzY7rosjqKOz/DesignSystem---Teste',
  {
    example: (props) => `
import { useState } from 'react';
import { DsInput } from '@andersonlucasp/rn';

const [value, setValue] = useState('');

<DsInput
  placeholder="${props.placeholder || 'Enter text'}"
  value={value}
  onChangeText={setValue}
  size="${props.size || 'md'}"
  variant="${props.variant || 'default'}"
/>
    `,
    props: {
      placeholder: figma.string('Placeholder'),
      size: figma.enum('Size', {
        Small: 'sm',
        Medium: 'md',
        Large: 'lg',
      }),
      variant: figma.enum('Variant', {
        Default: 'default',
        Error: 'error',
        Success: 'success',
      }),
    },
  }
);

/**
 * Sizes:
 * - sm: 32px height (mobile labels)
 * - md: 40px height (standard input)
 * - lg: 48px height (prominent inputs)
 *
 * Variants:
 * - default: Normal state
 * - error: Red border (validation error)
 * - success: Green border (validation success)
 */
