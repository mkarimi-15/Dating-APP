import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { router } from 'expo-router';

import { Button } from '@/components/ui/Button';
import { BackButton } from '@/components/ui/BackButton';
import { MoreButton } from '@/components/ui/MoreButton';

export default function AboutScreen() {
  return (
    <View style={styles.container}>

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
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >

        {/* Profile Image */}
        <Image
          style={styles.imageProfile}
          source={require('../../../assets/images/images.png')}
        />

        {/* Gallery */}
        <View style={styles.gallery}>

          {/* Top Row */}
          <View style={styles.topRow}>

            {/* Large Photo */}
            <TouchableOpacity
              style={styles.largePhotoBox}
              onPress={() => {
                console.log('Large photo clicked');
              }}
            >
              <Text style={styles.plus}>+</Text>
            </TouchableOpacity>

            {/* Right Column */}
            <View style={styles.rightPhotos}>

              {/* Small Photo 1 */}
              <TouchableOpacity
                style={styles.smallTopBox}
                onPress={() => {
                  console.log('Top right photo clicked');
                }}
              >
                <Text style={styles.plus}>+</Text>
              </TouchableOpacity>

              {/* Small Photo 2 */}
              <TouchableOpacity
                style={styles.smallTopBox}
                onPress={() => {
                  console.log('Bottom right photo clicked');
                }}
              >
                <Text style={styles.plus}>+</Text>
              </TouchableOpacity>

            </View>

          </View>

          {/* Bottom 6 Photos */}
          <View style={styles.photoGrid}>

            {[1, 2, 3, 4, 5, 6].map((item) => (
              <TouchableOpacity
                key={item}
                style={styles.gridPhotoBox}
                onPress={() => {
                  console.log(`Photo ${item} clicked`);
                }}
              >
                <Text style={styles.plus}>+</Text>
              </TouchableOpacity>
            ))}

          </View>

        </View>

        {/* Keep Going */}
        <View style={styles.buttonContainer}>
         <Button
           label="Keep Going"
           onPress={() => {
             router.push('/userProfile');
           }}
         />
        </View>

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({

  // =========================
  // SCREEN
  // =========================

  container: {
    flex: 1,
    backgroundColor: '#F1E7E7',
  },

  // =========================
  // HEADER
  // =========================

  header: {
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingHorizontal: 20,
    paddingTop: 20,
  },

  // =========================
  // SCROLL VIEW
  // =========================

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    alignItems: 'center',
    paddingBottom: 30,
  },

  // =========================
  // PROFILE IMAGE
  // =========================

  imageProfile: {
    width: 161,
    height: 155,
    borderRadius: 80,
    alignSelf: 'center',
    marginTop: 20,
  },

  // =========================
  // GALLERY
  // =========================

  gallery: {
        width: '33%',

    height: 200,

    marginTop: 30,
  },

  // =========================
  // TOP GALLERY
  // =========================

  topRow: {
    width: '100%',

    flexDirection: 'row',

    gap: 6,
  },

  // Large left photo
  largePhotoBox: {
    flex: 2,

    height: 205,

    borderWidth: 1,
    borderColor: '#7A3A00',
    borderRadius: 10,

    justifyContent: 'center',
    alignItems: 'center',

    overflow: 'hidden',
  },

  // Right column
  rightPhotos: {
    flex: 1,

    height: 205,

    gap: 6,
  },

  // Small right photos
  smallTopBox: {
    flex: 1,

    borderWidth: 1,
    borderColor: '#7A3A00',
    borderRadius: 10,

    justifyContent: 'center',
    alignItems: 'center',

    overflow: 'hidden',
  },

  // =========================
  // BOTTOM PHOTO GRID
  // =========================

photoGrid: {
  width: '100%',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  rowGap: 6,
  marginTop: 6,
},

gridPhotoBox: {
  width: '31.5%',
  height: 120,

  borderWidth: 1,
  borderColor: '#7A3A00',
  borderRadius: 10,

  justifyContent: 'center',
  alignItems: 'center',

  overflow: 'hidden',
},
  // =========================
  // PLUS
  // =========================

  plus: {
    fontSize: 26,
    fontWeight: '600',
    color: '#7A3A00',
  },

  // =========================
  // BUTTON
  // =========================

buttonContainer: {
  width: '90%',
  maxWidth: 520,
   transform: [{ translateY: 280 }],
  marginBottom: 30,
  
},

});