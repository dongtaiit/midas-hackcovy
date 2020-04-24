import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const WallpaperHorizontal = ({ record }) => (
  <View>
    <View style={styles.container} key={record.id}>
      <Image style={styles.image} source={{ uri: record.imageLink }} />
      <View style={styles.rightBox}>
       
        <Text style={styles.title}>{record.title}</Text>
        <Text style={styles.summary}>{record.summary}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingTop:4,
    paddingBottom:4
  },
  image: {
    flex: 140,
    height: 100
  },
  rightBox: {
    flex: 192,
    paddingLeft: 8
  },
  timestamp: {
    fontSize: 12,
    lineHeight: 16,
    color: "#a9a9a9",
    paddingBottom: 4,
    textAlignVertical: "top"
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 16,
    color: "#222",
    fontWeight: "bold"
  },
  summary:{
    fontSize: 14,
  }
});

export default WallpaperHorizontal;
