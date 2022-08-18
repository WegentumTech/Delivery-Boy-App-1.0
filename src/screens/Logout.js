import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';

const Logout = () => {
  useEffect(() => {
    const removeItem = async () => {
      await AsyncStorage.removeItem('Reached');
      await AsyncStorage.removeItem('ActiveUserId');
      await AsyncStorage.removeItem('ActiveUserType');
      RNRestart.Restart();
    };
    removeItem()
  }, []);

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.7}}></View>
      <Text
        style={{
          textAlign: 'center',
          flex: 1,
          fontSize: 30,
          color: 'black',
          fontWeight: 'bold',
        }}>
        Logging Out...
      </Text>
    </View>
  );
};

export default Logout;
