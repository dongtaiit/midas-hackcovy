import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default (props) => <Icon size={props.size || 24} color={props.color || 'white'} {...props} />;