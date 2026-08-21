import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { ImageBackground } from 'react-native';


import { BackButton } from '@/components/ui/BackButton';
import { MoreButton } from '@/components/ui/MoreButton';

import { useRouter } from 'expo-router';

export default function UserProfileScreen() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground
       source={require('../../../assets/images/images.png')}
       style={styles.hero}
       imageStyle={styles.heroImage}
       >
       <View style={styles.header}>
         <BackButton onPress={() => router.back()} />
         <MoreButton onPress={() => {}} />
       </View>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.small}>
            <Ionicons name="close" size={30} color="#7A3A00" />
          </TouchableOpacity>
      
          <TouchableOpacity style={styles.big}>
            <Ionicons name="heart" size={40} color="#7A3A00" />
          </TouchableOpacity>
      
          <TouchableOpacity style={styles.small}>
            <Ionicons name="star" size={28} color="#7A3A00" />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.name}>
            Jessica Parker, 23
          </Text>

          <TouchableOpacity style={styles.location}>
            <Ionicons
              name="paper-plane"
              size={24}
              color="#7A3A00"
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Location</Text>

        <Text style={styles.text}>
          Chicago, IL United States
        </Text>

        <Text style={styles.title}>About</Text>

        <Text style={styles.text}>
          My name is Jessica Parker and I enjoy meeting new people and
          finding ways to help them have an uplifting experience. I enjoy
          reading..
        </Text>

        <Text style={styles.read}>Read more</Text>

        <Text style={styles.title}>Interests</Text>

        <View style={styles.tags}>
          <View style={styles.tag}>
            <Text>✓ Travelling</Text>
          </View>

          <View style={styles.tag}>
            <Text>✓ Books</Text>
          </View>

          <View style={styles.tag}>
            <Text>Music</Text>
          </View>

          <View style={styles.tag}>
            <Text>Dancing</Text>
          </View>

          <View style={styles.tag}>
            <Text>Modeling</Text>
          </View>
        </View>
      </View>

      <View>
        <View style={styles.header}>
          <Text style={styles.title}>Gallery</Text>
          <Text style={styles.see}>See all</Text>
        </View>

        <View style={styles.grid}>
          <Image
            source={require('../../../assets/images/images.png')}
            style={styles.large}
          />

          <Image
            source={require('../../../assets/images/images.png')}
            style={styles.large}
          />

          <Image
            source={require('../../../assets/images/images.png')}
            style={styles.small}
          />

          <Image
            source={require('../../../assets/images/images.png')}
            style={styles.small}
          />

          <Image
            source={require('../../../assets/images/images.png')}
            style={styles.small}
          />
        </View>

        <View style={styles.bottomMenu} />
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  
 container: {
  paddingHorizontal: 30,
  paddingBottom: 40,
  backgroundColor: '#F6ECEA',
},

  image: {

    width: '100%',
    height: 520,

    resizeMode: 'cover',

  },
hero: {
  width: '100%',
  height: 420,
  position: 'relative', // مهم
},
buttons: {
  position: 'absolute',
  bottom: -40,

  left: 0,
  right: 0,

  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',

  zIndex: 100,
},

heroImage: {
  resizeMode: 'cover',
},

big: {
  width: 96,
  height: 96,
  borderRadius: 48,

  backgroundColor: '#F6B5AB',

  justifyContent: 'center',
  alignItems: 'center',

  marginHorizontal: 12,

  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 10,
  },
  shadowOpacity: 0.18,
  shadowRadius: 18,

  elevation: 14,
},
  card: {

    marginTop: 65,

    backgroundColor: '#F6ECEA',

    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,

    paddingTop: 90,
    paddingHorizontal: 30,
    paddingBottom: 30,

  },

  row: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },

  name: {

    fontSize: 36,

    fontWeight: '700',

    color: '#7A3A00',

  },

  location: {

    width: 70,
    height: 70,

    borderRadius: 20,

    borderWidth: 1.5,

    borderColor: '#7A3A00',

    justifyContent: 'center',
    alignItems: 'center',

  },


  text: {

    marginTop: 8,

    fontSize: 18,

    lineHeight: 28,

    color: '#5D463A',

  },

  read: {

    marginTop: 12,

    fontWeight: '700',

    color: '#7A3A00',

  },

  tags: {

    marginTop: 22,

    flexDirection: 'row',

    flexWrap: 'wrap',

    gap: 12,

  },

  tag: {

    paddingHorizontal: 18,

    paddingVertical: 10,

    backgroundColor: 'white',

    borderRadius: 12,

  },


  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 20,

  },

  title: {

    fontSize: 24,

    fontWeight: '700',

    color: '#7A3A00',

  },

  see: {

    color: '#7A3A00',

    fontWeight: '600',

  },

  grid: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-between',

    gap: 12,

  },

  large: {

    width: '48%',

    height: 220,

    borderRadius: 16,

  },

small: {
  width: 74,
  height: 74,
  borderRadius: 37,

  backgroundColor: '#F6B5AB',

  justifyContent: 'center',
  alignItems: 'center',

  marginHorizontal: 12,

  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 8,
  },
  shadowOpacity: 0.15,
  shadowRadius: 15,

  elevation: 10,
},

  bottomMenu: {

    height: 80,

  },
  });
