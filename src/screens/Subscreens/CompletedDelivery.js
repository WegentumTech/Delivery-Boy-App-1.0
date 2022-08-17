import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import PressBack from '../../components/PressBack';
import axios from 'axios';
import {
  AuthKey,
  AuthPassword,
  BACKEND_URL,
  SIMPLE_URL,
} from '../../helper/baseUrl';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import TodayCompleteOrder from '../../components/Subscreens/TodayCompleteOrder';

const CompletedDelivery = () => {
  const [data, setData] = useState('');
  const [datas, setDatas] = useState('');
  const navigation = useNavigation();
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    getData();
    todayDelivery()
  }, []);

  const getData = () => {
    try {
      axios
        .post(
          BACKEND_URL + 'completedelivery',
          {
            delivery_boy_id: 'SWADEB1',
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


  const todayDelivery = () =>{

    try {
      axios
        .post(
          BACKEND_URL + 'todays_complete_order',
          {
            delivery_boy_id: 'SWADEB1',
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

  return (
    <ScrollView style={{backgroundColor:"white"}}>
      {showAll ? (
        <>
          <PressBack title="Today Completed Delivery" />

          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 8}}></View>
            <Text
              onPress={() => setShowAll(false)}
              style={{
                textAlign: 'center',
                marginRight: 10,
                backgroundColor: 'pink',
                flex: 1,
                marginTop: 10,
                padding: 5,
                borderRadius: 12,
              }}>
              All
            </Text>
          </View>

          {datas ? (
            datas.map(hit => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('SingleOrderDetailed', {
                      billingName: hit.name,
                      address: hit.address,
                      date: hit.order_time,
                      method: hit.order_time,
                      status: hit.order_status,
                      contactNumber: hit.contact,
                      stausMethod: hit.payment_method,
                    })
                  }
                  key={hit.orderid}
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
                        <Ionicons
                          name="location-sharp"
                          size={15}
                          color="#FFBE79"
                        />

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
                          style={{
                            fontSize: 10,
                            color: '#565656',
                            marginTop: 3,
                          }}>
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
                          style={{
                            fontSize: 10,
                            color: '#565656',
                            marginTop: 5,
                          }}>
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
        </>
      ) : (
        <>
          <PressBack title="Completed Delivery" />
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 8}}></View>
            <Text
              onPress={() => setShowAll(true)}
              style={{
                textAlign: 'center',
                marginRight: 10,
                backgroundColor: '#FFF2EE',
                flex: 1,
                marginTop: 10,
                padding: 5,
                borderRadius: 12,
              }}>
              Today
            </Text>
          </View>
          {data ? (
            data.map(hit => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('SingleOrderDetailed', {
                      billingName: hit.name,
                      address: hit.address,
                      date: hit.order_time,
                      method: hit.order_time,
                      status: hit.order_status,
                      contactNumber: hit.contact,
                      stausMethod: hit.payment_method,
                    })
                  }
                  key={hit.orderid}
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
                        <Ionicons
                          name="location-sharp"
                          size={15}
                          color="#FFBE79"
                        />

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
                          style={{
                            fontSize: 10,
                            color: '#565656',
                            marginTop: 3,
                          }}>
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
                          style={{
                            fontSize: 10,
                            color: '#565656',
                            marginTop: 5,
                          }}>
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
        </>
      )}
    </ScrollView>
  );
};

export default CompletedDelivery;
