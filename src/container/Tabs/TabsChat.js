import React, { PureComponent } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-navigation";
import TopBar from "../common/TopBar";
import BabiesBar from "../../components/BabiesBar";
import { babies, listUser } from "../../mock_data/user";
import searchIcon from "../../assets/images/searchIcon.png";
import { SearchBar, ListItem } from "react-native-elements";
import Button from "../../components/Button";
import { Badge, Icon } from "react-native-elements";

class TabsChat extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isFocus: false,
      search: "",
      listUser,
      listSearch: listUser,
    };
  }

  updateSearch = (search) => {
    let { listUser } = this.state;

    this.setState({ search });

    const listFilter = listUser.filter((v) => {
      return v.name.toUpperCase().indexOf(search.toUpperCase()) != -1;
    });

    this.setState({ listSearch: listFilter });
  };

  renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        this.props.navigation.navigate("Conversation", { user: item })
      }
    >
      <ListItem
        title={<Text style={cardStyles.name}>{item.name}</Text>}
        subtitle={
          <View style={cardStyles.container}>
            <Text style={cardStyles.position}>{item.subtitle}</Text>
            <Text style={cardStyles.message}>{item.latestMessage}</Text>
          </View>
        }
        leftAvatar={
          <Image
            source={{
              uri: item.avatar_url,
              cache: "force-cache",
            }}
            style={{ borderRadius: 20, height: 40, width: 40 }}
          />
        }
        bottomDivider
      />
    </TouchableOpacity>
  );

  keyExtractor = (item, index) => index.toString();

  componentDidMount() {
    Keyboard.addListener("keyboardDidShow", () =>
      this.setState({ isFocus: true })
    );
    Keyboard.addListener("keyboardDidHide", () =>
      this.setState({ isFocus: false })
    );
  }

  componentWillUnmount() {
    //Keyboard.removeAllListeners();
  }

  _viewRight = () => {
    let count = 4;
    return (
      <View style={{ flexDirection: "row" }}>
        <Button onPress={() => this.props.navigation.navigate("Nofification")}>
          <View style={styles.bellWrapper}>
            <Icon name="bell" type="simple-line-icon" color="white" size={24} />
            {count > 0 ? (
              <Badge
                status="error"
                containerStyle={{ position: "absolute", top: -4, right: -4 }}
                value={
                  <Text style={{ fontSize: 11, color: "#FFFF" }}>
                    {count > 99 ? "99+" : count}
                  </Text>
                }
              />
            ) : null}
          </View>
        </Button>
      </View>
    );
  };

  render() {
    let { isFocus, search, listSearch } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        {!isFocus ? (
          <>
            <TopBar
              {...this.props}
              title="Trò Chuyện"
              right={this._viewRight}
            />
            <BabiesBar data={babies} />
          </>
        ) : null}
        <View>
          <SearchBar
            placeholder="Tìm kiếm bạn bè trong danh bạ"
            onChangeText={this.updateSearch}
            value={search}
            searchIcon={<Image source={searchIcon} />}
            containerStyle={{
              margin: 0,
              padding: 0,
            }}
            inputContainerStyle={{
              backgroundColor: "#345472",
            }}
            inputStyle={{ fontSize: 14, padding: 0 }}
            placeholderTextColor="#EBEBEB"
          />
        </View>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={listSearch}
          renderItem={this.renderItem}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
});

const cardStyles = StyleSheet.create({
  container: {
    fontFamily: "SF-Compact-Text-Regular",
  },
  name: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 16,
  },
  position: {
    fontSize: 12,
    color: "#999",
  },
  message: {
    color: "#666",
  },
});

export default TabsChat;
