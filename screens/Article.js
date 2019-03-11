import React, {Component} from 'react'

import {StyleSheet, Text, ScrollView, View,Button} from 'react-native';

class Article extends React.Component{
    render(){
      return(
          <View>

        <View style={{alignItems:'center'}}>
          <Text style={{fontSize:40}}>Article Page</Text>
        </View>

        <ScrollView style={{margin:10}}>
            <View style={{alignItems:'center'}}>
                <Text style={{fontSize:20}}>First Heading</Text>
            </View>

            <Text>
            ScrollViews can be configured to allow paging through views using swiping gestures by using the pagingEnabled props. Swiping horizontally between views can also be implemented on Android using the ViewPagerAndroid component.
A ScrollView with a single item can be used to allow the user to zoom content. Set up the maximumZoomScale and minimumZoomScale props and your user will be able to use pinch and expand gestures to zoom in and out.
The ScrollView works best to present a small amount of things of a limited size. All the elements and views of a ScrollView are rendered, even if they are not currently shown on the screen. If you have a long list of more items than can fit on the screen, you should use a FlatList instead. So let's learn about list views next.
            </Text>  

            <View style={{alignItems:'center'}}>
                <Text style={{fontSize:20}}>Second Heading</Text>
            </View>

            <Text>
            ScrollViews can be configured to allow paging through views using swiping gestures by using the pagingEnabled props. Swiping horizontally between views can also be implemented on Android using the ViewPagerAndroid component.
A ScrollView with a single item can be used to allow the user to zoom content. Set up the maximumZoomScale and minimumZoomScale props and your user will be able to use pinch and expand gestures to zoom in and out.
The ScrollView works best to present a small amount of things of a limited size. All the elements and views of a ScrollView are rendered, even if they are not currently shown on the screen. If you have a long list of more items than can fit on the screen, you should use a FlatList instead. So let's learn about list views next.
            </Text>  

            <View style={{alignItems:'center'}}>
                <Text style={{fontSize:20}}>Third Heading</Text>
            </View>

            <Text>
            ScrollViews can be configured to allow paging through views using swiping gestures by using the pagingEnabled props. Swiping horizontally between views can also be implemented on Android using the ViewPagerAndroid component.
A ScrollView with a single item can be used to allow the user to zoom content. Set up the maximumZoomScale and minimumZoomScale props and your user will be able to use pinch and expand gestures to zoom in and out.
The ScrollView works best to present a small amount of things of a limited size. All the elements and views of a ScrollView are rendered, even if they are not currently shown on the screen. If you have a long list of more items than can fit on the screen, you should use a FlatList instead. So let's learn about list views next.
            </Text>  
        </ScrollView>
              
          </View>
      )
    }
  }



  export default Article;

//   const styles = StyleSheet.create({

//   })