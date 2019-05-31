import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

const _margin = 30;
const _borderRadius = 8;
const _width = Dimensions.get('window').width - _margin * 2;
const _height = 70;

class ListCard extends Component {
    render() {
        const {
            title,
            color,
            desc,
            key,
            classIndex,
            classID,
            folders
        } = this.props;
        return (
            <TouchableOpacity
                style={[styles.container, { backgroundColor: color }]}
                onPress={() => {
                    this.props.navigation.navigate('Class', {
                        title,
                        color,
                        desc,
                        key,
                        folders,
                        classID,
                        classIndex
                    });
                }}
            >
                <View style={styles.cover}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.desc}>{desc}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const mapStateToProps = state => ({
    all: state.all
});

//export default withNavigation(ListCard)
export default withNavigation(connect(mapStateToProps)(ListCard));

const styles = StyleSheet.create({
    container: {
        width: _width,
        height: _height,
        borderRadius: _borderRadius,
        marginTop: 15,

        shadowOpacity: 0.125,
        shadowRadius: 5,
        shadowColor: 'black',
        shadowOffset: { height: 2, width: 2 }
    },
    cover: {},
    title: {
        fontSize: 20,
        fontFamily: 'Avenir Next',
        color: 'white',
        fontWeight: '600',
        margin: 10,
        marginBottom: 0
    },
    desc: {
        fontSize: 14,
        fontFamily: 'Avenir Next',
        color: 'white',
        marginLeft: 10,
        marginRight: 10,
        fontWeight: '600'
    }
});
