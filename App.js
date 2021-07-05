import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import MyPaint from './sketchDraw';

export default function App() {
  const images = [
    { id: "1", src: require('./images/1.jpeg'), title: 'foo', description: 'bar' },
    { id: "2", src: require('./images/2.jpeg'), title: 'foo', description: 'bar' },
    { id: "3", src: require('./images/3.jpeg'), title: 'foo', description: 'bar' },
    { id: "4", src: require('./images/4.jpeg'), title: 'foo', description: 'bar' },
    { id: "5", src: require('./images/5.jpeg'), title: 'foo', description: 'bar' },
  ];
  const renderItem = ({item}) => {
    return <Image
              key={item.id}
              style={{margin: 40,width:'80%',}}
              source={item.src} />
  }
  return (
    <View style={styles.container}>
      <FlatList
        style={{width: '100%', height:'100%'}}
        data={images}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      {/* <MyPaint /> */}
      <StatusBar style="auto" />
    </View>
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
