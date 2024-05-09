import { View,StyleSheet,Alert } from "react-native"
import OutlineButton from "../UI/OutlineButton"
import { Colors } from "../../constants/color"
import {getCurrentPositionAsync,useForegroundPermissions,PermissionStatus} from 'expo-location'
import { useNavigation,useRoute,useIsFocused } from "@react-navigation/native"
import { useEffect, useState } from "react"


const LocationPicker=({onLocationPicked})=>{

    const [pickedLocation,setPickedLocation]=useState()
    const isfocused=useIsFocused()

    const navigation=useNavigation()
    const route=useRoute();
    const [locationPermissionInformation,requestPermission]= useForegroundPermissions();
    
    useEffect(()=>{
        if(isfocused && route.params){
            const mapPickedLocation =  {
                lat: route.params.pickedLat,
                lng: route.params.pickedLng,
              }; 
              setPickedLocation(mapPickedLocation)
        }
     },[route,isfocused])
     
     useEffect(()=>{
        onLocationPicked(pickedLocation)
     },[pickedLocation,onLocationPicked])
    const verifyPermission=async()=>{
        if(locationPermissionInformation.status===PermissionStatus.UNDETERMINED){
            const permissionResponse= await requestPermission()
            return permissionResponse.granted
           }
           if(locationPermissionInformation.status===PermissionStatus.DENIED){
               Alert.alert('insufficient permissions! you need to grant location permission in order to use this app')
               return false;
           }
           return true
    }
    const getLocationHandler=async()=>{
        const permission=await verifyPermission();
        if(!permission){
            return;
        }
        
        const location=  await getCurrentPositionAsync()
        console.log(location)
    }
    const pickOnMapHandler=()=>{
        navigation.navigate('Map')
    }
    return(
        <View>
            <View style={styles.mapPreview}></View>
            <View style={styles.actions}>
                <OutlineButton icon='location' onPress={getLocationHandler}>Locate user</OutlineButton>
                <OutlineButton icon='map' onPress={pickOnMapHandler}>Pick on Map</OutlineButton>
            </View>
        </View>
    )
}
export default LocationPicker
const styles=StyleSheet.create({
    mapPreview:{
        width:'100%',
        height:200,
        marginVertical:8,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.primary100,
        borderRadius:4
    },
    actions:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    }
})