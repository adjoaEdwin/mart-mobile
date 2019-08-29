import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "styles";

const SecondaryBtn = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: colors.primary,
    alignSelf: "center",
    fontSize: 16
  },
  buttonStyle: {
    borderRadius: 5,
    alignSelf: "stretch",
    borderWidth: 1,
    backgroundColor: "transparent",
    padding: 20,
    marginTop: 5,
    marginBottom: 5,
    marginRight: 20,
    marginLeft: 20,
    borderColor: "transparent"
  }
});

export { SecondaryBtn };
