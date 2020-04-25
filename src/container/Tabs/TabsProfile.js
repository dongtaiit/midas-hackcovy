import React, {PureComponent} from 'react';
import {View, StyleSheet,Text } from 'react-native';
import TopBar from '../common/TopBar';
import SchedulesList from '../profile/SchedulesList';
import SchedulesGrid from '../profile/SchedulesGrid';
import {  babies } from '../../mock_data/user';
import { Bar } from '../../components'

class TabProfile extends PureComponent {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TopBar  {...this.props} left={()=> {}} leftCustormStyle={{ width : 10}} title="Thời gian biểu"/>
        <Bar data={babies}/>
        <View style={styles.body}>
          <SchedulesGrid />
          <SchedulesList />
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
  body:{
    flex: 1, 
  }
});

export default TabProfile;

