import React from 'react';
import {View, TouchableNativeFeedback} from 'react-native';
import {theme} from "../config/theme";

const btnStyle = {
    padding: theme.defaultPadding
};

export default class Button extends React.PureComponent {

    constructor() {
        super();
        this.handlePressButton = this.handlePressButton.bind(this)
    }

    handlePressButton() {
        this.props.onPress()
    }

    render() {
        return (
            <TouchableNativeFeedback
                delayPressIn={0}
                onPress={this.handlePressButton}
                background={TouchableNativeFeedback.SelectableBackground()}
            >
                <View
                    style={[btnStyle, this.props.style]}
                >
                    {this.props.children}
                </View>
            </TouchableNativeFeedback>
        )
    }
}