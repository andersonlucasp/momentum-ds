import React from 'react';
import { TextInput, StyleSheet, TextInputProps, ViewStyle } from 'react-native';
import { lightTheme } from '../theme/light';

export interface DsInputProps extends TextInputProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'error' | 'success';
  label?: string;
  containerStyle?: ViewStyle;
}

export const DsInput = React.forwardRef<TextInput, DsInputProps>(
  ({ size = 'md', variant = 'default', style, containerStyle, ...props }, ref) => {
    const theme = lightTheme;
    const styles = createStyles(theme, size, variant);

    return (
      <TextInput
        ref={ref}
        style={[styles.input, style]}
        placeholderTextColor={theme.colors.text.secondary}
        {...props}
      />
    );
  }
);

DsInput.displayName = 'DsInput';

function createStyles(theme: typeof lightTheme, size: string, variant: string) {
  let borderColor = theme.colors.border.primary;
  let backgroundColor = theme.colors.background.secondary;

  if (variant === 'error') {
    borderColor = theme.colors.feedback.danger;
  } else if (variant === 'success') {
    borderColor = theme.colors.feedback.success;
  }

  let padding = 12;
  let fontSize = 16;

  if (size === 'sm') {
    padding = 8;
    fontSize = 14;
  } else if (size === 'lg') {
    padding = 16;
    fontSize = 18;
  }

  return StyleSheet.create({
    input: {
      padding,
      fontSize,
      borderWidth: 1,
      borderColor,
      backgroundColor,
      borderRadius: theme.borderRadius.md,
      color: theme.colors.text.primary,
    },
  });
}
