import React from "react";
import {
  Platform,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Button,
  Keyboard
} from "react-native";

const statusBarOffset = Platform.OS === "ios" ? 0 : StatusBar.currentHeight;

const dataSet = [];

for (var i = 0, len = 50; i < len; i++) {
  dataSet.push({
    id: `item-${i}`,
    title: `Item ${i + 1}`,
    descr: `Descr of item ${i + 1}`
  });
}

const ItemDisplay = ({ title, descr }) => (
  <TouchableOpacity
    onPress={() => {
      console.log(`You pressed: ${title}`);
      Keyboard.dismiss()
    }}
    style={{ marginVertical: 4, padding: 6, backgroundColor: "orange" }}
  >
    <Text style={{ fontSize: 18, marginBottom: 4 }}>{title}</Text>
    <Text>{descr}</Text>
  </TouchableOpacity>
);

class MyContainer extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <View>
        {data.map(item => (
          <ItemDisplay key={item.id} {...item} />
        ))}
      </View>
    );
  }
}

export default class App extends React.Component {
  state = {
    searchText: "",
    dataSet,
    searchResults: dataSet
  };
  setSearchText = searchText => {
    this.setState(state => {
      if (searchText === "") {
        return {
          searchText: "",
          searchResults: state.dataSet
        };
      }
      return {
        searchText,
        searchResults: state.dataSet.filter(({ title }) => {
          return title.toUpperCase().indexOf(searchText.toUpperCase()) > -1;
        })
      };
    });
  };
  clearSearchText = () => {
    this.setSearchText("");
  };
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: statusBarOffset
        }}
      >
        <View>
          <TextInput
            style={{
              margin: 4,
              padding: 6,
              borderColor: "grey",
              borderWidth: 1,
              borderRadius: 4
            }}
            value={this.state.searchText}
            onChangeText={this.setSearchText}
            placeholder="Search"
            returnKeyType="done"
          />
          <Button title="Clear" onPress={this.clearSearchText} />
          <MyContainer data={this.state.searchResults} />
        </View>
      </SafeAreaView>
    );
  }
}
