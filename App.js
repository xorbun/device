import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllPlaces from './screen/AllPlaces';
import AddPlaces from './screen/AddPlaces';
import IconButton from './components/UI/IconButton';
import { Colors } from './constants/color';
const Stack= createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle:{backgroundColor:Colors.primary500},
          headerTintColor:Colors.gray700,
          contentStyle:{backgroundColor:Colors.gray700}
        }}>
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({ navigation }) => ({
              title:'your favorite places',
              headerRight: ({ tintColor }) => (
                <IconButton
                  iconName="add"
                  size={24}
                  color={tintColor}
                  onPress={() => navigation.navigate("AddPlace")}
                />
              ),
            })}
          />
          <Stack.Screen name="AddPlace" component={AddPlaces} options={{
            title:'add a new place',
            headerBackTitle:'back'
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


