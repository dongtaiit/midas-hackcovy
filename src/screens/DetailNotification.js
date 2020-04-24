import React from "react";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import TopBar from "../container/common/TopBar";
import Button from "../components/Button";
import iconBack from "../assets/images/backArrow.png";
import TopBarTitle from "../components/TopBarTitle";
import { Icon } from "react-native-elements";

const checkin = [
  { left: "Tiết 1 (Môn toán học): ", right: "có mặt đầy đủ" },
  { left: "Tiết 2 (Môn sinh học): ", right: "có mặt đầy đủ" },
  { left: "Tiết 3 (Môn vật lý): ", right: "có mặt đầy đủ" },
  { left: "Tiết 4 (Môn địa lý): ", right: "có mặt đầy đủ" },
  { left: "Tiết 5 (Môn thể dục): ", right: "vắng không phép" }
];

const pointDay = [
  { left: "Môn toán học: ", right: "8đ (miệng)" },
  { left: "Môn sinh học: ", right: "8đ (15 phút)" }
];

const DetailNotification = ({ navigation }) => {
  let item = navigation.getParam("item", {});
  _render = list => {
    return list.map(v => {
      return (
        <View style={{ flexDirection: "row" }} key={v.right}>
          <Text style={styles.left}>{v.left}</Text>
          <Text style={styles.right}>{v.right}</Text>
        </View>
      );
    });
  };
  return (
    <ScrollView
      style={{ paddingLeft: 10, paddingRight: 10, paddingBottom: 20 }}
    >
      <Text style={styles.header}>
        Kết quả học tập và rèn luyện đạo đức của em{" "}
        {item.name} ngày 14/04/2020
      </Text>
      <View style={styles.box}>
        <Text style={{ color: "#000" }}>
          Kính gửi: P/h em Nguyễn Thu Trang{" "}
        </Text>
        <Text>
          Tôi là Hoàng Văn Trung giáo viên chủ nhiệm của em {item.name} tôi xin
          phép gửi thông báo về lịch trình cũng như kết quả học tập của em trong
          ngày 30/03/2020 cho anh/ chị như sau:
        </Text>
      </View>
      <Text style={styles.hightlight}>Điểm danh</Text>
      {_render(checkin)}
      <Text style={styles.hightlight}>Kết quả học tập</Text>
      {_render(pointDay)}
      <Text style={styles.hightlight}>Ý thức trong giờ học</Text>
      <Text style={{ ...styles.note, paddingBottom: 20 }}>
        “Trong giờ sinh học em đã nói chuyện riêng với bạn bên cạnh, cười đùa
        trong lớp và bị giáo viên bộ môn ghi sổ đầu bài.”
      </Text>
    </ScrollView>
  );
};

DetailNotification.navigationOptions = ({ navigation }) => {
  let item = navigation.getParam("item", {});
  return {
    header: () => (
      <TopBar
        navigation={navigation}
        left={() => (
          <Button
            onPress={() => {
              return navigation.goBack();
            }}
          >
            <Icon
              name="ios-arrow-back"
              type="ionicon"
              color="white"
              size={24}
            />
          </Button>
        )}
        center={() => <TopBarTitle text={item.name} align="left" />}
      />
    )
  };
};

const styles = StyleSheet.create({
  header: {
    color: "#000",
    fontSize: 17,
    fontWeight: "800",
    paddingTop: 14,
    paddingBottom: 14
  },
  box: {
    backgroundColor: "#efefef",
    padding: 10
  },
  hightlight: {
    color: "#000",
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 8
  },
  note: {
    color: "#000",
    lineHeight: 16,
    fontStyle: "italic",
    opacity: 0.8
  },
  left: {
    color: "#666"
  },
  right: {
    color: "#000"
  }
});

export default DetailNotification;
