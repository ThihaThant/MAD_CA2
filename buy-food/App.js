import * as React from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';

const Data = [{
  data: 'smth'
}, {
  data: 'smth2'
}, {
  data: 'smth3'
}]

const Item=()=>{
  <View style={styles.Image}></View>
}
export default function App() {
  const renderItem=({Item})=>{
    {Item}
  }
  return (
    <View style={{ backgroundColor: '#5cdb95', height: '100%' }}>
      <View style={{ paddingTop: 50, flexDirection: 'row' }}>
        <Text style={{ flex: 1 }}>
          Hamburger
        </Text>
        <Text style={[styles.header, { flex: 3 }]}>
          Saves
          <Text style={{ color: 'white' }}>Foods</Text>
        </Text>
        <Text style={{ flex: 1 }}>
          profile
        </Text>
      </View>
      <View
        style={{
          textAlign: 'center',
          backgroundColor: 'rgba(237,245,225,0.8)',
          margin: 10,
          borderRadius: 5,
          padding: 4,
        }}>
        <Text style={{ color: 'rgba(152,158,177,0.8)' }}>
          Search SavesFoods
        </Text>
      </View>
      <View style={styles.nav}>
        <Text style={[styles.navObject, { color: '#edf5e1' }]}>Featured</Text>
        <Text style={styles.navObject}>New</Text>
        <Text style={styles.navObject}>Nearby</Text>
        <Text style={styles.navObject}>Following</Text>
      </View>
      <View style={{ height: 3, backgroundColor: '#35424a', flexDirection: 'column', marginRight: 15, marginLeft: 15 }}><View style={{ height: 3, backgroundColor: '#edf5e1', flexDirection: 'column', width: 60 }}></View></View>
      <View style={{ height: '60%', margin: 20 }}>
        <FlatList>
        </FlatList>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5
  },
  navObject: {
    color: '#35424a',
    fontWeight: 'bold',
    padding: 10,
  },

  header: {
    textAlign: 'center',
    fontSize: 36,
  },
  Image: {
    backgroundColor: 'blue',
    width: 50,
    height: 50
  }
});
