import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import Feather from 'react-native-vector-icons/dist/Feather';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
import styles from '../../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';

const header = () => {
  const navigation = useNavigation();

  return (
    <View >
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
        <TouchableOpacity onPress={()=>navigation.openDrawer()}>


          <Text
            style={{
              backgroundColor: '#FFF2EE',
              position: 'absolute',
              padding: 10,
              borderRadius: 10,
            }}>
            <Feather name="menu" size={20} color="black" />
          </Text>
        </TouchableOpacity>

        </View>
        <View style={{flex: 1}}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 17,
              marginTop: 8,
            }}>
            Dashboard
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
  );
};

export default header;
