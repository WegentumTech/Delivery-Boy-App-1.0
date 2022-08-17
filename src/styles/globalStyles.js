import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  ScreenBack: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
  },
  AuthenticationBackColor: {
    backgroundColor: '#FFF0E3',
    height: 250,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },

  AuthenticationheadingColor: {
    color: '#36363C',
    fontSize: 20,
    fontWeight: 'bold',
  },
  AuthenticationParaColor:{
    color:"#AEAEAE",
    marginTop:5
  },
  InputBox:{
    borderColor:"#FF8626",
    borderWidth:0.8,
    borderStyle:"solid",
    width:"100%",
    borderRadius:30,
    backgroundColor:"white",
    elevation:2,
    color:"#FF8626",
    padding:10
  },
  enterButton:{
    textAlign:"center",
    backgroundColor:"#FF8626",
    padding:15,
    color:"white",
    borderRadius:30


  },
  profilePic:{
    width:120,
    height:120,
    marginTop:10,
    borderRadius:500,
    alignSelf:"center",
    borderStyle:"solid",
    borderColor:"white",
    borderWidth:3,
    elevation:10,
    backgroundColor:"white"
  },
  basicInput:{
    borderColor:"#D2D2D2",
    borderWidth:1,
    borderStyle:"solid",
    marginHorizontal:30,
    borderRadius:10,
    color:"#9c9c9c"

  },
  button2:{
    backgroundColor:"#FF8626",
    textAlign:'center',
    marginHorizontal:90,
    marginTop:20,
    padding:7,
    color:"white",
    borderRadius:10,
    fontSize:20

  },
  image:{
    flex: 1,
    justifyContent: "center"
  },
  detailedmealImage:{
    height:150,
    width:"100%",
    borderRadius:25
  }
});

export default styles;
