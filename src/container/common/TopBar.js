import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, Platform, Dimensions, Text} from 'react-native';
import PropTypes from 'prop-types';
import {  Badge,Icon } from 'react-native-elements'
import {theme} from '../../config/theme';
import TopBarTitle from '../../components/TopBarTitle';
import Button from '../../components/Button';


const propTypes = {
    hasStatusBar: PropTypes.bool,
    title: PropTypes.string,
    left: PropTypes.func,
    center: PropTypes.func,
    right: PropTypes.any,
    customStyle: PropTypes.object,
    image: PropTypes.string
};

const defaultProps = {
  hasStatusBar: true,
  customStyle: {}
};

const {width} = Dimensions.get('window');

const isAndroid = Platform.OS === 'android';

class TopBar extends PureComponent {

  constructor() {
    super();
    this.handlePressLeftButton = this.handlePressLeftButton.bind(this);
    this.handlePressRightButton = this.handlePressRightButton.bind(this);
    this.renderLeftButton = this.renderLeftButton.bind(this);
  }

  handlePressLeftButton() {
    this.props.navigation.navigate('Menu')
  }

  handlePressRightButton() {
    this.props.navigation.navigate('Nofification')
  }

  renderRightButton() {
    let count =  4;
    return (
      <Button
        onPress={this.handlePressRightButton}
      >
        <View style={styles.bellWrapper}>
          <Icon
            name="bell"
            type="simple-line-icon"
            color="white"
            size={24}
          />
          {count > 0 ? <Badge
            status="error"
            containerStyle={{ position: 'absolute', top: -4, right: -4 }}
            value={<Text style={{ fontSize:11,color:'#FFFF'}}>{count > 99 ? '99+' : count}</Text>}
          /> 
          : null} 
        </View>
      </Button>
    )
  }

  renderLeftButton(){
    return (
      <Button
        onPress={this.handlePressLeftButton}
      >
        <Icon
          name="menu"
          type="entypo"
          color="white"
          size={24}
        />
      </Button>
    )
  }

  renderTitle() {
    return (
      <TopBarTitle
        text={this.props.title ? this.props.title : '' }
        align={'left'}
        image={this.props.image}
      />
    )
  }

  render() {
    let { left, center, right} = this.props;
    return (
      <View style={{justifyContent: 'center'}}>
        <View style={[styles.container, this.props.customStyle]}>
          <View style={{width: 56}}>
            {left ? left() : this.renderLeftButton()}
          </View>
          <View style={{flex: 1}}>
            {center ? center() : this.renderTitle()}
          </View>
          <View style={{minWidth: 56}}>
            {right ? right() : this.renderRightButton()}
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: theme.mainColor,
    width,
    overflow: 'hidden'
  },
  bellWrapper: {
    position: 'relative'
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    paddingHorizontal: 4,
    borderRadius: 14 / 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  badgeText: {
    color: '#fff',
    fontSize: 11
  }
});

TopBar.propTypes = propTypes;
TopBar.defaultProps = defaultProps;

export default connect(state => {
  return {
  }
})(TopBar);
