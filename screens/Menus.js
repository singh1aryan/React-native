import React, {Component} from 'react'

import {StyleSheet,Icon, Text, View,Button} from 'react-native';
import OptionsMenu from "react-native-options-menu";
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';


const myIcon = (<Icon name="rocket" size={30} color="#900" />)
class Menus extends React.Component{
    
    render(){
      return(
        <View>
        <Text>Hello world!</Text>
        <Menu>
          <MenuTrigger text='Select action' />
          <MenuOptions>
            <MenuOption onSelect={() => alert('Save')} text='Save' />
            <MenuOption onSelect={() => alert('Delete')} >
              <Text style={{color: 'red'}}>Delete</Text>
            </MenuOption>
            <MenuOption onSelect={() => alert('Not called')} disabled={true} text='Disabled' />
          </MenuOptions>
        </Menu>
      </View>

      )
    }
  }
  export default Menus;