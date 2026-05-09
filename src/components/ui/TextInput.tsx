import React, { useState } from 'react';
import {
  View,
  TextInput as RNTextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInputProps,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, BorderRadius, Spacing, Fonts } from '@/constants/theme';

interface InputProps extends TextInputProps {
  label: string;
  error?: string;
  secureEntry?: boolean;
}

export function TextInput({ label, error, secureEntry, ...props }: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const showToggle = secureEntry;
  const isSecure = secureEntry && !isPasswordVisible;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.inputWrapper,
          isFocused && styles.inputWrapperFocused,
          !!error && styles.inputWrapperError,
        ]}
      >
        <RNTextInput
          style={styles.input}
          secureTextEntry={isSecure}
          placeholderTextColor={Colors.textMuted}
          autoCapitalize="none"
          autoCorrect={false}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {showToggle && (
          <TouchableOpacity
            onPress={() => setIsPasswordVisible((v) => !v)}
            style={styles.eyeButton}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <Ionicons
              name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
              size={20}
              color={Colors.textMuted}
            />
          </TouchableOpacity>
        )}
      </View>
      {!!error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.md,
  },
  label: {
    fontSize: Fonts.sizes.sm,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: Spacing.xs,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    borderWidth: 1.5,
    borderColor: Colors.border,
    borderRadius: BorderRadius.md,
    backgroundColor: Colors.backgroundSecondary,
    paddingHorizontal: Spacing.md,
  },
  inputWrapperFocused: {
    borderColor: Colors.primary,
    backgroundColor: Colors.white,
  },
  inputWrapperError: {
    borderColor: Colors.error,
  },
  input: {
    flex: 1,
    fontSize: Fonts.sizes.md,
    color: Colors.text,
    height: '100%',
  },
  eyeButton: {
    paddingLeft: Spacing.sm,
  },
  errorText: {
    fontSize: Fonts.sizes.xs,
    color: Colors.error,
    marginTop: 4,
  },
});
