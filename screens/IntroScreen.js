import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import Images from '../assets/images/Images'
import { LinearGradient } from 'expo-linear-gradient';

const IntroScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('HomeScreen'); 
    }, 4000);

    return () => clearTimeout(timer);   
  }, []);

  return (
    <LinearGradient
      colors={['#fff', '#78bdfc']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{flex:1,padding:20}}
    >
        <View style={{marginTop:30}}>
        <Text style={styles.t1}>LET'S</Text>
      <Text style={{ color:'#425884',fontSize:45,fontWeight:'bold'}}>EXPLORE</Text>
      <Text style={styles.t1}>THE WORLD</Text>
      <Text style={{fontSize:10, color:'#425884'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus faucibus tortor, suscipit velit phasellus massa.
      </Text>
        </View>
        <Image source={Images.bags} style={styles.image}/>
    </LinearGradient>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    width: 376,
    height: 376,
    marginTop: 100,
    resizeMode: 'contain',
    alignSelf:'center'
  },
  t1:{
    fontSize:25,
    color:'#425884',
    
  },
  button:{
    height:50,
    width:156,
    backgroundColor:'#78bdfc',
    borderRadius:20,
    justifyContent:'center',
    paddingHorizontal:43,
    alignSelf:'flex-start',
    marginLeft:30
  },
});
