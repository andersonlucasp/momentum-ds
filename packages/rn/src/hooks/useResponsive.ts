import { useWindowDimensions } from 'react-native';

/**
 * Hook for responsive design in React Native
 * Returns information about the device dimensions and orientation
 */
export function useResponsive() {
  const { width, height } = useWindowDimensions();

  return {
    width,
    height,
    isSmall: width < 480,
    isMedium: width >= 480 && width < 768,
    isLarge: width >= 768 && width < 1024,
    isXL: width >= 1024,
    isPortrait: height > width,
    isLandscape: width > height,
  };
}
