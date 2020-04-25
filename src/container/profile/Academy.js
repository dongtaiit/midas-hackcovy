import React, {PureComponent} from 'react';
import {View, StyleSheet,Text,ScrollView } from 'react-native';
import { theme } from '../../config/theme';
import CollapsibleSubjects from '../CollapsibleSubjects';
import TableSubjects from '../TableSubjects';
import SelectPicker  from '../../components/SelectPicker';
import {  pickerTime , picker } from '../../mock_data/points';

class Academy extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: null,
      selectedYear: null
    }
  }

  handlePickerChange = selectedValue => {
    this.setState({ selectedValue });
  };
  handleYearChange = selectedYear => {
    this.setState({ selectedYear });
  };
  render() {
    let { selectedValue } = this.state
    return (
      <ScrollView style={styles.container}>
          <View style={styles.headerSchedule}> 
            <View style={styles.boxHeader}>
              <View style={styles.boxtitlePicker}><Text style={styles.title}>Bảng Điểm</Text></View>
              <View style={styles.boxPicker}>
                <SelectPicker  
                  data={picker}
                  onInputChange={this.handlePickerChange}
                />
                <SelectPicker  
                  data={pickerTime}
                  onInputChange={this.handleYearChange}
                />
              </View>
            </View>
            <View style={styles.box}>
              <View style={styles.boxLeft}>
                <Text style={styles.text}>Trung Bình</Text>
                <Text style={styles.textNumber}> 9.0</Text>
              </View>
              <View style={styles.boxRight}>
                <Text style={styles.textRight}>Học lực : <Text style={styles.textResult}>Giỏi</Text></Text>
                <Text style={styles.textRight}>Hạnh Kiểm : <Text style={styles.textResult}>Tốt</Text></Text>
                <Text style={styles.textRight}>Danh Hiệu : <Text style={styles.textResult}>Tiên Tiến</Text></Text>
              </View>
            </View>
          </View>
          <View style={styles.bodySchedule}> 
            { selectedValue === 3 ? <TableSubjects /> : <CollapsibleSubjects />}
          </View>
          <View style={styles.remarks}>
            <Text style={styles.titleRemarks}>Nhận xét của GVCN</Text>
            <Text style={styles.contentRemarks}>Tôi thấy năm học vừa qua em Nguyễn Thùy Linh đã rất nỗ lực cố gắng học tập ...</Text>
          </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  remarks:{
    margin: 16,
    padding: 10,
    borderRadius:5,
    minHeight: 100,
    backgroundColor: '#F7F7F7'
  },
  titleRemarks:{
    color: '#000',
    fontSize: 16,
    fontWeight:'700',
    lineHeight: 19,
    paddingBottom: 8
  },
  contentRemarks:{
    fontSize: 14,
    lineHeight: 19,
    color: '#666666'
  },
  boxHeader:{
    display: 'flex',
    flexDirection: 'row'
  },
  boxPicker:{
    flex: 4,
    flexDirection: 'row',
  },
  boxtitlePicker:{
    flex:2,
    paddingTop:13
  },
  text:{
    color: '#fff',
    fontSize: 14
  },
  textNumber:{
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  textResult:{
    fontWeight: 'bold',
    color: '#000'
  },
  textRight:{
    color: '#666666'
  },
  headerSchedule:{
    padding: 16
  },
  title:{
    fontSize: 17,
    fontWeight:'bold',
    color:'#000'
  },
  box:{
    height: 79,
    marginTop: 25,
    backgroundColor: theme.mainColor,
    display: 'flex',
    flexDirection: 'row'
  },
  boxLeft:{
    flex:1,
    backgroundColor: '#347BAE',
    justifyContent:"center",
    alignItems: 'center'
  },
  boxRight:{
    flex:1,
    backgroundColor: '#A8D4F3',
    justifyContent:"center",
    paddingLeft: 10,
  },
  bodySchedule:{
    paddingLeft:16,
    paddingRight:16,
    flex: 1,
  }
});

export default Academy;
