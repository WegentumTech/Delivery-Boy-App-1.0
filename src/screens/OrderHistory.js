import { View, Text ,TouchableOpacity,Image,ScrollView} from 'react-native'
import React from 'react'
import PressBack from '../components/PressBack'
import styles from '../styles/globalStyles'
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';


const OrderHistory = () => {
  return (
    <ScrollView style={styles.ScreenBack}> 
     <PressBack title="Order History" />


     <View style={{marginHorizontal: 20}}>
      <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          marginTop: 10,
          fontSize: 16,
        }}>
      All Delivery
      </Text>
      <TouchableOpacity activeOpacity={1}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          elevation: 2,
          padding: 5,
          marginTop: 10,
          borderRadius: 5,
          marginBottom:10
        }}>
        <View style={{flex: 1}}>
          <Image
            style={{width: 130, height: 120, borderRadius: 10}}
            source={{
              uri: 'https://assets.cntraveller.in/photos/60ba2767e1b212c19a8181e1/master/pass/Meals-by-Chefkraft.jpg',
            }}
          />
        </View>
        <View style={{flex: 1.5}}>
          <Text
            style={{
              color: '#565656',
              fontSize: 15,
              fontWeight: 'bold',
              marginLeft: 10,
              marginBottom: 5,
            }}>
            Handi Paneer
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Ionicons name="location-sharp" size={15} color="#FFBE79" />

            <Text style={{fontSize: 10, color: '#565656'}}>
              Satsang Nagar Colony Aktha Varanasi
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <AntDesign
              style={{marginLeft: 2, marginTop: 5}}
              name="clockcircle"
              size={10}
              color="#FFBE79"
            />

            <Text style={{fontSize: 10, color: '#565656', marginTop: 3}}>
              {' '}
              21/07/2022
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Ionicons
              style={{marginLeft: 2, marginTop: 5}}
              name="person"
              size={12}
              color="#FFBE79"
            />

            <Text style={{fontSize: 10, color: '#565656', marginTop: 5}}>
              {' '}
              Kumar Nitesh
            </Text>
          </View>
          <Text
            style={{
              backgroundColor: '#FFF2EE',
              color: 'black',
              padding: 6,
              borderRadius: 5,
              marginTop: 10,
              marginRight: 120,
              textAlign: 'center',
            }}>
            Detailed
          </Text>
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={1}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          elevation: 2,
          padding: 5,
          marginTop: 10,
          borderRadius: 5,
          marginBottom:10
        }}>
        <View style={{flex: 1}}>
          <Image
            style={{width: 130, height: 120, borderRadius: 10}}
            source={{
              uri: 'https://assets.cntraveller.in/photos/60ba2767e1b212c19a8181e1/master/pass/Meals-by-Chefkraft.jpg',
            }}
          />
        </View>
        <View style={{flex: 1.5}}>
          <Text
            style={{
              color: '#565656',
              fontSize: 15,
              fontWeight: 'bold',
              marginLeft: 10,
              marginBottom: 5,
            }}>
            Handi Paneer
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Ionicons name="location-sharp" size={15} color="#FFBE79" />

            <Text style={{fontSize: 10, color: '#565656'}}>
              Satsang Nagar Colony Aktha Varanasi
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <AntDesign
              style={{marginLeft: 2, marginTop: 5}}
              name="clockcircle"
              size={10}
              color="#FFBE79"
            />

            <Text style={{fontSize: 10, color: '#565656', marginTop: 3}}>
              {' '}
              21/07/2022
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Ionicons
              style={{marginLeft: 2, marginTop: 5}}
              name="person"
              size={12}
              color="#FFBE79"
            />

            <Text style={{fontSize: 10, color: '#565656', marginTop: 5}}>
              {' '}
              Kumar Nitesh
            </Text>
          </View>
          <Text
            style={{
              backgroundColor: '#FFF2EE',
              color: 'black',
              padding: 6,
              borderRadius: 5,
              marginTop: 10,
              marginRight: 120,
              textAlign: 'center',
            }}>
            Detailed
          </Text>
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={1}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          elevation: 2,
          padding: 5,
          marginTop: 10,
          borderRadius: 5,
          marginBottom:10
        }}>
        <View style={{flex: 1}}>
          <Image
            style={{width: 130, height: 120, borderRadius: 10}}
            source={{
              uri: 'https://assets.cntraveller.in/photos/60ba2767e1b212c19a8181e1/master/pass/Meals-by-Chefkraft.jpg',
            }}
          />
        </View>
        <View style={{flex: 1.5}}>
          <Text
            style={{
              color: '#565656',
              fontSize: 15,
              fontWeight: 'bold',
              marginLeft: 10,
              marginBottom: 5,
            }}>
            Handi Paneer
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Ionicons name="location-sharp" size={15} color="#FFBE79" />

            <Text style={{fontSize: 10, color: '#565656'}}>
              Satsang Nagar Colony Aktha Varanasi
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <AntDesign
              style={{marginLeft: 2, marginTop: 5}}
              name="clockcircle"
              size={10}
              color="#FFBE79"
            />

            <Text style={{fontSize: 10, color: '#565656', marginTop: 3}}>
              {' '}
              21/07/2022
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Ionicons
              style={{marginLeft: 2, marginTop: 5}}
              name="person"
              size={12}
              color="#FFBE79"
            />

            <Text style={{fontSize: 10, color: '#565656', marginTop: 5}}>
              {' '}
              Kumar Nitesh
            </Text>
          </View>
          <Text
            style={{
              backgroundColor: '#FFF2EE',
              color: 'black',
              padding: 6,
              borderRadius: 5,
              marginTop: 10,
              marginRight: 120,
              textAlign: 'center',
            }}>
            Detailed
          </Text>
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={1}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          elevation: 2,
          padding: 5,
          marginTop: 10,
          borderRadius: 5,
          marginBottom:10
        }}>
        <View style={{flex: 1}}>
          <Image
            style={{width: 130, height: 120, borderRadius: 10}}
            source={{
              uri: 'https://assets.cntraveller.in/photos/60ba2767e1b212c19a8181e1/master/pass/Meals-by-Chefkraft.jpg',
            }}
          />
        </View>
        <View style={{flex: 1.5}}>
          <Text
            style={{
              color: '#565656',
              fontSize: 15,
              fontWeight: 'bold',
              marginLeft: 10,
              marginBottom: 5,
            }}>
            Handi Paneer
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Ionicons name="location-sharp" size={15} color="#FFBE79" />

            <Text style={{fontSize: 10, color: '#565656'}}>
              Satsang Nagar Colony Aktha Varanasi
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <AntDesign
              style={{marginLeft: 2, marginTop: 5}}
              name="clockcircle"
              size={10}
              color="#FFBE79"
            />

            <Text style={{fontSize: 10, color: '#565656', marginTop: 3}}>
              {' '}
              21/07/2022
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Ionicons
              style={{marginLeft: 2, marginTop: 5}}
              name="person"
              size={12}
              color="#FFBE79"
            />

            <Text style={{fontSize: 10, color: '#565656', marginTop: 5}}>
              {' '}
              Kumar Nitesh
            </Text>
          </View>
          <Text
            style={{
              backgroundColor: '#FFF2EE',
              color: 'black',
              padding: 6,
              borderRadius: 5,
              marginTop: 10,
              marginRight: 120,
              textAlign: 'center',
            }}>
            Detailed
          </Text>
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={1}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          elevation: 2,
          padding: 5,
          marginTop: 10,
          borderRadius: 5,
          marginBottom:10
        }}>
        <View style={{flex: 1}}>
          <Image
            style={{width: 130, height: 120, borderRadius: 10}}
            source={{
              uri: 'https://assets.cntraveller.in/photos/60ba2767e1b212c19a8181e1/master/pass/Meals-by-Chefkraft.jpg',
            }}
          />
        </View>
        <View style={{flex: 1.5}}>
          <Text
            style={{
              color: '#565656',
              fontSize: 15,
              fontWeight: 'bold',
              marginLeft: 10,
              marginBottom: 5,
            }}>
            Handi Paneer
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Ionicons name="location-sharp" size={15} color="#FFBE79" />

            <Text style={{fontSize: 10, color: '#565656'}}>
              Satsang Nagar Colony Aktha Varanasi
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <AntDesign
              style={{marginLeft: 2, marginTop: 5}}
              name="clockcircle"
              size={10}
              color="#FFBE79"
            />

            <Text style={{fontSize: 10, color: '#565656', marginTop: 3}}>
              {' '}
              21/07/2022
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Ionicons
              style={{marginLeft: 2, marginTop: 5}}
              name="person"
              size={12}
              color="#FFBE79"
            />

            <Text style={{fontSize: 10, color: '#565656', marginTop: 5}}>
              {' '}
              Kumar Nitesh
            </Text>
          </View>
          <Text
            style={{
              backgroundColor: '#FFF2EE',
              color: 'black',
              padding: 6,
              borderRadius: 5,
              marginTop: 10,
              marginRight: 120,
              textAlign: 'center',
            }}>
            Detailed
          </Text>
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={1}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          elevation: 2,
          padding: 5,
          marginTop: 10,
          borderRadius: 5,
          marginBottom:10
        }}>
        <View style={{flex: 1}}>
          <Image
            style={{width: 130, height: 120, borderRadius: 10}}
            source={{
              uri: 'https://assets.cntraveller.in/photos/60ba2767e1b212c19a8181e1/master/pass/Meals-by-Chefkraft.jpg',
            }}
          />
        </View>
        <View style={{flex: 1.5}}>
          <Text
            style={{
              color: '#565656',
              fontSize: 15,
              fontWeight: 'bold',
              marginLeft: 10,
              marginBottom: 5,
            }}>
            Handi Paneer
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Ionicons name="location-sharp" size={15} color="#FFBE79" />

            <Text style={{fontSize: 10, color: '#565656'}}>
              Satsang Nagar Colony Aktha Varanasi
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <AntDesign
              style={{marginLeft: 2, marginTop: 5}}
              name="clockcircle"
              size={10}
              color="#FFBE79"
            />

            <Text style={{fontSize: 10, color: '#565656', marginTop: 3}}>
              {' '}
              21/07/2022
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Ionicons
              style={{marginLeft: 2, marginTop: 5}}
              name="person"
              size={12}
              color="#FFBE79"
            />

            <Text style={{fontSize: 10, color: '#565656', marginTop: 5}}>
              {' '}
              Kumar Nitesh
            </Text>
          </View>
          <Text
            style={{
              backgroundColor: '#FFF2EE',
              color: 'black',
              padding: 6,
              borderRadius: 5,
              marginTop: 10,
              marginRight: 120,
              textAlign: 'center',
            }}>
            Detailed
          </Text>
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={1}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          elevation: 2,
          padding: 5,
          marginTop: 10,
          borderRadius: 5,
          marginBottom:10
        }}>
        <View style={{flex: 1}}>
          <Image
            style={{width: 130, height: 120, borderRadius: 10}}
            source={{
              uri: 'https://assets.cntraveller.in/photos/60ba2767e1b212c19a8181e1/master/pass/Meals-by-Chefkraft.jpg',
            }}
          />
        </View>
        <View style={{flex: 1.5}}>
          <Text
            style={{
              color: '#565656',
              fontSize: 15,
              fontWeight: 'bold',
              marginLeft: 10,
              marginBottom: 5,
            }}>
            Handi Paneer
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Ionicons name="location-sharp" size={15} color="#FFBE79" />

            <Text style={{fontSize: 10, color: '#565656'}}>
              Satsang Nagar Colony Aktha Varanasi
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <AntDesign
              style={{marginLeft: 2, marginTop: 5}}
              name="clockcircle"
              size={10}
              color="#FFBE79"
            />

            <Text style={{fontSize: 10, color: '#565656', marginTop: 3}}>
              {' '}
              21/07/2022
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Ionicons
              style={{marginLeft: 2, marginTop: 5}}
              name="person"
              size={12}
              color="#FFBE79"
            />

            <Text style={{fontSize: 10, color: '#565656', marginTop: 5}}>
              {' '}
              Kumar Nitesh
            </Text>
          </View>
          <Text
            style={{
              backgroundColor: '#FFF2EE',
              color: 'black',
              padding: 6,
              borderRadius: 5,
              marginTop: 10,
              marginRight: 120,
              textAlign: 'center',
            }}>
            Detailed
          </Text>
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={1}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          elevation: 2,
          padding: 5,
          marginTop: 10,
          borderRadius: 5,
          marginBottom:10
        }}>
        <View style={{flex: 1}}>
          <Image
            style={{width: 130, height: 120, borderRadius: 10}}
            source={{
              uri: 'https://assets.cntraveller.in/photos/60ba2767e1b212c19a8181e1/master/pass/Meals-by-Chefkraft.jpg',
            }}
          />
        </View>
        <View style={{flex: 1.5}}>
          <Text
            style={{
              color: '#565656',
              fontSize: 15,
              fontWeight: 'bold',
              marginLeft: 10,
              marginBottom: 5,
            }}>
            Handi Paneer
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Ionicons name="location-sharp" size={15} color="#FFBE79" />

            <Text style={{fontSize: 10, color: '#565656'}}>
              Satsang Nagar Colony Aktha Varanasi
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <AntDesign
              style={{marginLeft: 2, marginTop: 5}}
              name="clockcircle"
              size={10}
              color="#FFBE79"
            />

            <Text style={{fontSize: 10, color: '#565656', marginTop: 3}}>
              {' '}
              21/07/2022
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Ionicons
              style={{marginLeft: 2, marginTop: 5}}
              name="person"
              size={12}
              color="#FFBE79"
            />

            <Text style={{fontSize: 10, color: '#565656', marginTop: 5}}>
              {' '}
              Kumar Nitesh
            </Text>
          </View>
          <Text
            style={{
              backgroundColor: '#FFF2EE',
              color: 'black',
              padding: 6,
              borderRadius: 5,
              marginTop: 10,
              marginRight: 120,
              textAlign: 'center',
            }}>
            Detailed
          </Text>
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={1}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          elevation: 2,
          padding: 5,
          marginTop: 10,
          borderRadius: 5,
          marginBottom:10
        }}>
        <View style={{flex: 1}}>
          <Image
            style={{width: 130, height: 120, borderRadius: 10}}
            source={{
              uri: 'https://assets.cntraveller.in/photos/60ba2767e1b212c19a8181e1/master/pass/Meals-by-Chefkraft.jpg',
            }}
          />
        </View>
        <View style={{flex: 1.5}}>
          <Text
            style={{
              color: '#565656',
              fontSize: 15,
              fontWeight: 'bold',
              marginLeft: 10,
              marginBottom: 5,
            }}>
            Handi Paneer
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Ionicons name="location-sharp" size={15} color="#FFBE79" />

            <Text style={{fontSize: 10, color: '#565656'}}>
              Satsang Nagar Colony Aktha Varanasi
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <AntDesign
              style={{marginLeft: 2, marginTop: 5}}
              name="clockcircle"
              size={10}
              color="#FFBE79"
            />

            <Text style={{fontSize: 10, color: '#565656', marginTop: 3}}>
              {' '}
              21/07/2022
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Ionicons
              style={{marginLeft: 2, marginTop: 5}}
              name="person"
              size={12}
              color="#FFBE79"
            />

            <Text style={{fontSize: 10, color: '#565656', marginTop: 5}}>
              {' '}
              Kumar Nitesh
            </Text>
          </View>
          <Text
            style={{
              backgroundColor: '#FFF2EE',
              color: 'black',
              padding: 6,
              borderRadius: 5,
              marginTop: 10,
              marginRight: 120,
              textAlign: 'center',
            }}>
            Detailed
          </Text>
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={1}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          elevation: 2,
          padding: 5,
          marginTop: 10,
          borderRadius: 5,
          marginBottom:10
        }}>
        <View style={{flex: 1}}>
          <Image
            style={{width: 130, height: 120, borderRadius: 10}}
            source={{
              uri: 'https://assets.cntraveller.in/photos/60ba2767e1b212c19a8181e1/master/pass/Meals-by-Chefkraft.jpg',
            }}
          />
        </View>
        <View style={{flex: 1.5}}>
          <Text
            style={{
              color: '#565656',
              fontSize: 15,
              fontWeight: 'bold',
              marginLeft: 10,
              marginBottom: 5,
            }}>
            Handi Paneer
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Ionicons name="location-sharp" size={15} color="#FFBE79" />

            <Text style={{fontSize: 10, color: '#565656'}}>
              Satsang Nagar Colony Aktha Varanasi
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <AntDesign
              style={{marginLeft: 2, marginTop: 5}}
              name="clockcircle"
              size={10}
              color="#FFBE79"
            />

            <Text style={{fontSize: 10, color: '#565656', marginTop: 3}}>
              {' '}
              21/07/2022
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Ionicons
              style={{marginLeft: 2, marginTop: 5}}
              name="person"
              size={12}
              color="#FFBE79"
            />

            <Text style={{fontSize: 10, color: '#565656', marginTop: 5}}>
              {' '}
              Kumar Nitesh
            </Text>
          </View>
          <Text
            style={{
              backgroundColor: '#FFF2EE',
              color: 'black',
              padding: 6,
              borderRadius: 5,
              marginTop: 10,
              marginRight: 120,
              textAlign: 'center',
            }}>
            Detailed
          </Text>
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={1}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          elevation: 2,
          padding: 5,
          marginTop: 10,
          borderRadius: 5,
          marginBottom:10
        }}>
        <View style={{flex: 1}}>
          <Image
            style={{width: 130, height: 120, borderRadius: 10}}
            source={{
              uri: 'https://assets.cntraveller.in/photos/60ba2767e1b212c19a8181e1/master/pass/Meals-by-Chefkraft.jpg',
            }}
          />
        </View>
        <View style={{flex: 1.5}}>
          <Text
            style={{
              color: '#565656',
              fontSize: 15,
              fontWeight: 'bold',
              marginLeft: 10,
              marginBottom: 5,
            }}>
            Handi Paneer
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Ionicons name="location-sharp" size={15} color="#FFBE79" />

            <Text style={{fontSize: 10, color: '#565656'}}>
              Satsang Nagar Colony Aktha Varanasi
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <AntDesign
              style={{marginLeft: 2, marginTop: 5}}
              name="clockcircle"
              size={10}
              color="#FFBE79"
            />

            <Text style={{fontSize: 10, color: '#565656', marginTop: 3}}>
              {' '}
              21/07/2022
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Ionicons
              style={{marginLeft: 2, marginTop: 5}}
              name="person"
              size={12}
              color="#FFBE79"
            />

            <Text style={{fontSize: 10, color: '#565656', marginTop: 5}}>
              {' '}
              Kumar Nitesh
            </Text>
          </View>
          <Text
            style={{
              backgroundColor: '#FFF2EE',
              color: 'black',
              padding: 6,
              borderRadius: 5,
              marginTop: 10,
              marginRight: 120,
              textAlign: 'center',
            }}>
            Detailed
          </Text>
        </View>
      </View>
      </TouchableOpacity>
    </View>
    </ScrollView>
  )
}

export default OrderHistory