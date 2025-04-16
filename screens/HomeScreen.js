import { SafeAreaView, StyleSheet, Text, View, StatusBar,Image } from 'react-native';
import React from 'react';
import images from '@/assets/images/Images';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#e4f0ff'} />
      <View style={{ flexDirection: 'row',alignItems:'center'}}>
        <Ionicons name="arrow-back" size={30} color="#000" />
        <Text style={{fontSize:18,color:'#425884'}}>Explore</Text>
        <Image source={images.filter} style={{height:30,width:30,alignSelf:'flex-end'}}/>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4f0ff',
  },
});
