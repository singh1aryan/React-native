import React, { Component } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    AlertIOS
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { fetchAll } from '../../actions';
import axios from 'axios';

class ClassDetail extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title', ''),
            headerRight: (
                <TouchableOpacity
                    style={{ paddingRight: 10 }}
                    onPress={() => {
                        AlertIOS.prompt(
                            'Create New Folder',
                            'Enter title of new folder',
                            text => {
                                axios
                                    .post(
                                        `http://127.0.0.1:8080/fileManage/addFolder/${navigation.getParam(
                                            'classID'
                                        )}`,
                                        {
                                            folderName: text
                                        }
                                    )
                                    .then(res => {
                                        console.log('STARTS REFETCHING');
                                        navigation.state.params.refetch();
                                        console.log('ENDS REFETCHING');
                                    })
                                    .catch(err => {
                                        console.log(err);
                                    });
                            }
                        );
                    }}
                >
                    <Ionicons name="ios-add" color="#007AFF" size={36} />
                </TouchableOpacity>
            )
        };
    };

    componentDidMount() {
        this.props.navigation.setParams({
            classID: this.props.navigation.getParam('classID'),
            refetch: this._refetch
        });
    }

    _refetch = async () => {
        const _classIndex = this.props.navigation.getParam('classIndex');
        console.log('Old state:');
        console.log(this.props.all[_classIndex].folders);
        await this.props.fetchAll();
        console.log('New state:');
        console.log(this.props.all[_classIndex].folders);
    };

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: '100%',
                    backgroundColor: '#CED0CE'
                }}
            />
        );
    };

    render() {
        const { navigation } = this.props;

        const _classIndex = navigation.getParam('classIndex');
        const _folders = navigation.getParam('folders');

        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.searchBar}
                    // value={this.state.searchText}
                    // onChange={this.setSearchText.bind(this)}
                    placeholder="Search State"
                />

                <FlatList
                    style={styles.listContainer}
                    data={this.props.all[_classIndex].folders}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => {
                                console.log(index);
                                console.log(
                                    'HUHU ' +
                                        JSON.stringify(
                                            this.props.all[_classIndex].folders[
                                                index
                                            ]
                                        )
                                );
                                navigation.navigate('Folder', {
                                    _folders,
                                    _classIndex,
                                    _foldersIndex: index,
                                    _foldersID: this.props.all[_classIndex]
                                        .folders[index]._id
                                });
                            }}
                        >
                            <Text style={styles.item} key={index}>
                                {item.folderName}
                            </Text>
                        </TouchableOpacity>
                    )}
                    ItemSeparatorComponent={this.renderSeparator}
                    // VirtualizeList
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    all: state.all
});

export default connect(
    mapStateToProps,
    { fetchAll }
)(ClassDetail);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    listContainer: {
        borderTopWidth: 1,
        borderTopColor: '#CED0CE'
    },
    sectionHeader: {
        paddingTop: 5,
        paddingLeft: 15,
        paddingRight: 10,
        paddingBottom: 5,
        fontSize: 18,
        fontFamily: 'Avenir Next',
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)'
    },
    item: {
        padding: 10,
        paddingLeft: 15,
        fontFamily: 'Avenir Next',
        fontWeight: '500',
        fontSize: 18,
        height: 44
    },
    searchBar: {
        //borderWidth: 1,
        height: 40,
        fontFamily: 'Avenir Next',
        fontSize: 16,
        fontWeight: '500',
        paddingLeft: 12
    }
});
