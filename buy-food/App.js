import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={{backgroundColor:'#5cdb95',height:'100%'}}>
    <View>
      <Text style={styles.header}>Saves
        <Text style={{color:'white'}}>Foods</Text>
      </Text>
    </View>
    <View style={{textAlign:'center',backgroundColor:'rgba(237,245,225,0.8)',margin:10}}>
    <Text style={{color:'rgba(152,158,177,0.8)'}}>Search SavesFoods</Text>
    </View>
    <View style={styles.nav}>
    <Text style={styles.navObject}>Featured</Text>
    <Text style={styles.navObject1}>New</Text>
    <Text style={styles.navObject1}>Nearby</Text>
    <Text style={styles.navObject1}>Following</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nav:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center'
    },
  navObject:{
    color:'35424a',
    fontWeight:'bold',
    padding:10
  },
  navObject1:{
    color:'35424a',
    fontWeight:'bold',
    padding:10,
    color:'white'
  },
  header:{
    flexDirection:'row',
    flex:1,
    textAlign:'center',
    fontSize:36,
  }
});
