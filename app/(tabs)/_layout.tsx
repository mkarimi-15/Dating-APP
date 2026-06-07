import { Ionicons } from '@expo/vector-icons';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import { Tabs } from 'expo-router';
import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import { BorderRadius, Colors, Fonts, Spacing } from '@/constants/theme';

const TAB_CONFIG = {
  index: {
    label: 'Discover',
    icon: 'flame-outline',
    activeIcon: 'flame',
  },
  matches: {
    label: 'Matches',
    icon: 'heart-outline',
    activeIcon: 'heart',
  },
  profile: {
    label: 'Profile',
    icon: 'person-outline',
    activeIcon: 'person',
  },
  about: {
    label: 'About',
    icon: 'document-text-outline',
    activeIcon: 'document-text',
  },
} as const;

function CustomTabBar({ state, descriptors, navigation, insets }: BottomTabBarProps) {
  const { width } = useWindowDimensions();
  const railWidth = width >= 1024 ? 120 : width >= 768 ? 104 : 88;

  return (
    <View
      style={[
        styles.sidebarWrap,
        {
          width: railWidth,
          paddingTop: Math.max(insets.top, Spacing.lg),
          paddingBottom: Math.max(insets.bottom, Spacing.lg),
          paddingLeft: Math.max(insets.left, Spacing.md),
        },
      ]}
    >
      <LinearGradient colors={['#FAECEC', '#F1CACA']} style={styles.sidebar}>
        <View style={styles.items}>
          {state.routes.map((route, index) => {
            const isFocused = state.index === index;
            const descriptor = descriptors[route.key];
            const options = descriptor.options;
            const tab = TAB_CONFIG[route.name as keyof typeof TAB_CONFIG];

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name, route.params);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            return (
              <Pressable
                key={route.key}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarButtonTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={({ pressed }) => [
                  styles.itemPressable,
                  pressed && styles.itemPressed,
                ]}
              >
                <View style={[styles.itemInner, isFocused && styles.itemInnerActive]}>
                  <View style={[styles.iconWrap, isFocused && styles.iconWrapActive]}>
                    <Ionicons
                      name={isFocused ? tab.activeIcon : tab.icon}
                      size={22}
                      color={isFocused ? Colors.white : Colors.primary}
                    />
                  </View>
                  <Text style={[styles.itemLabel, isFocused && styles.itemLabelActive]}>
                    {tab.label}
                  </Text>
                </View>
              </Pressable>
            );
          })}
        </View>
      </LinearGradient>
    </View>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarPosition: 'left',
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="matches" />
      <Tabs.Screen name="profile" />
      <Tabs.Screen name="about" />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  sidebarWrap: {
    backgroundColor: Colors.background,
  },
  sidebar: {
    flex: 1,
    borderRadius: BorderRadius.xl,
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.md,
    justifyContent: 'flex-end',
  },
  items: {
    gap: Spacing.sm,
  },
  itemPressable: {
    borderRadius: BorderRadius.lg,
  },
  itemPressed: {
    opacity: 0.88,
  },
  itemInner: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.xs,
    borderRadius: BorderRadius.lg,
  },
  itemInnerActive: {
    backgroundColor: 'rgba(111, 49, 8, 0.1)',
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F8DDDD',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.xs,
  },
  iconWrapActive: {
    backgroundColor: Colors.primary,
  },
  itemLabel: {
    fontSize: Fonts.sizes.xs,
    fontWeight: '600',
    color: Colors.primary,
    textAlign: 'center',
  },
  itemLabelActive: {
    color: Colors.primary,
  },
});
