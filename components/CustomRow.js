import React, {Component} from 'react';
import { View, Alert, Text, TouchableHighlight, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-elements';
import AccessibleButton from '../components/AccessibleButton'
import { TouchableOpacity } from 'react-native-gesture-handler';


class CustomRow extends Component{
    constructor(props) {
        super(props);
    }
    
    render(){
        return(
            <View style={styles.container}>
                {/* <Image source={{ uri: image_url }} style={styles.photo} /> */}
                {/* Star image to show that it is a favorite */}
                {/* <AccessibleButton style = {styles.button}/> */}
                <Image source={{uri: 'http://clipart-library.com/images/6cy5GXj9i.jpg'}}
                    style = {styles.starImage}
                />
                <TouchableOpacity style={styles.container_text} onPress={this.props.navigateAction}>
                    <Text style={styles.title} >
                        {this.props.title}
                    </Text>
                    <Text style={styles.description}>
                        {this.props.description}
                    </Text>
                </TouchableOpacity>
                {/* button to delete, accessible button */}
                <TouchableHighlight onPress={() => this.props.deleteAction(this.props.itemKey)}>
                    <Image 
                        source={{uri:'https://previews.123rf.com/images/arhimicrostok/arhimicrostok1706/arhimicrostok170600362/79549735-trash-can-icon-delete-move-to-trash-clear-the-disk-space-vector-illustration-.jpg'}}
                        style = {styles.deleteButton}
                    />
                </TouchableHighlight>

            </View>     
            );
        }
    }

export default CustomRow;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    title: {
        fontSize: 16,
        color: '#000',
    },
    container_text: {
        flex: 5,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    deleteButton: {
        height: 30,
        width: 30,
        justifyContent: 'center'
    },
    starImage: {
        width: 30, 
        height: 30,
        marginTop: 5
    },
});


/* one way of adding the image to accessible button is
   to make a new component AccessibleButtonD - for delete
   and then add the <Image> inside the touchable Highlight/opacity
*/