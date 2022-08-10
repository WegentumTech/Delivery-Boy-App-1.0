import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {
  AuthKey,
  AuthPassword,
  BACKEND_URL,
  SIMPLE_URL,
} from '../../helper/baseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';


const MyOrders = () => {
  const navigation = useNavigation();
  const [datas, setDatas] = useState('');

  useEffect(() => {
    const getData = async() =>{
      const val = await AsyncStorage.getItem("ActiveUserId")


      try {
        axios
          .post(
            BACKEND_URL + 'myorder',
            {
              delivery_boy_id: val,
            },
            {
              headers: {
                authkey: AuthKey,
                secretkey: AuthPassword,
              },
            },
          )
          .then(acc => {
            setDatas(acc.data);
          })
          .catch(err => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }


    }
    getData()
  }, []);

  return (
    <View style={{marginHorizontal: 20}}>
      <View style={{flexDirection:"row"}}>

      <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          marginTop: 10,
          fontSize: 16,
          flex:1
        }}>
        My Orders
      </Text>
      <Text
      onPress={()=>navigation.navigate("CompleteMyOrders")}
        style={{
          color: 'black',
          fontWeight: 'bold',
          marginTop: 10,
          fontSize: 16,
          textAlign:"right",
          flex:1
        }}>
        {"All >"}
      </Text>
          </View>
      {datas ? (
        datas.slice(0, 5).map(hit => {
          return (
            <TouchableOpacity
              key={hit.orderid}
              onPress={() => navigation.navigate('SingleOrderDetailed',{billingName:hit.name,address:hit.address,date:hit.order_time,method:hit.order_time,status:hit.order_status,contactNumber:hit.contact,stausMethod:hit.payment_method})}
              activeOpacity={1}>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: 'white',
                  elevation: 2,
                  padding: 5,
                  marginTop: 10,
                  borderRadius: 5,
                  marginBottom: 10,
                }}>
                <View style={{flex: 1}}>
                  <Image
                    style={{width: 130, height: 120, borderRadius: 10}}
                    source={{
                      uri: 'https://assets.cntraveller.in/photos/60ba2767e1b212c19a8181e1/master/pass/Meals-by-Chefkraft.jpg',
                    }}
                  />
                </View>
                <View style={{flex: 1.5}}>
                  <Text
                    style={{
                      color: '#565656',
                      fontSize: 15,
                      fontWeight: 'bold',
                      marginLeft: 10,
                      marginBottom: 5,
                    }}>
                    {hit.name}
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Ionicons name="location-sharp" size={15} color="#FFBE79" />

                    <Text style={{fontSize: 10, color: '#565656'}}>
                      {hit.address}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <AntDesign
                      style={{marginLeft: 2, marginTop: 5}}
                      name="clockcircle"
                      size={10}
                      color="#FFBE79"
                    />

                    <Text
                      style={{fontSize: 10, color: '#565656', marginTop: 3}}>
                      {' '}
                      {hit.order_time}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Ionicons
                      style={{marginLeft: 2, marginTop: 5}}
                      name="person"
                      size={12}
                      color="#FFBE79"
                    />

                    <Text
                      style={{fontSize: 10, color: '#565656', marginTop: 5}}>
                      {' '}
                      {hit.payment_method}
                    </Text>
                  </View>
                  <Text
                    style={{
                      backgroundColor: '#FFF2EE',
                      color: 'black',
                      padding: 6,
                      borderRadius: 5,
                      marginTop: 10,
                      marginRight: 120,
                      textAlign: 'center',
                    }}>
                    Detailed
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })
      ) : (
        <></>
      )}
    </View>
  );
};

export default MyOrders;
