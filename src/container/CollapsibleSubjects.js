import React, { Component } from 'react';
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import { theme } from '../config/theme';
import { ItemSchedule } from '../components/itemSchedule';
import { POINTS } from '../mock_data/points';
import  Icon  from "../components/Icon"

export default class CollapsibleSubjects extends Component {
  constructor(props) {
    super(props);
    this.data= POINTS
  }
  state = {
    activeSections: [0],
    collapsed: true,
    multipleSelect: true,
    layout:[]
  };
  itemSubjects(points){
    return (
      <Animated.View style={styles.boxSubjects}>
        <ItemSchedule item={points}/>
      </Animated.View>
    )
  }
  
  componentDidMount(){
    this.initData()
  }

  initData(){
    let dataLayout = []
    this.data.forEach(e => {
      dataLayout.push({
        title: e,
        content: this.itemSubjects(e.points)
      })
    });
    this.setState({
      layout: dataLayout
    })
  }
  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <View style={{ justifyContent:'flex-start',flex:1 }}><Text style={styles.headerText}>{section.title.subject}</Text></View>
        <View style={{ alignItems:'center',flex:1}}>
           <Text style={{color: '#FFF'}}>{section.title.result}</Text>
        </View>
        <View style={{ alignItems:'flex-end',flex:1}}>{isActive
          ? <Icon name="chevron-up" size={18} />
          : <Icon name="chevron-down" size={18} />}
        </View>
      </Animatable.View>
    );
  };

  renderContent(section, _, isActive) {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.activeSelector : styles.inactive]}
        transition="backgroundColor"
      >
        <Animatable.View animation={isActive ? 'bounceIn' : undefined}>
          {section.content}
        </Animatable.View>
      </Animatable.View>
    );
  }

  render() {
    const { multipleSelect, activeSections,layout } = this.state;

    return (
      <View style={styles.container}>
          <Accordion
            activeSections={activeSections}
            sections={layout}
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={400}
            onChange={this.setSections}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.subMainColor,
  },
  textChildBox:{
    color : '#000'
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: theme.subMainColor,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff'
  },
  content: {
    padding: 20,
    backgroundColor: '#F7F7F7',
  },
  active: {
    backgroundColor: theme.subMainColor
  },
  inactive: {
    backgroundColor: theme.subMainColor
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
  itemChildBox:{
    display: 'flex',
  },
  textChildBox:{
    fontSize: 14,
    color: theme.subTextColor
  },
  viewTxtChildBox:{
    backgroundColor: '#fff',
    width: 25,
    height: 20,
    justifyContent:'center',
    alignItems:'center',
    marginLeft: 20
  }
});
