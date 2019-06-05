import React from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";

const Header = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const Task = ({ name, priority }) => {
  let priorityTextStyle = {};
  switch (priority) {
    case "high":
      priorityTextStyle = styles.highPriorityText;
    default:
      break;
  }
  return (
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>
        {name}{" "}
        <Text style={[styles.taskText, priorityTextStyle]}>({priority})</Text>
      </Text>
    </View>
  );
};

export default class App extends React.Component {
  state = {
    tasks: [
      { id: "task-001", name: "Learn React Native", priority: "high" },
      { id: "task-002", name: "Get Some Sleep", priority: "low" },
      { id: "task-003", name: "Eat Some Food", priority: "medium" }
    ]
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header title="Task List" />
        {this.state.tasks.map(({ id, name, priority }) => (
          <Task key={id} name={name} priority={priority} />
        ))}
        <View style={styles.taskSummaryContainer}>
          <Text>Total number of tasks: {this.state.tasks.length}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey"
  },
  headerContainer: {
    paddingVertical: 10,
    paddingLeft: 10,
    backgroundColor: "white"
  },
  headerText: {
    fontSize: 20
  },
  taskContainer: {
    padding: 10
  },
  taskText: {
    color: "grey"
  },
  highPriorityText: {
    color: "red"
  },
  taskSummaryContainer: {
    paddingVertical: 10,
    paddingLeft: 10,
    backgroundColor: "white"
  }
});
