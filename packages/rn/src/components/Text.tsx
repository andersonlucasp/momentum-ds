import React from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet } from 'react-native';
import { lightTheme } from '../theme/light';

export interface DsTextProps extends RNTextProps {
  variant?: 'heading' | 'body' | 'caption';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl';
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  color?: 'primary' | 'secondary' | 'inverse' | 'disabled' | 'brand';
}

export const DsText = React.forwardRef<RNText, DsTextProps>(
  ({ variant = 'body', size = 'base', weight = 'regular', color = 'primary', style, children, ...props }, ref) => {
    const theme = lightTheme;
    const styles = createStyles(theme, variant, size, weight, color);

    return (
      <RNText ref={ref} style={[styles.text, style]} {...props}>
        {children}
      </RNText>
    );
  }
);

DsText.displayName = 'DsText';

function createStyles(theme: typeof lightTheme, variant: string, size: string, weight: string, color: string) {
  let fontSize = 16;
  let lineHeight = 24;
  let fontWeight: '400' | '500' | '600' | '700' = '400';
  let textColor = theme.colors.text.primary;

  // Size
  switch (size) {
    case 'xs':
      fontSize = 12;
      lineHeight = 16;
      break;
    case 'sm':
      fontSize = 14;
      lineHeight = 20;
      break;
    case 'lg':
      fontSize = 18;
      lineHeight = 28;
      break;
    case 'xl':
      fontSize = 20;
      lineHeight = 28;
      break;
    case '2xl':
      fontSize = 24;
      lineHeight = 32;
      break;
  }

  // Weight
  switch (weight) {
    case 'medium':
      fontWeight = '500';
      break;
    case 'semibold':
      fontWeight = '600';
      break;
    case 'bold':
      fontWeight = '700';
      break;
    case 'regular':
    default:
      fontWeight = '400';
      break;
  }

  // Color
  switch (color) {
    case 'secondary':
      textColor = theme.colors.text.secondary;
      break;
    case 'inverse':
      textColor = theme.colors.text.inverse;
      break;
    case 'disabled':
      textColor = theme.colors.text.disabled;
      break;
    case 'brand':
      textColor = theme.colors.text.brand;
      break;
  }

  return StyleSheet.create({
    text: {
      fontSize,
      lineHeight,
      fontWeight,
      color: textColor,
    },
  });
}
