import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native"

class HomeScreen extends Component{
    render(){
        return (
            <View style = {StyleSheet.container}>
                <Text>Home Screen</Text>
            </View>
        );
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})