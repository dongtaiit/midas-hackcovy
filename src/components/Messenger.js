import React, { useState } from "react";
import { Text, View, Dimensions } from "react-native";
import moment from "moment";
import "moment/locale/vi";

const widthBox = Dimensions.get("window").width * 0.7;

const Messenger = ({
  timestamp,
  text,
  align = "left",
  backgroundColor = "#DADADA",
  colorText = "#000",
  alwayShowTime = false,
}) => {
  const alignBox = align == "left" ? "row" : "row-reverse";
  const [show, setShow] = useState(false);
  return (
    <View>
      {alwayShowTime && (
        <Text style={{ textAlign: "center", marginTop: 4 }}>
          {moment(timestamp)
            .locale("vi")
            .calendar()
            .replace("rồi", "trước")}
        </Text>
      )}
      {show && (
        <Text style={{ textAlign: "center", marginTop: 4 }}>
          {moment(timestamp)
            .locale("vi")
            .calendar()}
        </Text>
      )}
      <View style={{ flexDirection: alignBox }}>
        <Text
          onPress={() => {
            if (!alwayShowTime) return setShow(!show);
          }}
          style={{
            backgroundColor: backgroundColor,
            color: colorText,
            maxWidth: widthBox,
            paddingTop: 7,
            borderRadius: 17,
            paddingBottom: 7,
            paddingLeft: 12,
            marginTop: 3,
            marginBottom: 9,
            marginLeft: 22,
            marginRight: 22,
            paddingRight: 12,
          }}
        >
          {text}
        </Text>
      </View>
    </View>
  );
};

export default Messenger;
