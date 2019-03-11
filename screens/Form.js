import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    Picker
} from "react-native"

class Form extends Component{
    render(){
        return (
            <View style={{margin:20}}>
            <View style = {styles.container}>
                <Text style={{fontSize:25}}>Career Point - Simple form</Text>
            </View>
            <View>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop:10, paddingLeft:5}}
                    value={'Name'}
                    text='Write your name here'
                />
            </View>
            <View>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop:10, paddingLeft:5}}
                    value={'Student / other'}
                    text='Who are you'
                />
            </View>
            <View>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop:10, paddingLeft:5}}
                    value={'Interests...'}
                />
            </View>
            <View>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop:10, paddingLeft:5}}
                    value={'Favorite subjects, checkbox'}
                />
            </View>
            <View>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop:10, paddingLeft:5}}
                    value={'Knowledge of subjects, insert seek bar'}
                />
            </View>
            <View>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop:10, paddingLeft:5}}
                    value={'Preference, salary vs life vs job type'}
                />
            </View>
            <View>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop:10, paddingLeft:5}}
                    value={'Hours every week of work'}
                />
            </View>

            

            </View>
        );
    }
}

export default Form;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginBottom: 40,
    },
    textinput:{
     height:40,
     borderColor:'gray',
     borderWidth:1   
    }
})


// <Picker
//                 selectedValue={this.state.language}
//                 style={{height: 50, width: 100}}
//                 onValueChange={(itemValue, itemIndex) =>
//                     this.setState({language: itemValue})
//                 }>
//             <Picker.Item label="Java" value="java" />
//             <Picker.Item label="JavaScript" value="js" />
//             </Picker>