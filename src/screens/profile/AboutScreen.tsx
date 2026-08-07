import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { BackButton } from '@/components/ui/BackButton';
import { MoreButton } from '@/components/ui/MoreButton';

export function AboutScreen() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const lookingFor = [
    'Long-term relationship',
    'Friendship',
  ];

  const interests = [
    'Movies',
    'Sports',
    'Reading',
  ];

  return (
    <View style={styles.screen}>

      {/* Header */}
      <View style={styles.header}>
        <BackButton onPress={() => router.back()} />

        <MoreButton
          onPress={() => {
            console.log('More clicked');
          }}
        />
      </View>

      {/* Main Content */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >

        {/* Profile Image */}
        <Image
          style={styles.image}
          source={require('../../../assets/images/images.png')}
        />

        {/* Name + Age */}
        <View style={styles.profile}>
          <TextInput
            style={styles.textname}
            placeholder="Enter your Name"
            placeholderTextColor="#6F3108"
            value={name}
            onChangeText={setName}
          />

          <TextInput
            style={styles.textname2}
            placeholder="Enter your Age"
            placeholderTextColor="#6F3108"
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
          />
        </View>

        {/* Bio */}
        <Card style={styles.bioCard}>
          <View style={styles.circleMenu}>
            <Ionicons
              name="person"
              size={20}
              color="#F8DDDD"
            />
          </View>

          <View style={styles.bioTextContainer}>
            <Text style={styles.textMenu}>
              Bio
            </Text>

            <Text style={styles.bioDescription}>
              About yourself
            </Text>
          </View>
        </Card>

        {/* Looking For */}
        <Card>
          <View style={styles.cardHeader}>
            <View style={styles.circleMenu}>
              <Ionicons
                name="heart"
                size={20}
                color="#F8DDDD"
              />
            </View>

            <Text style={styles.textMenu}>
              Looking For
            </Text>
          </View>

          <View style={styles.tagsContainer}>
            {lookingFor.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.tag}
              >
                <Text style={styles.tagText}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </Card>

        {/* Interests */}
        <Card>
          <View style={styles.cardHeader}>
            <View style={styles.circleMenu}>
              <Ionicons
                name="star-outline"
                size={20}
                color="#F8DDDD"
              />
            </View>

            <Text style={styles.textMenu}>
              Interests
            </Text>
          </View>

          <View style={styles.tagsContainer}>
            {interests.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.tag}
              >
                <Text style={styles.tagText}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </Card>

        {/* Keep Going */}
        <View style={styles.buttonContainer}>
          <Button
            label="Keep Going"
            onPress={() => {
              console.log('clicked');
            }}
          />
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F1E7E7',
  },

  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  scrollView: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 32,
    paddingBottom: 40,
  },

  image: {
    width: 161,
    height: 155,
    borderRadius: 80,
    alignSelf: 'center',
    marginTop: 20,
  },

  profile: {
    width: '100%',
    alignItems: 'center',
    marginTop: 8,
  },

  textname: {
    width: '100%',
    fontSize: 40,
    fontFamily: 'Abhaya Libre SemiBold',
    color: '#6F3108',
    textAlign: 'center',
  },

  textname2: {
    width: '100%',
    fontSize: 16,
    fontFamily: 'inter',
    color: '#6F3108',
    textAlign: 'center',
  },

  bioCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },

  bioTextContainer: {
    marginLeft: 12,
  },

  circleMenu: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#7A3A00',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textMenu: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: '600',
    color: '#7A3A00',
  },

  bioDescription: {
    marginLeft: 12,
    fontSize: 14,
    color: '#7A3A00',
  },

  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
  },

  tag: {
    backgroundColor: '#F8DDDD',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },

  tagText: {
    color: '#7A3A00',
    fontSize: 14,
  },

  buttonContainer: {
    marginTop: 40,
  },
});