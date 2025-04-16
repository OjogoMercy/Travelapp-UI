import { SafeAreaView, StyleSheet, Text, View, StatusBar,Image,TextInput, TouchableOpacity,FlatList,ScrollView } from 'react-native';
import React from 'react';
import images from '@/assets/images/Images';
import { Ionicons,Feather } from '@expo/vector-icons';
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
          <Image source={item.image} style={{height:70,width:70,borderRadius:20,marginTop:5}}/>
          <View style={{padding:10,width:'80%'}}>
          <Text style={{fontSize:14,fontWeight:'bold',color:'gray'}}>{item.title}</Text>
          <Text style={styles.description}>{item.description} </Text>
          </View>
          </View>
         
        </View>
      );
  return (
    <><SafeAreaView style={styles.container}>
          <StatusBar backgroundColor={'#e4f0ff'} />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity>
                  <Ionicons name="arrow-back" size={22} color="#425884" style={{ resizeMode: 'contain', marginRight: 5 }} />
              </TouchableOpacity>
              <Text style={{ fontSize: 18, color: '#425884' }}>Explore</Text>
              <Image source={images.filter} style={{ height: 30, width: 30, marginLeft: 220 }} />
          </View>
          <View style={styles.search}>
              <TouchableOpacity>
                  <Ionicons name="search" size={20} color="#bbb" />
              </TouchableOpacity>
              <TextInput
                  placeholder='mount bruno'
                  placeholderTextColor={'#ccc'}
                  style={{ width: '85%' }} />
              <TouchableOpacity>
                  <Ionicons name="options" size={20} color="#bbb" />
              </TouchableOpacity>
          </View>
          <View style={styles.tab}>
              <TouchableOpacity style={[styles.con, { backgroundColor: '#70c2fb' }]}>
                  <Text style={styles.tabtext}>Sights</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.con}>
                  <Text style={styles.tabtext}>Tour</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.con}>
                  <Text style={styles.tabtext}>Adventure</Text>
              </TouchableOpacity>
          </View>
          <ScrollView>
          <FlatList
              horizontal
              data={Database}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
              contentContainerStyle={styles.listContainer} />
          <View style={{ flexDirection: 'row', paddingHorizontal: 10, justifyContent: 'space-between', marginBottom: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#425884' }}>Popular</Text>
              <TouchableOpacity>
                  <Text style={{ fontSize: 13, fontWeight: 'bold', marginTop: 10 }}>See All</Text>
              </TouchableOpacity>
          </View>
          <FlatList
              data={Database}
              keyExtractor={(item) => item.id}
              renderItem={renderItems}
              showsVerticalScrollIndicator={false} />
          </ScrollView>
      </SafeAreaView>
      <View style={styles.container1}>
              <TouchableOpacity>
                  <Ionicons name="home" size={22} color="#4F5C6B" />
              </TouchableOpacity>
              <TouchableOpacity>
                  <Ionicons name="bookmark" size={22} color="#4F5C6B" />
              </TouchableOpacity>
              <TouchableOpacity>
                  <Ionicons name="grid" size={22} color="dodgerblue" />
              </TouchableOpacity>
              <TouchableOpacity>
                  <Feather name="settings" size={22} color="#4F5C6B" />
              </TouchableOpacity>
              <TouchableOpacity>
                  <Ionicons name="person" size={22} color="#4F5C6B" />
              </TouchableOpacity>
          </View></>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4f0ff',
    paddingHorizontal:10
  },
  search:{
    flexDirection:'row',
    width:'100%',
    backgroundColor:'white',
    height:50,
    marginTop:10,
    borderRadius:30,
    alignItems:'center',
    paddingHorizontal:10,
  },
  tab:{
    flexDirection:'row',
    marginTop:15,
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
  width:'100%',
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
  },
  listContainer:{
    padding:0,
    marginTop:20,
    height:260,
  },
  title:{
    fontSize:18,
    fontWeight:'bold',
    marginTop:5,
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
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  
});
