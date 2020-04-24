import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {theme} from "../config/theme";

const btnStyle = {
    padding: theme.defaultPadding,
    zIndex: 2
};

export default class Button extends React.PureComponent {

    constructor() {
        super();
        this.handlePressButton = this.handlePressButton.bind(this)
    }

    handlePressButton() {
        requestAnimationFrame(() => this.props.onPress && this.props.onPress())
    }

    render() {
        return (
            <TouchableOpacity
                style={[btnStyle, this.props.style]}
                onPress={this.handlePressButton}
                {...this.props}
            >
                <View>
                    {this.props.children}
                </View>
            </TouchableOpacity>
        )
    }
}