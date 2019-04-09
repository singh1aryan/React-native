import React, {Component} from 'react'

import {StyleSheet, Text, ScrollView, View,Button} from 'react-native';
  
// import {createStackNavigator, 
//     createAppContainer} from 'react-navigation';


class First extends React.Component{
    render(){
      return(
        <View>
         <View style={{alignItems:'center', marginBottom:10}}>
          <Text style={{fontSize:40}}>First screen</Text>
        </View>

          {/* <ScrollView style={{marginBottom:10}}> */}
          <Button title="Go to Second screen" onPress={()=>this.props.navigation.navigate('Second')}/>
          
          <View style = {{marginTop:20}}>
            <Button title="Go to Drawer screen" onPress={()=>this.props.navigation.navigate('Drawer')}/>
          </View>
          
          <View style = {{marginTop:20}}>
            <Button title="Go to Custom Text " onPress={()=>this.props.navigation.navigate('CustomText')}/>
          </View>
          
          <View style = {{marginTop:20}}>
            <Button title="Go to Form Screen" onPress={()=>this.props.navigation.navigate('Form')}/>
          </View>

          <View style = {{marginTop:20}}>
            <Button title="Go to Article Screen" onPress={()=>this.props.navigation.navigate('Article')}/>
          </View>
        
          <View style = {{marginTop:20}}>
            <Button title="List / Recycler View" onPress={()=>this.props.navigation.navigate('ListView')}/>
          </View>

          {/* <View style = {{marginTop:20}}>
            <Button title="Menu Options" onPress={()=>this.props.navigation.navigate('MenuOptions')}/>
          </View> */}

          <View style = {{marginTop:20}}>
            <Button title="Popup Menu" onPress={()=>this.props.navigation.navigate('PopupMenu')}/>
          </View>
  
          <View style = {{marginTop:20}}>
            <Button title="Custom Recycler View" onPress={()=>this.props.navigation.navigate('ModalExample')}/>
          </View>



        {/* </ScrollView> */}
        </View>
      )
    }
  }

  export default First;

  