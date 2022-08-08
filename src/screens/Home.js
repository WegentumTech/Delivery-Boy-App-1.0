import { View, Text , ScrollView} from 'react-native'
import React from 'react';
import Header from "../components/Home/Header";
import MidSection from "../components/Home/MidSection";
import NewOrders from "../components/Home/NewOrders";
import styles from '../styles/globalStyles';
import MyOrders from '../components/Home/MyOrders';

const Home = () => {
  return (
    <ScrollView style={styles.ScreenBack}>
      <Header/>
      <MidSection/>
      <MyOrders/>
      <NewOrders/>
    </ScrollView>
  )
}

export default Home