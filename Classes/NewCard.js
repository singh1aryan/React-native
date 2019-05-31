import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import { withNavigation } from 'react-navigation';

const _margin = 30;
const _borderRadius = 8;
const _width = Dimensions.get('window').width - _margin * 2;
const _height = 50;

class NewCard extends Component {
    render() {
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={() => {
                    this.props.navigation.navigate('NewClass');
                }}
            >
                <View style={styles.cover}>
                    <Text style={styles.title}>New Class</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default withNavigation(NewCard);

const styles = StyleSheet.create({
    container: {
        width: _width,
        height: _height,
        borderRadius: _borderRadius,
        // borderWidth: 5,
        // borderColor: '#8DA3A6',
        backgroundColor: '#F7F7F7',
        marginTop: 15,

        // shadowOpacity: 0.125,
        // shadowRadius: 5,
        // shadowColor: 'black',
        // shadowOffset: { height: 2, width: 2 },

        alignItems: 'center',
        justifyContent: 'center'
    },
    cover: {},
    title: {
        fontSize: 20,
        fontFamily: 'Avenir Next',
        color: '#4A5056',
        fontWeight: '600'
    }
});
