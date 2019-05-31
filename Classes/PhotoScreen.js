import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Platform
} from 'react-native';

import TagInput from 'react-native-tag-input';
import axios from 'axios';

import { connect } from 'react-redux';
import { fetchAll } from '../../actions';

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

class PhotoScreen extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            desc: '',
            tags: [],
            text: ''
        };
    }

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

    _createDocument = async () => {
        const foldersID = this.props.navigation.getParam('_foldersID');
        const base64PathImage = `data:image/png;base64,${
            this.props.navigation.getParam('photo').base64
        }`;

        var imagePost = new FormData();

        imagePost.append('image', base64PathImage);

        var imageText;

        await axios
            .post('http://127.0.0.1:8080/processImage', imagePost, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(res => {
                imageText = res.data;
            });

        var formData = new FormData();

        formData.append('title', this.state.title);
        formData.append('desc', this.state.desc);
        formData.append('content', imageText);
        formData.append('tags', this.state.tags.join(' '));
        formData.append('image', base64PathImage);

        console.log('FORM DATA IS');
        console.log(formData);
        try {
            await axios.post(
                'http://127.0.0.1:8080/fileManage/addDocument/' + foldersID,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );
            await this.props.fetchAll();
            this.props.navigation.pop(2);
        } catch (err) {
            console.log(err);
        }
    };

    render() {
        const photo = this.props.navigation.getParam('photo', null);
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity
                        style={styles.returnButton}
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <Text style={styles.returnButtonText}>Return</Text>
                    </TouchableOpacity>

                    <Text style={styles.header}>New Note</Text>

                    <TouchableOpacity
                        style={styles.nextButton}
                        onPress={() => this._createDocument()}
                    >
                        <Text style={styles.nextButtonText}>Create</Text>
                    </TouchableOpacity>
                </View>
                <TextInput
                    style={styles.titleInput}
                    placeholder="Title"
                    onChangeText={title => this.setState({ title })}
                    value={this.state.title}
                    returnKeyType="next"
                    onSubmitEditing={() => {
                        this.secondTextInput.focus();
                    }}
                    blurOnSubmit={false}
                    autoFocus={true}
                />
                <Image style={styles.image} source={{ uri: photo.uri }} />
                <TextInput
                    ref={input => {
                        this.secondTextInput = input;
                    }}
                    style={styles.descInput}
                    placeholder="Description"
                    onChangeText={desc => this.setState({ desc })}
                    value={this.state.desc}
                    //multiline={true}
                />

                {/* Tags */}
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
            </View>
        );
    }
}

export default connect(
    null,
    { fetchAll }
)(PhotoScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        paddingTop: 45,
        backgroundColor: '#FFFFFF'
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center', // horizontal center,
        marginBottom: 15
    },
    header: {
        fontFamily: 'Avenir Next',
        fontSize: 22,
        fontWeight: '600'
    },
    nextButton: {
        backgroundColor: '#EFEFEF',
        position: 'absolute',
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 100,
        top: 0,
        right: 0
    },
    nextButtonText: {
        fontFamily: 'Avenir Next',
        fontSize: 16,
        fontWeight: '600'
    },
    returnButton: {
        backgroundColor: '#EFEFEF',
        position: 'absolute',
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 100,
        top: 0,
        left: 0
    },
    returnButtonText: {
        fontFamily: 'Avenir Next',
        fontSize: 16,
        fontWeight: '600'
    },
    titleInput: {
        height: 40,
        borderWidth: 0,
        fontFamily: 'Avenir Next',
        fontWeight: '600',
        fontSize: 20,
        marginTop: -2.5,
        marginBottom: 5
    },
    descInput: {
        borderWidth: 0,
        fontFamily: 'Avenir Next',
        fontWeight: '500',
        fontSize: 18,
        marginTop: 10
    },
    image: {
        height: 200,
        borderRadius: 10
    },
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
