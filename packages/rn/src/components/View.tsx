import React from 'react';
import { View as RNView, ViewProps as RNViewProps } from 'react-native';

export interface DsViewProps extends RNViewProps {
  // Props can be extended with semantic spacing, alignment, etc.
}

export const DsView = React.forwardRef<RNView, DsViewProps>(({ children, ...props }, ref) => (
  <RNView ref={ref} {...props}>
    {children}
  </RNView>
));

DsView.displayName = 'DsView';
