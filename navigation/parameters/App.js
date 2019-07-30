import React from "react";
import { Image, Text, View, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";

class DataSource {
  static getUser = username => {
    const users = {
      alf: {
        name: "Alfredo",
        photo_url: "https://randomuser.me/api/portraits/men/65.jpg"
      },
      betty: {
        name: "Betty",
        photo_url: "https://randomuser.me/api/portraits/women/65.jpg"
      },
      chaz: {
        name: "Chico",
        photo_url: "https://randomuser.me/api/portraits/men/68.jpg"
      },
    }

    return users[username]
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = () => ({
    drawerIcon: ({ tintColor }) => {
      return <Ionicons name={"md-home"} size={25} color={tintColor} />;
    }
  });
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ margin: 10 }}>Home!</Text>
        <View style={{margin: 10}}>
          <Button
            title="Go to Alfredo"
            onPress={() => {
              this.props.navigation.navigate("Profile");
            }}
          />
        </View>
        <View style={{margin: 10}}>
          <Button
            title="Go to Betty"
            onPress={() => {
              this.props.navigation.navigate("Profile");
            }}
          />
        </View>
        <View style={{margin: 10}}>
          <Button
            title="Go to Chico"
            onPress={() => {
              this.props.navigation.navigate("Profile");
            }}
          />
        </View>
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  static navigationOptions = () => ({
    drawerIcon: ({ tintColor }) => {
      return <Ionicons name={"md-person"} size={25} color={tintColor} />;
    }
  });
  render() {
    const username = "alf";
    const user = DataSource.getUser(username);

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{user.name}'s profile</Text>
        <Image
          source={{uri: user.photo_url}}
          style={{width:200, height: 300}}
        />
      </View>
    );
  }
}

const StackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Profile: {
      screen: ProfileScreen
    }
  },
  {
    contentOptions: {
      activeTintColor: "#f4511e"
    }
  }
);

export default createAppContainer(StackNavigator);
