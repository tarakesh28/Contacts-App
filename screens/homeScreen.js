import React from 'react';
import { StyleSheet, Text, View, Button, } from 'react-native';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

export function homeScreen(props:any){
    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>
                HomeScreen
            </Text>
            <Button 
                title = "Go To Details"
                onPress = {()=>{
                    clickProps.navigation.navigate('details',
                    {userId:1, userName: 'Awesome User'});
                }}
            />
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