import React from "react";
import { SafeAreaView, View, Text, TextInput } from "react-native";

class MyTextInput extends React.Component {
  state = {
    textValue: "Hello there",
    errorMessage: ""
  };
  render() {
    return (
      <View>
        <TextInput value={this.state.textValue} />
        <View>
          <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
        </View>
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, paddingTop: 50, marginHorizontal: 10 }}>
        <MyTextInput />
      </SafeAreaView>
    );
  }
}
