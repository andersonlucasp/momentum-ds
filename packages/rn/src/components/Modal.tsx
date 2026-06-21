import React from 'react';
import { Modal as RNModal, View, StyleSheet, ViewStyle, ModalProps as RNModalProps } from 'react-native';
import { lightTheme } from '../theme/light';

export interface DsModalProps extends RNModalProps {
  title?: string;
  children?: React.ReactNode;
  contentStyle?: ViewStyle;
}

export const DsModal = React.forwardRef<RNModal, DsModalProps>(
  ({ visible, onRequestClose, animationType = 'slide', transparent = true, children, contentStyle, ...props }, ref) => {
    const theme = lightTheme;
    const styles = createStyles(theme);

    return (
      <RNModal
        ref={ref}
        visible={visible}
        onRequestClose={onRequestClose}
        animationType={animationType}
        transparent={transparent}
        {...props}
      >
        <View style={styles.backdrop}>
          <View style={[styles.content, contentStyle]}>
            {children}
          </View>
        </View>
      </RNModal>
    );
  }
);

DsModal.displayName = 'DsModal';

function createStyles(theme: typeof lightTheme) {
  return StyleSheet.create({
    backdrop: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      backgroundColor: theme.colors.background.primary,
      borderRadius: theme.borderRadius.lg,
      padding: 24,
      minWidth: 300,
      maxWidth: 500,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 8,
    },
  });
}
