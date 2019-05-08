import React, { Component } from "react"
import { StyleSheet, Alert, View } from "react-native"
// redux stuff
import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from "redux"

// screen to get the favorite locations
export interface Props {
  navigation: {
    openDrawer: () => void
    navigate: Function
  },
  favoriteLocations: {
    locations: Location[]
  }
}
export interface State {
  titleText: string
  screenName: string
  favoritesList: FavoriteLocation[]
  modalVisible: boolean
  searchbarValue: string
}

export interface FavoriteLocation{
  title: string
  description: string
  key: string
}

class FavoritesScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      titleText: "Favorites",
      screenName: "FavoritesScreen",
      favoritesList: [],
      modalVisible: false,
      searchbarValue: ""
    }
    this.onChangeSearchbar.bind(this)
  }

  onChangeSearchbar(value: string){
    this.setState({
      searchbarValue: value
    })
  }

  deleteLocation(deleteKey: string){
    this.setState({
      favoritesList: this.state.favoritesList.filter(dataItem => dataItem.key !== deleteKey)
    })
  }
  
  navigateLocation(){
    // this.props.navigation.navigate("Map")
    Alert.alert('Hi')
  }

  setModalVisible(visible: boolean) {
    this.setState({
      modalVisible: visible
    })
  }

  checkDuplicateKeys(list1: FavoriteLocation[], key:string){
    
  }

  // remove duplicates from list
  // we check for duplicate keys, and add new keys(location) only if not present in the old favorite list
  addFavorites(selectedFavoritesList: FavoriteLocation[]) {
    const oldFavoritesList = this.state.favoritesList
    const oldKeys: string[] =  []
    for(let i=0; i<oldFavoritesList.length;i++){
      oldKeys.push(oldFavoritesList[i].key)
    }
    for(let i=0; i<selectedFavoritesList.length;i++){
      if(oldKeys.indexOf(selectedFavoritesList[i].key) == -1){
        oldFavoritesList.push(selectedFavoritesList[i]);
      }
    }

    this.setState({
      favoritesList: oldFavoritesList
    })
  }

  render() {
    return (
//       <View style={globalStyles.screenContainer}>
//         <View>
//           {/* Header */}
//           <AccessibleDrawerHeading
//             // level="1"
//             text={this.state.titleText}
//             backgroundColor={globalProps.headerBackgroundColor}
//             drawerAction={this.props.navigation.openDrawer}
//           />
//         </View>
//         <AccessibleSearchbar 
//           placeholder="Search for Favorites" 
//           buttonTitle="Search"
//           textInputLabel="Favorite search input field"
//           buttonLabel="Search for Favorites"
//           value={this.state.searchbarValue}
//           onChangeText={(value: string) => this.onChangeSearchbar(value)}
//         />
//         <LocationListView 
//           itemList = {this.state.favoritesList}
//           deleteLocationAction = {this.deleteLocation.bind(this)}
//           navigateLocationAction = {this.navigateLocation.bind(this)}
//         />
//         <FavoriteLocationsModal
//           modalVisibility={this.state.modalVisible}
//           addFavoritesAction={this.addFavorites.bind(this)}
//           setModalVisibleAction={this.setModalVisible.bind(this)}
//         />
//         <View style={styles.addButton}>
//           <AccessibleButton 
//             title="Add Favorites"
//             style={globalStyles.button}
//             textStyle={globalStyles.buttonText}
//             onPress={() => this.setModalVisible(true)}
//           />
//         </View>
//       </View>
//     )
//   }
// }

const styles = StyleSheet.create({
  addButton: {
    margin:10,
  },
})

// Redux
// const mapStateToProps = (state: {favoriteLocations: {locations: [Location]}}) => {
//   const { favoriteLocations } = state
//   return { favoriteLocations }
// }

// const mapDispatchToProps = (dispatch: Dispatch) =>
//   bindActionCreators({ addFavoriteLocation }, dispatch)

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(FavoritesScreen)
