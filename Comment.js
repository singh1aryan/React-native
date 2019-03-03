import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native"

class Comment extends Component{
    render(){
        return (
            <View>
            <View style = {styles.container}>
                <Text>Commments aform</Text>
            </View>
            <View>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    value={'Name'}
                    text='Write your name here'
                />
            </View>
            <View>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    value={'Student / other'}
                    text='Who are you'
                />
            </View>
            <View>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    value={'comment'}
                />
            </View>
            </View>
        );
    }
}

export default Comment;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    textinput:{
     height:40,
     borderColor:'gray',
     borderWidth:1   
    }
})