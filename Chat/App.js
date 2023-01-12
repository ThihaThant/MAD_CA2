import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { Entypo } from 'react-native-vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function Placeholder() {
  return (
    <View style={{ backgroundColor: '#5cdb95', height: '100%' }}>
      <View style={{ paddingTop: 50, flexDirection: 'row' }}>
        <Entypo.Button name='menu' size={40} style={{ padding: 7 }} onPress={''} backgroundColor='#5cdb95'></Entypo.Button>
        <Text style={[styles.header, { flex: 3 }]}>
          Saves
          <Text style={{ color: '#edf5e1' }}>Foods</Text>
        </Text>
        <Entypo.Button name='user' size={30} style={{ padding: 10 }} onPress={''} backgroundColor='#5cdb95'></Entypo.Button>
      </View>
      <View style={{ height: '80%',marginTop:20 }}>
        <ScrollView>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
            <View style={styles.items}><Entypo name='user' size={40} style={{ margin: 10 }}></Entypo><View style={{ flex: 1, margin: 10 }}><Text>Placeholder Text</Text><Text>Placeholder Text </Text></View></View>

            <View style={styles.items}><Entypo name='user' size={40} style={{ margin: 10 }}></Entypo><View style={{ flex: 1, margin: 10 }}><Text>Placeholder Text</Text><Text>Placeholder Text </Text></View></View>

            <View style={styles.items}><Entypo name='user' size={40} style={{ margin: 10 }}></Entypo><View style={{ flex: 1, margin: 10 }}><Text>Placeholder Text</Text><Text>Placeholder Text </Text></View></View>

            <View style={styles.items}><Entypo name='user' size={40} style={{ margin: 10 }}></Entypo><View style={{ flex: 1, margin: 10 }}><Text>Placeholder Text</Text><Text>Placeholder Text </Text></View></View>

            <View style={styles.items}><Entypo name='user' size={40} style={{ margin: 10 }}></Entypo><View style={{ flex: 1, margin: 10 }}><Text>Placeholder Text</Text><Text>Placeholder Text </Text></View></View>

          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: '#edf5e1',
        tabBarInactiveTintColor: '#05386b',
        tabBarActiveBackgroundColor: '#7fe1ad',
        tabBarInactiveBackgroundColor: '#7fe1ad',
        headerShown: false
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

        }} />
        <Tab.Screen name='Chat' component={Placeholder} options={{
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
  },
  Image: {
    backgroundColor: 'blue',
    width: 50,
    height: 50
  },
  items: {
    backgroundColor: '#a5e8bb',
    width: "90%",
    flexDirection: 'row',
    paddingBottom:20,
    margin:10
  }
});
