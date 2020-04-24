import React from 'react';
import {CachedImage} from 'react-native-cached-image';
import ErrorImage from './ErrorImage';
import PropTypes from 'prop-types';
import {View} from 'react-native';

const propTypes = {
  uri: PropTypes.string.isRequired
};

class LoadImage extends React.PureComponent {

  render() {
    let {uri} = this.props;
    return !uri ? <ErrorImage {...this.props}/> : (
      <View style={this.props.style}>
        <CachedImage
          source={{uri}}
          resizeMode="cover"
          {...this.props}
        />
      </View>
    )
  }
}

LoadImage.propTypes = propTypes;

export default LoadImage;
