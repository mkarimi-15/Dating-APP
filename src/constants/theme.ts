export const Colors = {
  primary: '#FF6B9D',
  primaryDark: '#E8557F',
  primaryLight: '#FFB3CF',
  secondary: '#C850C0',
  accent: '#FFCC02',
  background: '#FFFFFF',
  backgroundSecondary: '#F8F8F8',
  surface: '#FFFFFF',
  text: '#1A1A2E',
  textSecondary: '#6B6B80',
  textMuted: '#A0A0B0',
  border: '#E8E8F0',
  error: '#E53E3E',
  success: '#38A169',
  warning: '#D69E2E',
  white: '#FFFFFF',
  black: '#000000',
  overlay: 'rgba(0,0,0,0.5)',
} as const;

export const Fonts = {
  regular: 'System',
  medium: 'System',
  bold: 'System',
  sizes: {
    xs: 11,
    sm: 13,
    md: 15,
    lg: 17,
    xl: 20,
    xxl: 24,
    xxxl: 30,
    display: 36,
  },
} as const;

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
} as const;

export const BorderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
} as const;
