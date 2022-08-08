import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Header from '../components/Home/Header';
import Feather from 'react-native-vector-icons/dist/Feather';
import styles from '../styles/globalStyles';
import {useNavigation} from '@react-navigation/native';

const ExtendedDashboard = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={{backgroundColor: 'white', height: '100%'}}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            padding: 30,
            backgroundColor: 'white',
            elevation: 5,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            height: 90,
          }}>
          <View style={{flex: 0.5}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text
                style={{
                  backgroundColor: '#FFF2EE',
                  position: 'absolute',
                  padding: 10,
                  borderRadius: 10,
                }}>
                <AntDesign name="arrowleft" size={20} color="black" />
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1.5}}>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 17,
                marginTop: 8,
              }}>
              Extended Dashboard
            </Text>
          </View>
          <View style={{flex: 1}}>
          <TouchableOpacity onPress={()=>navigation.navigate("Notification")}>

            <Text style={{alignSelf: 'flex-end', marginTop: 10}}>
              <Fontisto name="bell-alt" size={20} color="black" />
            </Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        style={{
          marginHorizontal: 20,
          backgroundColor: 'white',
          padding: 10,
          elevation: 5,
          borderRadius: 15,
          marginTop: 20,
          marginBottom: 20,
        }}>
        <View style={{flexDirection: 'row', marginTop: 40}}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#EFFBF9',
              padding: 20,
              marginHorizontal: 10,
              borderRadius: 10,
              elevation: 2,
            }}>
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
              style={{textAlign: 'center', color: 'black', fontWeight: 'bold'}}>
              85
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: '#FDF9EE',
              padding: 20,
              marginHorizontal: 10,
              borderRadius: 10,
              elevation: 2,
            }}>
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
              style={{textAlign: 'center', color: 'black', fontWeight: 'bold'}}>
              11
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: 30}}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#FCEBF1',
              padding: 20,
              marginHorizontal: 10,
              borderRadius: 10,
              elevation: 2,
            }}>
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
              Canceled Delivery
            </Text>
            <Text
              style={{textAlign: 'center', color: 'black', fontWeight: 'bold'}}>
              13
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: '#F0F5FB',
              padding: 20,
              marginHorizontal: 10,
              borderRadius: 10,
              elevation: 2,
            }}>
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
              style={{textAlign: 'center', color: 'black', fontWeight: 'bold'}}>
              51
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 40}}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#EFFBF9',
              padding: 20,
              marginHorizontal: 10,
              borderRadius: 10,
              elevation: 2,
            }}>
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
              style={{textAlign: 'center', color: 'black', fontWeight: 'bold'}}>
              85
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: '#FDF9EE',
              padding: 20,
              marginHorizontal: 10,
              borderRadius: 10,
              elevation: 2,
            }}>
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
              style={{textAlign: 'center', color: 'black', fontWeight: 'bold'}}>
              11
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: 30}}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#FCEBF1',
              padding: 20,
              marginHorizontal: 10,
              borderRadius: 10,
              elevation: 2,
            }}>
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
              Canceled Delivery
            </Text>
            <Text
              style={{textAlign: 'center', color: 'black', fontWeight: 'bold'}}>
              13
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: '#F0F5FB',
              padding: 20,
              marginHorizontal: 10,
              borderRadius: 10,
              elevation: 2,
            }}>
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
              style={{textAlign: 'center', color: 'black', fontWeight: 'bold'}}>
              51
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 40}}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#EFFBF9',
              padding: 20,
              marginHorizontal: 10,
              borderRadius: 10,
              elevation: 2,
            }}>
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
              style={{textAlign: 'center', color: 'black', fontWeight: 'bold'}}>
              85
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: '#FDF9EE',
              padding: 20,
              marginHorizontal: 10,
              borderRadius: 10,
              elevation: 2,
            }}>
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
              style={{textAlign: 'center', color: 'black', fontWeight: 'bold'}}>
              11
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: 30, marginBottom: 30}}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#FCEBF1',
              padding: 20,
              marginHorizontal: 10,
              borderRadius: 10,
              elevation: 2,
            }}>
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
              Canceled Delivery
            </Text>
            <Text
              style={{textAlign: 'center', color: 'black', fontWeight: 'bold'}}>
              13
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: '#F0F5FB',
              padding: 20,
              marginHorizontal: 10,
              borderRadius: 10,
              elevation: 2,
            }}>
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
              style={{textAlign: 'center', color: 'black', fontWeight: 'bold'}}>
              51
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ExtendedDashboard;
