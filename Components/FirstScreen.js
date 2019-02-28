import React, { Component } from 'react'
import { Alert, Animated, Text, Button, 
  StyleSheet, View, ActivityIndicator, AppRegistry } from 'react-native';

  export default class FirstScreen extends React.Component{
    _onPressButton(){
        Alert.alert('You tapped the button!');
      }
    return(
        // <View style={styles.container}>
        //     <Text style={styles.welcome}>
        //         THIS IS THE First SCREEN.
        //     </Text>
        //     <Button
        //     onPress={this._onPressButton}
        //     title="Press Me"
        //   />
        // </View>
        
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF',
    },
    welcome:{
        fontSize:20,
        textAlign:'center',
        margin:10,
    },
    instructions:{
        textAlign:'center',
        color:'#333333',
        marginBottom:5,
    },
});