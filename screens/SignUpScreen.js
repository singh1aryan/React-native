import React, { Component } from 'react';
import {
    View,
    SafeAreaView,
    Text,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    TextInput,
    ScrollView
} from 'react-native';

class SignUpScreen extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <KeyboardAvoidingView
                    behavior="padding"
                    style={styles.container}
                >
                    <ScrollView
                        vertical={true}
                        showsVerticalScrollIndicator={false}
                    >
                        <Text style={styles.text}>Create your account</Text>
                        <Text style={styles.inputHeader}>NAME</Text>
                        <TextInput
                            placeholder="Name"
                            placeholderTextColor="grey"
                            fontFamily="Avenir Next"
                            returnKeyType="next"
                            onSubmitEditing={() => this.emailInput.focus()}
                            style={styles.input}
                        />
                        <Text style={styles.inputHeader}>EMAIL</Text>
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor="grey"
                            fontFamily="Avenir Next"
                            keyboardType="email-address"
                            returnKeyType="next"
                            ref={input => (this.emailInput = input)}
                            onSubmitEditing={() => this.passwordInput.focus()}
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.input}
                        />
                        <Text style={styles.inputHeader}>PASSWORD</Text>
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor="grey"
                            fontFamily="Avenir Next"
                            returnKeyType="next"
                            secureTextEntry
                            style={styles.input}
                            ref={input => (this.passwordInput = input)}
                            onSubmitEditing={() =>
                                this.passwordConfirmInput.focus()
                            }
                        />
                        <Text style={styles.inputHeader}>CONFIRM PASSWORD</Text>
                        <TextInput
                            placeholder="Confirm Password"
                            placeholderTextColor="grey"
                            fontFamily="Avenir Next"
                            returnKeyType="go"
                            secureTextEntry
                            style={styles.input}
                            ref={input => (this.passwordConfirmInput = input)}
                        />

                        {/* !Post Call */}

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => navigate('Classes')}
                            >
                                <Text style={styles.buttonText}>Lets go!</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    text: {
        fontSize: 34,
        fontWeight: '700',
        fontFamily: 'Avenir Next',
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: 100
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: '#62BB35',
        paddingVertical: 15,
        width: 200,
        borderRadius: 30,
        marginBottom: 40,
        marginLeft: 70,
        marginRight: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontFamily: 'Avenir Next',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputHeader: {
        color: 'black',
        fontSize: 15,
        fontFamily: 'Avenir Next',
        marginBottom: 10
    },
    input: {
        height: 40,
        backgroundColor: '#F2F2F2',
        marginBottom: 20,
        color: 'grey',
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
