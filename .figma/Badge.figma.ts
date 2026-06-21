import figma from '@figma/code-connect';

/**
 * Momentum DS - Badge Code Connect
 *
 * Maps Figma Badge component to DsBadge
 */

figma.connect(
  'DsBadge',
  'https://www.figma.com/design/FcocM09j8RbzY7rosjqKOz/DesignSystem---Teste',
  {
    example: (props) => `
import { DsBadge } from '@andersonlucasp/rn';

<DsBadge
  variant="${props.variant || 'default'}"
  size="${props.size || 'md'}"
>
  ${props.label || 'Available'}
</DsBadge>
    `,
    props: {
      variant: figma.enum('Variant', {
        Default: 'default',
        Success: 'success',
        Warning: 'warning',
        Danger: 'danger',
      }),
      size: figma.enum('Size', {
        Small: 'sm',
        Medium: 'md',
        Large: 'lg',
      }),
      label: figma.string('Label'),
    },
  }
);

/**
 * Perfect for showing class status:
 * - success: "Available" (green)
 * - danger: "Full" (red)
 * - warning: "Waitlist" (orange)
 * - default: Generic (blue)
 */
