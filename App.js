import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllPlaces from './screen/AllPlaces';
import AddPlaces from './screen/AddPlaces';
const stack= createNativeStackNavigator();
export default function App() {
  return (
   <>
    <StatusBar style='dark'/>
    <NavigationContainer>
        <stack.Navigator>
            <stack.Screen name='AllPlaces' component={AllPlaces}/>
            <stack.Screen name='AddPlace' component={AddPlaces}/>
        </stack.Navigator>
    </NavigationContainer>
   </>
  );
}


