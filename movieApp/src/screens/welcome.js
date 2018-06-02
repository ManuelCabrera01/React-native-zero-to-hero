//dependecies
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { ORANGE, PINK, WHITE } from "../../styles";

// provides a way to redenr contet for andropid and ios
const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class Welcome extends Component {
  componentWillMount() {
    setTimeout(() => {
      this.props.navigation.navigate("movieList");
    }, 4000);
  }

  render() {
    return (
      <LinearGradient colors={[ORANGE, PINK]} style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.welcome}>Movie app!</Text>
        </View>
        <Text style={styles.footer}>copirigth 2018</Text>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 40,
    color: WHITE,
    textAlign: "center",
    margin: 10
  },
  footer: {
    color: WHITE,
    fontSize: 13,
    marginBottom: 20
  },
  wrapper: {
    flex: 1,
    justifyContent: "center"
  }
});
