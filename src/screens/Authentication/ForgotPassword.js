import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from '../../styles/globalStyles';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {
  AuthKey,
  AuthPassword,
  BACKEND_URL,
  SIMPLE_URL,
} from '../../helper/baseUrl';
const ForgotPassword = () => {
  const navigation = useNavigation();
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
  const [isloading, setIsloading] = useState(false);


  const handleCheckLogin = () => {
    setIsloading(true);
    console.log(username.username);
    try {
      axios
        .post(
          BACKEND_URL + 'forgetpassword',
          {
            username: username.username,
          },
          {
            headers: {
              authkey: AuthKey,
              secretkey: AuthPassword,
            },
          },
        )
        .then(acc => {
          if (acc.data.verification === false) {
            setMessage('This Account Does Not Exist');
          } else {
            navigation.navigate('VerifyOtp', {otp: acc.data.otp});
            console.log(acc.data.otp);
          }
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.ScreenBack}>
      <View style={{flex: 1}}>
        <View style={styles.AuthenticationBackColor}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign
              style={{position: 'absolute', marginLeft: 15, marginTop: 15}}
              name="arrowleft"
              size={30}
              color="#FE7A4D"
            />
          </TouchableOpacity>
          <Image
            style={{
              width: 235,
              height: 235,
              marginTop: 30,
              alignSelf: 'center',
            }}
            source={require('../../assets/img/forgot_password.png')}
          />
        </View>

        <View style={{marginLeft: 20, marginTop: 20}}>
          <Text style={styles.AuthenticationheadingColor}>
            Forgot Your Password ?
          </Text>
          <Text style={styles.AuthenticationParaColor}>
            Enter Your Registered Email Or Number
          </Text>
        </View>

        <Text style={{textAlign: 'center',color:"red",fontWeight:"bold",marginTop:10,marginBottom:10}}>{message}</Text>

        <View style={{marginTop: 10, marginHorizontal: 25}}>
          <TextInput
            onChangeText={text => {
              setUsername({username: text});
            }}
            placeholderTextColor="#FF8626"
            style={styles.InputBox}
          />
        </View>

        <View style={{marginTop: 40, marginHorizontal: 30}}>
          <TouchableOpacity onPress={handleCheckLogin}>
            {/* <TouchableOpacity onPress={()=>navigation.navigate("VerifyOtp")}> */}
            <Text style={styles.enterButton}>Send OTP</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 30}}>
        <Text style={{textAlign: 'center', color: '#2B2E35'}}>
          Having Any Problem ?{' '}
          <Text
            onPress={() => console.log('Contact Us Clicked')}
            style={{color: '#FF8626'}}>
            Contact Us
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default ForgotPassword;
