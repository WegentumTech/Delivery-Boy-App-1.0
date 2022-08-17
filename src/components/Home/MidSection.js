import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {useNavigation} from '@react-navigation/native';
import axios from "axios";
import {AuthKey,AuthPassword,BACKEND_URL,SIMPLE_URL} from "../../helper/baseUrl"

const MidSection = () => {
  const navigation = useNavigation();
  const [data, setData] = useState('');
  const [datas, setDatas] = useState('');

  useEffect(() => {
    todayDelivery();
    todayPending();
  }, []);

  const todayDelivery = () => {
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
          setData(acc.data);
          console.log(acc.data);

        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const todayPending = () => {
    try {
      axios
        .post(
          BACKEND_URL + 'todays_pending_order',
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
  };

  return (
    <View style={{marginTop: 20}}>
      <View
        style={{
          marginHorizontal: 20,
          backgroundColor: 'white',
          padding: 10,
          elevation: 5,
          height: 365,
          borderRadius: 15,
        }}>
        <View style={{flexDirection: 'row', marginTop: 40}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('CompletedDelivery')}
            activeOpacity={1}
            style={{
              flex: 1,
              backgroundColor: '#EFFBF9',
              padding: 20,
              marginHorizontal: 10,
              borderRadius: 10,
              elevation: 2,
            }}>
            <View>
              <FontAwesome5
                style={{alignSelf: 'center'}}
                name="gift"
                size={30}
                color="#56E0C0"
              />
              <Text
                style={{
                  textAlign: 'center',
                  color: 'black',
                  marginTop: 5,
                  fontSize: 13,
                }}>
                Complete Delivery
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                {
                  data ?
                  <Text>{data.length}</Text>

                  :

                  <Text>...</Text>
                }
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('PendingDelivery')}
            activeOpacity={1}
            style={{
              flex: 1,
              backgroundColor: '#FDF9EE',
              padding: 20,
              marginHorizontal: 10,
              borderRadius: 10,
              elevation: 2,
            }}>
            <View>
              <MaterialCommunityIcons
                style={{alignSelf: 'center'}}
                name="truck-delivery"
                size={30}
                color="#E4C765"
              />
              <Text
                style={{
                  textAlign: 'center',
                  color: 'black',
                  marginTop: 5,
                  fontSize: 13,
                }}>
                Pending Delivery
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                 {
                  datas ?
                  <Text>{datas.length}</Text>

                  :

                  <Text>...</Text>
                }
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', marginTop: 30}}>
          <TouchableOpacity
           onPress={() => navigation.navigate('TotalReviews')}
            activeOpacity={1}
            style={{
              flex: 1,
              backgroundColor: '#FCEBF1',
              padding: 20,
              marginHorizontal: 10,
              borderRadius: 10,
              elevation: 2,
            }}>
            <View>
              <MaterialCommunityIcons
                style={{alignSelf: 'center'}}
                name="truck-delivery"
                size={30}
                color="#F2719E"
              />
              <Text
                style={{
                  textAlign: 'center',
                  color: 'black',
                  marginTop: 5,
                  fontSize: 13,
                }}>
               My Earnings
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                13
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            // onPress={() => navigation.navigate('TotalReviews')}
            activeOpacity={1}
            style={{
              flex: 1,
              backgroundColor: '#F0F5FB',
              padding: 20,
              marginHorizontal: 10,
              borderRadius: 10,
              elevation: 2,
            }}>
            <View>
              <MaterialIcons
                style={{alignSelf: 'center'}}
                name="rate-review"
                size={30}
                color="#8DBDE5"
              />
              <Text
                style={{
                  textAlign: 'center',
                  color: 'black',
                  marginTop: 5,
                  fontSize: 13,
                }}>
                Total Review’s
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                51
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 10}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ExtendedDashboard')}>
            <Text
              style={{
                textAlign: 'right',
                marginTop: 10,
                marginRight: 10,
                color: 'black',
                fontSize: 15,
              }}>
              More
              <AntDesign
                style={{textDecorationLine: 'none'}}
                name="down"
                size={15}
                color="black"
              />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MidSection;
