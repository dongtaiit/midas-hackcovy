import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { Icon } from "react-native-elements";
import Modal from "react-native-modal";
import { Divider } from "react-native-elements";
import moment from "moment";

const { width, height } = Dimensions.get("window");

const data = [
  { left: "08:00 - 10:00", center: "Toán học", right: "Xem chi tiết" },
  { left: "10:00 - 11:00", center: "Sinh học", right: "Xem chi tiết" },
  { left: "12:00 - 13:00", center: "Ngữ văn", right: "Xem chi tiết" },
  { left: "14:00 - 15:00", center: "Địa lý", right: "Xem chi tiết" },
  { left: "16:00 - 17:00", center: "Toán học", right: "Xem chi tiết" },
  { left: "18:00 - 19:00", center: "Tiếng anh", right: "Xem chi tiết" },
  { left: "20:00 - 21:00", center: "Lịch sử", right: "Xem chi tiết" },
];

const TimeLine = () => {
  const [visible, setVisible] = useState(false);
  const [dataModal, setDataModal] = useState(null);
  const [currentTime, setCurrentTime] = useState(moment().format("HH:MM"));

  const _renderModal = () => {
    if (!dataModal) return <Text />;
    return (
      <Modal isVisible={visible} style={modalStyles.container}>
        <Icon
          containerStyle={{
            position: "absolute",
            right: 16,
            top: 16,
            zIndex: 1000,
            flex: 1,
          }}
          name="close"
          type="EvilIcons"
          size={36}
          onPress={() => setVisible(false)}
        />
        <View style={modalStyles.body}>
          <Text style={modalStyles.time}>{dataModal.left}</Text>
          <Text style={modalStyles.subject}>{dataModal.center}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={modalStyles.contentLeft}>Nội dung:</Text>
            <Text style={{ ...modalStyles.contentRight, marginRight: 30 }}>
              Viết bài văn mô tả về con vật mà em yêu thích nhất, luyện viết
              chính tả
            </Text>
          </View>
          <Divider
            style={{ marginTop: 12, marginBottom: 12, borderColor: "#E4E4E4" }}
          />
          <View style={{ flexDirection: "row" }}>
            <Text style={modalStyles.contentLeft}>Giáo viên phụ trách:</Text>
            <Text style={modalStyles.contentRight}>Hoàng Văn Trung</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={modalStyles.contentLeft}>Số điện thoại</Text>
              <Text style={modalStyles.contentRight}>0988 888 6789</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Icon
                containerStyle={{ marginRight: 10 }}
                name="phone-call"
                type="feather"
                color="#A4A4A4"
                size={20}
                onPress={() => setVisible(false)}
              />
              <Icon
                name="message-text-outline"
                type="material-community"
                color="#A4A4A4"
                size={20}
                onPress={() => setVisible(false)}
              />
            </View>
          </View>
          <Divider style={{ margin: 12, borderColor: "#E4E4E4" }} />
          <View style={{ flexDirection: "row" }}>
            <Text style={modalStyles.contentLeft}>Link học online:</Text>
            <Text style={modalStyles.link}>www.zoommeting.vn</Text>
          </View>
        </View>
      </Modal>
    );
  };

  const _showModal = (item) => {
    setDataModal(item);
    setVisible(true);
  };
  return (
    <ScrollView>
      {data.map((item = {}) => {
        const [left, right] = item.left.split(" - ");
        const flagNow = left <= currentTime && currentTime <= right;
        const loadedFlag = left < currentTime;
        console.log("flagNow", flagNow);
        return (
          <View
            style={{
              borderColor: loadedFlag ? "#ED9035" : "#D8D8D8",
              borderLeftWidth: 6,
              position: "relative",
            }}
          >
            <View style={{ paddingLeft: 8 }}>
              <Divider style={{ borderColor: "#f4f4f4", borderWidth: 1 }} />
              <View style={lineStyles.container}>
                {flagNow && (
                  <Icon
                    name="caretright"
                    type="antdesign"
                    color="#ED9035"
                    containerStyle={{
                      position: "absolute",
                      left: -16,
                      top: 8,
                    }}
                    size={18}
                  />
                )}
                <Text style={lineStyles.left}>{item.left}</Text>
                <View style={lineStyles.box}>
                  <Text style={lineStyles.center}>{item.center}</Text>
                  <Text
                    onPress={() => _showModal(item)}
                    style={lineStyles.right}
                  >
                    {item.right}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        );
      })}
      {_renderModal()}
    </ScrollView>
  );
};

const lineStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    padding: 10,
    fontFamily: "Roboto",
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

const modalStyles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width,
    height: height / 3,
  },
  body: {
    padding: 20,
    paddingTop: 60,
  },
  time: {
    color: "#0B6DB8",
  },
  subject: {
    color: "#000",
    fontWeight: "800",
    fontSize: 17,
    paddingBottom: 11,
  },
  contentLeft: {
    lineHeight: 16,
    color: "#888",
    marginRight: 8,
  },
  contentRight: {
    color: "#000",
    lineHeight: 16,
  },
  link: {
    color: "blue",
  },
});

export default TimeLine;
