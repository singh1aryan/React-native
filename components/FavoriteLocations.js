import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Modal
} from 'react-native';
import globalStyles from '../utils/GlobalStyles';
import AccessibleButton from "../components/AccessibleButton";
import AccessibleCheckbox from '../components/AccessibleCheckbox';


class FavoriteLocations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: {
        "location1": 'Location 1',
        "location2": "Location 2",
        "location3": "Location 3",
        "location4": "Location 4",
        "location5": "Location 5",
      },
      checkboxes: [
        { key: 'location1' }, 
        { key: 'location2' }, 
        { key: 'location3' }, 
        { key: 'location4' }, 
        { key: 'location5' }, 
      ],
      checkboxesChecked: {
        "location1": false,
        "location2": false,
        "location3": false,
        "location4": false,
        "location5": false,
      }
    };
  }

  toggleFavoritesCheckbox(checkboxKey) {
    const currState = this.state
    currState.checkboxesChecked[checkboxKey] = !currState.checkboxesChecked[checkboxKey]
    this.setState(currState)
  }

  addFavoritesButtonAction () {

    // for resetting the checkboxesChecked dictionary in state
    const currState = this.state
    const checkboxesCheckedDictionary = currState.checkboxesChecked

    // for adding the selected locations to the state in favorites screen
    const selectedLocationsList = []
    const checkboxesCheckedKeys = Object.keys(this.state.checkboxesChecked)
    for(let i = 0; i < checkboxesCheckedKeys.length; i++){
      const checkboxesCheckedKey = checkboxesCheckedKeys[i];
      if(this.state.checkboxesChecked[checkboxesCheckedKey] === true){
        const selectedLocation = {
          key: this.state.titles[checkboxesCheckedKey],
          title: this.state.titles[checkboxesCheckedKey],
          description: ""
        }
        selectedLocationsList.push(selectedLocation)

        // toggle the check box to be false
        checkboxesCheckedDictionary[checkboxesCheckedKey] = false
      }
    }
    // adds selected locations to favorites screen state
    this.props.addFavoritesAction(selectedLocationsList)
    // set the values of checkboxes to false in the state
    currState.checkboxesChecked = checkboxesCheckedDictionary
    this.setState(currState)
    // closes the modal view
    this.props.setModalVisibleAction(false)
  }

  render() {
    return (
      <View style={styles.container}>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.modalVisibility}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');}}
        >
          <Text style={globalStyles.basicText}>
            Choose your Favorite Locations
          </Text>
          <ScrollView style={styles.scrollViewContainer}>
            {
              this.state.checkboxes.map((item) => (
                <AccessibleCheckbox
                  title={this.state.titles[item.key]}
                  checked={this.state.checkboxesChecked[item.key]}
                  onPress={() =>
                    this.toggleFavoritesCheckbox(item.key)
                  }
                  textStyle={globalStyles.buttonText}
                  containerStyle={styles.item}
                  key={item.key}
                  label={this.state.titles[item.key]}
                  hint="Selects a favorite location to add."
                />
              ))
            }
          </ScrollView>
          <AccessibleButton 
            onPress={() => this.addFavoritesButtonAction()}
            titleText="Add"
            titleColor="black"
          />
        </Modal>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: "center",
  },
  scrollViewContainer: {
    height: 200,
  },
  item: {
    margin: 2,
    padding:8
  }
});

export default FavoriteLocations;
