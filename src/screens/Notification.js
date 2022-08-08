import {View, Text} from 'react-native';
import React from 'react';
import PressBack from '../components/PressBack';
import styles from '../styles/globalStyles';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

const Notification = () => {
  return (
    <View style={styles.ScreenBack}>
      <PressBack title="Notification" />

      <View style={{alignSelf: 'center', marginTop: 100}}>
        <FontAwesome
          style={{backgroundColor: '#FF8626', padding: 50, borderRadius: 500}}
          name="bell"
          size={80}
          color="black"
        />
      </View>
      <View style={{marginTop: 30}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold',
          }}>
          You Don’t Have Any Notification
        </Text>
        <Text style={{textAlign: 'center', color: 'black'}}>
          please come back after few time
        </Text>
      </View>
    </View>
  );
};

export default Notification;
