import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import PressBack from '../components/PressBack';
import styles from '../styles/globalStyles';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import axios from 'axios';
import {
  AuthKey,
  AuthPassword,
  BACKEND_URL,
  SIMPLE_URL,
} from '../helper/baseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const getData = async () => {
      const val = await AsyncStorage.getItem('ActiveUserId');

      try {
        axios
          .post(
            BACKEND_URL + 'getdeluser',
            {
              id: val,
            },
            {
              headers: {
                authkey: AuthKey,
                secretkey: AuthPassword,
              },
            },
          )
          .then(acc => {
            setData(acc.data);
          })
          .catch(err => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

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
            source={require("../assets/img/delivery_boy_pic.jpg")}
          />
          {/* <AntDesign
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
          /> */}
        </View>

        <View style={{marginTop: 30}}>
          <TextInput
            editable={false}
            value={data.name}
            placeholder="  Enter Your Full Name"
            style={styles.basicInput}
          />
          <View style={{marginVertical: 10}}></View>
          <TextInput
            editable={false}
            value={data.contact}
            placeholder="  Enter Your Number"
            style={styles.basicInput}
          />
          <View style={{marginVertical: 10}}></View>
          <TextInput
            editable={false}
            value={data.email}
            placeholder="  Enter Your Email Address"
            style={styles.basicInput}
          />
          <View style={{marginVertical: 10}}></View>
          <TextInput
            editable={false}
            value={data.address}
            placeholder="  Enter Your Address"
            style={styles.basicInput}
          />
          <TouchableOpacity>
            {/* <Text style={styles.button2}>Save</Text> */}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;
