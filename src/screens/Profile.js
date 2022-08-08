import {View, Text, Image,TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import PressBack from '../components/PressBack';
import styles from '../styles/globalStyles';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

const Profile = () => {
  return (
    <View style={styles.ScreenBack}>
      <PressBack title="Profile" />

      <View
        style={{
          marginHorizontal: 20,
          backgroundColor: 'white',
          elevation: 2,
          height: 500,
          marginTop: 20,
          borderRadius: 20,
        }}>
        <View>
          <Image
            style={styles.profilePic}
            source={{
              uri: 'https://media.gettyimages.com/photos/portrait-of-confident-pizza-delivery-man-against-gray-background-picture-id552151097?s=612x612',
            }}
          />
          <AntDesign
            style={{
              position: 'absolute',

              backgroundColor: '#FE7A4D',
              padding: 5,
              borderRadius: 100,
              borderStyle: 'solid',
              borderColor: 'white',
              borderWidth: 0.5,
              left: 200,
              top: 90,
              elevation: 5,
            }}
            name="camera"
            size={20}
            color="white"
          />
        </View>



        <View style={{marginTop:30}}>


        <TextInput placeholder='  Enter Your Full Name'   style={styles.basicInput}   />
        <View style={{marginVertical:10}}></View>
        <TextInput placeholder='  Enter Your Number'   style={styles.basicInput}   />
        <View style={{marginVertical:10}}></View>
        <TextInput placeholder='  Enter Your Email Address'   style={styles.basicInput}   />
        <View style={{marginVertical:10}}></View>
        <TextInput placeholder='  Enter Your Address'   style={styles.basicInput}   />
            <TouchableOpacity>
        <Text style={styles.button2}>Save</Text>
            </TouchableOpacity>





        </View>


























      </View>
    </View>
  );
};

export default Profile;
