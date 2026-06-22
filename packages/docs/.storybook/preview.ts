import type { Preview } from "@storybook/react";
import { create } from "@storybook/theming/create";

const theme = create({
  base: "light",

  // Branding
  brandTitle: "Momentum DS",
  brandUrl: "https://github.com/andersonlucasp/momentum-ds",
  brandImage: "https://via.placeholder.com/300x60/0284c7/ffffff?text=Momentum+DS",
  brandTarget: "_blank",

  // Colors - usando Momentum DS colors
  colorPrimary: "#0284c7",        // primary-600
  colorSecondary: "#0369a1",      // primary-700
  appBg: "#ffffff",               // background.primary
  appContentBg: "#f9fafb",        // background.secondary
  appBorderColor: "#e5e7eb",      // border.primary
  appBorderRadius: 8,

  // Typography
  fontBase: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontCode: "'Courier New', monospace",

  // Text colors
  textColor: "#111827",           // text.primary
  textInverseColor: "#ffffff",

  // Form colors
  inputBg: "#ffffff",
  inputBorder: "#d1d5db",
  inputTextColor: "#111827",
  inputBorderRadius: 4,

  // Toolbar
  barTextColor: "#4b5563",        // text.secondary
  barSelectedColor: "#0284c7",    // primary
  barBg: "#f9fafb",               // background.secondary
  barBorder: "#e5e7eb",           // border.primary

  // Button
  booleanBg: "#f3f4f6",
  booleanSelectedBg: "#0284c7",
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: theme,
    },
    theme: theme,
  },
};

export default preview;
