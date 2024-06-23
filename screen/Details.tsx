import React from 'react';
import { BackHandler } from 'react-native';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useEffect } from 'react';

export default function DetailsScreen({ navigation } : {navigation: any}) {
  
  const test = "1번:\'놀랄 첩 호통을 뺀다.\'\n2번:\'다섯 나눌 구한다.\'\n3번:\'물건이 변조되다.\'\n4번:\'같아 맑고 동원한다.\'\n5번:\'밥 평소 그러한 세웠다.\'\n1~5번중에 맞춤법, 뛰어쓰기, 문법이 맞는 말이 뭐야? 정답 번호와 문장만 알려줘. 설명은 하지마."

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