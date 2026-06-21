import figma from '@figma/code-connect';

/**
 * Momentum DS - Card Code Connect
 *
 * Maps Figma Card component to DsCard
 */

figma.connect(
  'DsCard',
  'https://www.figma.com/design/FcocM09j8RbzY7rosjqKOz/DesignSystem---Teste',
  {
    example: (props) => `
import { DsCard, DsText } from '@andersonlucasp/rn';
import { spacing } from '@andersonlucasp/tokens';

<DsCard variant="${props.variant || 'default'}" padding="${props.padding || 'md'}">
  <DsText variant="heading" weight="semibold">
    Title
  </DsText>
  <DsText color="secondary">
    Subtitle or description goes here
  </DsText>
</DsCard>
    `,
    props: {
      variant: figma.enum('Variant', {
        Default: 'default',
        Elevated: 'elevated',
        Outlined: 'outlined',
      }),
      padding: figma.enum('Padding', {
        Small: 'sm',
        Medium: 'md',
        Large: 'lg',
      }),
    },
  }
);

/**
 * Variants:
 * - default: White background with subtle border
 * - elevated: White with shadow (hover state)
 * - outlined: Transparent with border
 *
 * Perfect for displaying academy classes, instructors, or schedules
 */
