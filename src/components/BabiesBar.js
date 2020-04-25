import React from "react";
import { Text, ScrollView, StyleSheet } from "react-native";
import { theme } from "../config/theme";

const BabiesBar = ({ data, showAll = false }) => {
  const [select, setSelect] = React.useState(showAll ? "all" : data[0].name);
  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {showAll && (
        <Text style={{ ...styles.box, marginRight: 14 }} key="all">
          Tất cả
        </Text>
      )}
      {data.map((item) => {
        if (item.name == select)
          return (
            <Text style={{ ...styles.box, ...styles.selected }} key={item.name}>
              {item.name}
            </Text>
          );
        return (
          <Text
            style={styles.box}
            key={item.name}
            onPress={() => setSelect(item.name)}
          >
            {item.name}
          </Text>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 8,
    backgroundColor: "#F2F2F2",
    maxHeight: 70,
  },
  box: {
    fontSize: 14,
    lineHeight: 16,
    color: "#666",
    padding: 9,
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingRight: 8,
    paddingLeft: 8,
    margin: 8,
    maxHeight: 35,
  },
  selected: {
    backgroundColor: theme.mainColor,
    color: "#fff",
  },
});

export default BabiesBar;
