import React, {Component} from 'react'

import {StyleSheet, Text,TextInput, View,Button} from 'react-native';

class CustomText extends React.Component{
    // render(){
    //   return(
    //     <View>
          
    //       <View>
    //         <Button title='Hotkeys'></Button>
    //       </View>
          
    //       <View style={{alignItems:'center'}}>
    //       <TextInput
    //                 style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop:10, paddingLeft:5}}
    //                 value={'Interests...'}
    //             />
    //     </View>
    //     </View>
    //   )
    // }
    state = {
      textValue: 'Change me'
    }

   barriers = ['FENCE','TREE','CONSTRUCTION'];

    Fence = () => {
      this.setState({
        textValue: 'There is a FENCE in front of ILC'
      })
    }
    Tree = () => {
      this.setState({
        textValue: 'There is a TREE in front of ILC'
      })
    }
    Constr = () => {
      this.setState({
        textValue: 'There is CONSTRUCTION going on in front of ILC'
      })
    }
  
    render() {
      return (
        <View>
          <TextInput style={{height:40, margin:20, padding:10}}>
          {this.state.textValue}
          </TextInput>
          
          <Text>Integrated Learning Center</Text>

        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button title="Fence" onPress={this.Fence}/>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Tree" onPress={this.Tree}/>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Constr." onPress={this.Constr}/>
          </View>
        
        </View>
        
        <View style={styles.container}>
          
          <View style={styles.buttonContainer}>
            <Button title="Fence" onPress={this.Fence}/>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Tree" onPress={this.Tree}/>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Constr." onPress={this.Constr}/>
          </View>
        
        </View>
        



        </View>        
      )
    }
  }

  export default CustomText;


  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer: {
      flex: 1,
      margin:5,
      padding:2,
    }
  });