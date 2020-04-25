import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import LineEB from "./LineEB";

const data = [
  { left: "08:00 - 10:00", center: "Toán học", right: "Xem chi tiết" },
  { left: "10:00 - 11:00", center: "Sinh học", right: "Xem chi tiết" },
  { left: "12:00 - 13:00", center: "Ngữ văn", right: "Xem chi tiết" },
  { left: "14:00 - 15:00", center: "Địa lý", right: "Xem chi tiết" },
  { left: "16:00 - 17:00", center: "Toán học", right: "Xem chi tiết" },
  { left: "18:00 - 19:00", center: "Tiếng anh", right: "Xem chi tiết" },
  { left: "20:00 - 21:00", center: "Lịch sử", right: "Xem chi tiết" },
];

function TimeLine() {
  return (
    <ScrollView>
      {data.map((item) => (
        <Line item={item} key={item.left} />
      ))}
    </ScrollView>
  );
}

function Line({ item }) {
  return (
    <>
      <LineEB style={{ borderColor: "#F4F4F4" }} />
      <View style={lineStyles.container}>
        <Text style={lineStyles.left}>{item.left}</Text>
        <View style={lineStyles.box}>
          <Text style={lineStyles.center}>{item.center}</Text>
          <Text style={lineStyles.right}>{item.right}</Text>
        </View>
      </View>
      <LineEB style={{ borderColor: "#F4F4F4" }} />
    </>
  );
}

const lineStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    padding: 10,
  },
  box: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  left: {
    color: "#0B6DB8",
    fontSize: 12,
    borderRightWidth: 2,
    borderColor: "#C4C4C4",
    paddingRight: 8,
  },
  right: {
    color: "#1473BC",
    fontSize: 12,
    fontStyle: "italic",
    textDecorationLine: "underline",
  },
  center: {
    color: "#000",
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 8,
  },
});

export default TimeLine;
