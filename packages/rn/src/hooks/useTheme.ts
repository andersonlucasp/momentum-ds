import { useContext, createContext } from 'react';
import { lightTheme } from '../theme/light';
import { darkTheme } from '../theme/dark';

type Theme = typeof lightTheme | typeof darkTheme;
type ThemeMode = 'light' | 'dark';

const ThemeContext = createContext<{
  theme: Theme;
  mode: ThemeMode;
}>({
  theme: lightTheme,
  mode: 'light',
});

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    console.warn('useTheme must be used within a ThemeProvider');
    return { theme: lightTheme, mode: 'light' as const };
  }
  return context;
}

export { ThemeContext };
