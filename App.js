// import React, {Component} from 'react'
// import {StyleSheet, Text, View,Button} from 'react-native';
//   import {createStackNavigator, 
//     createAppContainer} from 'react-navigation';

// //   import LoginScreen from './screens/LoginScreen.js';
// // import HomeScreen from './screens/HomeScreen.js';
// // import First from './First';

// class First extends React.Component{
//   render(){
//     return(
//       <View style = {styles.container}>
//         <Text>Open the app</Text>
//         <Button title="Go to Second screen" onPress={()=>this.props.navigation.navigate('Second')}>
//         </Button>
//       </View>
//     )
//   }
// }

// class Second extends React.Component{
//   render(){
//     return(
//       <View>
//         <Text>Second screen</Text>
//       </View>
//     )
//   }
// }

//   const AppStackNavigator = createStackNavigator({
//     First:{
//       screen: First
//     },
//     Second:{
//       screen:Second
//     }
//   });

//   const styles = StyleSheet.create({
//     container:{
//       flex:1,
//       alignItems:'center',
//       justifyContent:'center'
//     }
//   })


//   const App = createAppContainer(AppStackNavigator);
//   export default App;
// // export default createAppContainer(AppNavigator);



// ----------------------------------------------------------------------------------------------------------


import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    Alert,
    TouchableOpacity,
} from "react-native"
// import RadioGroup, {Radio} from 'react-native-radio-input';

import RadioGroup from 'react-native-radio-buttons-group';

// import Comment from './Comment.js';
const Blue = '#428AF8';
const Light_Gray = '#D3D3D3';


class App extends Component{
  _onPress(){
    Alert.alert('Button pressed');
  }
  state = {
    data: [
      {
        label: 'Student',
      },
      {
        label: 'Non-Student',
      },
    ],
  };

  // update state
  onPress = data => this.setState({ data });
  render(){
    let selectedButton = this.state.data.find(e => e.selected == true);
    selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
    return (
            <View style = {styles.form}>
            <View style = {styles.heading}>
                <Text style={styles.head}>COMMENT</Text>
            </View>
            <View>
                <TextInput
                    style={styles.textInputName}
                    placeholder={'Your Name'}
                    selectionColor='#428AF8'
                    underlineColorAndroid='#428AF8'
                />
            </View>
            <View>
                <TextInput
                    style={styles.textInputComment}
                    placeholder={'Comments here'}
                    selectionColor='#428AF8'
                    underlineColorAndroid='#428AF8'
                    textAlignVertical='top'
                    
                />

                
            </View>
            
            <View style={styles.container}>
               
                <RadioGroup radioButtons={this.state.data} onPress={this.onPress} />
            </View>

            <View style={styles.button}>
                <TouchableOpacity style = {styles.submitButton}>
                    <Text style = {styles.submitButtonText}> Post Comment </Text>
                </TouchableOpacity>
            </View>
            
            </View>
        );
    }
    
}

export default App;


// scale x, scale y, fontsize, border 
const styles = StyleSheet.create({
    form:{
        margin: 40,
    },
    heading:{
        alignItems:'center',
    },
    head:{
        fontSize:60,
        color:'#428AF8',
    },
    textInputName:{
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        marginTop: 30,
        padding: 5,
    },
    textInputComment:{
        height: 200, 
        borderColor: 'gray', 
        borderWidth: 1,
        marginTop: 30,
        padding: 5,
        textAlignVertical: 'top',
    },
    button: {
        marginTop: 30,
    },
    submitButton: {
       alignItems:'center',
       backgroundColor: '#428AF8',
       padding: 10,
       height: 40,
       borderRadius:100,
    },
    submitButtonText:{
        alignItems:'center',
       color: 'white',
    },
    container: {
        margin:10,
        color:'#428AF8'
      },
    
})