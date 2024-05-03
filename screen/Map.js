import MapView,{Marker} from 'react-native-maps'
import { Alert, StyleSheet } from 'react-native'
import { useCallback, useLayoutEffect, useState } from 'react'
import IconButton from '../components/UI/IconButton'
import { useNavigation } from '@react-navigation/native'
const Map=()=>{
    const navigation=useNavigation()
    const [selectedLocation,setSelectedLocation]=useState()
    const region={
        latitude: 37.78,
        longitude:-122.43,
        latitudeDelta:0.0922,
        longitudeDelta: 0.0421
    }
    const selectLocationHandler=(event)=>{
        const lat=event.nativeEvent.coordinate.latitude
        const lng=event.nativeEvent.coordinate.longitude
        setSelectedLocation({lat:lat,lng:lng})
    }
    const savePickedLocationHandler=useCallback(()=>{
        if(!selectedLocation){
            Alert.alert('No location picked.')
            return;
        }
        navigation.navigate('AddPlace',{
            pickedLat:selectedLocation.lat,
            pickedLng:selectedLocation.lng
        })
    },[navigation,selectedLocation])

  useLayoutEffect(()=>{
    navigation.setOptions({
        headerRight:({tintColor})=>(
            <IconButton iconName='save' size={24} color={tintColor} onPress={savePickedLocationHandler}/>
        )
    })
  },[navigation,savePickedLocationHandler])
    return (
      <MapView
        style={styles.map}
        initialRegion={region}
        onPress={selectLocationHandler}
      >
        {selectedLocation &&(<Marker
        title='picked location'
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />)}
      </MapView>
    );
}
export default Map
const styles=StyleSheet.create({
    map:{
        flex:1
    }
})