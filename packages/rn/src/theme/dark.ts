/**
 * Dark theme for Momentum DS
 */

export const darkTheme = {
  colors: {
    // Text
    text: {
      primary: '#f9fafb',      // neutral.50
      secondary: '#d1d5db',    // neutral.300
      inverse: '#111827',      // neutral.900
      disabled: '#6b7280',     // secondary.500
      brand: '#38bdf8',        // primary.400
    },
    // Background
    background: {
      primary: '#111827',      // neutral.900
      secondary: '#1f2937',    // neutral.800
      tertiary: '#374151',     // neutral.700
      disabled: '#374151',     // neutral.700
      brand: '#0284c7',        // primary.600
      brandHover: '#0369a1',   // primary.700
    },
    // Border
    border: {
      primary: '#374151',      // neutral.700
      secondary: '#4b5563',    // neutral.600
      focus: '#0ea5e9',        // primary.500
    },
    // Interactive
    interactive: {
      default: '#38bdf8',      // primary.400
      hover: '#0284c7',        // primary.600
      active: '#0369a1',       // primary.700
      disabled: '#6b7280',     // secondary.500
    },
    // Feedback
    feedback: {
      success: '#22c55e',      // success.500
      warning: '#f59e0b',      // warning.500
      danger: '#ef4444',       // danger.500
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

export type DarkTheme = typeof darkTheme;
