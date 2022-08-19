import {
  View,
  Text,
  ImageBackground,
  Image,
  Switch,
  Modal,
  Alert,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '../styles/globalStyles';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Feather from 'react-native-vector-icons/dist/Feather';
import {useRoute} from '@react-navigation/native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

import {
  AuthKey,
  AuthPassword,
  BACKEND_URL,
  SIMPLE_URL,
} from '../helper/baseUrl';

const SingleOrderMapArea = () => {
  const [countdown, setCountdown] = useState(5);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [markAsDelivered, setMarkAsDelivered] = useState(false);
  const [showLocationStatus, setShowLocationStatus] = useState(false);
  const [oldStatus, setOldStatus] = useState('');
  const [showIt, setShowIt] = useState(true);
  const [initialStatus, setInitialStatus] = useState(false);
  const [secondState, setSecondState] = useState(false)
  const route = useRoute();
  const navigation = useNavigation();


  useEffect(() => {

    setSecondState(true)
   
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log(route.params.id);
    try {
      axios
        .post(
          BACKEND_URL + 'orderdetail',
          {
            orderid: route.params.id,
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

          if (acc.data.order_status <= 4) {
            setInitialStatus(false);
          }

          setOldStatus(acc.data.order_status);

          if (acc.data.order_status == 8) {
            setModalVisible2(false);
            setShowLocationStatus(true);
          }
          if (acc.data.order_status == 9) {
            setShowLocationStatus(true);
            setMarkAsDelivered(true);
          }
          setShowIt(false);
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const handleNo = () => {
    setModalVisible(false);
    setIsEnabled(false);
  };
  const handleYes = () => {
    console.log(`old status is ` + oldStatus);
    console.log(`Order id is ` + route.params.id);

    try {
      axios
        .post(
          BACKEND_URL + 'updateorder',
          {
            old_status: oldStatus,
            orderid: route.params.id,
            new_status: '9',
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
          setModalVisible(false);
          setIsEnabled(true);
          setMarkAsDelivered(true);
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const changingState = () => {
    setCountdown(5);
    setModalVisible(true);

    var timeleft = 3;

    var downloadTimer = setInterval(function () {
      if (timeleft <= 0) {
        console.log('now it will be close');
        clearInterval(downloadTimer);
      }

      setCountdown(1 + timeleft);
      timeleft -= 1;
    }, 1000);
  };

  const handleYes2 = () => {
    console.log(`old status is ` + route.params.status);
    console.log(`Order id is ` + route.params.id);

    try {
      axios
        .post(
          BACKEND_URL + 'updateorder',
          {
            old_status: route.params.status,
            orderid: route.params.id,
            new_status: '8',
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
          setModalVisible2(false);
          setShowLocationStatus(true);
          fetchData();
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };





  const handleYesReceived = () =>{



    
  }

  return (
    <ImageBackground
      source={require('../assets/img/gmap.png')}
      resizeMode="cover"
      style={styles.image}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View
          style={{
            backgroundColor: 'white',
            marginTop: 180,
            padding: 20,
            marginHorizontal: 15,
            borderRadius: 15,
            elevation: 100,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Do you agree!{' '}
            <Text style={{fontWeight: 'bold'}}>
              {'\n'}This{'\n'} Order is delivered ?
            </Text>
          </Text>

          <View
            style={{flexDirection: 'row', marginHorizontal: 30, marginTop: 30}}>
            <Text
              onPress={() => handleNo()}
              style={{
                color: 'white',
                textAlign: 'right',
                flex: 1,
                backgroundColor: 'red',
                margin: 10,
                textAlign: 'center',
                borderRadius: 10,
                padding: 10,
              }}>
              No
            </Text>
            {countdown === 1 ? (
              <Text
                onPress={() => handleYes()}
                style={{
                  color: 'white',
                  flex: 1,
                  backgroundColor: 'green',
                  margin: 10,
                  textAlign: 'center',
                  borderRadius: 10,
                  padding: 10,
                }}>
                Yes
              </Text>
            ) : (
              <>
                <Text
                  style={{
                    color: 'white',
                    flex: 1,
                    backgroundColor: 'gray',
                    margin: 10,
                    textAlign: 'center',
                    borderRadius: 10,
                    padding: 10,
                  }}>
                  {countdown}
                </Text>
              </>
            )}
          </View>
        </View>
      </Modal>

      <Modal animationType="slide" transparent={true} visible={modalVisible2}>
        <View
          style={{
            backgroundColor: 'white',
            marginTop: 180,
            padding: 20,
            marginHorizontal: 15,
            borderRadius: 15,
            elevation: 100,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Are You At This Location ?
          </Text>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 10,
              color: 'black',
              fontWeight: 'bold',
            }}>
            {route.params.address}
          </Text>

          <View
            style={{flexDirection: 'row', marginHorizontal: 30, marginTop: 10}}>
            <Text
              onPress={() => setModalVisible2(false)}
              style={{
                color: 'white',
                textAlign: 'right',
                flex: 1,
                backgroundColor: 'red',
                margin: 10,
                textAlign: 'center',
                borderRadius: 10,
                padding: 10,
              }}>
              No
            </Text>

            <Text
              onPress={() => handleYes2()}
              style={{
                color: 'white',
                flex: 1,
                backgroundColor: 'green',
                margin: 10,
                textAlign: 'center',
                borderRadius: 10,
                padding: 10,
              }}>
              Yes
            </Text>
          </View>
        </View>
      </Modal>

      <Modal animationType="slide" transparent={true} visible={initialStatus}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 15,
            elevation: 100,
            height: '100%',
            width:"100%"
          }}>
          <View style={{marginTop: 100}}>
            <Image
              style={{width: 200, height: 200, alignSelf: 'center'}}
              source={require('../assets/img/cooking.png')}
            />

            <Text style={{alignSelf: 'center', color: 'black', fontSize: 25}}>
              This Order Is Under Cooking
            </Text>
            <Text style={{textAlign: 'center', marginTop: 10}}>
              please come again after few times
            </Text>
            <View style={{marginTop:30}}>
              <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Text style={styles.button2}>Go Back</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>








      <Modal animationType="slide" transparent={true} visible={secondState}>


      <View
          style={{
            backgroundColor: 'white',
            marginTop: 180,
            padding: 20,
            marginHorizontal: 15,
            borderRadius: 15,
            elevation: 100,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Have You Received The Order ?
          </Text>
        

          <View
            style={{flexDirection: 'row', marginHorizontal: 30, marginTop: 10}}>
            <Text
              onPress={() =>navigation.goBack()}
              style={{
                color: 'white',
                textAlign: 'right',
                flex: 1,
                backgroundColor: 'red',
                margin: 10,
                textAlign: 'center',
                borderRadius: 10,
                padding: 10,
              }}>
              No
            </Text>

            <Text
              onPress={() => handleYesReceived()}
              style={{
                color: 'white',
                flex: 1,
                backgroundColor: 'green',
                margin: 10,
                textAlign: 'center',
                borderRadius: 10,
                padding: 10,
              }}>
              Yes
            </Text>
          </View>
        </View>
       




      </Modal>
















      <View style={{flex: 1}}></View>

      <ScrollView
        style={{
          backgroundColor: 'white',
          padding: 10,
          marginHorizontal: 15,
          flex: 1,
          marginBottom: 15,
          borderRadius: 25,
        }}>
        <Image
          style={styles.detailedmealImage}
          source={{
            uri: 'https://thumbs.dreamstime.com/b/collection-take-away-foil-boxes-healthy-food-set-containers-meals-top-view-free-copy-space-164637874.jpg',
          }}
        />

        <Text
          style={{
            color: '#565656',
            fontSize: 20,
            marginLeft: 15,
            marginTop: 15,
            fontWeight: 'bold',
          }}>
          {route.params.billingName}
        </Text>
        <View style={{marginLeft: 15, marginRight: 15}}>
          <Text style={{color: '#565656', marginTop: 5}}>
            <Entypo
              style={{position: 'absolute', marginLeft: 15, marginTop: 15}}
              name="location-pin"
              size={15}
              color="#FFBE79"
            />{' '}
            {route.params.address}
          </Text>
          <Text style={{color: '#565656', marginTop: 5}}>
            <AntDesign
              style={{position: 'absolute', marginLeft: 15, marginTop: 15}}
              name="clockcircle"
              size={15}
              color="#FFBE79"
            />{' '}
            {route.params.date}
          </Text>
          <Text style={{color: '#565656', marginTop: 5}}>
            <Ionicons
              style={{position: 'absolute', marginLeft: 15, marginTop: 15}}
              name="call"
              size={15}
              color="#FFBE79"
            />{' '}
            {route.params.contactNumber}
          </Text>

          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#565656', marginTop: 5, flex: 1}}>
              <Feather
                style={{position: 'absolute', marginLeft: 15, marginTop: 15}}
                name="package"
                size={15}
                color="#FFBE79"
              />{' '}
              {route.params.stausMethod}
            </Text>
            <>
              {showIt ? (
                <></>
              ) : (
                <>
                  {!showLocationStatus ? (
                    <View>
                      <TouchableOpacity onPress={() => setModalVisible2(true)}>
                        <Text
                          style={{
                            backgroundColor: '#FFF2EE',
                            padding: 5,
                            color: 'black',
                            borderRadius: 5,
                          }}>
                          At Location ?
                        </Text>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <View style={{flex: 1}}>
                      {markAsDelivered ? (
                        <View
                          style={{
                            backgroundColor: 'green',
                            padding: 5,
                            borderRadius: 10,
                          }}>
                          <Text
                            style={{
                              color: 'white',
                              fontWeight: 'bold',
                              textAlign: 'center',
                            }}>
                            Delivered
                          </Text>
                        </View>
                      ) : (
                        <View
                          style={{
                            flexDirection: 'row',
                            alignSelf: 'flex-end',
                            backgroundColor: '#FFF2EE',
                            padding: 5,
                            borderRadius: 10,
                          }}>
                          <Text style={{color: 'black', marginTop: 5}}>
                            Delivered
                          </Text>
                          <Switch
                            trackColor={{false: '#767577', true: '#81b0ff'}}
                            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            onChange={() => changingState()}
                          />
                        </View>
                      )}
                    </View>
                  )}
                </>
              )}
            </>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default SingleOrderMapArea;
