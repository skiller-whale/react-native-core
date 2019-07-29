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
        {this.state.visibleScreen === "Home" && (
          <HomeScreen navigateTo={this.navigateTo} />
        )}
        {this.state.visibleScreen === "Settings" && <SettingsScreen />}
        <View
          style={{
            borderTopWidth: 1,
            borderTopColor: "grey",
            flexDirection: "row",
            justifyContent: "space-around",
            paddingVertical: 20
          }}
        >
          <View>
            <Text
              style={{
                color: this.state.visibleScreen === "Home" ? "#f4511e" : "black"
              }}
              onPress={() => {
                this.navigateTo("Home");
              }}
            >
              Home
            </Text>
          </View>
          <View>
            <Text
              style={{
                color:
                  this.state.visibleScreen === "Settings" ? "#f4511e" : "black"
              }}
              onPress={() => {
                this.navigateTo("Settings");
              }}
            >
              Settings
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
