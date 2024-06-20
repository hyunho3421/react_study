import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation } : {navigation: any}) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>홈2</Text>
        <Button
          title="다음"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
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