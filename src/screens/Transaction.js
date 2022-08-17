import {View, Text,ScrollView} from 'react-native';
import React from 'react';
import styles from '../styles/globalStyles';
import PressBack from '../components/PressBack';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import TransactionActivities from '../components/TransactionActivities';

const Transaction = () => {
  return (
    <ScrollView style={styles.ScreenBack}>
      <PressBack title="Transaction" />

      <View
        style={{
          flexDirection: 'row',
          borderColor: '#D9D9D9',
          borderWidth: 1,
          marginHorizontal: 20,
          marginTop: 30,
          padding: 10,
          borderRadius: 18,
        }}>
        <Text style={{flex: 0.4, marginTop: 2}}>
          <MaterialCommunityIcons
            style={{alignSelf: 'center'}}
            name="hand-coin"
            size={30}
            color="#000000"
          />
        </Text>
        <Text style={{flex: 2, marginTop: 8, color: '#000000'}}>
          Money In Your Account
        </Text>
        <View style={{flex: 1}}>
          <View style={{alignSelf: 'flex-end'}}>
            <Text style={{color: '#4C8CFE', fontWeight: 'bold'}}>
              ₹3,256.00
            </Text>
            <Text style={{textAlign: 'right', color: '#B69902'}}>- ₹3,256</Text>
          </View>
        </View>
      </View>

      <TransactionActivities />
    </ScrollView>
  );
};

export default Transaction;
