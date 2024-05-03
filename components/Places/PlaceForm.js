import { useState } from "react"
import { View,Text, ScrollView, TextInput,StyleSheet } from "react-native"
import { Colors } from "../../constants/color"
import ImagePicker from "./ImagePicker"
import LocationPicker from "./LocationPicker"

const PlaceForm=()=>{
    const [enteredTitle,setEnteredTitle]=useState('')
    const changeTitleHandler=(enteredText)=>{
        setEnteredTitle(enteredText)
    }
    return(
        <ScrollView style={styles.form}>
            <View>
                <Text style={styles.label}>TITLE</Text>
                <TextInput style={styles.input} onChangeText={changeTitleHandler} value={enteredTitle}></TextInput>
            </View>
            <ImagePicker/>
            <LocationPicker/>
        </ScrollView>
    )
}
export default PlaceForm
const styles=StyleSheet.create({
    
   form:{
    flex:1,
    padding:24,
   },
   label:{
    fontWeight:'bold',
    fontSize:18,
    textAlign:'center',
    marginBottom:4,
    color:Colors.primary500
   },
   input:{
    marginVertical:8,
    paddingHorizontal:4,
    paddingVertical:8,
    fontSize:16,
    borderBottomColor:Colors.primary700,
    borderBottomWidth:2,
    backgroundColor:Colors.primary100
   }
})