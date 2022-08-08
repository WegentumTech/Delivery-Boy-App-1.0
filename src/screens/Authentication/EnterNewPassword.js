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
const EnterNewPassword = () => {
  const navigation = useNavigation();
  const [isloading, setIsloading] = useState(false);
  const [username, setUsername] = useState('');
  const [username2, setUsername2] = useState('');
  const [message, setMessage] = useState('');

  const handleCheckLogin = () => {
    console.log(username.username);
    console.log(username2.username2);

    if (username.username !== username2.username2) {
      if (username.username !== undefined||"") {
        return setMessage('Please Enter Credentials Carefully');
        
      }
      return setMessage('Both Passwords Should Match');
    }

    setIsloading(true);
    console.log(username.username);
    try {
      axios
        .post(
          BACKEND_URL + 'updatepassword',
          {
            password: username.username,
            username: 'SWADEB1',
          },
          {
            headers: {
              authkey: AuthKey,
              secretkey: AuthPassword,
            },
          },
        )
        .then(acc => {
          if (acc.data.status === true) {
            navigation.navigate('Login');
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
            source={require('../../assets/img/resetpassword.png')}
          />
        </View>

        <View style={{marginLeft: 20, marginTop: 20}}>
          <Text style={styles.AuthenticationheadingColor}>
            Choose New Password
          </Text>
          <Text style={styles.AuthenticationParaColor}>
            You Can Now Choose A Strong Password
          </Text>
        </View>
        <Text
          style={{
            textAlign: 'center',
            color: 'red',
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          {message}
        </Text>

        <View style={{marginTop: 20, marginHorizontal: 25}}>
          <TextInput
            onChangeText={text => {
              setUsername({username: text});
            }}
            secureTextEntry={true}
            placeholderTextColor="#FF8626"
            style={styles.InputBox}
          />
          <View style={{marginVertical: 10}}></View>
          <TextInput
            onChangeText={text => {
              setUsername2({username2: text});
            }}
            placeholderTextColor="#FF8626"
            secureTextEntry={true}
            style={styles.InputBox}
          />
        </View>

        <View style={{marginTop: 30, marginHorizontal: 30}}>
          <TouchableOpacity onPress={handleCheckLogin}>
            <Text style={styles.enterButton}>Chnage Password</Text>
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

export default EnterNewPassword;
