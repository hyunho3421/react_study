import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './screen/MainScreen';
import HomeScreen1 from './screen/HomeScreen1';
import HomeScreen2 from './screen/HomeScreen2';
import DetailsScreen from './screen/Details';

const TopTap = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen name='Main' component={MainScreen} />
        <Stack.Screen name='Home1' component={HomeScreen1} />
        <Stack.Screen name='Home2' component={HomeScreen2} />
        <Stack.Screen name='Details' component={DetailsScreen} options={{headerBackVisible: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
