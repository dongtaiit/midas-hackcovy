import React, { Component } from "react";
import {
  View,
  Platform,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  FlatList
} from "react-native";
import moment from "moment";
import { ListItem, Icon } from "react-native-elements";
import { connect } from "react-redux";
import Button from "../components/Button";
import TopBar from "../container/common/TopBar";
import TopBarTitle from "../components/TopBarTitle";
const formatTime = ({ timestamp }) => {
  const formattedDT = moment.tz(timestamp, 'America/Los_Angeles').format('YYYY-MM-DD HH:mm ZZ');
  return formattedDT;
};
const ICON_NEW = require("../assets/images/icon_news.png");
const ICON_NOTIFI = require("../assets/images/icon_noti.png");
const ICON_SCHEDULE = require("../assets/images/icon_schedule.png");
const listData = [
  {
    messageId: "1",
    title: "Giáo viên cốt cán giúp nâng cao chất lượng ôn thi tốt nghiệp THPT",
    isRead: false,
    timestamp: "1587787416",
    type: "NEWS",//NEWS,NOTIFICATION,SCHEDULE,
    imageUrl: "https://nhandan.com.vn/cdn/vn/media/k2/items/src/4420/b6a32d283a79cd1e1921de3d85899e04.jpg",
    body: "NDĐT - Giáo viên cốt cán là người có khả năng thiết kế, triển khai các giờ dạy mẫu, tổ chức các tọa đàm, hội thảo, bồi dưỡng về phương pháp, kỹ thuật dạy học, giáo dục, nội dung đổi mới và bồi dưỡng cho đồng nghiệp trong trường hoặc các trường trên địa bàn tham khảo và học tập. Trong đợt nghỉ phòng, chống dịch vừa qua, các giáo viên cốt cán của Hà Tĩnh đã chủ động lên các phương án hỗ trợ giáo viên trực tiếp giảng dạy lớp 12 để bảo đảm hiệu quả ôn thi tốt nghiệp THPT cho học sinh."
  }, {
    messageId: "2",
    title: "Đặng Hồng Quang có lịch học Toán vào " + moment.unix(moment().toDate().getTime() / 1000).format("hh:mm DD/MM/YYYY"),
    isRead: true,
    timestamp: "1587787416",
    type: "SCHEDULE",//NEWS,NOTIFICATION,SCHEDULE,
    imageUrl: "https://nhandan.com.vn/cdn/vn/media/k2/items/src/4420/b6a32d283a79cd1e1921de3d85899e04.jpg",
    body: "NDĐT - Giáo viên cốt cán là người có khả năng thiết kế, triển khai các giờ dạy mẫu, tổ chức các tọa đàm, hội thảo, bồi dưỡng về phương pháp, kỹ thuật dạy học, giáo dục, nội dung đổi mới và bồi dưỡng cho đồng nghiệp trong trường hoặc các trường trên địa bàn tham khảo và học tập. Trong đợt nghỉ phòng, chống dịch vừa qua, các giáo viên cốt cán của Hà Tĩnh đã chủ động lên các phương án hỗ trợ giáo viên trực tiếp giảng dạy lớp 12 để bảo đảm hiệu quả ôn thi tốt nghiệp THPT cho học sinh."
  },
  {
    messageId: "3",
    title: "Thông báo từ Trường THCS A",
    isRead: false,
    timestamp: "1587787416",
    type: "NOTIFICATION",//NEWS,NOTIFICATION,SCHEDULE,
    imageUrl: "https://nhandan.com.vn/cdn/vn/media/k2/items/src/4420/b6a32d283a79cd1e1921de3d85899e04.jpg",
    body: "Học sinh toàn trường được nghỉ học ngày thứ 7 22/12/2021"
  }
];
const readedBody = (style, item) => {
  return (
    <Text style={style}>{item.body.substring(0, 70) + "..."}</Text>

  )
}
const readedTitle = (style, item) => {
  return (
    <View
      style={{ justifyContent: "space-between" }}
    >
      <Text style={style}>{item.title}</Text>
      <Text style={{ color: style.color, fontSize: 12 }}>{

        moment.unix(item.timestamp).format("hh:mm DD/MM/YYYY")
      }
      </Text>
    </View>
  )
}
class Notification extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      header: () => (
        <TopBar
          navigation={navigation}
          right={() => { }}
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
          center={() => <TopBarTitle text="Thông báo mới" align="left" />}
        />
      )
    };
  };
  constructor(props) {
    super(props);
    this.pushNotificationEnabled = false;
    this.state = {
      isLoading: false,
      text: "test",
      list: listData
    };
  }

  renderItem = ({ item }) => (

    <TouchableOpacity
      onPress={() => {
        switch (item.type) {
          case "NEWS":
            this.props.navigation.navigate("DetailNews", { item })
            break;
          case "NOTIFICATION":
            this.props.navigation.navigate("DetailNews", { item })
            break;
          case "SCHEDULE":
            // code block
            break;
          default:
          // code block
        }

      }}
    >
      <ListItem
        opacity={!item.isRead ? 1 : 0.3}
        title={
          readedTitle(!item.isRead ? cardStyles.name : { ...cardStyles.name, fontWeight: "" }, item)
        }
        subtitle={
          <View style={cardStyles.container}>{
            readedBody(!item.isRead ? cardStyles.header : { ...cardStyles.header }, item)}
          </View>
        }
        leftAvatar={
          <Image style={{ height: 40, width: 40, borderRadius: 0 }} source={item.type == "NEWS" ? ICON_NEW : (item.type == "SCHEDULE" ? ICON_SCHEDULE : ICON_NOTIFI)} />
        }
        bottomDivider
      />
    </TouchableOpacity>
  );

  componentWillUnmount() { }

  componentDidUpdate(prevProps) { }


  _onOpenChannelPress = () => {
    this.props.navigation.navigate("OpenChannel");
  };

  _onGroupChannelPress = () => {
    this.props.navigation.navigate("GroupChannel");
  };

  _onDisconnectButtonPress = () => { };
  render() {
    return (
      <View style={styles.containerViewStyle}>
        <FlatList
          // keyExtractor={(item, index) => index.toString()}
          data={this.state.list}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export default connect(
  state => {
    return {};
  },
  dispatch => {
    return {

    };
  }
)(Notification);

const styles = {
  containerViewStyle: {
    backgroundColor: "#fff",
    flex: 1
  },
  menuViewStyle: {
    marginLeft: 0,
    marginRight: 0
  },
  buttonStyle: {
    justifyContent: "flex-start",
    paddingLeft: 14,
    flex: 1
  }
};

const cardStyles = StyleSheet.create({
  container: {
    fontFamily: "SF-Compact-Text-Regular"
  },
  name: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 16,

    fontWeight: "bold"
  },
  pos: {
    fontSize: 12,
    color: "#999"
  },
  header: { fontWeight: "500", lineHeight: 16, color: "#000" },
  content: { color: "#222", opacity: 0.7 }
});
