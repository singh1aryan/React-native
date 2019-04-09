import React, { Component } from "react";
import { StyleSheet, Alert, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addFavoriteLocation } from "../reducers/FavoriteLocationsAction";
import AccessibleDrawerHeading from "../components/AccessibleDrawerHeading";
import globalStyles from "../utils/GlobalStyles";
import globalProps from '../utils/GlobalProps';
import AccessibleSearchbar from "../components/AccessibleSearchbar";
import AccessibleButton from "../components/AccessibleButton";
import LocationListView from "../components/LocationListView";
import FavoriteLocations from "../components/FavoriteLocations";


class FavoritesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Favorites",
      screenName: "FavoritesScreen",
      dataList: [],
      modalVisible: false,
    };
  }

  deleteLocation(deleteKey){
    const currState = this.state;
    const favoritesList = currState.dataList;
    currState.dataList = favoritesList.filter(dataItem => dataItem.key !== deleteKey)
    this.setState(currState)
  }
  
  navigateLocation(){
    // this.props.navigation.navigate("Map")
    Alert.alert('Hi')
  }

  setModalVisible(visible) {
    const currState = this.state
    currState.modalVisible = visible
    this.setState(currState);
  }

  addFavorites(selectedFavoritesList) {
    const currState = this.state;
    const oldFavoritesList = currState.dataList;
    const newFavoritesList = Array.from(new Set(oldFavoritesList.concat(selectedFavoritesList)));
    currState.dataList = newFavoritesList
    this.setState(currState)
  }

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
        <LocationListView 
          itemList={this.state.dataList}
          deleteLocationAction={this.deleteLocation.bind(this)}
          navigateLocationAction={this.navigateLocation.bind(this)}
        />
        <FavoriteLocations
          modalVisibility={this.state.modalVisible}
          addFavoritesAction={this.addFavorites.bind(this)}
          setModalVisibleAction={this.setModalVisible.bind(this)}
        />
        <View style={styles.addButton}>
          <AccessibleButton onPress={() => this.setModalVisible(true)}
            titleText="Add Favorites"
            titleColor="black"
          />
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addButton: {
    margin:10,
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
