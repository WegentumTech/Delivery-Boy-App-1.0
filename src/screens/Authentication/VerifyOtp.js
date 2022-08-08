import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
import styles from '../../styles/globalStyles';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';

const VerifyOtp = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState("")


  console.log(route.params.otp);


  const letsCheckIt = () =>{

    if (username.username == route.params.otp) {

      navigation.navigate('EnterNewPassword')
      
    }else{
      setMessage("Entered OTP Is Wrong")
    }





  }
















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
              width: 225,
              height: 215,
              marginTop: 30,
              alignSelf: 'center',
            }}
            source={require('../../assets/img/enter_otp.png')}
          />
        </View>

        <View style={{marginLeft: 20, marginTop: 20}}>
          <Text style={styles.AuthenticationheadingColor}>Enter Your OTP</Text>
          <Text style={styles.AuthenticationParaColor}>
            You Got An OTP On Your Mail. Enter It Here
          </Text>
        </View>

        <Text style={{textAlign:"center",color:"red",fontWeight:"bold",marginTop:10}}>{message}</Text>

        <View style={{marginTop: 20, marginHorizontal: 25}}>
          <TextInput
            onChangeText={text => {
              setUsername({username: text});
            }}
            placeholderTextColor="#FF8626"
            style={styles.InputBox}
          />
        </View>

        <View style={{marginTop: 40, marginHorizontal: 30}}>
          <TouchableOpacity
            onPress={letsCheckIt}>
            <Text style={styles.enterButton}>Enter OTP</Text>
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

export default VerifyOtp;
