import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import Slider from '@react-native-community/slider';
import { Ionicons } from '@expo/vector-icons';

import { Button } from '@/components/ui/Button';

export default function FiltersScreen() {
  const [gender, setGender] = useState<'women' | 'men'>('women');

  const [distance, setDistance] = useState(30);
  const [age, setAge] = useState(28);

  const [selectedInterest, setSelectedInterest] =
    useState('Lorem');

  const interests = [
    'Lorem Ips',
    'Lorem',
    'Ipsum',
    'Lorem Ips',
    'Ipsum',
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Main Content */}
        <View style={styles.content}>

          {/* Title */}
          <Text style={styles.title}>
            Discover People Nearby
          </Text>

          {/* Location */}
          <View style={styles.section}>
            <Text style={styles.label}>
              Location
            </Text>

            <TouchableOpacity style={styles.locationBox}>
              <Ionicons
                name="earth"
                size={22}
                color="#7A3A00"
              />

              <Text style={styles.locationText}>
                Hamburg, Germany
              </Text>
            </TouchableOpacity>
          </View>

          {/* Gender */}
          <View style={styles.genderContainer}>

            <TouchableOpacity
              style={[
                styles.genderButton,
                gender === 'women' && styles.genderButtonActive,
              ]}
              onPress={() => setGender('women')}
            >
              <Text
                style={[
                  styles.genderText,
                  gender === 'women' && styles.genderTextActive,
                ]}
              >
                Women
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.genderButton,
                gender === 'men' && styles.genderButtonActive,
              ]}
              onPress={() => setGender('men')}
            >
              <Text
                style={[
                  styles.genderText,
                  gender === 'men' && styles.genderTextActive,
                ]}
              >
                Men
              </Text>
            </TouchableOpacity>

          </View>

          {/* Distance Slider */}
          <View style={styles.sliderSection}>

            <Slider
              style={styles.slider}
              minimumValue={1}
              maximumValue={50}
              step={1}
              value={distance}
              onValueChange={setDistance}
              minimumTrackTintColor="#7A3A00"
              maximumTrackTintColor="#7A3A00"
              thumbTintColor="#7A3A00"
            />

            <View style={styles.sliderValues}>
              <Text style={styles.sliderText}>
                 20km
              </Text>

              <Text style={styles.sliderText}>
                35 km
              </Text>
            </View>

          </View>

          {/* Age Slider */}
          <View style={styles.sliderSection}>

            <Slider
              style={styles.slider}
              minimumValue={18}
              maximumValue={32}
              step={1}
              value={age}
              onValueChange={setAge}
              minimumTrackTintColor="#7A3A00"
              maximumTrackTintColor="#7A3A00"
              thumbTintColor="#7A3A00"
            />

            <View style={styles.sliderValues}>
              <Text style={styles.sliderText}>
                Age
              </Text>

              <Text style={styles.sliderText}>
                31
              </Text>
            </View>

          </View>

          {/* Interests */}
          <View style={styles.interestsContainer}>

            {interests.map((item, index) => {
              const isSelected =
                const isSelected = selectedInterest === item;

              return (
                <TouchableOpacity
                  key={`${item}-${index}`}
                  style={[
                    styles.interestButton,
                    isSelected && styles.interestButtonActive,
                  ]}
                  onPress={() => setSelectedInterest(item)}
                >
                  <Text
                    style={[
                      styles.interestText,
                      isSelected && styles.interestTextActive,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            })}

          </View>

        </View>

        {/* Keep Going */}
        <View style={styles.buttonContainer}>
          <Button
            label="Keep Going"
            onPress={() => {
              console.log({
                gender,
                distance,
                age,
                selectedInterest,
              });
            }}
          />
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1E7E7',
  },

  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 30,
  },

  content: {
    width: '82%',
    maxWidth: 420,
    paddingTop: 65,
  },

  // TITLE
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: "#7A3A00",
    textAlign: 'center',
    marginBottom: 40,
  },

  // LOCATION
  section: {
    width: '100%',
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#7A3A00',
    marginBottom: 14,
    marginLeft: 5,
  },

  locationBox: {
    width: '100%',
    height: 48,

    borderWidth: 1,
    borderColor: '#7A3A00',
    borderRadius: 24,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    gap: 10,
  },

  locationText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#7A3A00',
  },

  // GENDER
  genderContainer: {
    width: '100%',
    flexDirection: 'row',
    gap: 10,
    marginTop: 70,
  },

  genderButton: {
    flex: 1,
    height: 45,

    borderWidth: 1,
    borderColor: '#7A3A00',
    borderRadius: 24,

    justifyContent: 'center',
    alignItems: 'center',
  },

  genderButtonActive: {
    backgroundColor: '#EE9B91',
  },

  genderText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#7A3A00',
  },

  genderTextActive: {
    color: '#7A3A00',
  },

  // SLIDERS
  sliderSection: {
    width: '100%',
    marginTop: 55,
  },

  slider: {
    width: '100%',
    height: 30,
  },

  sliderValues: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
  },

  sliderText: {
    fontSize: 15,
    color: '#7A3A00',
  },

  // INTERESTS
  interestsContainer: {
    width: '100%',

    flexDirection: 'row',
    flexWrap: 'wrap',

    justifyContent: 'center',

    gap: 8,

    marginTop: 50,
  },

  interestButton: {
    paddingHorizontal: 18,
    height: 40,

    borderWidth: 1,
    borderColor: '#7A3A00',
    borderRadius: 22,

    justifyContent: 'center',
    alignItems: 'center',
  },

  interestButtonActive: {
    backgroundColor: '#EE9B91',
  },

  interestText: {
    fontSize: 16,
    color: '#7A3A00',
  },

  interestTextActive: {
    color: '#7A3A00',
  },

  // KEEP GOING
  buttonContainer: {
    width: '82%',
    maxWidth: 420,

    marginTop: 80,
    marginBottom: 20,
  },
});