import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Platform,
    StyleSheet
} from 'react-native';
import TagInput from 'react-native-tag-input';

const inputProps = {
    keyboardType: 'default',
    autoFocus: false,
    style: {
        fontFamily: 'Avenir Next',
        fontSize: 16,
        fontWeight: '500',
        marginVertical: Platform.OS == 'ios' ? 4 : -2
    }
};

const scrollViewProps = {
    scrollEnabled: true
};

class TagsInput extends Component {
    state = {
        tags: [],
        text: ''
    };

    onChangeText = text => {
        this.setState({ text });

        const lastTyped = text.charAt(text.length - 1);
        const parseWhen = [',', ' ', ';', '\n'];

        if (parseWhen.indexOf(lastTyped) > -1) {
            this.setState({
                tags: [...this.state.tags, this.state.text],
                text: ''
            });
        }
    };

    render() {
        return (
            <View style={{ flex: 1, marginTop: 5 }}>
                <View
                    style={{
                        height: 500
                    }}
                >
                    <TagInput
                        value={this.state.tags}
                        onChange={tags => this.setState({ tags })}
                        labelExtractor={tag => tag}
                        text={this.state.text}
                        onChangeText={this.onChangeText}
                        inputProps={inputProps}
                        tagContainerStyle={styles.tagContainer}
                        tagTextStyle={styles.tagText}
                        scrollViewProps={scrollViewProps}
                    />
                </View>

                <TouchableOpacity
                    onPress={() => {
                        this.setState({
                            tags: [...this.state.tags],
                            text: this.state.text
                        });
                        console.log('Current tags:');
                        console.log(this.state.tags);
                        console.log('Current text:');
                        console.log(this.state.text);
                    }}
                />
            </View>
        );
    }
}

export default TagsInput;

const styles = StyleSheet.create({
    tagContainer: {
        backgroundColor: '#EFEFEF',
        borderRadius: 15,
        paddingTop: 5,
        paddingBottom: 7,
        height: 30,
        marginTop: 0,
        marginBottom: 5
    },
    tagText: {
        fontFamily: 'Avenir Next',
        fontSize: 16,
        fontWeight: '500',
        color: 'black'
    }
});
