import React from 'react';
import { BackHandler } from 'react-native';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useEffect } from 'react';

export default function DetailsScreen({ navigation } : {navigation: any}) {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>상세화면</Text>
      <Button
        title="뒤로가기"
        onPress={() => navigation.goBack()}
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