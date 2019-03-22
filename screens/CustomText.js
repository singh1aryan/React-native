import React, {Component} from 'react'

import {StyleSheet, Text,TextInput, View,Button} from 'react-native';


class CustomText extends React.Component{
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }
    state = {
      textValue: 'Change me'
    }

   barriers = ['FENCE','TREE','CONSTRUCTION'];
    
   onPress(barrier, place) {
    this.setState({
      textValue: 'There is a ' + barrier + ' in front of ' + place
    })
  }
  
    render() {
      return (
        <View>
          <TextInput style={{height:40, margin:20, padding:10}}>
          {this.state.textValue}
          </TextInput>
          
          <Text style={{textAlign:'center',marginTop:10}}>Integrative Learning Center</Text>
  
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button title="Fence" onPress={() => this.onPress('FENCING','ILC')}/>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Tree" onPress={() => this.onPress('TREE','ILC')}/>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Constr." onPress={() => this.onPress('CONSTRUCTION','ILC')}/>
          </View>
        
        </View>
        
        <Text style={{textAlign:'center',marginTop:10}}>Mullins Center</Text>

        <View style={styles.container}>
          
          <View style={styles.buttonContainer}>
            <Button title="Fence" onPress={() => this.onPress('FENCING','MULLINS')}/>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Tree" onPress={() => this.onPress('TREE','MULLINS')}/>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Constr." onPress={() => this.onPress('CONSTRUCTION','MULLINS')}/>
          </View>
        
        </View>

        <Text style={{textAlign:'center',marginTop:10}}>Physical Science Building</Text>

        <View style={styles.container}>
          
          <View style={styles.buttonContainer}>
            <Button title="Fence" onPress={() => this.onPress('FENCING','PSB')}/>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Tree" onPress={() => this.onPress('TREE','PSB')}/>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Constr." onPress={() => this.onPress('CONSTRUCTION','PSB')}/>
          </View>
        
        </View>

        <Text style={{textAlign:'center',marginTop:10}}>Computer Science</Text>

        <View style={styles.container}>
          
          <View style={styles.buttonContainer}>
            <Button title="Fence" onPress={() => this.onPress('FENCING','CS BUILDING')}/>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Tree" onPress={() => this.onPress('TREE','CS BUILDING')}/>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Constr." onPress={() => this.onPress('CONSTRUCTION','CS BUILDING')}/>
          </View>
        
        </View>

        {/* <Text style={{textAlign:'center',marginTop:10}}>Mullins Center</Text>

        <View style={styles.container}>
          
          <View style={styles.buttonContainer}>
            <Button title="Fence" onPress={() => this.onPress('FENCING','MULLINS')}/>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Tree" onPress={() => this.onPress('TREE','MULLINS')}/>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Constr." onPress={() => this.onPress('CONSTRUCTION','MULLINS')}/>
          </View>
        
        </View> */}
        



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