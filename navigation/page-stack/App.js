import React from "react";
import {
  Platform,
  StatusBar,
  SafeAreaView,
  View,
  Text,
  Button
} from "react-native";

const statusBarOffset = Platform.OS === "ios" ? 0 : StatusBar.currentHeight;

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home!</Text>
        <Button
          title="Go to settings"
          onPress={() => {
            this.props.navigateTo("Settings");
          }}
        />
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

export default class App extends React.Component {
  state = {
    visibleScreen: "Home"
  };
  navigateTo = visibleScreen => {
    this.setState({
      visibleScreen
    });
  };
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: statusBarOffset
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            borderBottomWidth: 1,
            borderBottomColor: "grey",
            padding: 20,
            position: "relative"
          }}
        >
          {this.state.visibleScreen !== "Home" && (
            <Text
              style={{
                position: "absolute",
                left: 10,
                top: 20
              }}
              onPress={() => {
                this.navigateTo("Home");
              }}
            >
              Back
            </Text>
          )}
          <Text>{this.state.visibleScreen}</Text>
        </View>
        {this.state.visibleScreen === "Home" && (
          <HomeScreen navigateTo={this.navigateTo} />
        )}
        {this.state.visibleScreen === "Settings" && <SettingsScreen />}
      </SafeAreaView>
    );
  }
}
