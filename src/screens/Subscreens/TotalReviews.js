import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import PressBack from '../../components/PressBack';
import axios from "axios";
import {AuthKey,AuthPassword,BACKEND_URL,SIMPLE_URL} from "../../helper/baseUrl";
const TotalReviews = () => {
  const [datas, setDatas] = useState("")


  useEffect(() => {
    try {
      axios
        .post(
          BACKEND_URL + 'myearning',
          {
            delivery_boy_id: 'SWADEB1',
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
          setDatas(acc.data);
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <View>
      <PressBack title="My Earnings" />
    </View>
  );
};

export default TotalReviews;
