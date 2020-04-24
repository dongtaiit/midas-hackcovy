import React from "react";
import { Text, View } from "react-native";

const LineEB = (key = Math.random(), styles) => (
  <View
    key={key}
    style={{
      borderTopWidth: 1,
      borderColor: "#ebebeb",
      ...styles,
    }}
  ></View>
);

export default LineEB;
