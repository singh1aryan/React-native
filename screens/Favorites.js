import React, { Component } from "react";
import { StyleSheet, Alert, View, ScrollView } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addFavoriteLocation } from "../reducers/FavoriteLocationsAction";
import AccessibleDrawerHeading from "../components/AccessibleDrawerHeading";
import globalStyles from "../utils/GlobalStyles";
import CustomListview from '../components/CustomListView';
import AccessibleSearchbar from "../components/AccessibleSearchbar";
import AccessibleButton from "../components/AccessibleButton";

class FavoritesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Favorites",
      screenName: "FavoritesScreen",
      keyCount: 3,
      dataList: [{
          key: "1",
          title: 'Integrative Learning Center',
          description: 'I LOVE THE AWAY APP',
        },
        {
          key: "2",
          title: 'Mullins Center',
          description: 'Hockey, Basketball, and Concerts'  
        },
        {
          key: "3",
          title: 'LGRC',
          description: 'Library, classrooms',  
        }],
    };
  }

  deleteLocation(deleteKey){
    const currState = this.state;
    const favoritesList = currState.dataList;
    currState.dataList = favoritesList.filter(dataItem => dataItem.key !== deleteKey)
    this.setState(currState)
  }
  
  navigateLocation(){
    Alert.alert('You pressed to navigate to this location')
  }

  addLocation(){
    Alert.alert("add a location")
  }

 /* Return object for populate the list */
 /* We can get the data here from Arc Gis
    name, description, navigation, 
 */
  render() {
    return (
      <View style={globalStyles.screenContainer}>
        {/* Header */}
        <AccessibleDrawerHeading
          level="1"
          text={this.state.titleText}
          drawerAction={this.props.navigation.openDrawer}
        />
        <AccessibleSearchbar 
            placeholder="Search for Favorites" 
            buttonTitle="Search"
            textInputLabel="Favorite search input field"
            buttonLabel="Search for Favorites"
          />
        <CustomListview
          itemList={this.state.dataList}
          deleteLocationAction={this.deleteLocation.bind(this)}
          navigateLocationAction={this.navigateLocation}
        />
         
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ScrollViewContainer: {
    flex: 1,
    height: 200,
  },
});

// Redux
const mapStateToProps = state => {
  const { favoriteLocations } = state;
  return { favoriteLocations };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addFavoriteLocation }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritesScreen);
