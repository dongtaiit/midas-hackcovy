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
import { ListItem,Icon } from "react-native-elements";
import { connect } from "react-redux";
import Button from "../components/Button";
import TopBar from "../container/common/TopBar";
import TopBarTitle from "../components/TopBarTitle";
const list = [
  {
    name: "Lê Minh Hiệp",
    pos: "G/v chủ nhiệm  - Lớp 9A",
    header: "Kết quả học tập và rèn luyện của em...",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    content: "Tôi là Lê Minh Hiệp giáo viên chủ nhiệm ...",
    timestamp: 1586865801032
  },
  {
    name: "Trần Văn Tiến",
    pos: "Gv môn toán",
    header: "Kết quả học tập và rèn luyện của em...",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    content: "Tôi là Trần Văn Tiến giáo viên chủ nhiệm ...",
    timestamp: 1586862701032
  },
  {
    name: "Lê Minh Hiệp",
    pos: "G/v chủ nhiệm  - Lớp 9A",
    header: "Kết quả học tập và rèn luyện của em...",
    content: "Tôi là Hoàng Văn Trung giáo viên chủ nhiệm ...",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    timestamp: 1586861801032
  }
];

class Notification extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: () => (
        <TopBar
          navigation={navigation}
          right={()=>{}}
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
      text: "test"
    };
  }

  renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => this.props.navigation.navigate("DetailNotification", { item })}
    >
      <ListItem
        title={
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={cardStyles.name}>{item.name}</Text>
            <Text style={{ color: "#999", fontSize: 12 }}>
              {moment(item.timestamp)
                .locale("vi")
                .startOf("hour")
                .fromNow()}
            </Text>
          </View>
        }
        subtitle={
          <View style={cardStyles.container}>
            <Text style={cardStyles.position}>{item.pos}</Text>
            <Text style={cardStyles.header}>{item.header}</Text>
            <Text style={cardStyles.content}>{item.content}</Text>
          </View>
        }
        leftAvatar={
          <Image
            source={{
              uri: item.avatar_url,
              height: 40,
              width: 40,
              cache: "force-cache"
            }}
            style={{ borderRadius: 20 }}
          />
        }
        bottomDivider
      />
    </TouchableOpacity>
  );

  componentWillUnmount() {}

  componentDidUpdate(prevProps) {}


  _onOpenChannelPress = () => {
    this.props.navigation.navigate("OpenChannel");
  };

  _onGroupChannelPress = () => {
    this.props.navigation.navigate("GroupChannel");
  };

  _onDisconnectButtonPress = () => {};
  render() {
    return (
      <View style={styles.containerViewStyle}>
        <FlatList
          // keyExtractor={(item, index) => index.toString()}
          data={list}
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
    fontWeight: "500",
    lineHeight: 16
  },
  pos: {
    fontSize: 12,
    color: "#999"
  },
  header: { fontWeight: "500", lineHeight: 16, color: "#222" },
  content: { color: "#222", opacity: 0.7 }
});
