import React from 'react';
import { ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export function Card({ children, style }: CardProps) {
  return (
    <LinearGradient
      colors={['#FAECEC', '#F1CACA']}
      style={[
        {
          width: '100%',
          borderRadius: 16,
          padding: 16,
          marginTop: 16,
        },
        style,
      ]}
    >
      {children}
    </LinearGradient>
  );
}