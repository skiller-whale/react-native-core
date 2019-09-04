import React from "react";
import { Button, ScrollView, Text, View } from "react-native";

class TouchResponse extends React.Component {
  render() {
    const styles = {
      touchable: {
        width: "50%",
        height: "50%"
      },
      image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover"
      }
    }

    return <Button
      onPress={() => this.props.onPress(`You prefer ${this.props.preference}`)}
      title={this.props.preference}
    />
  }
}

export default class App extends React.Component {
  state = {
    messages: []
  }

  render() {
    const a_cat = "http://placekitten.com/250/250";
    const a_dog = "http://placepuppy.net/250/250";

    const styles = {
      outerView: {
        height: "100%",
        width: "100%"
      },
      touchableContainer: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
      },
      topTouchableContainer: {
        backgroundColor: "#AAFFAA"
      },
      bottomTouchableContainer: {
        backgroundColor: "#FFAAAA"
      },
      messagesContainer: {
        flex: 1,
        backgroundColor: "white"
      }
    }

    const onPressCallback = msg => this.setState({
      messages: this.state.messages.concat([msg])
    })

    const messagesContent = this.state.messages.join("\n");

    return <View style={styles.outerView}>
      <View style={[styles.touchableContainer, styles.topTouchableContainer]}>
        <TouchResponse onPress={onPressCallback} preference="the cat"/>
      </View>
      <View style={[styles.touchableContainer, styles.bottomTouchableContainer]}>
        <TouchResponse onPress={onPressCallback} preference="the dog"/>
      </View>
      <ScrollView style={styles.messagesContainer}>
        <Text style={{fontSize: 18}}>Output</Text>
        <Text>{messagesContent}</Text>
      </ScrollView>
    </View>
  }
}
