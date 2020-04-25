import React, { PureComponent } from 'react';
import { View ,Text,StyleSheet} from "react-native";
import TopBar from '../common/TopBar';

class TabsNews extends PureComponent {
  constructor(props) {
    super(props);
  }

  render(){
  return(
    <View style={styles.container}>
        <TopBar  {...this.props}  title="Bảng tin" />
        <View style={styles.body}>
          <Text>Tabs News </Text>
        </View>
      </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default TabsNews;
