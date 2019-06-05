import React from "react";
import { SafeAreaView, View, Text } from "react-native";

class ProgressBar extends React.Component {
  render() {
    return <View style={{ height: 2, backgroundColor: "green", width: 60 }} />;
  }
}

class CounterContainer extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 10
        }}
      >
        {children}
      </View>
    );
  }
}

class Counter extends React.Component {
  render() {
    const { label, count } = this.props;
    return (
      <Text style={{ fontSize: 20 }}>
        {label} {count}
      </Text>
    );
  }
}

export default class App extends React.Component {
  state = {
    tasks: [
      {
        id: "task-001",
        name: "Learn React Native",
        priority: "high",
        complete: false
      },
      {
        id: "task-002",
        name: "Get Some Sleep",
        priority: "low",
        complete: false
      },
      {
        id: "task-003",
        name: "Eat Some Food",
        priority: "medium",
        complete: false
      },
      {
        id: "task-004",
        name: "Pet My Cat",
        priority: "medium",
        complete: true
      },
      { id: "task-005", name: "Meditate", priority: "medium", complete: false },
      {
        id: "task-007",
        name: "Release My First App",
        priority: "high",
        complete: false
      }
    ]
  };
  render() {
    const { tasks } = this.state;
    let completedTaskCount = 0;
    const taskPriorityCounts = {
      high: 0,
      medium: 0,
      low: 0
    };
    tasks.forEach(({ priority, complete }) => {
      if (!complete) {
        taskPriorityCounts[priority] = taskPriorityCounts[priority] + 1;
      } else {
        completedTaskCount += 1;
      }
    });
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "lightgrey"
        }}
      >
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 30,
            backgroundColor: "white"
          }}
        >
          <Text style={{ fontSize: 24 }}>Task Dashboard</Text>
          <Text style={{ fontSize: 18, paddingTop: 10 }}>
            Completed: {completedTaskCount} of {tasks.length}
          </Text>
        </View>
        <ProgressBar
          completeCount={completedTaskCount}
          totalCount={tasks.length}
        />
        <View style={{ padding: 10, backgroundColor: "orange" }}>
          <Text style={{ fontSize: 18 }}>To Do</Text>
        </View>
        <View style={{ flex: 1, padding: 10, justifyContent: "space-between" }}>
          <CounterContainer>
            <Counter label="High Priority:" count={taskPriorityCounts.high} />
          </CounterContainer>
          <CounterContainer>
            <Counter
              label="Medium Priority:"
              count={taskPriorityCounts.medium}
            />
          </CounterContainer>
          <CounterContainer>
            <Counter label="Low Priority:" count={taskPriorityCounts.low} />
          </CounterContainer>
        </View>
      </SafeAreaView>
    );
  }
}
