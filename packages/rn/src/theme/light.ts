/**
 * Light theme for Momentum DS
 * Maps design tokens to a light color scheme suitable for academies
 */

export const lightTheme = {
  colors: {
    // Text
    text: {
      primary: '#111827',      // neutral.900
      secondary: '#4b5563',    // secondary.600
      inverse: '#ffffff',      // neutral.0
      disabled: '#9ca3af',     // secondary.400
      brand: '#0284c7',        // primary.600
    },
    // Background
    background: {
      primary: '#ffffff',      // neutral.0
      secondary: '#f9fafb',    // neutral.50
      tertiary: '#f3f4f6',     // neutral.100
      disabled: '#f3f4f6',     // neutral.100
      brand: '#0284c7',        // primary.600
      brandHover: '#0369a1',   // primary.700
    },
    // Border
    border: {
      primary: '#e5e7eb',      // neutral.200
      secondary: '#d1d5db',    // neutral.300
      focus: '#0ea5e9',        // primary.500
    },
    // Interactive
    interactive: {
      default: '#0284c7',      // primary.600
      hover: '#0369a1',        // primary.700
      active: '#075985',       // primary.800
      disabled: '#9ca3af',     // secondary.400
    },
    // Feedback
    feedback: {
      success: '#16a34a',      // success.600
      warning: '#d97706',      // warning.600
      danger: '#dc2626',       // danger.600
    },
  },
  spacing: {
    xs: 2,
    sm: 4,
    md: 6,
    lg: 8,
    xl: 12,
    '2xl': 16,
  },
  borderRadius: {
    none: 0,
    xs: 2,
    sm: 4,
    base: 6,
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999,
  },
};

export type LightTheme = typeof lightTheme;
