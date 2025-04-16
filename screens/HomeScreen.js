import { SafeAreaView, StyleSheet, Text, View, StatusBar,Image,TextInput, TouchableOpacity,FlatList } from 'react-native';
import React from 'react';
import images from '@/assets/images/Images';
import { Ionicons } from '@expo/vector-icons';
import Database from "../constants/Database";

const HomeScreen = () => {
    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
          <Image source={item.image} style={styles.images} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      );

      const renderItems = ({ item }) => (
        <View style={{flexDirection:'row',justifyContent:'space-between',padding:5,alignItems:'center'}}>
          <View style={styles.contain}>
          <Image source={item.image} style={{height:60,width:60,borderRadius:20}}/>
          <View style={{padding:15,width:'87%'}}>
          <Text style={{fontSize:14,fontWeight:'bold',color:'gray'}}>{item.title}</Text>
          <Text style={styles.description}>{item.description} </Text>
          </View>
          </View>
         
        </View>
      );
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
        <TouchableOpacity style={[styles.con, {backgroundColor:'#70c2fb'}]}>
            <Text style={styles.tabtext}>Sights</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.con}>
            <Text style={styles.tabtext}>Tour</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.con}>
            <Text style={styles.tabtext}>Adventure</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={Database}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
      <View style={{flexDirection:'row',paddingHorizontal:10,justifyContent:'space-between',marginBottom:10}}>
        <Text style={{fontSize:18,fontWeight:'bold',color:'#425884'}}>Popular</Text>
        <TouchableOpacity>
            <Text style={{fontSize:13,fontWeight:'bold',marginTop:10}}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList   
        data={Database}
        keyExtractor={(item) => item.id}
        renderItem={renderItems}
        contentContainerStyle={styles.listContainer1}
      />
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
  images:{
  width:208,
  height:158,
  borderRadius:20
  },
  itemContainer:{
    height:250,
    backgroundColor:'#fff',
    padding:20,
    borderRadius:30,
    marginRight:10,
    width:260,
    marginBottom:10
  },
  listContainer:{
    padding:0,
    marginTop:20,
    height:260,
    marginBottom:500
  },
  title:{
    fontSize:18,
    fontWeight:'bold',
    marginTo:10,
    color:'gray'
  },
  description:{
    fontSize:10,
    color:'#777'
  },
  contain:{
    flexDirection:'row',
    height:'100%',
    justifyContent:'space-between',
    backgroundColor:'white',
    padding:10,
    borderRadius:15,
    width:'100%',
    padding:10
  },
  
});
