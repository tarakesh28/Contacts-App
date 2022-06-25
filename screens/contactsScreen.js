import React from 'react';
import { StyleSheet, Text, View, Button, } from 'react-native';

export function contactsScreen(props:any){
    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>
                Contacts Screen
            </Text>
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