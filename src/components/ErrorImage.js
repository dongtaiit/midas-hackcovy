import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    itemImage: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const propTypes = {
    size: PropTypes.number
};

function ErrorImage(props) {
    return (
        <View style={styles.itemImage}>
            <Image
                source={require('../assets/images/no-image.png')}
                {...props}
                resizeMode="cover"
            />
        </View>
    )
}

ErrorImage.propTypes = propTypes;

export default ErrorImage;