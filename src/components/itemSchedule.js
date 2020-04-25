import React, { Component } from 'react';
import { View,Text } from 'react-native';
import { theme } from '../config/theme';
import LineEB from './LineEB';
import { formatPoint } from '../utils/helper'

class ItemSchedule extends Component {
  constructor(props) {
    super(props); 
  }
  _title(item){
    return(
        <View style={styles.boxTitle}>
            {item && item.map(e => {
                return(<Text key={e.key} style={styles.textChildBox}>{e.key}</Text>)
            })}
        </View>  
    )
  }
  _itemSub(e){
    return(
        <View style={styles.viewItemSub}>
            {
                e && e.value.map((val, k) =>{
                    return(
                    <View key={k} style={styles.viewTxtChildBox}><Text style={styles.textPoint}>{formatPoint(val,1)}</Text></View>
                    )
                })
            }
        </View>
    )
  }
  _content(item){
    return(
        <View style={styles.boxContent}>
            {item && item.map((e, k) => {
                return(
                <View key={k}>{this._itemSub(e)}</View>
                )
            })}
        </View>
    )
  }
  render() {
    let { item } = this.props
    return (
        <View>
            <View style={styles.itemBox}>
                {this._title(item)}
                {this._content(item)}
            </View>
            <LineEB />
            <View style={styles.itemBox}>
                <View style={styles.boxTitle}>
                    <Text style={{...styles.textChildBox,...styles.boldText}}>TB</Text>
                </View> 
                <View style={styles.boxContent}>
                    <View style={styles.viewItemSub}>
                        <View style={styles.viewTxtChildBox}><Text style={{...styles.textPoint,...styles.boldText}}>8.3</Text></View>
                    </View>
                </View> 
            </View>
        </View>
    )
  }
}

const styles = {
    itemBox:{
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10
      },
      textChildBox:{
        fontSize: 14,
        color: theme.subTextColor,
        paddingTop:13,
        lineHeight: 17
      },
      textPoint:{
        fontSize: 14,
        color: '#000',
        paddingTop: 2,
        lineHeight: 17
      },
      viewTxtChildBox:{
        backgroundColor: '#fff',
        width: 30,
        height: 20,
        marginTop: 10,
        justifyContent:'center',
        alignItems:'center',
        marginLeft: 20
      },
      boldText:{
        fontWeight: 'bold',
        color: '#000',
      },
      boxContent:{
        flexDirection: 'column',
        flex: 5
      },
      boxTitle:{
        flex: 1,
        minWidth: 30,
      },
      viewItemSub:{
        display: 'flex',
        flexDirection: 'row',
      }
};

export { ItemSchedule };
