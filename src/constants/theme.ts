export const Colors = {
  primary: '#6F3108',
  primaryDark: '#E8557F',
  primaryLight: '#FFB3CF',
  secondary: '#C850C0',
  accent: '#FFCC02',
  background: '#F1E7E7',
  backgroundSecondary: '#F1E7E7',
  surface: '#F1E7E7',
  text: '#6F3108',
  textSecondary: '#6F3108',
  textMuted: '#6F3108',
  border: '#6F3108',
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
    md: 14,
    lg: 17,
    xl: 20,
    xxl: 24,
    xxxl: 40,
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
  full: 10,
} as const;
