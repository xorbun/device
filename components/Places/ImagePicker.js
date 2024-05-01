import { Alert, Button, View } from "react-native"
import {launchCameraAsync,useCameraPermissions,PermissionStatus} from 'expo-image-picker'
const ImagePicker=()=>{
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
      console.log(image)
    }
    return(
        <View>
            <View></View>
            <Button title='take image' onPress={takeImageHandler}/>
        </View>
    )
}
export default ImagePicker