import React from "react";
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import TopBar from "../container/common/TopBar";
import Button from "../components/Button";
import { Icon } from "react-native-elements";
import LineEB from '../components/LineEB';
import WallpaperHorizontal from '../components/WallpaperHorizontal';
import { theme } from "../config/theme";
import TopBarTitle from "../components/TopBarTitle";

class DetailNews extends React.Component {
  constructor(props) {
    super(props);
    const item = this.props.navigation.getParam('item', {});
    this.state = { item }
  }
  render() {
    let item = this.state.item

    return (
      <ScrollView
        style={{ paddingLeft: 0, paddingRight: 0, paddingBottom: 20 }}
      >
        <View style={styles.content}>
          <Text style={styles.header}>
            {item.title + ""}
          </Text>
          
          <Text style={styles.text}>
            {item.body}        </Text>
            <Image style={{ height: 200, marginTop: 16, marginBottom: 8}} source={{ uri: item.imageUrl }} />
        </View>


      </ScrollView>
    );
  }
}
DetailNews.navigationOptions = ({ navigation }) => {
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
        center={() => <TopBarTitle text={"Tin tức mới"} align="left" />}
        right={() => {
        }}
      />
    )
  };
};

const styles = StyleSheet.create({
  header: {
    color: "#000",
    fontSize: 24,
    fontWeight: "800",


  },
  content: {
    padding: 12
  },
  title: {
    backgroundColor: theme.mainColor,
    marginRight: 0,
    marginLeft: 0,
    color: "white",
    paddingBottom: 6,
    paddingTop: 6,
    paddingLeft: 12


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

export default DetailNews;
