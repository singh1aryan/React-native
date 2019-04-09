import React, {Component} from 'react'

import {StyleSheet, Text, View,Button} from 'react-native';

import {createAppContainer,createDrawerNavigator} from 'react-navigation';

class Drawer extends React.Component{
    render(){
      return(
        <View style={{alignItems:'center'}}>
          <Text style={{fontSize:40}}>Navigation Drawer</Text>
          <Text style={{fontSize:20}}>Slide from left to change</Text>
        </View>
      )
    }
  }

class Profile extends React.Component{
    render(){
        return(
            <View style={{alignItems:'center'}}>
            <Text style={{fontSize:40}}>My Profile </Text>
            <Text style={{fontSize:20}}>Slide from left to change</Text>
          </View>
        )
    }
}


class Settings extends React.Component{
    render(){
        return(
            <View style={{alignItems:'center'}}>
            <Text style={{fontSize:40}}>Settings Page </Text>
            <Text style={{fontSize:20}}>Slide from left to change</Text>
          </View>
        )
    }
}
  
const AppDrawerNavigator = createDrawerNavigator({
    Drawer:Drawer,
    Profile:Profile,
    Settings:Settings
})

  
  const App = createAppContainer(AppDrawerNavigator);
  export default App;