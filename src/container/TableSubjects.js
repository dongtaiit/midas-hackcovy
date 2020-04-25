import React, { Component } from 'react';
import { StyleSheet, View,Dimensions,Text } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
const { width } = Dimensions.get('window');

export default class TableSubjects extends Component {
  constructor(props) {
    super(props);
    const titleSubject = (value) => (
          <View style={styles.btn}>
            <Text style={{ color : '#1473BC',fontSize:14}}>{value}</Text>
          </View>
    );
    const footerSubject = (value) =>(
        <View style={styles.footer}>
            <View style={styles.left}>
                <Text style={styles.btnText}>Tổng kết</Text>
            </View>
            <View style={styles.right}>
                <Text style={styles.btnText}>{value}</Text>
            </View>
        </View>
    )
    this.state = {
      tableHead: ['Môn học', 'Học kỳ 1', 'Học kỳ 2', 'Cả năm'],
      tableData: [
        [titleSubject('Toán học'), '8.3', '9.3', '8.7'],
        [titleSubject('Vật lý'), '8.6', '8.0', '8.4'],
        [titleSubject('Ngoại ngữ'), '7.8', '8.8', '8.0'],
        [titleSubject('Hoá học'), '8.6', '9.5', '8.3'],
        [titleSubject('Văn học'), '6.5', '9.2', '9.5'],
        [titleSubject('Sinh học'), '8.0', '8.3', '7.8'],
        [titleSubject('Công nghệ'), '7.8', '8.6', '8.0'],
        [titleSubject('Địa lý'), '9.5', '8.4', '9.0'],
        [titleSubject('GDCD'), '8.2', '8.3', '8.6'],
        [titleSubject('Lịch sử'), '7.8', '8.2', '7.5'],
      ],
      tableFooter: [ footerSubject('8.5')],
    }
  }
 
  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 1, borderColor: '#E0E0E0'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.title}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
          <Row data={state.tableFooter} style={styles.footer} textStyle={styles.textfooter}/>
        </Table>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 10, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6,fontSize: 14,color: '#666666' },
  title: { margin: 6,fontSize: 14,color: '#222222',fontWeight:'700' },
  footer:{ flexDirection:'row' },
  btn:{
      paddingLeft: 5
  },
  left:{
    alignItems:'flex-start',
    flex: 1
  },
  right:{
      alignItems:'flex-end',
  },
  btnText:{
      color: '#000',
      paddingLeft: 8,
      paddingRight: width/4-35,
      fontWeight:'700',
      paddingBottom:5,
      paddingTop:5
  },
  textfooter: { margin: 6,fontSize: 14,color: '#222222',fontWeight:'700'}
});