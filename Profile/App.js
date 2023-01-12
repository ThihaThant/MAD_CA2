

import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {Entypo} from 'react-native-vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', paddingTop: 50 ,padding:10}}>
        <Entypo name='menu' size={40}></Entypo>
        <View style={{ flex: 5 }}></View>
        <Entypo name='dots-three-horizontal' size={30}></Entypo>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#5cdb95', height: '20%' }}>
      
          <Entypo name='user' size={80} color='#35424a'></Entypo>
       

      </View>
      <Text style={styles.user}>User123</Text>
      <Text style={[styles.user, { fontSize: 14 }]}>@User123</Text>
      <Text style={[styles.user, { fontSize: 14 }]}>Verified</Text>
      <View style={styles.nav}>
        <Text style={[styles.navObject, { color: '#35424a' }]}>Featured</Text>
        <Text style={styles.navObject}>New</Text>
        <Text style={styles.navObject}>Nearby</Text>

      </View>
      <View style={{ height: 3, backgroundColor: '#edf5e1', flexDirection: 'column', marginRight: 15, marginLeft: 15 }}><View style={{ height: 3, backgroundColor: '#35424a', flexDirection: 'column', width: 60 }}></View></View>
      <View style={styles.userInfo}>
        <Text>*Joined 12/04/2013</Text>
        <Text>*This user has sold 52 items</Text>
        <Text>*This user has a average raing of 4.5/5</Text>
        
      </View>
      <Text style={{fontSize:20,padding:10}}>Current Food for Sale
      </Text>
      <View style={{height:'40%'}}>
        <ScrollView>
          <View style={{flexDirection:'row',flexWrap:'wrap'}}>
            <View style={styles.items}></View>
            
            <View style={styles.items}></View>
            
            <View style={styles.items}></View>
            
            <View style={styles.items}></View>
            
            <View style={styles.items}></View>

          </View>
        </ScrollView>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5cdb95'
  },
  user: {
    textAlign: 'center',
    color: '#35424a',
    fontSize: 16,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    paddingBottom: 0
  },
  navObject: {
    color: '#edf5e1',
    fontWeight: 'bold',
    padding: 10,
  },
  userInfo: {
    margin: 10
  },
  items:{
    backgroundColor:'#35424a',
    width:140,
    height:140,
    margin:20,
    borderColor:'white',
    borderWidth:4
  }
});
