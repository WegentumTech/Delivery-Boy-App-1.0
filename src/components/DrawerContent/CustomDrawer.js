import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import styles from '../../styles/globalStyles';

const CustomDrawer = props => {
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
          <Image
            style={styles.profilePic}
            source={{
              uri: 'https://media.gettyimages.com/photos/portrait-of-confident-pizza-delivery-man-against-gray-background-picture-id552151097?s=612x612',
            }}
          />
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Kumar Nitesh
          </Text>
          <Text style={{textAlign: 'center', color: 'black'}}>
            niteshoffice786@gmail.com
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
