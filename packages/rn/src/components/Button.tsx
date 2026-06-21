import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { lightTheme } from '../theme/light';

export interface DsButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
  children?: React.ReactNode;
}

export const DsButton = React.forwardRef<TouchableOpacity, DsButtonProps>(
  ({ variant = 'primary', size = 'md', disabled = false, loading = false, onPress, style, children }, ref) => {
    const theme = lightTheme;
    const styles = createStyles(theme, variant, size, disabled);

    return (
      <TouchableOpacity
        ref={ref}
        disabled={disabled || loading}
        onPress={onPress}
        activeOpacity={0.7}
        style={[styles.button, style]}
      >
        <Text style={styles.text}>{children}</Text>
      </TouchableOpacity>
    );
  }
);

DsButton.displayName = 'DsButton';

function createStyles(theme: typeof lightTheme, variant: string, size: string, disabled: boolean) {
  const baseButton: ViewStyle = {
    paddingVertical: getPadding(size).vertical,
    paddingHorizontal: getPadding(size).horizontal,
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  };

  const baseText: TextStyle = {
    fontWeight: '600',
    fontSize: getFontSize(size),
  };

  let buttonColor = theme.colors.interactive.default;
  let textColor = '#ffffff';

  if (variant === 'secondary') {
    buttonColor = theme.colors.background.secondary;
    textColor = theme.colors.text.primary;
  } else if (variant === 'danger') {
    buttonColor = theme.colors.feedback.danger;
    textColor = '#ffffff';
  }

  if (disabled) {
    buttonColor = theme.colors.interactive.disabled;
    textColor = theme.colors.text.disabled;
  }

  return StyleSheet.create({
    button: {
      ...baseButton,
      backgroundColor: buttonColor,
    },
    text: {
      ...baseText,
      color: textColor,
    },
  });
}

function getPadding(size: string) {
  switch (size) {
    case 'sm':
      return { vertical: 8, horizontal: 12 };
    case 'lg':
      return { vertical: 16, horizontal: 24 };
    case 'md':
    default:
      return { vertical: 12, horizontal: 16 };
  }
}

function getFontSize(size: string) {
  switch (size) {
    case 'sm':
      return 14;
    case 'lg':
      return 18;
    case 'md':
    default:
      return 16;
  }
}
