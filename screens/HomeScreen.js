import { SafeAreaView, StyleSheet, Text, View, StatusBar,Image,TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import images from '@/assets/images/Images';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#e4f0ff'} />
      <View style={{ flexDirection: 'row',alignItems:'center'}}>
        <TouchableOpacity>
        <Ionicons name="arrow-back" size={22} color="#425884" style={{resizeMode:'contain',marginRight:5}} />
        </TouchableOpacity>
        <Text style={{fontSize:18,color:'#425884'}}>Explore</Text>
        <Image source={images.filter} style={{height:30,width:30,marginLeft:200}}/>
      </View>
      <View style={styles.search}>
        <TouchableOpacity>
        <Ionicons name="search" size={20} color="#bbb" />
        </TouchableOpacity>
         <TextInput
         placeholder='mount bruno'
         placeholderTextColor={'#ccc'}
         style={{width:'85%'}}
         />
         <TouchableOpacity>
         <Ionicons name="options" size={20} color="#bbb" />
         </TouchableOpacity>
      </View>
      <View style={styles.tab}>
        <View style={[styles.con, {backgroundColor:'#78bdfc'}]}>
            <Text style={styles.tabtext}>Sights</Text>
        </View>
         <View style={styles.con}>
            <Text style={styles.tabtext}>Tour</Text>
        </View>
         <View style={styles.con}>
            <Text style={styles.tabtext}>Adventure</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4f0ff',
    padding:20
  },
  search:{
    flexDirection:'row',
    width:'100%',
    backgroundColor:'white',
    height:50,
    marginTop:'30',
    borderRadius:30,
    alignItems:'center',
    paddingHorizontal:10,
  },
  tab:{
    flexDirection:'row',
    marginTop:20,
    justifyContent:'space-between'
  },
  con:{
    backgroundColor:'#fff',
    width:100,
    height:25,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    paddingHorizontal:10
  },
  tabtext:{
    fontWeight:'bold'
  },
});
