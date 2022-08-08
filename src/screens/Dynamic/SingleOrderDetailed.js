import {View, Text,ImageBackground} from 'react-native';
import React from 'react';
// import MapView from 'react-native-maps';
import PressBack from "../../components/PressBack";
import styles from '../../styles/globalStyles';
import SingleOrderMapArea from '../../components/SingleOrderMapArea';
const SingleOrderDetailed = () => {
  return (
    <>
      <PressBack title="Order Detail" />
      <SingleOrderMapArea/>
      
    </>
  );
};

export default SingleOrderDetailed;
