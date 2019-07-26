import React from "react";
import {
  Platform,
  StatusBar,
  SafeAreaView,
  View,
  Text
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

const sectionedDataSet = [];
let groupIndex = -1;
for (var i = 0, len = dataSet.length; i < len; i++) {
  if (i % 10 == 0) {
    groupIndex += 1;
    sectionedDataSet.push({
      groupTitle: `Group ${groupIndex + 1}`,
      data: [
        {
          id: `item-${i}`,
          title: `Item ${i + 1}`,
          descr: `Descr of item ${i + 1}`
        }
      ]
    });
  } else {
    sectionedDataSet[groupIndex].data.push({
      id: `item-${i}`,
      title: `Item ${i + 1}`,
      descr: `Descr of item ${i + 1}`
    });
  }
}

const ItemDisplay = ({ title, descr }) => (
  <View style={{ marginVertical: 4, padding: 6, backgroundColor: "orange" }}>
    <Text style={{ fontSize: 18, marginBottom: 4 }}>{title}</Text>
    <Text>{descr}</Text>
  </View>
);

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: statusBarOffset
        }}
      >
        <View>
          { dataSet.map( item => <ItemDisplay key={item.id} {...item} /> ) }
        </View>
      </SafeAreaView>
    );
  }
}
