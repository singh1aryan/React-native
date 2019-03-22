import React, {Component} from 'react'
import {StyleSheet, Text, View,Button} from 'react-native';
  import {createStackNavigator, 
    createAppContainer} from 'react-navigation';

import First from './screens/First';
import Second from './screens/Second';
import Drawer from './screens/Drawer';
import CustomText from './screens/CustomText';
import Form from './screens/Form';
import Article from './screens/Article';
import ListView from './screens/ListView';
import Menus from './screens/Menus';
import PopupMenu from './screens/PopupMenu';
// import Images from './screens/Images';

  const AppStackNavigator = createStackNavigator({
    First:First,
    Second:Second,
    Drawer:Drawer,
    CustomText: CustomText,
    Form: Form,
    Article: Article,
    ListView: ListView,
    Menus: Menus,
    PopupMenu: PopupMenu,
    Images: Images,
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