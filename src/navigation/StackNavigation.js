import {createStackNavigator,CardStyleInterpolators} from '@react-navigation/stack';
import React from 'react';
import Login from '../screens/Authentication/Login';
import ForgotPassword from '../screens/Authentication/ForgotPassword';
import VerifyOtp from '../screens/Authentication/VerifyOtp';
import EnterNewPassword from '../screens/Authentication/EnterNewPassword';
import ExtendedDashboard from '../screens/ExtendedDashboard';
import Notification from '../screens/Notification';
import OrderHistory from '../screens/OrderHistory';
import Profile from '../screens/Profile';
import DrawerNavigation from './DrawerNavigation';
import SingleOrderDetailed from '../screens/Dynamic/SingleOrderDetailed';
const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator  initialRouteName='Login' screenOptions={{headerShown:false,cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="VerifyOtp" component={VerifyOtp} />
      <Stack.Screen name="EnterNewPassword" component={EnterNewPassword} />
      <Stack.Screen name="Home" component={DrawerNavigation} />
      <Stack.Screen name="ExtendedDashboard" component={ExtendedDashboard} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="SingleOrderDetailed" component={SingleOrderDetailed} />
    </Stack.Navigator>
  );
}
export default StackNavigation;
