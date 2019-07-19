import React from "react";
import { View, StyleSheet } from "react-native";

function moveToBottom(component) {
  return <View style={styles.container}>{component}</View>;
}

const styles = StyleSheet.create({
  container: {
    // flex: 2,
    justifyContent: "flex-end",
    alignSelf: "center",
    marginBottom: 36
  }
});

export default moveToBottom;
