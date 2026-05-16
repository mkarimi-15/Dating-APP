import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { useRouter } from 'expo-router';

import { TextInput } from 'react-native';
import { Button } from '@/components/ui/Button';

export default function VerifyOtp() {
  const router = useRouter();

  const [code, setCode] = useState(['', '', '', '', '']);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back('/forgot-password')}
      >
        <Text style={styles.backIcon}>‹</Text>
      </TouchableOpacity>

      <Text style={styles.title}>
        Verification Code
      </Text>

      <Text style={styles.description}>
        Enter the 5-digit code we’ve sent to ******97
      </Text>

      <View style={styles.otpContainer}>
        {code.map((item, index) => (
          <TextInput
            key={index}
            value={item}
            onChangeText={(text) => {
              const digit = text.replace(/[^0-9]/g, '').slice(0, 1);
              const newCode = [...code];
              newCode[index] = digit;
              setCode(newCode);
            }}
            keyboardType="numeric"
            maxLength={1}
            style={styles.input}
          />
        ))}
      </View>

      <View style={styles.buttonRow}>
        <Button
          label="Cancel"
          onPress={() => router.back('/forgot-password')}
          style={styles.smallButton}
        />

        <Button
          label="Verify"
          onPress={() => {}}
          style={styles.smallButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1E7E7',
    paddingHorizontal: 32,
    paddingTop: 70,
  },

  backButton: {
    marginBottom: 24,
  },

  backIcon: {
    fontSize: 40,
    color: '#6F3108',
  },

  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '700',
    color: '#6F3108',
    marginBottom: 24,
  },

  description: {
    textAlign: 'center',
    fontSize: 16,
    color: '#6F3108',
    marginBottom: 36,
  },

  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginBottom: 50,
  },

  input: {
    width: 55,
    height: 55,
    borderWidth: 2,
    borderColor: '#7A3A00',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '600',
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },

  smallButton: {
    flex: 1,
  },
});
