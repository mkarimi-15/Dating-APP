
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';


export function AboutScreen() {
  const [name,setName] = useState(''); 
  const [age,setAge] = useState('');
  const [activeTab, setActiveTab] = useState('about');

  const bio = [
    'Photography',
    'Travel',
    'Music',
  ];

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
  <View style={styles.container}>
    {/* Header */}
    <View style={styles.header}>
      <TouchableOpacity style={styles.backbutten} onPress={() => {}}>
        <Text style={styles.backIcon}>‹</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backbutten} onPress={() => {}}>
        <Text style={styles.backIcon}>⋯</Text>
      </TouchableOpacity>
    </View>

    {/* Profile */}
    <View>
      <Image
        style={styles.image}
        source={require('../../../assets/images/images.png')}
      />
    </View>

    <View style={styles.profile}>
  <TextInput
    style={styles.textname}
    placeholder="Enter your Name"
    value={name}
    onChangeText={setName}
  />

  <TextInput
    style={styles.textname2}
    placeholder="Enter your Age"
    value={age}
    onChangeText={setAge}
    keyboardType="numeric"
  />
</View>
   

    {/* Menu */}
     <LinearGradient
  colors={['#FAECEC', '#F1CACA']}
  style={{
    width: 300,
    height: 120,
    borderRadius: 16,
    alignSelf: 'center',
    marginTop: 20,

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 16,
  }}
>
  <View style={styles.circleMenu}
  
  >
    <Ionicons
      name="person"
      size={20}
      color="#FFFFFF"
    />
  </View>

  <View style={{ marginLeft: 12 }}>
    <Text style = {styles.textMenu}

    >
      Bio
    </Text>

    <Text
      style={{
        fontSize: 14,
        color: '#7A3A00',
      }}
    >
      About yourself
    </Text>
  </View>
</LinearGradient>
<LinearGradient
  colors={['#FAECEC', '#F1CACA']}
  style={{
    width: 300,
    height: 140,
    borderRadius: 16,
    alignSelf: 'center',
    marginTop: 16,
    padding: 16,
  }}
>
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
    }}
  >
    <View
      style={{
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#7A3A00',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Ionicons
        name="heart"
        size={20}
        color="#FFFFFF"
      />
    </View>

    <Text
      style={{
        marginLeft: 12,
        fontSize: 16,
        fontWeight: '600',
        color: '#7A3A00',
      }}
    >
      Looking For
    </Text>
  </View>

<View
  style={{
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
  }}
>

  {lookingFor.map((item, index) => (
    <TouchableOpacity
      key={index}
      style={{
        backgroundColor: '#F8DDDD',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 20,
        marginRight: 8,
        marginBottom: 8,
      }}
    >
      <Text
        style={{
          color: '#7A3A00',
          fontSize: 14,
        }}
      >
        {item}
      </Text>
    </TouchableOpacity>
  ))}
</View>
<LinearGradient
  colors={['#FAECEC', '#F1CACA']}
  style={{
    width: 300,
    borderRadius: 16,
    alignSelf: 'center',
    marginTop: 16,
    padding: 16,
  }}
>
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
    }}
  >
    <View
      style={{
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#7A3A00',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Ionicons
        name="star-outline"
        size={20}
        color="#FFFFFF"
      />
    </View>

    <Text
      style={{
        marginLeft: 12,
        fontSize: 16,
        fontWeight: '600',
        color: '#7A3A00',
        
      }}
    >
      Interests
    </Text>
  </View>

  <View
    style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 16,
    }}
  >
    {interests.map((item, index) => (
      <TouchableOpacity
        key={index}
        style={{
          backgroundColor: '#F8DDDD',
          paddingHorizontal: 12,
          paddingVertical: 8,
          borderRadius: 20,
          marginRight: 8,
          marginBottom: 8,
        }}
      >
        <Text
          style={{
            color: '#7A3A00',
            fontSize: 14,
          }}
        >
          {item}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
</LinearGradient>
</LinearGradient>

    {/* Button */}
    <TouchableOpacity style={styles.button}>
      <Text style={styles.textButton}>Keep Going</Text>
    </TouchableOpacity>

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
  circleMenu:{
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#7A3A00',
      justifyContent: 'center',
      alignItems: 'center',
  },
  textMenu:{},

  backbutten: {
    marginBottom: 24,
    width: 52,
    height: 52,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#7A3A00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
        fontSize:40,
        color:'#6F3108',
        justifyContent: 'center',
        alignItems:'center'
  },

  image: {
    width: 161,
    height: 155,
    borderRadius: 70,
    alignSelf:'center'
  
  },
  header:{
    
   flexDirection:'row',
   justifyContent:'space-between',
   alignItems:'center'
    
  },
  profile:{
    alignSelf:'center',
    flexDirection: 'column',
  },
  textname:{
    fontSize:40,
    fontFamily:'Abhaya Libre SemiBold',
    color:'#6F3108',
    alignSelf:'center',
    justifyContent:'center',
  },
  textname2:{

    alignSelf:'center',
    fontSize:16,
    fontFamily:'inter',
    color:'#6F3108',
  },
 
  menu: {
  position: 'absolute',
  left: 0,
  top: 250,
  width: 125,
  height: 465,
  borderTopRightRadius: 50,
  borderBottomRightRadius: 50,
  zIndex: 10,
},
  menuItem:{
     alignSelf:'center',
  },
 
  activeMenu: {
  width: 50,
  height: 78,
  backgroundColor: '#7A3A00',
  borderRadius: 30,
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,
  marginTop:100,
  marginBottom:50,
},
menuTextActive: {
  justifyContent:'center',
  color: '#7A3A00',
  fontSize: 14,
  fontWeight: '600',
},

filtersTextActive:{
 justifyContent:'center',
  color: '#7A3A00',
  fontSize: 14,
  fontWeight: '600',
},
filtersItem:{
  alignSelf:'center',
  paddingTop:50,
},

button:{
  width: 400,
    height: 55,
    borderWidth: 2,
    borderColor: '#7A3A00',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '600',
    alignSelf:'center',
    
    marginTop:170,
    backgroundColor:'#7A3A00'
},
textButton:{
textAlign: 'center',

        fontSize:18,
        fontWeight:'700',
        color:'#F1E7E7',
        marginBottom: 40,
        padding:15,
        

}

});

// TEST GIT
