import { Pressable, View,StyleSheet,Text } from "react-native"

const Placeitem=({Place,onSelect})=>{
    return(
        <Pressable onPress={onSelect}>  
            <Image source={{uri: Place.imageUri}}/>
            <View>
                <Text>{Place.title}</Text>
                <Text>{Place.address}</Text>
            </View>
        </Pressable>
    )
}
export default Placeitem
const styles=StyleSheet.create({

})