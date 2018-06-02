import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView
} from "react-native";

// import LinearGradient from "react-native-linear-gradient";
import { ORANGE, PINK, WHITE, GREYBG } from "../../styles";
import UpcomingLisItem from "../components/UpcomingLisItem";
import NowListItem from "../components/NowListItem";

// provides a way to redenr contet for andropid and ios
// const instructions = Platform.select({
//   ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
//   android:
//     "Double tap R on your keyboard to reload,\n" +
//     "Shake or press menu button for dev menu"
// });

export default class MovieList extends Component {
  state = {
    upcoming: [{ id: 0, title: "" }, { id: 1, title: "" }, { id: 2, title: "" }]
  };
  keyExtractor = item => {
    `item.id`;
  };
  renderUpcoming = ({ item }) => <UpcomingLisItem data={item} />;
  renderNowPLaying = ({ item }) => <NowListItem data={item} />;
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>MOVIES</Text>
        <FlatList
          data={this.state.upcoming}
          extraData={this.state}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderUpcoming}
          horizontal
        />

        <View style={styles.listcontainer}>
          <Text>NOW</Text>
          <FlatList
            data={this.state.upcoming}
            extraData={this.state}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderNowPLaying}
            horizontal
          />
        </View>
      </ScrollView>
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
