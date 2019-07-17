import React from "react";
import { Button, StyleSheet } from "react-native";
import colors from "styles/colors";

const PrimaryBtn = ({ title, color, type, onPress }) => {
  return (
    <Button
      onPress={onPress}
      style={styles.container}
      title={title}
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary
  }
});

export default PrimaryBtn;
