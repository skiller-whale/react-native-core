import React from "react";
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Header = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

class Task extends React.Component {
  state = {
    tilted: false
  }

  constructor(props) {
    super(props)

    this.toggleTilt = this.toggleTilt.bind(this)
  }

  toggleTilt() {
    this.setState({tilted: !this.state.tilted})
  }

  render() {
    let extraStyle;
    if(this.state.tilted) {
      extraStyle = styles.tiltedText
    }

    return (
      <TouchableOpacity style={styles.taskContainer} onPress={this.toggleTilt}>
          <Text style={[styles.taskText, extraStyle]}>
            I'm task number {1 + this.props.number}
          </Text>
      </TouchableOpacity>
    );
  }
}

export default class App extends React.Component {
  state = {
    count: 1
  };

  constructor(props){
    super(props)

    this.increment = this.increment.bind(this)
    this.reset = this.reset.bind(this)
  }

  increment() {
    this.setState({count: this.state.count + 1})
  }

  reset() {
    this.setState({count: 1})
  }

  render() {
    const tasks = []
    for(let i = 0; i < this.state.count; i++) {
      tasks.push(<Task number={i} key={i}/>)
    }

    return (
      <SafeAreaView style={styles.container}>
        <Header title="Task List" />
        <View style={styles.allTasks}>
          {tasks}
        </View>
        <View style={styles.buttonBar}>
          <View style={styles.wideButton}>
            <Button onPress={this.increment} title="Add"/>
          </View>
          <View style={styles.wideButton}>
            <Button onPress={this.reset} title="Reset"/>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "darkblue",
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
    backgroundColor: "white"
  },
  headerText: {
    fontSize: 20
  },
  allTasks: {
    flex: 1
  },
  taskContainer: {
    flex: 1,
    borderColor: "lightgrey",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  taskText: {
    color: "white"
  },
  tiltedText: {
    transform: [
      { rotateZ: "-15deg" }
    ]
  }
});
