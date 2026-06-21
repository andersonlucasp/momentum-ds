import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { lightTheme } from '../theme/light';

export interface DsCardProps {
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'sm' | 'md' | 'lg';
  style?: ViewStyle;
  children?: React.ReactNode;
}

export const DsCard = React.forwardRef<View, DsCardProps>(
  ({ variant = 'default', padding = 'md', style, children }, ref) => {
    const theme = lightTheme;
    const styles = createStyles(theme, variant, padding);

    return (
      <View ref={ref} style={[styles.card, style]}>
        {children}
      </View>
    );
  }
);

DsCard.displayName = 'DsCard';

function createStyles(theme: typeof lightTheme, variant: string, padding: string) {
  let backgroundColor = theme.colors.background.primary;
  let borderColor = 'transparent';
  let borderWidth = 0;
  let shadowColor = 'transparent';
  let shadowOpacity = 0;

  if (variant === 'elevated') {
    shadowColor = '#000000';
    shadowOpacity = 0.1;
  } else if (variant === 'outlined') {
    borderColor = theme.colors.border.primary;
    borderWidth = 1;
  }

  let paddingValue = 16;
  if (padding === 'sm') paddingValue = 12;
  else if (padding === 'lg') paddingValue = 24;

  return StyleSheet.create({
    card: {
      backgroundColor,
      borderRadius: theme.borderRadius.lg,
      padding: paddingValue,
      borderWidth,
      borderColor,
      shadowColor,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity,
      shadowRadius: 4,
      elevation: variant === 'elevated' ? 4 : 0,
    },
  });
}
