import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/theme';

interface MoreButtonProps {
  onPress: () => void;
  style?: ViewStyle;
}

export function MoreButton({
  onPress,
  style,
}: MoreButtonProps) {
  
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Ionicons
        name="ellipsis-horizontal"
        size={28}
        color={Colors.primary}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 56,
    height: 56,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: Colors.primary,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
});
//call moreButten:<MoreButton onPress={() => {
 // console.log('More clicked');}} />
 
//back and more togheder: 
//<View style={styles.header}>
//<BackButton onPress={() => router.back()} />
//<MoreButton onPress={() => console.log('More')} />
//</View>
//header: {
  //flexDirection: 'row',
  //justifyContent: 'space-between',
  //alignItems: 'center',
  //width: '100%',}