import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';

import { useRouter } from 'expo-router';

import { TextInput } from '@/components/ui/TextInput';
import { Button } from '@/components/ui/Button';

import {
  Colors,
  Fonts,
  Spacing,
  BorderRadius,
} from '@/constants/theme';
export function ForgotPassword() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <TouchableOpacity 
            style={styles.backButton}
            onPress={() => router.back()}
            >
                <Text style={styles.backIcon}>‹</Text>
            </TouchableOpacity>
             <Text style={styles.title}>Forgot Password</Text>
            <Text style={styles.description}>Please enter your phone number. You will
             receive a otp to create a new password
             via sms.
             </Text>
             <View style={styles.inputContainer}>   
                <TextInput 
                    label = "Phone Number"
                    placeholder = "Enter your phone number"/>
             </View>
             <Button
             label="NEXT"
             onPress={() => {}}
             style={styles.button}
             />

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#F1E7E7',
        paddingHorizontal:32,
        paddingTop:70,

    },
    backButton: {
        marginBottom: 24,
    },
    backIcon: {
        fontSize:40,
        color:'#6F3108'
    },
    title: {
        textAlign: 'center',
        fontSize:22,
        fontWeight:'700',
        color:'#6F3108',
        marginBottom: 40,
    },
    description: {
        fontSize: 18,
        lineHeight:30,
        color:'#6F3108',
        marginBottom:40,

    },
      inputContainer: {
    marginBottom: 36,
  },

  button: {
    backgroundColor: '#7A3200',
    borderRadius: 18,
  },


});
