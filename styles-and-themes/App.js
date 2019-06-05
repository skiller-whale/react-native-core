import React from "react";
import { SafeAreaView, ScrollView, View, Text, Image } from "react-native";

const images = [
  {
    title: "Whale",
    uri:
      "https://images.pexels.com/photos/804181/pexels-photo-804181.jpeg?w=600"
  },
  {
    title: "Giraffe",
    uri:
      "https://images.pexels.com/photos/259554/pexels-photo-259554.jpeg?w=600"
  },
  {
    title: "Dolphin",
    uri:
      "https://images.pexels.com/photos/2347462/pexels-photo-2347462.jpeg?w=600"
  },
  {
    title: "Zebra",
    uri:
      "https://images.pexels.com/photos/750539/pexels-photo-750539.jpeg?w=600"
  }
];

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            paddingTop: 30,
            paddingBottom: 12,
            paddingHorizontal: 12,
            borderBottomWidth: 1,
            borderColor: "red"
          }}
        >
          <Text style={{ color: "grey", fontSize: 30 }}>Nature Pics</Text>
        </View>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: 12,
            paddingBottom: 12
          }}
        >
          {images.map(({ title, uri }, index) => (
            <View key={index}>
              <Text
                style={{
                  color: "grey",
                  fontSize: 16,
                  paddingTop: 12,
                  paddingBottom: 4
                }}
              >
                Image {index + 1}
              </Text>
              <Text style={{ color: "red", fontSize: 12, paddingVertical: 4 }}>
                {title}
              </Text>
              <Image
                style={{ width: "100%", height: 180, resizeMode: "cover" }}
                source={{ uri }}
              />
            </View>
          ))}
        </ScrollView>
        <View
          style={{
            paddingHorizontal: 12,
            borderTopWidth: 1,
            borderColor: "red"
          }}
        >
          <Text style={{ color: "grey", fontSize: 12, paddingTop: 4 }}>
            Sourced from pexels.com
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}
