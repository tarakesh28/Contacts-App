import React from 'react';
import { StyleSheet, Text, View, Button, } from 'react-native';

export function detailsScreen({route, navigation}:any){
    const {userId} = route.params;
    const {userName} = route.params;
    
    return(
        <View style = {styles.container}>
            <Text style = {styles.text}> Details Screen</Text>
            <Text style = {{color:'#1ACB97'}}> ID</Text>
            <Text style = {{color:'#1ACB97'}}> NAME</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        fontSize:20,
        fontColor:"blue",
    }
})