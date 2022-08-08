import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../styles/globalStyles';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {useNavigation} from '@react-navigation/native';

const PressBack = props => {
  const navigation = useNavigation();

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          padding: 22,
          backgroundColor: 'white',
          elevation: 5,
          height: 80,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}>
        <TouchableOpacity style={{width:35}} onPress={() => navigation.goBack()}>
          <Text
            style={{
              backgroundColor: '#FFF2EE',
              position: 'absolute',
              padding: 10,
              borderRadius: 10,
            }}>
            <AntDesign
              style={{position: 'absolute', marginLeft: 15, marginTop: 15}}
              name="arrowleft"
              size={18}
              color="black"
            />
          </Text>
        </TouchableOpacity>

        <View style={{flex: 1}}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              color: 'black',
              fontSize: 20,
              marginTop: 7.5,
            }}>
            {props.title}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PressBack;
