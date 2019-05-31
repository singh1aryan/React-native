import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Camera, ImagePicker, Permissions } from 'expo';

class CameraScreen extends Component {
    state = {
        image: null,
        hasCameraRollPermission: null,
        hasCameraPermission: null,
        type: Camera.Constants.Type.back
    };

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    _snap = async () => {
        console.log('TEST');
        if (this.camera) {
            let photo = await this.camera.takePictureAsync({ base64: true });
            await this.setState({ photo: photo });

            // var file = this._dataURItoBlob(photo.uri);
            // const f = new File([file], 'haha.jpg');
            // console.log(f);

            this.props.navigation.navigate('Photo', {
                photo: this.state.photo,
                _foldersIndex: this.props.navigation.getParam('_foldersIndex'),
                _foldersID: this.props.navigation.getParam('_foldersID')
            });
        } else {
            console.log('not a cam');
        }
    };

    _pickImage = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        await this.setState({ hasCameraRollPermission: status === 'granted' });

        let photo = await ImagePicker.launchImageLibraryAsync({ base64: true });

        console.log(photo);

        await this.setState({ photo: photo });

        this.props.navigation.navigate('Photo', {
            photo: this.state.photo,
            _foldersIndex: this.props.navigation.getParam('_foldersIndex'),
            _foldersID: this.props.navigation.getParam('_foldersID')
        });
    };

    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return (
                <View>
                    <Text>No access to camera</Text>
                    <Text>Head to settings and free us!</Text>
                </View>
            );
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <Camera
                        style={{ flex: 1 }}
                        type={this.state.type}
                        ref={ref => {
                            this.camera = ref;
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                flexDirection: 'row'
                            }}
                        >
                            {/* return button */}
                            <TouchableOpacity
                                style={{
                                    //alignSelf: 'flex-start',
                                    //alignItems: 'center',
                                    position: 'absolute'
                                }}
                                onPress={() => {
                                    this.props.navigation.goBack();
                                }}
                            >
                                <Image
                                    style={{
                                        height: 30,
                                        width: 30,
                                        marginTop: 60,
                                        marginLeft: 30
                                    }}
                                    source={require('../../assets/back.png')}
                                />
                            </TouchableOpacity>

                            {/* Camera roll */}
                            <TouchableOpacity
                                style={{
                                    position: 'absolute',
                                    left: 80,
                                    bottom: 50
                                }}
                                onPress={() => {
                                    this._pickImage();
                                }}
                            >
                                <Image
                                    style={{
                                        height: 40,
                                        width: 40
                                    }}
                                    source={require('../../assets/album.png')}
                                />
                            </TouchableOpacity>

                            {/* Snap */}
                            <TouchableOpacity
                                style={{
                                    position: 'absolute',
                                    alignSelf: 'center',
                                    left:
                                        Dimensions.get('window').width / 2 - 30,
                                    bottom: 40
                                }}
                                onPress={() => {
                                    this._snap();
                                }}
                            >
                                <Image
                                    style={{
                                        height: 60,
                                        width: 60
                                    }}
                                    source={require('../../assets/snap.png')}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{
                                    position: 'absolute',
                                    right: 80,
                                    bottom: 50
                                }}
                                onPress={() => {
                                    this.setState({
                                        type:
                                            this.state.type ===
                                            Camera.Constants.Type.back
                                                ? Camera.Constants.Type.front
                                                : Camera.Constants.Type.back
                                    });
                                }}
                            >
                                <Image
                                    style={{
                                        height: 40,
                                        width: 40
                                    }}
                                    source={require('../../assets/reverse.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </Camera>
                </View>
            );
        }
    }
}

export default CameraScreen;
