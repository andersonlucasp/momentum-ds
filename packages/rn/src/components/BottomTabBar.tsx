import React from 'react';
import { View, TouchableOpacity, StyleSheet, ViewStyle, Text } from 'react-native';
import { lightTheme } from '../theme/light';

export interface DsBottomTabBarTab {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

export interface DsBottomTabBarProps {
  tabs: DsBottomTabBarTab[];
  activeTab: string;
  onTabPress: (tabId: string) => void;
  style?: ViewStyle;
}

export const DsBottomTabBar = React.forwardRef<View, DsBottomTabBarProps>(
  ({ tabs, activeTab, onTabPress, style }, ref) => {
    const theme = lightTheme;
    const styles = createStyles(theme);

    return (
      <View ref={ref} style={[styles.container, style]}>
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <TouchableOpacity
              key={tab.id}
              style={[styles.tab, isActive && styles.tabActive]}
              onPress={() => onTabPress(tab.id)}
            >
              {tab.icon && <View style={styles.icon}>{tab.icon}</View>}
              <Text style={[styles.label, isActive && styles.labelActive]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
);

DsBottomTabBar.displayName = 'DsBottomTabBar';

function createStyles(theme: typeof lightTheme) {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: theme.colors.background.primary,
      borderTopWidth: 1,
      borderTopColor: theme.colors.border.primary,
      paddingBottom: 8,
      paddingTop: 8,
    },
    tab: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 8,
      gap: 4,
    },
    tabActive: {
      borderTopWidth: 3,
      borderTopColor: theme.colors.interactive.default,
      paddingTop: 5,
    },
    icon: {
      width: 24,
      height: 24,
      alignItems: 'center',
      justifyContent: 'center',
    },
    label: {
      fontSize: 12,
      fontWeight: '500',
      color: theme.colors.text.secondary,
    },
    labelActive: {
      color: theme.colors.interactive.default,
      fontWeight: '600',
    },
  });
}
