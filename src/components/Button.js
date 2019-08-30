import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "styles";

const Button = ({ onPress, children, style }) => {
  const { textStyle } = styles;

  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: colors.white,
    alignSelf: "center",
    fontSize: 18
  }
});

export { Button };
