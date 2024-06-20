import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeScreen2 from './HomeScreen2';
import HomeScreen3 from './HomeScreen3';

const Tab = createMaterialTopTabNavigator();

export default function HomeScreen1({ navigation } : {navigation: any}) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>홈1</Text>
        <Button
          title="다음"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );

    // return (
    //   <Tab.Navigator initialRouteName='Home1'>
    //     <Tab.Screen name='Home1' component={HomeScreen2} />
    //     <Tab.Screen name='Home2' component={HomeScreen3} />
    //   </Tab.Navigator>
    // );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
    },
  });