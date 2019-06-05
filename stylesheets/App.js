import React from "react";
import { Text, View } from "react-native";

const Header = ({ title }) => {
  return (
    <View style={{ paddingVertical: 10 }}>
      <Text
        style={{
          fontSize: 20
        }}
      >
        {title}
      </Text>
    </View>
  );
};

const Task = ({ name, priority }) => {
  return (
    <View>
      <Text
        style={{
          color: "grey",
          paddingVertical: 5
        }}
      >
        {name} ({priority})
      </Text>
    </View>
  );
};

export default class App extends React.Component {
  state = {
    tasks: [
      { name: "Learn React Native", priority: "high" },
      { name: "Get Some Sleep", priority: "low" },
      { name: "Eat Some Food", priority: "medium" }
    ]
  };
  render() {
    return (
      <View
        style={{
          height: "100%",
          backgroundColor: "lightgrey",
          paddingTop: 50,
          paddingHorizontal: 20
        }}
      >
        <Header title="Task List" />
        {this.state.tasks.map(({ name, priority }) => (
          <Task key={name} name={name} priority={priority} />
        ))}
      </View>
    );
  }
}
