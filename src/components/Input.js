import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "styles/colors";
import { Input } from "react-native-elements";

const TextInput = ({
  title,
  placeholder,
  onChangeText,
  onSubmitEditing,
  autoCorrect,
  secureTextEntry,
  value
}) => {
  return (
    <Input
      inputStyle={styles.inputStyle}
      containerStyle={styles.container}
      title={title}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      autoCorrect={autoCorrect}
      onSubmitEditing={onSubmitEditing}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 20
  },
  inputStyle: {
    height: 40,
    color: colors.dark,
    fontSize: 16,
    lineHeight: 23
  }
});

export { TextInput };
