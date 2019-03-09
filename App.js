import React, {Component} from 'react'
import {StyleSheet, Text, View,Button} from 'react-native';
  import {createStackNavigator, 
    createAppContainer} from 'react-navigation';

import First from './screens/First';
import Second from './screens/Second';
import Drawer from './screens/Drawer';

// class First extends React.Component{
//   render(){
//     return(
//       <View>
//         <Text>Open the app</Text>
//         <Button title="Go to Second screen" onPress={()=>this.props.navigation.navigate('Second')}>
//         </Button>
//       </View>
//     )
//   }
// }

// class Second extends React.Component{
//   static navigationOptions = {
//     headerStyle: {
//       backgroundColor: 'blue'
//     }
//   }
//   render(){
//     return(
//       <View>
//         <Text>Second screen</Text>
//       </View>
//     )
//   }
// }

  const AppStackNavigator = createStackNavigator({
    First:First,
    Second:Second,
    Drawer:Drawer
  }, {
    defaultNavigationOptions:{
      headerStyle:{
        backgroundColor:'orange'
      }
    }
  });



  const App = createAppContainer(AppStackNavigator);
  export default App;
// export default createAppContainer(AppNavigator);