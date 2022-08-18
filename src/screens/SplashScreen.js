import {View, Text, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '../styles/globalStyles';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const GetData = async () => {
      const isReached = await AsyncStorage.getItem('Reached');
      console.log(isReached)

      if (isReached == "Yes") {
        const timer = setTimeout(() => {
          navigation.replace('Home');
        }, 3000);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          navigation.replace('Login');
        }, 3000);
        return () => clearTimeout(timer);
      }
    };
    GetData();
  }, []);

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
        <Image
          style={{height: 70, width: 270}}
          source={{
            uri: 'https://swaadottam.com/wp-content/uploads/2021/08/Swaadottam-1.png',
          }}
        />
      </View>
    </View>
  );
};

export default SplashScreen;
