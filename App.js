import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {homeScreen} from "./screens/homeScreen";
import {detailsScreen} from "./screens/detailsScreen";
import {contactsScreen} from "./screens/contactsScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';

//const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      screenOptions = {({route})=>({
        tabBarIcon:({focused,color,size})=>{
          let iconName = "Home";
          if(route.name === 'Home'){
            iconName = 'ios-home';
          }else if(route.name === "Details"){
            iconName = "ios-list";
          }else if(route.name === "Contact"){
            iconName = "ios-call";
          }
          return<Ionicons name = {iconName} size = {size} color = {color}/>;
        }
      })}>
        <Tab.Screen name = "Home" component = {homeScreen} options = {{title: 'My Home Screen'}}/>
        <Tab.Screen name = "Contacts" component = {contactsScreen} />
        <Tab.Screen name = "Details" component = {detailsScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
  },
});
