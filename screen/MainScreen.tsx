import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useEffect } from 'react';

export default function MainScreen({ navigation } : {navigation: any}) {
  const a = true;
  
  function goHome() {
    navigation.navigate('Home1');
  }
  
  useEffect(() => {
    if (a) {
      goHome();
    }
  });

  return (
    <View style={styles.container}>
      {/* {a && (navigation.navigate('Home1'))} */}
      <Text style={styles.title}>메인화면</Text>
      {/* <Button
          title="다음"
          onPress={() => navigation.navigate('Home1')}
        /> */}
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