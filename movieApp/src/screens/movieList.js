import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, FlatList } from "react-native";

// import LinearGradient from "react-native-linear-gradient";
import { ORANGE, PINK, WHITE, GREYBG } from "../../styles";
import UpcomingLisItem from "../components/UpcomingLisItem";

// provides a way to redenr contet for andropid and ios
// const instructions = Platform.select({
//   ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
//   android:
//     "Double tap R on your keyboard to reload,\n" +
//     "Shake or press menu button for dev menu"
// });

export default class MovieList extends Component {
  state = {
    upcoming: [
      { id: 0, title: "test0" },
      { id: 1, title: "test1" },
      { id: 2, title: "test2" },
      { id: 3, title: "test3" },
      { id: 4, title: "test4" },
      { id: 5, title: "test5" }
    ]
  };
  keyExtractor = item => {
    `item.id`;
  };
  renderUpcoming = ({ item }) => <UpcomingLisItem data={item} />;
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>MOVIES</Text>
        <FlatList
          data={this.state.upcoming}
          extraData={this.state}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderUpcoming}
          horizontal
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: GREYBG,
    paddingLeft: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginTop: 80
  }
});
