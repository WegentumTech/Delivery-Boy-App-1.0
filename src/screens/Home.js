import {View, Text, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../components/Home/Header';
import MidSection from '../components/Home/MidSection';
import NewOrders from '../components/Home/NewOrders';
import styles from '../styles/globalStyles';
import MyOrders from '../components/Home/MyOrders';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  const [roled, setRoled] = useState('');
  useEffect(() => {
    getUserRole();
  }, []);

  const getUserRole = async () => {
    const role = await AsyncStorage.getItem('ActiveUserType');
    setRoled(role);
  };

  return (
    <ScrollView style={styles.ScreenBack}>
      <Header />
      <MidSection />
      <MyOrders />
      {roled ? roled == 'INNER' ? <></> : <NewOrders /> : <></>}
    </ScrollView>
  );
};

export default Home;
