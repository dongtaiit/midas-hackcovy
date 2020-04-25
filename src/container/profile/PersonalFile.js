import React, { Component, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  ScrollView,
} from "react-native";
import LineEB from "../../components/LineEB";
import { user } from "../../mock_data/user";

const PersonalFile = () => {
  const [data, setData] = useState({
    "Ngày sinh": "05/05/2005",
    "Nơi sinh": "Diễn Châu - Nghệ An",
    "Họ tên cha": "Nguyễn Văn Nam",
    "Năm sinh cha": 1970,
    "Họ tên mẹ": "Nguyễn Thị Lan",
    "Năm sinh mẹ": "1970",
  });

  const labels = Object.keys(data);
  return (
    <ScrollView>
      <View style={stylesFirst.container}>
        <Image source={{ uri: user.avatar }} style={stylesFirst.image} />
        <Text style={stylesFirst.name}>Lê Thị Hồng Hạnh</Text>
      </View>
      {labels.map((k) => {
        return (
          <View key={k}>
            <View style={styles.containerList}>
              <Text style={styles.left}>{k}</Text>
              <Text style={styles.right}>{data[k]}</Text>
            </View>
            <LineEB key={k} styles={{ borderColor: "#e8e8e8" }} />
          </View>
        );
      })}
    </ScrollView>
  );
};

const stylesFirst = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 110,
    height: 110,
    marginTop: 20,
    borderRadius: 110/2
  },
  name: {
    textAlign: "center",
    color: "#000",
    fontSize: 16,
    paddingTop: 8,
    paddingBottom: 30,
    fontWeight: "800",
  },
});

const styles = StyleSheet.create({
  containerList: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 16,
    paddingBottom: 16,
    fontSize: 14,
  },
  left: {
    flex: 1,
    color: "#888",
    lineHeight: 16,
    paddingLeft: 16,
  },
  right: {
    flex: 1.7,
    color: "#222",
  },
});

export default PersonalFile;
