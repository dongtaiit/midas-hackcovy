import React, { PureComponent } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import TopBar from '../common/TopBar';
import Profile from '../Profile';
import { babies } from '../../mock_data/user';
import { Bar } from '../../components';

class TabProfile extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TopBar  {...this.props}  title="Học sinh" />
        <Bar data={babies} />
        <View style={styles.body}>
          <Profile />
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
  }
});

export default TabProfile;

