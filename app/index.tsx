import React from "react";
import { Text, View, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import Database from "../constants/Database";
import Icon from "react-native-vector-icons/Feather";

export default function Index() {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      
    </View>
  );
  const renderItems = ({ item }) => (
    <View style={{flexDirection:'row',justifyContent:'space-between',padding:5,alignItems:'center'}}>
      <View style={{flexDirection:'row',height:'90%',justifyContent:'space-between',backgroundColor:'#E3E3E3',padding:10,borderRadius:15,width:'100%'}}>
      <Image source={item.image} style={{height:60,width:60,borderRadius:20}}/>
      <View style={{padding:5,width:'87%'}}>
      <Text style={{fontSize:14,fontWeight:'bold'}}>{item.title}</Text>
      <Text style={{margin:1,fontSize:13,color:'gray'}}>{item.description} </Text>
      </View>
      </View>
     
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#fff",padding:5 }}>
      <View style={styles.header}>
        <TouchableOpacity>
        <Icon name="menu" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Home</Text>
        <TouchableOpacity>
        <Icon name="search" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.mainTitle}>Explore</Text>
        <Text style={styles.subTitle}>a Beautiful World</Text>
      </View>
      
      <FlatList
        horizontal
        data={Database}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
      <Text style={{fontSize:18,fontWeight:'bold',marginLeft:10}}>Discover</Text>
      <FlatList   
        data={Database}
        keyExtractor={(item) => item.id}
        renderItem={renderItems}
        contentContainerStyle={styles.listContainer}
      />
           <View style={{ alignItems: "center",marginHorizontal:20}}>
        <Icon name="home" size={26} />
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  titleContainer: {
    marginLeft: 10,
    marginTop: 20,
  },
  mainTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  listContainer: {
    marginTop:20,
    marginBottom:145
  },
  itemContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    alignItems: "center",
    width:120,
    marginBottom:20,
  },
  image: {
    width: 100,
    height: 140,
    borderRadius: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color:"#fff",
    position:'absolute', 
  },
  description: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
  },
});
