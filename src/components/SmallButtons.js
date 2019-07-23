import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors, fonts } from "styles";

const SmallBtn = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: colors.white,
    alignSelf: "center",
    fontSize: 14
  },
  buttonStyle: {
    borderRadius: 5,
    alignSelf: "flex-end",
    borderWidth: 1,
    backgroundColor: colors.primary,
    paddingRight: 25,
    paddingLeft: 25,
    paddingTop: 10,
    paddingBottom: 10
    // marginTop: 5,
    // marginBottom: 5,
    // marginRight: 20,
    // marginLeft: 20
  }
});

export { SmallBtn };
