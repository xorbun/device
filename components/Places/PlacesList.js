import { FlatList, View,StyleSheet,Text } from "react-native"
import Placeitem from "./Placeitem"

const PlacesList=({places})=>{
if(!places || places.length===0){
    return(
        <View style={styles.fallBackContainer}>
            <Text style={styles.fallBackText}>No places added yet</Text>
        </View>
    )
}
    return(
        <FlatList data={places} key={(item)=>item.id} renderItem={({item})=><Placeitem place={item}/>}/>
    )
}
export default PlacesList
const styles=StyleSheet.create({
    fallBackContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    fallBackText:{
        fontSize:16
    }

})