
import { StyleSheet, Text, View, Button } from 'react-native';
import { Entypo } from 'react-native-vector-icons';
export default function App() {
  return (
    <View style={{ backgroundColor: '#5cdb95', height: '100%' }}>
      <View style={{ flexDirection: 'row', paddingTop: 50 ,padding:10}}>
        <Entypo.Button onPress={''} name='menu' size={40} backgroundColor='#5cdb95' color='#05386b'></Entypo.Button>
        <View style={{ flex: 5 }}></View>
        <Entypo.Button onPress={''} name='dots-three-horizontal' size={30} backgroundColor='#5cdb95' color='#05386b' style={{flex:1}}></Entypo.Button>
      </View>
      <View style={{ justifyContent: 'center', margin: 50, backgroundColor: '#edf5e1', height: '30%', borderColor: '#05386b', borderWidth: 2 }}></View>
      <View style={{ backgroundColor: '#edf5e1', height: 2, width: '100%' }}></View>
      <Text style={styles.select_food}>
        Title of Food product
      </Text>
      <Text style={[styles.select_food, { color: 'black' }]}>
        $2
      </Text>
      <Text style={[styles.select_food, { color: 'blue' }]}>
        About:
      </Text>
      <View style={{ margin: 10, height: '20%', backgroundColor: '#edf5e1' }}>
        <Text style={{ padding: 5 }}>
          Description
        </Text>
      </View>
      <View style={{ marginLeft: 60, marginRight: 60,alignItems:'center'}}>
        <Text><Entypo.Button onPress={''} name='chat' backgroundColor='#05386b'>Proceed to Chat</Entypo.Button></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  select_food: {
    padding: 5,
    fontSize: 18,
    marginLeft: 10
  }
});
