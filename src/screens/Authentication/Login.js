import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isloading, setIsloading] = useState(false);

  const handleCheckLogin = () => {
    setIsloading(true);
    console.log(username.username)
    console.log(password.password)


    try {
      axios
        .post(
          BACKEND_URL + 'login',
          {
            username: username.username,
            password: password.password,
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
          if (acc.data.login === false) {
            setMessage('This Account Does Not Exist');
            setIsloading(false);
          } else {
            setIsloading(false);
            AsyncStorage.setItem("ActiveUserId",String(acc.data.loginid))
            AsyncStorage.setItem("ActiveUserType",acc.data.logintype)
            navigation.replace('Home');
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
              width: 250,
              height: 250,
              marginTop: 30,
              alignSelf: 'center',
            }}
            source={require('../../assets/img/delivery.png')}
          />
        </View>

        <View style={{marginLeft: 20, marginTop: 20}}>
          <Text style={styles.AuthenticationheadingColor}>
            Hi, Welcome Back!
          </Text>
          <Text style={styles.AuthenticationParaColor}>
            Login in to your account
          </Text>
        </View>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 20,
            color: 'red',
            fontWeight: 'bold',
          }}>
          {message}
        </Text>

        <View style={{marginTop: 15, marginHorizontal: 25}}>
          <TextInput
            onChangeText={text => {
              setUsername({username: text});
            }}
            placeholder="Enter your email or number"
            placeholderTextColor="#FF8626"
            style={styles.InputBox}
          />
          <View style={{marginVertical: 10}}></View>
          <TextInput
            onChangeText={text => {
              setPassword({password: text});
            }}
            placeholder="*************"
            placeholderTextColor="#FF8626"
            secureTextEntry={true}
            style={styles.InputBox}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={{textAlign: 'right', marginTop: 15, color: '#FF8626'}}>
              Forgot Password
            </Text>
          </TouchableOpacity>
        </View>
        {isloading ? (
          <View style={{marginTop: 30, marginHorizontal: 30}}>
           
              <Text style={styles.enterButton}>
                <ActivityIndicator color="white" size="small" />
              </Text>
          
          </View>
        ) : (
          <View style={{marginTop: 30, marginHorizontal: 30}}>
            <TouchableOpacity onPress={handleCheckLogin}>
              <Text style={styles.enterButton}>Log In</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 30}}>
        <Text style={{textAlign: 'center', color: '#2B2E35'}}>
          Having Any Problem ?{' '}
          <Text
            onPress={() => console.log('Contact Us Clicked')}
            style={{color: '#FF8626'}}>
            Contact Us
          </Text>
        </Text>
      </View> */}
    </View>
  );
};

export default Login;
