import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import LoadImage from './LoadImage';

const propTypes = {
  text: PropTypes.string.isRequired,
  align: PropTypes.string,
  image: PropTypes.string,
};

const textStyle = {
  fontSize: 18,
  fontWeight: '600',
  color: 'white'
};

function TopBarTitle(props) {
  if (!props.align) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text
          style={{...textStyle, textAlign: props.align || 'center'}}
          numberOfLines={1}
        >{props.text ? props.text.toString().toUpperCase() : ''}</Text>
      </View>
    )
  }
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {props.image ? (
          <LoadImage
            uri={props.image}
            style={{width: 32, height: 32, borderRadius: 2}}
          />
        ) : (<View/>)}
        <Text
          style={{...textStyle, textAlign: props.align || 'center'}}
          numberOfLines={1}
        >{props.text ? props.text.toString() : ''}</Text>
      </View>
    </View>
  )
}

TopBarTitle.propTypes = propTypes;

export default TopBarTitle;
