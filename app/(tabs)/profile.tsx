import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors, Fonts, Spacing, BorderRadius } from '@/constants/theme';
import { useAuthStore } from '@/store/authStore';

export default function ProfileScreen() {
  const router = useRouter();
  const { user, clearAuth } = useAuthStore();

  const handleSignOut = () => {
    clearAuth();
    router.replace('/(auth)/sign-in');
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          {user?.name?.charAt(0)?.toUpperCase() ?? '?'}
        </Text>
      </View>
      <Text style={styles.name}>{user?.name ?? 'User'}</Text>
      <Text style={styles.email}>{user?.email}</Text>

      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
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
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: Colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.md,
  },
  avatarText: {
    fontSize: 40,
    fontWeight: '700',
    color: Colors.primary,
  },
  name: {
    fontSize: Fonts.sizes.xxl,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: Spacing.xs,
  },
  email: {
    fontSize: Fonts.sizes.md,
    color: Colors.textSecondary,
    marginBottom: Spacing.xxl,
  },
  signOutButton: {
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.xl,
    borderRadius: BorderRadius.full,
    borderWidth: 1.5,
    borderColor: Colors.error,
  },
  signOutText: {
    fontSize: Fonts.sizes.md,
    color: Colors.error,
    fontWeight: '600',
  },
});
