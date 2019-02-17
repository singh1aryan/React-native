import React from 'react';
import { Animated, Text, View } from 'react-native';
// import React from 'react';
// import { Animated, StyleSheet, Text, View } from 'react-native';
class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 5000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

export default class App extends React.Component {// react.component vs component
  // constructor(props){
  // super(props);
  // this.animatedValue = new Animated.Value(0.5);
  // this.animatedValue2 = new Animated.Value(0);
  // }
  // state = {
  //   value: new Animated.Value(0),
  // };
  // // to value is like the scale
  // componentDidMount(){
  //   Animated.timing(this.state.value, {toValue: 1,duration: 10000}).start();
  // }
  render() {
    // const scale = this.state.value;
    return (
      // <View style={styles.container}>
      // <Animated.View style = {{transform: [{scale}]}}>
      //   <Text style={styles.paragraph}>
      //   Open up App.js to start working on your app!
      //   </Text>   
      //   </Animated.View>
      //   </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
               <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
                 <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Loading ... </Text>
               </FadeInView>
      </View>
    );
  }


}
// componentDidMount() {
//   Animated.spring(this.animatedValue, {
//     toValue: 1,
//     friction: 4,
//     delay: 2500,
//    useNativeDriver: true,
//   }).start();

//   Animated.timing(this.animatedValue2, {
//     toValue: 1,
//     delay: 200,
//     duration: 3000,
//    useNativeDriver: true,
//   }).start();
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#0277BD"
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: "center",
//     margin: 10
//   },
//   paragraph: {
//     fontSize: 20,
//     textAlign: "center",
//     margin: 30
//   }
  // instructions: {
  //   textAlign: "center",
  //   color: "#333333",
  //   marginBottom: 5
  // },
  // ring: {
  //   backgroundColor: "#40C4FF",
  //   borderRadius: 150,
  //   borderWidth: 2,
  //   borderColor: "#FFF",
  //   padding: 7
  // },
  // starStyle: {
  //   width: 100,
  //   height: 20,
  //   marginBottom: 20
  // }
// });

// const truckStyle = {
//   transform: [{ scale: this.animatedValue }]
// };

// const scaleText = {
//   transform: [{ scale: this.animatedValue2 }]
// };


  //     <LinearGradient
  //       colors={[
  //         "#00FFFF",
  //         "#17C8FF",
  //         "#329BFF",
  //         "#4C64FF",
  //         "#6536FF",
  //         "#8000FF"
  //       ]}
  //       style={styles.container}
  //     >
  // <Animated.View style={[styles.ring, truckStyle]}>
  //         <Animated.Image
  //           source={require("./img/Track.png")}
  //           style={[
  //             {
  //               resizeMode: "contain",
  //               width: 200,
  //               height: 200
  //             }
  //           ]}
  //         />
  // </Animated.View>

  // <Animated.View
  //    style={[
  //           {
  //             position: "absolute",
  //             bottom: 20,
  //             width: width / 2,
  //             height: 4,
  //             backgroundColor: "#fff",
  //             borderRadius: 2
  //           },
  //           scaleText
  //       ]}
  // />
  // </LinearGradient>