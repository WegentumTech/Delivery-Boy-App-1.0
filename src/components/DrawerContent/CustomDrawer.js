import {View, Text, Image,TouchableOpacity} from 'react-native';
import React,{useState,useEffect} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import styles from '../../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import {AuthKey,AuthPassword,BACKEND_URL,SIMPLE_URL} from "../../helper/baseUrl";

const CustomDrawer = props => {
  const navigation = useNavigation();
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
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: '#FF8626',
          height: 160,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}>
        <View style={{marginTop: 80}}>
          <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>

          <Image
            style={styles.profilePic}
            source={{
              uri: 'https://media.gettyimages.com/photos/portrait-of-confident-pizza-delivery-man-against-gray-background-picture-id552151097?s=612x612',
            }}
            />
            </TouchableOpacity>
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
           {data.name}
          </Text>
          <Text style={{textAlign: 'center', color: 'black'}}>
            {data.email}
          </Text>
        </View>
      </View>

      <View style={{marginVertical: 65}}></View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
