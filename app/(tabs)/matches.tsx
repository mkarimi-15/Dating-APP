import { View, Text, StyleSheet } from 'react-native';
import { Colors, Fonts, Spacing } from '@/constants/theme';

export default function MatchesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Matches</Text>
      <Text style={styles.subtitle}>Your matches and conversations will appear here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
    padding: Spacing.lg,
  },
  title: {
    fontSize: Fonts.sizes.xxl,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: Spacing.sm,
  },
  subtitle: {
    fontSize: Fonts.sizes.md,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
});
