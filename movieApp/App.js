/**
 * Movie app
 * https://github.com/facebook/react-native
 * @flow
 */

//dependecies
import React, { Component } from "react";
// import { Platform, StyleSheet, Text, View } from "react-native";
// import LinearGradient from "react-native-linear-gradient";
// import { ORANGE, PINK, WHITE } from "./styles";
import { createStackNavigator } from "react-navigation";
import Welcome from "./src/screens/welcome";
import MovieList from "./src/screens/movieList";

// provides a way to redenr contet for andropid and ios
//

const RootStack = createStackNavigator({
  welcome: {
    screen: Welcome,
    navigationOptions: {
      header: null
    }
  },
  movieList: {
    screen: MovieList,
    navigationOptions: {
      header: null
    }
  }
});
export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
