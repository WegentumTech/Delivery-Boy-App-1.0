import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import Home from '../screens/Home';
import OrderHistory from '../screens/OrderHistory';
import Profile from '../screens/Profile';
import CustomDrawer from '../components/DrawerContent/CustomDrawer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Help from '../screens/Help';
import Logout from '../screens/Logout';
import QRScanner from '../screens/QRScanner';
import Transaction from '../screens/Transaction';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  console.log('reached here');
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: 'white',
        drawerActiveTintColor: 'black',
        drawerAllowFontScaling: true,
        drawerLabelStyle: {
          marginLeft: -23,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
          fontWeight: 'bold',
          color: 'black',
        },
      }}>
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <FontAwesome
              style={{
                backgroundColor: '#FF8626',
                padding: 5,
                borderRadius: 100,
              }}
              name="home"
              size={24}
              color="white"
            />
          ),
        }}
        name="HomeScreen"
        component={Home}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <MaterialIcons
              style={{
                backgroundColor: '#FF8626',
                padding: 5,
                borderRadius: 100,
              }}
              name="qr-code-scanner"
              size={24}
              color="white"
            />
          ),
        }}
        name="QRScanner"
        component={QRScanner}
      />
      <Drawer.Screen
        options={{
          swipeEnabled: false,
          gestureEnabled: false,
          drawerIcon: ({color}) => (
            <Ionicons
              style={{
                backgroundColor: '#FF8626',
                padding: 5,
                borderRadius: 100,
              }}
              name="person"
              size={24}
              color="white"
            />
          ),
        }}
        name="Profile"
        component={Profile}
      />
      <Drawer.Screen
        options={{
          swipeEnabled: false,
          gestureEnabled: false,
          drawerIcon: ({color}) => (
            <Feather
              style={{
                backgroundColor: '#FF8626',
                padding: 5,
                borderRadius: 100,
              }}
              name="package"
              size={24}
              color="white"
            />
          ),
        }}
        name="OrderHistory"
        component={OrderHistory}
      />
      {/* <Drawer.Screen
        options={{
          swipeEnabled: false,
          gestureEnabled: false,
          drawerIcon: ({color}) => (
            <MaterialIcons
              style={{
                backgroundColor: '#FF8626',
                padding: 5,
                borderRadius: 100,
              }}
              name="support-agent"
              size={24}
              color="white"
            />
          ),
        }}
        name="Help"
        component={Help}
      /> */}
      <Drawer.Screen
        options={{
          swipeEnabled: false,
          gestureEnabled: false,
          drawerIcon: ({color}) => (
            <MaterialIcons
              style={{
                backgroundColor: '#FF8626',
                padding: 5,
                borderRadius: 100,
              }}
              name="logout"
              size={24}
              color="white"
            />
          ),
        }}
        name="Logout"
        component={Logout}
      />
      <Drawer.Screen
        options={{
          swipeEnabled: false,
          gestureEnabled: false,
          drawerIcon: ({color}) => (
            <MaterialIcons
              style={{
                backgroundColor: '#FF8626',
                padding: 5,
                borderRadius: 100,
              }}
              name="logout"
              size={24}
              color="white"
            />
          ),
        }}
        name="Transaction"
        component={Transaction}
      />
    </Drawer.Navigator>
  );
}
export default DrawerNavigation;
