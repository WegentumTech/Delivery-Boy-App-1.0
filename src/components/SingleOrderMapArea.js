import {
  View,
  Text,
  ImageBackground,
  Image,
  Switch,
  Modal,
  Alert,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import React, {useState} from 'react';
import styles from '../styles/globalStyles';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Feather from 'react-native-vector-icons/dist/Feather';

const SingleOrderMapArea = () => {
    const [countdown, setCountdown] = useState(5);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [modalVisible, setModalVisible] = useState(false);
  const [markAsDelivered, setMarkAsDelivered] = useState(false);
  
  

  const handleNo = () => {
    setModalVisible(false);
    setIsEnabled(false);
  };
  const handleYes = () => {
    setModalVisible(false);
    setIsEnabled(true);
    setMarkAsDelivered(true);
  };
  const changingState = () => {
    setCountdown(5)
    setModalVisible(true);

    var timeleft = 3;

    var downloadTimer = setInterval(function () {
      if (timeleft <= 0) {
        console.log("now it will be close")
        clearInterval(downloadTimer);
      }

      setCountdown(1 + timeleft);
      timeleft -= 1;
    }, 1000);
  };

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
            Do you agree! <Text style={{fontWeight:"bold"}}>{"\n"}This{"\n"} Order is delivered ?</Text>
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
            {
                countdown ===1 ?
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


                :
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

            }
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
          Kumar Nitesh
        </Text>
        <View style={{marginLeft: 15, marginRight: 15}}>
          <Text style={{color: '#565656', marginTop: 5}}>
            <Entypo
              style={{position: 'absolute', marginLeft: 15, marginTop: 15}}
              name="location-pin"
              size={15}
              color="#FFBE79"
            />{' '}
            Rathyatra, Mahmoorganj Rd Varanasi
          </Text>
          <Text style={{color: '#565656', marginTop: 5}}>
            <AntDesign
              style={{position: 'absolute', marginLeft: 15, marginTop: 15}}
              name="clockcircle"
              size={15}
              color="#FFBE79"
            />{' '}
            21/07/2022
          </Text>
          <Text style={{color: '#565656', marginTop: 5}}>
            <Ionicons
              style={{position: 'absolute', marginLeft: 15, marginTop: 15}}
              name="call"
              size={15}
              color="#FFBE79"
            />{' '}
            +91 6393344720
          </Text>

          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#565656', marginTop: 5, flex: 1}}>
              <Feather
                style={{position: 'absolute', marginLeft: 15, marginTop: 15}}
                name="package"
                size={15}
                color="#FFBE79"
              />{' '}
              Cash On Delivery
            </Text>
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
                  <Text style={{color: 'black', marginTop: 5}}>Delivered</Text>
                  <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    onChange={()=>changingState()}
                  />
                </View>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default SingleOrderMapArea;