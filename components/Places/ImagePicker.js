import { Alert, Button, Image, View,Text,StyleSheet } from "react-native"
import {launchCameraAsync,useCameraPermissions,PermissionStatus} from 'expo-image-picker'
import { useState } from "react"
import { Colors } from "../../constants/color"
const ImagePicker=()=>{
    const [pickedImage,setPickedImage]=useState()
    const [cameraPermissionStatus,requestPermission]=useCameraPermissions()
    const verifyPermission=async()=>{
        if(cameraPermissionStatus.status===PermissionStatus.UNDETERMINED){
         const permissionResponse= await requestPermission()
         return permissionResponse.granted
        }
        if(cameraPermissionStatus.status===PermissionStatus.DENIED){
            Alert.alert('insufficient permissions! you need to grant camera permission in order to use this app')
            return false;
        }
        return true
    } 
    const takeImageHandler=async()=>{
      const hasPermission=  await verifyPermission()
      if(!hasPermission){
        return;
      }
      const image= await launchCameraAsync({
        allowsEditing: true,
        aspect:[16,9],
        quality:0.5
      })  
      setPickedImage(image.assets[0].uri)
      console.log(image)
    }
    let imagePreview=<Text style={styles.text}>No image taken yet</Text>
    if(pickedImage){
        imagePreview=<Image style={styles.image} source={{uri:pickedImage}}/>
    }
    return(
        <View>
            <View style={styles.imagePreview}> 
                {imagePreview}
            </View>
            <Button title='take image' onPress={takeImageHandler}/>
        </View>
    )
}
export default ImagePicker
const styles=StyleSheet.create({
    text:{
        color:Colors.primary500
    },
    imagePreview:{
        width:'100%',
        height:200,
        marginVertical:8,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.primary100,
        borderRadius:4
    },
    image:{
        width:'100%',
        height:'100%'
    }
})