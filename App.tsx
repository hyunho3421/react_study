import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import DeviceInfo from 'react-native-device-info';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './screen/MainScreen';
import HomeScreen1 from './screen/HomeScreen1';
import HomeScreen2 from './screen/HomeScreen2';
import HomeScreen3 from './screen/HomeScreen3';
import DetailsScreen from './screen/Details';

const Stack = createNativeStackNavigator();

function CustomTabBar({ navigation } : {navigation: any}) {

  return (
    <View style={styles.tabBarContainer}>
      <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Home1')}>
        <Text style={styles.tabText}>Home1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Home2')}>
        <Text style={styles.tabText}>Home2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Home3')}>
        <Text style={styles.tabText}>Home3</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName='Main' screenOptions={{
        header: ({ navigation }) => <CustomTabBar navigation={navigation} />,
      }}>         */}
      <Stack.Navigator initialRouteName='Main'>  
        <Stack.Screen name='Main' component={MainScreen} options={{
          header: ({ navigation }) => <CustomTabBar navigation={navigation} />,
        }} />
        <Stack.Screen name='Home1' component={HomeScreen1} />
        <Stack.Screen name='Home2' component={HomeScreen2} />
        <Stack.Screen name='Home3' component={HomeScreen3} />
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


  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarContainer: {
    flexDirection: 'row',
    backgroundColor: '#6200EE',
    paddingTop: 40,
    paddingBottom: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
