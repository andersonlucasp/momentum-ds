import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { lightTheme } from '../theme/light';

export interface DsBadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  style?: ViewStyle;
  children?: React.ReactNode;
}

export const DsBadge = React.forwardRef<View, DsBadgeProps>(
  ({ variant = 'default', size = 'md', style, children }, ref) => {
    const theme = lightTheme;
    const styles = createStyles(theme, variant, size);

    return (
      <View ref={ref} style={[styles.badge, style]}>
        <Text style={styles.text}>{children}</Text>
      </View>
    );
  }
);

DsBadge.displayName = 'DsBadge';

function createStyles(theme: typeof lightTheme, variant: string, size: string) {
  let backgroundColor = theme.colors.interactive.default;
  let textColor = '#ffffff';

  switch (variant) {
    case 'success':
      backgroundColor = theme.colors.feedback.success;
      break;
    case 'warning':
      backgroundColor = theme.colors.feedback.warning;
      textColor = '#ffffff';
      break;
    case 'danger':
      backgroundColor = theme.colors.feedback.danger;
      break;
  }

  let padding = 8;
  let fontSize = 12;

  switch (size) {
    case 'sm':
      padding = 4;
      fontSize = 11;
      break;
    case 'lg':
      padding = 12;
      fontSize = 14;
      break;
  }

  return StyleSheet.create({
    badge: {
      backgroundColor,
      borderRadius: 9999,
      paddingVertical: padding,
      paddingHorizontal: padding * 1.5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: textColor,
      fontSize,
      fontWeight: '600',
      textAlign: 'center',
    },
  });
}
