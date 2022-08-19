
import { View, Text ,StyleSheet} from 'react-native'
import React,{useState} from 'react'
import PressBack from "../components/PressBack"
import { RNCamera } from 'react-native-camera';

const QRScanner = () => {

  const [onSuccess, setOnSuccess] = useState("")
  const [barcodeReceived, setBarcodeReceived] = useState("")
  const [renderTitleBar, setRenderTitleBar] = useState("")
  const [renderMenu, setRenderMenu] = useState("")

  

  return (
    <View>
      <PressBack title="QR Scanner" />


      <RNCamera
          
        />


    



    </View>
  )
}

export default QRScanner


