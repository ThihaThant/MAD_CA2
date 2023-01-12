import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { Entypo } from 'react-native-vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function Placeholder() {
  return (
    <View style={{ backgroundColor: '#5cdb95' ,height:'100%'}}>
      <View style={{ paddingTop: 50, flexDirection: 'row' }}>
        <Entypo.Button name='menu' size={40} style={{ padding: 7 }} onPress={''} backgroundColor='#5cdb95'></Entypo.Button>
        <Text style={[styles.header, { flex: 3 }]}>
          Saves
          <Text style={{ color: '#edf5e1' }}>Foods</Text>
        </Text>
        <Entypo.Button name='user' size={30} style={{ padding: 10 }} onPress={''} backgroundColor='#5cdb95'></Entypo.Button>
      </View>
      <View
        style={{
          alignItems: 'center',
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
        <Text style={[styles.navObject, { color: '#35424a' }]}>Featured</Text>
        <Text style={styles.navObject}>New</Text>
        <Text style={styles.navObject}>Nearby</Text>
        <Text style={styles.navObject}>Following</Text>
      </View>
      <View style={{ height: 3, backgroundColor: '#edf5e1', flexDirection: 'column', marginRight: 15, marginLeft: 15 }}><View style={{ height: 3, backgroundColor: '#35424a', flexDirection: 'column', width: 60 }}></View></View>
      <View style={{ height: '70%', margin: 20 }}>
        <ScrollView>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <View style={styles.items}></View>
            <View style={styles.items}></View>
            <View style={styles.items}></View>
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
        <Tab.Screen name='Sell' component={Placeholder} options={{
          tabBarIcon: ({ color, size }) => {
            return <Entypo name='shop' color={color} size={size} />
          },

        }} />
        <Tab.Screen name='Notifications' component={Placeholder} options={{
          tabBarIcon: ({ color, size }) => {
            return <Entypo name='bell' color={color} size={size} />
          },

        }}/>
        <Tab.Screen name='Chat' component={Placeholder} options={{
          tabBarIcon: ({ color, size }) => {
            return <Entypo name='chat' color={color} size={size} />
          },

        }}/>
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
    color: '#edf5e1',
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
  },
  items: {
    backgroundColor: '#35424a',
    width: 120,
    height: 120,
    margin: 20,
    borderColor: 'white',
    borderWidth: 4
  }
});
