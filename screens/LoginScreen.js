import React, { Component } from 'react';
import {
    View,
    SafeAreaView,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Button
} from 'react-native';

import { connect } from 'react-redux';

import { fetchAll } from '../../actions';

class LoginScreen extends Component {
    static navigationOptions = {
        header: null
    };

    componentDidMount() {
        this.props.fetchAll();
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <KeyboardAvoidingView
                    behavior="padding"
                    style={styles.container}
                >
                    <View style={styles.logoContainer}>
                        <Text style={styles.logoGreeting}>
                            Welcome to Skribe.
                        </Text>
                        <Text style={styles.logoText}>
                            Log in to get started!
                        </Text>
                    </View>

                    <View style={styles.inputs}>
                        <TextInput
                            style={styles.titleInput}
                            //placeholder="Email"
                            placeholder="Username"
                            placeholderTextColor="grey"
                            //keyboardType='email-address'
                            returnKeyType="next"
                            onSubmitEditing={() => this.passwordInput.focus()}
                            autoCapitalize="none"
                            autoCorrect={false}
                            blurOnSubmit={false}
                            autoFocus={true}
                        />
                        <TextInput
                            style={styles.titleInput}
                            placeholder="Password"
                            placeholderTextColor="grey"
                            returnKeyType="go"
                            secureTextEntry
                            ref={input => (this.passwordInput = input)}
                            blurOnSubmit={false}
                            autoFocus={true}
                        />
                        {/* <Text style={styles.inputHeader}>
                            Email
                        </Text>
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor='grey'
                            fontFamily='Avenir Next'
                            keyboardType='email-address'
                            returnKeyType="next"
                            onSubmitEditing={() => this.passwordInput.focus()}
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.input}
                        />
                        <Text style={styles.inputHeader}>
                            Password
                        </Text>
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor='grey'
                            fontFamily='Avenir Next'
                            returnKeyType="go"
                            secureTextEntry
                            style={styles.input}
                            ref={(input) => this.passwordInput = input}
                        /> */}

                        {/* !Post Call */}

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.loginButton}
                                onPress={() => {
                                    console.log(this.props.all);
                                    // console.log("before")
                                    // console.log(this.props.all[0].name)
                                    // console.log("after")
                                    navigate('Classes');
                                }}
                            >
                                <Text style={styles.buttonText}>Lets go!</Text>
                            </TouchableOpacity>
                            <Text style={styles.signUpButtonText}>OR</Text>
                            <TouchableOpacity
                                style={styles.signUpButton}
                                onPress={() => navigate('Walkthrough')}
                            >
                                <Text style={styles.buttonText}>Sign up!</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

//export default LoginScreen;

const mapStateToProps = state => ({
    all: state.all
});

// The connect function will store.dispatch(action) behind the screen for us
export default connect(
    mapStateToProps,
    { fetchAll }
)(LoginScreen);

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logoGreeting: {
        textAlign: 'center',
        color: 'black',
        fontSize: 50,
        fontWeight: '700',
        fontFamily: 'Avenir Next'
    },
    logoText: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
        fontFamily: 'Avenir Next'
    },
    inputHeader: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'Avenir Next',
        fontWeight: '500',
        marginLeft: 5
    },
    input: {
        height: 40,
        backgroundColor: '#F5F5F5',
        marginBottom: 30,
        color: 'black',
        paddingHorizontal: 20,
        borderRadius: 5,
        fontWeight: '500',
        marginLeft: 5,
        marginRight: 5
    },
    inputs: {
        marginTop: 40
    },
    buttonContainer: {
        marginTop: 20
    },
    loginButton: {
        backgroundColor: '#E8384F',
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 20,
        marginBottom: 10,
        paddingHorizontal: 20,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    signUpButton: {
        backgroundColor: '#FD612C',
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 20,
        marginBottom: 10,
        paddingHorizontal: 20,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'Avenir Next'
    },
    signUpButtonText: {
        fontFamily: 'Avenir Next',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '500',
        marginBottom: 10,
        color: 'grey'
    },
    titleInput: {
        height: 40,
        borderWidth: 0,
        fontFamily: 'Avenir Next',
        fontWeight: '600',
        fontSize: 20,
        marginVertical: 10
    }
});
