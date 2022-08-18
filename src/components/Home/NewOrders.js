import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
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
import MyOrders from './MyOrders';

const NewOrders = () => {
  const navigation = useNavigation();
  const [datas, setDatas] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [datas2, setDatas2] = useState('');
  const [roled, setRoled] = useState('');


  useEffect(() => {


    
    
    
    
    const getData = async () => {
      const role = await AsyncStorage.getItem('ActiveUserType');
      setRoled(role);
      try {
        axios
          .post(
            BACKEND_URL + 'neworder',
            {},
            {
              headers: {
                authkey: AuthKey,
                secretkey: AuthPassword,
              },
            },
          )
          .then(acc => {
            setDatas(acc.data);
            getMyData();
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

  const getMyData = async () => {
    const val = await AsyncStorage.getItem('ActiveUserId');

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
          setDatas2(acc.data);
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const CheckingToAssign = async id => {
    setIsLoading(true);

    const userId = await AsyncStorage.getItem('ActiveUserId');

    try {
      axios
        .post(
          BACKEND_URL + 'asignmyself',
          {
            boy_id: userId,
            orderid: id,
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

          if (acc.data.status) {
            console.log('this is assigned To You');
            getMyData();
          } else {
            console.log('this is already assigned to someone');
            getMyData();
          }
          setDatas(acc.data.neworder);
          setIsLoading(false);
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>


{roled ? roled == 'INNER' ? <></> : <MyOrders data={datas2} /> : <></>}




      
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              marginTop: 10,
              fontSize: 16,
              flex: 1,
            }}>
            New Orders
          </Text>
          <Text
            onPress={() => navigation.navigate('CompleteNewOrders')}
            style={{
              color: 'black',
              fontWeight: 'bold',
              marginTop: 10,
              fontSize: 16,
              textAlign: 'right',
              flex: 1,
            }}>
            {'All >'}
          </Text>
        </View>

        {datas ? (
          datas.slice(0, 5).map(hit => {
            return (
              <View
                key={hit.orderid}
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
                  {isLoading ? (
                    <Text
                      style={{
                        backgroundColor: '#FFF2EE',
                        color: 'black',
                        padding: 6,
                        borderRadius: 5,
                        marginTop: 10,
                        marginRight: 80,
                        textAlign: 'center',
                      }}>
                      <ActivityIndicator size="small" color="black" />
                    </Text>
                  ) : (
                    <TouchableOpacity
                      onPress={() => CheckingToAssign(hit.orderid)}>
                      <Text
                        style={{
                          backgroundColor: '#FFF2EE',
                          color: 'black',
                          padding: 6,
                          borderRadius: 5,
                          marginTop: 10,
                          marginRight: 80,
                          textAlign: 'center',
                        }}>
                        Assign Myself
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            );
          })
        ) : (
          <></>
        )}
      </View>
    </>
  );
};

export default NewOrders;
