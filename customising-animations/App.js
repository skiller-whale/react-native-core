import React from "react";
import { Button, Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Some Boxes</Text>
    </View>
  );
};

class UneditableBox extends React.Component {
  constructor(props) {
    // NOTE: props include bgColor
    super(props)
  }

  render() {
    return (
      <View style={[styles.box, {backgroundColor: this.props.bgColor}]}>
        <Text style={styles.boxText}>Box Component in the second row</Text>
      </View>
    );
  }
}

export default class App extends React.Component {
  state = {
  };

  constructor(props){
    super(props)

    this.animate = this.animate.bind(this)
    this.reset = this.reset.bind(this)
  }

  animate() {
    // To be written
    const width = Dimensions.get('window').width;
  }

  reset() {
    // To be written
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.boxesContainer}>
          <View style={styles.boxRow}>
            <View style={styles.box}>
              <Text style={styles.boxText}>Top-left</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.boxText}>Top-right</Text>
            </View>
          </View>
          <View style={styles.boxRow}>
            <UneditableBox bgColor={"darkblue"}/>
          </View>
          <View style={styles.boxRow}>
            <View style={styles.box}>
              <Text style={styles.boxText}>Third row box</Text>
            </View>
          </View>
          <View style={styles.boxRow}>
            <View style={styles.box}>
              <Text style={styles.boxText}>Fourth row, number 1</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.boxText}>Fourth row, number 2</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.boxText}>Fourth row, number 3</Text>
            </View>
          </View>
          <View style={styles.boxRow}>
            <View style={styles.box}>
              <Text style={styles.boxText}>Fifth row box</Text>
            </View>
          </View>
          <View style={styles.boxRow}>
            <View style={styles.box}>
              <Text style={styles.boxText}>Sixth row box</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonBar}>
          <View style={styles.wideButton}>
            <Button onPress={this.animate} title="Start!"/>
          </View>
          <View style={styles.wideButton}>
            <Button onPress={this.reset} title="Reset!"/>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  },
  buttonBar: {
    flexDirection: "row",
    width: "100%"
  },
  wideButton: {
    flex: 1,
    margin: 5
  },
  headerContainer: {
    paddingVertical: 10,
    paddingLeft: 10,
    backgroundColor: "darkblue"
  },
  headerText: {
    fontSize: 20,
    color: "white"
  },
  boxesContainer: {
    flex: 1,
  },
  boxRow: {
    flex: 1,
    flexDirection: "row"
  },
  box: {
    flex: 1,
    backgroundColor: "darkblue",
    margin: 3,
    padding: 3,
    justifyContent: "center"
  },
  boxText: {
    color: "white",
  }
});
