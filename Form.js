import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import t from 'tcomb-form-native'; // 0.6.9

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  username: t.String,
  password: t.String,
  terms: t.Boolean
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Form type={User} /> {/* Notice the addition of the Form component */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});

const style = StyleSheet.create({
   container: {
       backgroundColor: '#000000',
   }, 
});