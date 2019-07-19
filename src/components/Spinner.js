import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";

const Spinner = ({ size, color }) => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size={size || "large"} color={color || "#0000ff"} />
    </View>
  );
};

export { Spinner };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});
