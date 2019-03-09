import React, {Component} from 'react'

import {StyleSheet, Text, View,Button} from 'react-native';
  
// import {createStackNavigator, 
//     createAppContainer} from 'react-navigation';

import Second from '../screens/Second';

class First extends React.Component{
    render(){
      return(
        <View>
         <View style={{alignItems:'center', marginBottom:10}}>
          <Text style={{fontSize:40}}>First screen</Text>
        </View>

          <Button title="Go to Second screen" onPress={()=>this.props.navigation.navigate('Second')}/>
          
          <View style = {{marginTop:20}}>
            <Button title="Go to Drawer screen" onPress={()=>this.props.navigation.navigate('Drawer')}/>
          </View>
          
          <View style = {{marginTop:20}}>
            <Button title="Go to Notification screen" onPress={()=>this.props.navigation.navigate('Drawer')}/>
          </View>
          
          <View style = {{marginTop:20}}>
            <Button title="Go to Drawer screen" onPress={()=>this.props.navigation.navigate('Drawer')}/>
          </View>
        
        </View>
      )
    }
  }

  export default First;

  