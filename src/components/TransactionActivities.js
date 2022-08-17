import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

const TransactionActivities = ({data}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [newAmmount, setNewAmmount] = useState('');
  const [oldAmount, setOldAmount] = useState('');
  const [decription, setDecription] = useState('');
  const [date, setDate] = useState('');

  const handleShowModal = (title, date, newAmount, oldAmount, desc) => {
    setTitle(title);
    setDate(date);
    setNewAmmount(newAmount);
    setOldAmount(oldAmount);
    setDecription(desc);
    setModalVisible(true);
  };

  return (
    <View style={{marginBottom: 20}}>
      <View style={{marginHorizontal: 15}}>
        <Text
          style={{
            marginTop: 15,
            fontSize: 15,
            color: '#000000',
            fontWeight: 'bold',
          }}>
          Recent Activities
        </Text>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 15,
              marginTop: 100,
              height: 300,
              marginHorizontal: 15,
              elevation: 15,
              borderRadius: 15,
            }}>
            <View
              style={{position: 'absolute', alignSelf: 'flex-end', top: -10}}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <AntDesign name="closecircle" size={25} color="red" />
              </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row', marginTop: 15}}>
              <View style={{flex: 0.5}}>
                <Image
                  style={{width: 50, height: 50, borderRadius: 1000}}
                  source={require('../assets/img/applogo.png')}
                />
              </View>
              <View style={{flex: 1, marginTop: 6}}>
                <Text style={{color: '#000000', fontSize: 15}}>{title}</Text>
                <Text style={{color: '#000000'}}>{date}</Text>
              </View>
              <View style={{flex: 1, marginTop: 6}}>
                <View style={{alignSelf: 'flex-end'}}>
                  <Text style={{color: '#185601', fontWeight: 'bold'}}>
                    ₹{newAmmount}
                  </Text>
                  <Text style={{textAlign: 'right', color: '#808080'}}>
                    ₹{oldAmount}
                  </Text>
                </View>
              </View>
            </View>

            <View style={{marginTop: 20}}>
              <Text style={{fontWeight: 'bold', color: '#000000'}}>
                Description :
              </Text>
              <Text style={{color: '#000000', marginTop: 5}}>{decription}</Text>
            </View>
          </View>
        </Modal>

        <View>
          {data.transction.map(hit => {
            return (
              <TouchableOpacity
                key={hit.id}
                onPress={() =>
                  handleShowModal(
                    hit.title,
                    hit.created_at.slice(-0, -11),
                    hit.amount,
                    hit.oldamount,
                    hit.descriptin,
                  )
                }
                // onPress={() => setModalVisible(true)}
                style={{flexDirection: 'row', marginTop: 15}}>
                <View style={{flex: 0.5}}>
                  <Image
                    style={{width: 50, height: 50, borderRadius: 1000}}
                    source={require('../assets/img/applogo.png')}
                  />
                </View>
                <View style={{flex: 1, marginTop: 6}}>
                  <Text style={{color: '#000000', fontSize: 15}}>
                    {hit.title}
                  </Text>
                  <Text style={{color: '#000000'}}>
                    {hit.created_at.slice(-0, -8)}
                  </Text>
                </View>
                <View style={{flex: 1, marginTop: 6}}>
                  <View style={{alignSelf: 'flex-end'}}>
                    <Text style={{color: '#FF8A00'}}>₹{hit.amount}</Text>
                    <Text style={{textAlign: 'right', color: '#808080'}}>
                      ₹{hit.oldamount}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default TransactionActivities;
