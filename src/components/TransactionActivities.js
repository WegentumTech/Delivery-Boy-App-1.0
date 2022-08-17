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

const TransactionActivities = () => {
  const [modalVisible, setModalVisible] = useState(false);
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
            <View style={{position: 'absolute', alignSelf: 'flex-end',top:-10}}>
                <TouchableOpacity onPress={()=>setModalVisible(false)}>
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
                <Text style={{color: '#000000', fontSize: 15}}>
                  COD Setteled
                </Text>
                <Text style={{color: '#000000'}}>12/05/2022</Text>
              </View>
              <View style={{flex: 1, marginTop: 6}}>
                <View style={{alignSelf: 'flex-end'}}>
                  <Text style={{color: '#185601', fontWeight: 'bold'}}>
                    + ₹300.00
                  </Text>
                  <Text style={{textAlign: 'right', color: '#808080'}}>
                    ₹900.00
                  </Text>
                </View>
              </View>
            </View>

            <View style={{marginTop: 20}}>
              <Text style={{fontWeight: 'bold', color: '#000000'}}>
                Description :
              </Text>
              <Text style={{color: '#000000', marginTop: 5}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries.
              </Text>
            </View>
          </View>
        </Modal>

        <View>
          <TouchableOpacity onPress={()=>setModalVisible(true)} style={{flexDirection: 'row', marginTop: 15}}>
            <View style={{flex: 0.5}}>
              <Image
                style={{width: 50, height: 50, borderRadius: 1000}}
                source={require('../assets/img/applogo.png')}
              />
            </View>
            <View style={{flex: 1, marginTop: 6}}>
              <Text style={{color: '#000000', fontSize: 15}}>COD Setteled</Text>
              <Text style={{color: '#000000'}}>12/05/2022</Text>
            </View>
            <View style={{flex: 1, marginTop: 6}}>
              <View style={{alignSelf: 'flex-end'}}>
                <Text style={{color: '#FF8A00'}}>- ₹300.00</Text>
                <Text style={{textAlign: 'right', color: '#808080'}}>
                  ₹900.00
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setModalVisible(true)} style={{flexDirection: 'row', marginTop: 15}}>
            <View style={{flex: 0.5}}>
              <Image
                style={{width: 50, height: 50, borderRadius: 1000}}
                source={require('../assets/img/applogo.png')}
              />
            </View>
            <View style={{flex: 1, marginTop: 6}}>
              <Text style={{color: '#000000', fontSize: 15}}>COD Setteled</Text>
              <Text style={{color: '#000000'}}>12/05/2022</Text>
            </View>
            <View style={{flex: 1, marginTop: 6}}>
              <View style={{alignSelf: 'flex-end'}}>
                <Text style={{color: '#FF8A00'}}>- ₹300.00</Text>
                <Text style={{textAlign: 'right', color: '#808080'}}>
                  ₹900.00
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setModalVisible(true)} style={{flexDirection: 'row', marginTop: 15}}>
            <View style={{flex: 0.5}}>
              <Image
                style={{width: 50, height: 50, borderRadius: 1000}}
                source={require('../assets/img/applogo.png')}
              />
            </View>
            <View style={{flex: 1, marginTop: 6}}>
              <Text style={{color: '#000000', fontSize: 15}}>COD Setteled</Text>
              <Text style={{color: '#000000'}}>12/05/2022</Text>
            </View>
            <View style={{flex: 1, marginTop: 6}}>
              <View style={{alignSelf: 'flex-end'}}>
                <Text style={{color: '#FF8A00'}}>- ₹300.00</Text>
                <Text style={{textAlign: 'right', color: '#808080'}}>
                  ₹900.00
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setModalVisible(true)} style={{flexDirection: 'row', marginTop: 15}}>
            <View style={{flex: 0.5}}>
              <Image
                style={{width: 50, height: 50, borderRadius: 1000}}
                source={require('../assets/img/applogo.png')}
              />
            </View>
            <View style={{flex: 1, marginTop: 6}}>
              <Text style={{color: '#000000', fontSize: 15}}>COD Setteled</Text>
              <Text style={{color: '#000000'}}>12/05/2022</Text>
            </View>
            <View style={{flex: 1, marginTop: 6}}>
              <View style={{alignSelf: 'flex-end'}}>
                <Text style={{color: '#FF8A00'}}>- ₹300.00</Text>
                <Text style={{textAlign: 'right', color: '#808080'}}>
                  ₹900.00
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setModalVisible(true)} style={{flexDirection: 'row', marginTop: 15}}>
            <View style={{flex: 0.5}}>
              <Image
                style={{width: 50, height: 50, borderRadius: 1000}}
                source={require('../assets/img/applogo.png')}
              />
            </View>
            <View style={{flex: 1, marginTop: 6}}>
              <Text style={{color: '#000000', fontSize: 15}}>COD Setteled</Text>
              <Text style={{color: '#000000'}}>12/05/2022</Text>
            </View>
            <View style={{flex: 1, marginTop: 6}}>
              <View style={{alignSelf: 'flex-end'}}>
                <Text style={{color: '#FF8A00'}}>- ₹300.00</Text>
                <Text style={{textAlign: 'right', color: '#808080'}}>
                  ₹900.00
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setModalVisible(true)} style={{flexDirection: 'row', marginTop: 15}}>
            <View style={{flex: 0.5}}>
              <Image
                style={{width: 50, height: 50, borderRadius: 1000}}
                source={require('../assets/img/applogo.png')}
              />
            </View>
            <View style={{flex: 1, marginTop: 6}}>
              <Text style={{color: '#000000', fontSize: 15}}>COD Setteled</Text>
              <Text style={{color: '#000000'}}>12/05/2022</Text>
            </View>
            <View style={{flex: 1, marginTop: 6}}>
              <View style={{alignSelf: 'flex-end'}}>
                <Text style={{color: '#FF8A00'}}>- ₹300.00</Text>
                <Text style={{textAlign: 'right', color: '#808080'}}>
                  ₹900.00
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setModalVisible(true)} style={{flexDirection: 'row', marginTop: 15}}>
            <View style={{flex: 0.5}}>
              <Image
                style={{width: 50, height: 50, borderRadius: 1000}}
                source={require('../assets/img/applogo.png')}
              />
            </View>
            <View style={{flex: 1, marginTop: 6}}>
              <Text style={{color: '#000000', fontSize: 15}}>COD Setteled</Text>
              <Text style={{color: '#000000'}}>12/05/2022</Text>
            </View>
            <View style={{flex: 1, marginTop: 6}}>
              <View style={{alignSelf: 'flex-end'}}>
                <Text style={{color: '#FF8A00'}}>- ₹300.00</Text>
                <Text style={{textAlign: 'right', color: '#808080'}}>
                  ₹900.00
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setModalVisible(true)} style={{flexDirection: 'row', marginTop: 15}}>
            <View style={{flex: 0.5}}>
              <Image
                style={{width: 50, height: 50, borderRadius: 1000}}
                source={require('../assets/img/applogo.png')}
              />
            </View>
            <View style={{flex: 1, marginTop: 6}}>
              <Text style={{color: '#000000', fontSize: 15}}>COD Setteled</Text>
              <Text style={{color: '#000000'}}>12/05/2022</Text>
            </View>
            <View style={{flex: 1, marginTop: 6}}>
              <View style={{alignSelf: 'flex-end'}}>
                <Text style={{color: '#FF8A00'}}>- ₹300.00</Text>
                <Text style={{textAlign: 'right', color: '#808080'}}>
                  ₹900.00
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setModalVisible(true)} style={{flexDirection: 'row', marginTop: 15}}>
            <View style={{flex: 0.5}}>
              <Image
                style={{width: 50, height: 50, borderRadius: 1000}}
                source={require('../assets/img/applogo.png')}
              />
            </View>
            <View style={{flex: 1, marginTop: 6}}>
              <Text style={{color: '#000000', fontSize: 15}}>COD Setteled</Text>
              <Text style={{color: '#000000'}}>12/05/2022</Text>
            </View>
            <View style={{flex: 1, marginTop: 6}}>
              <View style={{alignSelf: 'flex-end'}}>
                <Text style={{color: '#FF8A00'}}>- ₹300.00</Text>
                <Text style={{textAlign: 'right', color: '#808080'}}>
                  ₹900.00
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setModalVisible(true)} style={{flexDirection: 'row', marginTop: 15}}>
            <View style={{flex: 0.5}}>
              <Image
                style={{width: 50, height: 50, borderRadius: 1000}}
                source={require('../assets/img/applogo.png')}
              />
            </View>
            <View style={{flex: 1, marginTop: 6}}>
              <Text style={{color: '#000000', fontSize: 15}}>COD Setteled</Text>
              <Text style={{color: '#000000'}}>12/05/2022</Text>
            </View>
            <View style={{flex: 1, marginTop: 6}}>
              <View style={{alignSelf: 'flex-end'}}>
                <Text style={{color: '#FF8A00'}}>- ₹300.00</Text>
                <Text style={{textAlign: 'right', color: '#808080'}}>
                  ₹900.00
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setModalVisible(true)} style={{flexDirection: 'row', marginTop: 15}}>
            <View style={{flex: 0.5}}>
              <Image
                style={{width: 50, height: 50, borderRadius: 1000}}
                source={require('../assets/img/applogo.png')}
              />
            </View>
            <View style={{flex: 1, marginTop: 6}}>
              <Text style={{color: '#000000', fontSize: 15}}>COD Setteled</Text>
              <Text style={{color: '#000000'}}>12/05/2022</Text>
            </View>
            <View style={{flex: 1, marginTop: 6}}>
              <View style={{alignSelf: 'flex-end'}}>
                <Text style={{color: '#FF8A00'}}>- ₹300.00</Text>
                <Text style={{textAlign: 'right', color: '#808080'}}>
                  ₹900.00
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setModalVisible(true)} style={{flexDirection: 'row', marginTop: 15}}>
            <View style={{flex: 0.5}}>
              <Image
                style={{width: 50, height: 50, borderRadius: 1000}}
                source={require('../assets/img/applogo.png')}
              />
            </View>
            <View style={{flex: 1, marginTop: 6}}>
              <Text style={{color: '#000000', fontSize: 15}}>COD Setteled</Text>
              <Text style={{color: '#000000'}}>12/05/2022</Text>
            </View>
            <View style={{flex: 1, marginTop: 6}}>
              <View style={{alignSelf: 'flex-end'}}>
                <Text style={{color: '#FF8A00'}}>- ₹300.00</Text>
                <Text style={{textAlign: 'right', color: '#808080'}}>
                  ₹900.00
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setModalVisible(true)} style={{flexDirection: 'row', marginTop: 15}}>
            <View style={{flex: 0.5}}>
              <Image
                style={{width: 50, height: 50, borderRadius: 1000}}
                source={require('../assets/img/applogo.png')}
              />
            </View>
            <View style={{flex: 1, marginTop: 6}}>
              <Text style={{color: '#000000', fontSize: 15}}>COD Setteled</Text>
              <Text style={{color: '#000000'}}>12/05/2022</Text>
            </View>
            <View style={{flex: 1, marginTop: 6}}>
              <View style={{alignSelf: 'flex-end'}}>
                <Text style={{color: '#FF8A00'}}>- ₹300.00</Text>
                <Text style={{textAlign: 'right', color: '#808080'}}>
                  ₹900.00
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setModalVisible(true)} style={{flexDirection: 'row', marginTop: 15}}>
            <View style={{flex: 0.5}}>
              <Image
                style={{width: 50, height: 50, borderRadius: 1000}}
                source={require('../assets/img/applogo.png')}
              />
            </View>
            <View style={{flex: 1, marginTop: 6}}>
              <Text style={{color: '#000000', fontSize: 15}}>COD Setteled</Text>
              <Text style={{color: '#000000'}}>12/05/2022</Text>
            </View>
            <View style={{flex: 1, marginTop: 6}}>
              <View style={{alignSelf: 'flex-end'}}>
                <Text style={{color: '#FF8A00'}}>- ₹300.00</Text>
                <Text style={{textAlign: 'right', color: '#808080'}}>
                  ₹900.00
                </Text>
              </View>
            </View>
          </TouchableOpacity>
         
        </View>
      </View>
    </View>
  );
};

export default TransactionActivities;
