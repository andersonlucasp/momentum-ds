import { useTheme } from './useTheme';

/**
 * Hook to access design tokens from the current theme
 * @example
 * const { colors, spacing } = useToken();
 */
export function useToken() {
  const { theme } = useTheme();
  return {
    colors: theme.colors,
    spacing: theme.spacing,
    borderRadius: theme.borderRadius,
  };
}
