import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Dimensions
} from 'react-native';

import axios from 'axios';
import { connect } from 'react-redux';
import { fetchAll } from '../../actions';

const _margin = 30;
const _borderRadius = 8;
const _width = Dimensions.get('window').width - _margin * 2;
const _height = 70;

class NewClass extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            desc: '',
            color: '#E8384F'
        };
    }

    _createNewClass = async () => {
        try {
            const response = await axios.post(
                'http://127.0.0.1:8080/fileManage/createCourse',
                {
                    desc: this.state.title,
                    color: this.state.color,
                    name: this.state.desc
                }
            );
            await this.props.fetchAll();
            await console.log(response.data);
            await this.props.navigation.goBack();
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity
                        style={styles.returnButton}
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <Text style={styles.returnButtonText}>Return</Text>
                    </TouchableOpacity>

                    <Text style={styles.header}>New Class</Text>

                    <TouchableOpacity
                        style={styles.nextButton}
                        onPress={this._createNewClass}
                    >
                        <Text style={styles.nextButtonText}>Create</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={[
                        styles.demoContainer,
                        { backgroundColor: this.state.color }
                    ]}
                >
                    <View>
                        <Text style={styles.demoTitle}>
                            {this.state.desc || 'Course Number'}
                        </Text>
                        <Text style={styles.demoDesc}>
                            {this.state.title || 'Course Description'}
                        </Text>
                    </View>
                </TouchableOpacity>

                <TextInput
                    style={styles.titleInput}
                    placeholder="Title"
                    onChangeText={desc => this.setState({ desc })}
                    value={this.state.desc}
                    returnKeyType="next"
                    onSubmitEditing={() => {
                        this.secondTextInput.focus();
                    }}
                    blurOnSubmit={false}
                    autoFocus={true}
                />

                {/* <Image
                    style={styles.image}
                    source={{
                        uri:
                            'https://upload.wikimedia.org/wikipedia/en/3/33/Silicon_valley_title.png'
                    }}
                /> */}

                <TextInput
                    ref={input => {
                        this.secondTextInput = input;
                    }}
                    style={styles.descInput}
                    placeholder="Description"
                    onChangeText={title => this.setState({ title })}
                    value={this.state.title}
                    //multiline={true}
                />

                <View style={styles.paletteContainer}>
                    <TouchableOpacity
                        style={[styles.palette, { backgroundColor: '#E8384F' }]}
                        onPress={() => this.setState({ color: '#E8384F' })}
                    />
                    <TouchableOpacity
                        style={[styles.palette, { backgroundColor: '#EA4E9D' }]}
                        onPress={() => this.setState({ color: '#EA4E9D' })}
                    />
                    <TouchableOpacity
                        style={[styles.palette, { backgroundColor: '#FD612C' }]}
                        onPress={() => this.setState({ color: '#FD612C' })}
                    />
                    <TouchableOpacity
                        style={[styles.palette, { backgroundColor: '#FD9A00' }]}
                        onPress={() => this.setState({ color: '#FD9A00' })}
                    />
                    <TouchableOpacity
                        style={[styles.palette, { backgroundColor: '#EECC16' }]}
                        onPress={() => this.setState({ color: '#EECC16' })}
                    />
                    <TouchableOpacity
                        style={[styles.palette, { backgroundColor: '#FFDD2B' }]}
                        onPress={() => this.setState({ color: '#FFDD2B' })}
                    />
                </View>

                <View style={styles.paletteContainer}>
                    <TouchableOpacity
                        style={[styles.palette, { backgroundColor: '#62BB35' }]}
                        onPress={() => this.setState({ color: '#62BB35' })}
                    />
                    <TouchableOpacity
                        style={[styles.palette, { backgroundColor: '#37A862' }]}
                        onPress={() => this.setState({ color: '#37A862' })}
                    />
                    <TouchableOpacity
                        style={[styles.palette, { backgroundColor: '#20AAEA' }]}
                        onPress={() => this.setState({ color: '#20AAEA' })}
                    />
                    <TouchableOpacity
                        style={[styles.palette, { backgroundColor: '#4186E0' }]}
                        onPress={() => this.setState({ color: '#4186E0' })}
                    />
                    <TouchableOpacity
                        style={[styles.palette, { backgroundColor: '#7A6FF0' }]}
                        onPress={() => this.setState({ color: '#7A6FF0' })}
                    />
                    <TouchableOpacity
                        style={[styles.palette, { backgroundColor: '#AA62E3' }]}
                        onPress={() => this.setState({ color: '#AA62E3' })}
                    />
                </View>
            </View>
        );
    }
}

export default connect(
    null,
    { fetchAll }
)(NewClass);

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
        marginTop: -2.5
        //marginTop: 5,
        //marginBottom: 2
    },
    descInput: {
        borderWidth: 0,
        fontFamily: 'Avenir Next',
        fontWeight: '500',
        fontSize: 18,
        //marginTop: 2,
        marginBottom: 12.5
    },
    image: {
        height: 200,
        borderRadius: 10
    },
    demoContainer: {
        width: _width,
        height: _height,
        borderRadius: _borderRadius,
        marginTop: 15,
        marginBottom: 10,

        shadowOpacity: 0.125,
        shadowRadius: 5,
        shadowColor: 'black',
        shadowOffset: { height: 2, width: 2 }
    },
    demoTitle: {
        fontSize: 20,
        fontFamily: 'Avenir Next',
        color: 'white',
        fontWeight: '600',
        margin: 10,
        marginBottom: 0
    },
    demoDesc: {
        fontSize: 14,
        fontFamily: 'Avenir Next',
        color: 'white',
        marginLeft: 10,
        marginRight: 10,
        fontWeight: '600'
    },
    paletteContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        //paddingHorizontal: '6%',
        paddingTop: '4%'
    },
    palette: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: 'red'
    }
});
