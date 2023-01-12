import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { Entypo } from 'react-native-vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
function Placeholder(){
  return(
    <View style={{ backgroundColor: '#5cdb95', height: '100%' }}>
      <View style={{ paddingTop: 50, flexDirection: 'row' }}>
      <Entypo.Button name='menu' size={40} style={{padding:7}} onPress={''} backgroundColor='#5cdb95'></Entypo.Button>
        <Text style={[styles.header, { flex: 3 }]}>
          Saves
          <Text style={{ color: '#edf5e1' }}>Foods</Text>
        </Text>
        <Entypo.Button name='user' size={30} style={{padding:10}} onPress={''} backgroundColor='#5cdb95'></Entypo.Button>
      </View>
      <View style={{justifyContent:'center',alignItems:'center',borderColor:'#edf5e1',borderWidth:3,height:'30%',margin:50,marginTop:150,borderRadius:20}}>
        <Entypo name='camera' size={70} color='#05386b'></Entypo>
        <Text style={{fontSize:16,color:'#05386b',fontWeight:'400'}}>Take a pic to start selling</Text>
      </View>
      
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: '#edf5e1',
        tabBarInactiveTintColor:'#05386b',
        tabBarActiveBackgroundColor: '#7fe1ad',
        tabBarInactiveBackgroundColor: '#7fe1ad',
        headerShown:false
      }}
        initialRouteName="foods">
        <Tab.Screen name='Foods' component={Placeholder} options={{
          tabBarIcon: ({ color, size }) => {
            return <Entypo name='leaf' color={color} size={size} />
          },

        }} />
        <Tab.Screen name='Sell' component={Placeholder}options={{
          tabBarIcon: ({ color, size }) => {
            return <Entypo name='shop' color={color} size={size} />
          },

        }} />
        <Tab.Screen name='Notifications' component={Placeholder} options={{
          tabBarIcon: ({ color, size }) => {
            return <Entypo name='bell' color={color} size={size} />
          },

        }} />
        <Tab.Screen name='Chat' component={Placeholder}options={{
          tabBarIcon: ({ color, size }) => {
            return <Entypo name='chat' color={color} size={size} />
          },

        }} />
      </Tab.Navigator>
    </NavigationContainer>
    
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
    color:'#05386b'
  },
  Image: {
    backgroundColor: 'blue',
    width: 50,
    height: 50
  },
 
});
