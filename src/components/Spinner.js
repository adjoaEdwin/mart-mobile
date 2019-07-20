import React from "react";
import { ActivityIndicator, View } from "react-native";

const Spinner = ({ size, color }) => {
  return (
    <View>
      <ActivityIndicator size={size || "small"} color={color || "#0000ff"} />
    </View>
  );
};

export { Spinner };
