import React, {Component} from 'react';
import { View,FlatList, StyleSheet, Text } from 'react-native';
import CustomRow from './CustomRow';


class CustomListView extends Component{
    constructor(props) {
        super(props); 
    }

    render(){
        return(
        <View style={styles.container}>
            <FlatList
                data={this.props.itemList}
                renderItem={
                    ({ item }) => 
                        <CustomRow
                            itemKey={item.key}
                            title={item.title}
                            description={item.description}
                            deleteAction={this.props.deleteLocationAction}
                            navigateAction={this.props.navigateLocationAction}
                        />
                    }
            />

        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default CustomListView;

// from the screen to the list view
// you use props for that, and then we access that
// we can pass in the list there