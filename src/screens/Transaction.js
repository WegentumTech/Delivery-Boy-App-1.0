import {View, Text, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '../styles/globalStyles';
import PressBack from '../components/PressBack';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import TransactionActivities from '../components/TransactionActivities';
import axios from 'axios';
import {
  AuthKey,
  AuthPassword,
  BACKEND_URL,
  SIMPLE_URL,
} from '../helper/baseUrl';
const Transaction = () => {
  const [datas, setDatas] = useState('');

  useEffect(() => {
    try {
      axios
        .post(
          BACKEND_URL + 'transctions',
          {
            boy_id: 'SWADEB2',
          },
          {
            headers: {
              authkey: AuthKey,
              secretkey: AuthPassword,
            },
          },
        )
        .then(acc => {
          console.log(acc.data);
          setDatas(acc.data);
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <ScrollView style={styles.ScreenBack}>
      <PressBack title="Transaction" />
      {datas ? (
        <>
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
                  ₹ {datas.main.wallet}
                </Text>
                <Text style={{textAlign: 'right', color: '#B69902'}}>
                  -₹ {datas.main.CODAmount}
                </Text>
              </View>
            </View>
          </View>

          <TransactionActivities data={datas} />
        </>
      ) : (
        <></>
      )}
    </ScrollView>
  );
};

export default Transaction;
