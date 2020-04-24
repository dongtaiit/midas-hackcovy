import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import Messenger from "../components/Messenger";
import { Input, Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import Button from "../components/Button";
import Permissions, { PERMISSIONS, RESULTS } from "react-native-permissions";
import ImagePicker from "react-native-image-picker";
const heightDevice = Dimensions.get("window").height;
const widthDevice = Dimensions.get("window").width;

const RANGE_TIME = 5 * 60 * 1001;
const timestamp = 1586941500863;

const dataChat = [
  { me: false, text: "Chào bạn", timestamp },
  {
    me: false,
    text: "Nay bé Linh được mấy điểm Toán vậy bạn?",
    timestamp: timestamp + 5000,
  },
  {
    me: true,
    text: "Cháu được 8 điểm bạn ạ.",
    timestamp: timestamp + 1e4,
  },
  {
    me: true,
    text:
      "Từ lúc cho cháu đi học thêm mình thấy cháu có hứng thú học hẳn bạn ạ.",
    timestamp: timestamp + 1e6,
  },
  {
    me: false,
    text: "Vậy à, bạn cho cháu học thêm ở đâu vậy?",
    timestamp: timestamp + 1e6 + 1,
  },
];

class Conversation extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
      listMessages: dataChat,
      text: "",
    };
  }
  static navigationOptions = ({ navigation }) => {
    let user = navigation.getParam("user", {
      name: "some one",
      subtitle: "n/a",
    });
    return {
      headerTitle: (
        <View style={topBarStyles.container}>
          <Text style={topBarStyles.name}>{user.name}</Text>
          <Text style={topBarStyles.subtitle}>{user.subtitle}</Text>
        </View>
      ),
      headerBackImage: (
        <Button
          onPress={() => {
            return navigation.goBack();
          }}
        >
          <Icon name="ios-arrow-back" type="ionicon" color="white" size={24} />
        </Button>
      ),
      headerStyle: {
        backgroundColor: "#1473BC",
      },
    };
  };
  componentDidMount() {
    let { listMessages } = this.state;
    if (listMessages.length > 0) {
      const newList = [{ ...listMessages[0], alwayShowTime: true }];
      for (let i = 1; i < listMessages.length; i++) {
        let record = { ...listMessages[i] };
        let recordBefore = { ...listMessages[i - 1] };
        if (record.timestamp - recordBefore.timestamp > RANGE_TIME) {
          record.alwayShowTime = true;
          newList.push(record);
        } else {
          newList.push(record);
        }
      }
      this.setState({ listMessages: newList });
    }
  }

  _onEnter = (text) => {
    if (text.trim()) {
      this.textInput.clear();
      let record = { text, timestamp: Date.now(), me: true };
      if (
        record.timestamp -
          this.state.listMessages[this.state.listMessages.length - 1]
            .timestamp >
        RANGE_TIME
      )
        record.alwayShowTime = true;
      this.setState({ listMessages: [...this.state.listMessages, record] });
    }
  };

  _renderMessages = (list) => {
    if (list.length > 0) {
      return list.map((item, key) => (
        <Messenger
          key={item.timestamp}
          timestamp={item.timestamp}
          text={item.text}
          align={item.me ? "right" : "left"}
          backgroundColor={item.me ? "#dadada" : "#0A86F9"}
          colorText={item.me ? "#000" : "#fff"}
          alwayShowTime={item.alwayShowTime}
        />
      ));
    }
  };

  _onPhotoAddPress = () => {
    Permissions.check(
      Platform.OS === "ios"
        ? PERMISSIONS.IOS.PHOTO_LIBRARY
        : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
    ).then((response) => {
      if (response === RESULTS.GRANTED) {
        ImagePicker.showImagePicker(
          {
            title: "Chọn ảnh",
            mediaType: "photo",
            noData: true,
          },
          (response) => {
            if (
              !response.didCancel &&
              !response.error &&
              !response.customButton
            ) {
              let source = { uri: response.uri };
              if (response.fileName) {
                source["name"] = response.fileName;
              } else {
                let paths = response.uri.split("/");
                source["name"] = paths[paths.length - 1];
              }
              if (response.type) {
                source["type"] = response.type;
              } else {
                /** For react-native-image-picker library doesn't return type in iOS,
                 *  it is necessary to force the type to be an image/jpeg (or whatever you're intended to be).
                 */
                if (Platform.OS === "ios") {
                  source["type"] = "image/jpeg";
                }
              }
              // ---> send data : source
            }
          }
        );
      } else if (response === RESULTS.DENIED) {
        Permissions.request(
          Platform.OS === "ios"
            ? PERMISSIONS.IOS.PHOTO_LIBRARY
            : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
        ).then((response) => {
          this._onPhotoAddPress();
        });
      } else {
        Alert.alert(
          "Permission denied",
          "You declined the permission to access to your photo.",
          [{ text: "OK" }],
          {
            cancelable: false,
          }
        );
      }
    });
  };

  render() {
    const { listMessages } = this.state;
    return (
      <View style={{ flex: 1, marginTop: 10 }}>
        <ScrollView>{this._renderMessages(listMessages)}</ScrollView>
        <View style={inputBarStyles.container}>
          <TouchableOpacity
            style={{ ...inputBarStyles.iconA, ...{ marginRight: 15 } }}
            onPress={this._onPhotoAddPress}
          >
            <Icon
              name="camera"
              type="entypo"
              color="#848484"
              size={40}
              onPress={this._onPhotoAddPress}
            />
          </TouchableOpacity>
          <Input
            onSubmitEditing={(e) => this._onEnter(e.nativeEvent.text)}
            placeholder="Nhắn tin"
            ref={(input) => {
              this.textInput = input;
            }}
            multiline={false}
            containerStyle={{
              borderColor: "#c7c7c7",
              borderWidth: 1,
              backgroundColor: "#FAFAFA",
              borderRadius: 100,
              padding: 0,
              flex: 1,
              height: 45,
            }}
            inputContainerStyle={{
              borderBottomWidth: 0,
            }}
            inputStyle={{
              color: "#000",
            }}
            rightIcon={
              <TouchableOpacity style={inputBarStyles.iconA}>
                <Icon
                  name="emoji-happy"
                  type="entypo"
                  color="#848484"
                  size={30}
                />
              </TouchableOpacity>
            }
          />
        </View>
      </View>
    );
  }
}

const inputBarStyles = StyleSheet.create({
  container: {
    marginLeft: 16,
    marginRight: 16,
    flexDirection: "row",
    marginBottom: 10,
  },
  iconCamera: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center",
  },
  iconA: { flex: 1, marginRight: 5, justifyContent: "center" },
});

const topBarStyles = StyleSheet.create({
  container: {},
  name: {
    color: "#fff",
    fontWeight: "bold",
    lineHeight: 17,
  },
  subtitle: {
    color: "#fff",
    fontSize: 12,
    lineHeight: 16,
  },
});

export default Conversation;
