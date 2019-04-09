import React, { 
    Component,
    } from 'react';
import {
    TextInput
} from 'react-native';

class AccessibleTextInput extends Component{
    constructor(props) {
        super(props);
    }
    
    render() {

        return (
            <TextInput
                style={styles.commentInput}
                autoFocus={false}
                blurOnSubmit={true}
                enablesReturnKeyAutomatically={true}
                multiline={true}
                onChangeText={(commentText) => this.setState({commentText})}
                onKeyPress={this.onKeyPress}
                returnKeyType='done'
                value={this.state.commentText}
                backgroundColor={"white"}
                onSubmitEditing={this.submitCommentHandler}
                placeholder={"Enter a comment..."}
                accessible={true}
                accessibilityLabel={"Comment text input box"}
                accessibilityHint={"Enter a comment regard the barrier you are reporting"}
            />
        );
    }

}    

export default AccessibleTextInput;