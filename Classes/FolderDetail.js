import React, { Component } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Image,
    Modal
} from 'react-native';

import ImageViewer from 'react-native-image-zoom-viewer';

import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { fetchAll } from '../../actions';

const images = [
    {
        url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'
    }
];

class FolderDetail extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title', ''),
            headerRight: (
                <TouchableOpacity
                    style={{ paddingRight: 10 }}
                    onPress={() => {
                        navigation.navigate('Camera', {
                            _foldersIndex: navigation.getParam('_foldersIndex'),
                            _foldersID: navigation.getParam('_foldersID')
                        });
                    }}
                >
                    <Ionicons name="ios-add" color="#007AFF" size={36} />
                </TouchableOpacity>
            )
        };
    };

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    //width: '86%',
                    //marginLeft: '14%',
                    width: '100%',
                    backgroundColor: '#CED0CE'
                }}
            />
        );
    };

    state = {
        visible: false
    };

    render() {
        const { navigation } = this.props;

        const _classIndex = navigation.getParam('_classIndex');
        const _foldersIndex = navigation.getParam('_foldersIndex');

        const imageUrl = 'http://127.0.0.1:8080/fileManage/image/';

        console.log('DATA IS ________');
        console.log(_classIndex + ' ' + _foldersIndex);
        console.log(
            this.props.all[_classIndex].folders[_foldersIndex].documents
        );

        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.searchBar}
                    // value={this.state.searchText}
                    // onChange={this.setSearchText.bind(this)}
                    placeholder="Search State"
                />

                <Modal visible={this.state.visible} transparent={true}>
                    <ImageViewer
                        imageUrls={this.state.images}
                        renderFooter={() => {
                            return (
                                <View>
                                    <Text
                                        style={{
                                            fontFamily: 'Avenir Next',
                                            fontWeight: '500',
                                            color: 'white'
                                        }}
                                    >
                                        {this.state.content}
                                    </Text>
                                </View>
                            );
                        }}
                        footerContainerStyle={{
                            bottom: 30,
                            position: 'absolute',
                            left: 20,
                            height: 150
                        }}
                        onDoubleClick={() => {
                            this.setState({ visible: false });
                        }}
                        renderHeader={() => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        this.setState({ visible: false });
                                    }}
                                >
                                    <Image
                                        style={{
                                            position: 'absolute',
                                            top: 50,
                                            left: 30,
                                            height: 30,
                                            width: 30
                                        }}
                                        source={require('../../assets/back.png')}
                                    />
                                </TouchableOpacity>
                            );
                        }}
                    />
                </Modal>

                <FlatList
                    style={styles.listContainer}
                    data={
                        this.props.all[_classIndex].folders[_foldersIndex]
                            .documents
                    }
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => {
                                console.log('DATA IS ________');
                                console.log(item);
                                console.log(imageUrl + item.image);
                                this.setState({
                                    visible: true,
                                    images: [
                                        {
                                            url: imageUrl + item.image
                                        }
                                    ],
                                    content: item.content
                                });
                            }}
                        >
                            <Image
                                style={styles.thumbnail}
                                source={{ uri: imageUrl + item.image }}
                            />
                            <Text style={styles.itemTitle}>{item.title}</Text>
                            <Text style={styles.itemDesc}>{item.desc}</Text>
                        </TouchableOpacity>
                    )}
                    ItemSeparatorComponent={this.renderSeparator}
                    // Virtualize list
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
)(FolderDetail);

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
    itemTitle: {
        position: 'absolute',
        marginLeft: 80,
        marginTop: 15,
        fontFamily: 'Avenir Next',
        fontWeight: '600',
        fontSize: 18
    },
    itemDesc: {
        position: 'absolute',
        marginLeft: 80,
        marginTop: 40,
        fontFamily: 'Avenir Next',
        fontWeight: '500',
        fontSize: 18
    },
    searchBar: {
        //borderWidth: 1,
        height: 40,
        fontFamily: 'Avenir Next',
        fontSize: 16,
        fontWeight: '500',
        paddingLeft: 12
    },
    thumbnail: {
        margin: 15,
        width: 50,
        height: 75
    }
});
