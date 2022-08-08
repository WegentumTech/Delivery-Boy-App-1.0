import {View, Text} from 'react-native';
import React from 'react';

const Logout = () => {
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
