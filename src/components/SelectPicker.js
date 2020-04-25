import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Left } from 'native-base';
import RNPickerSelect from 'react-native-picker-select';
import { Icon } from 'react-native-elements';

export default class SelectPicker extends React.Component{
    pickerRef;
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        }
    }
    onSelectChange = (value) => {
        this.setState({ value: value });
        this.props.onInputChange(value);
    }
    renderPickerSelect(data) {
        return (
            <View style={{ ...styles.formPiker, ...data.formStyle }}>
                <Left>
                    {data.label ? <Text style={styles.label}>{data.label}</Text> : null}
                </Left>
                <TouchableWithoutFeedback
                    onPress={() => {
                        this.pickerRef.togglePicker(true);
                    }}
                    style={{ ...styles.pikerContainer, ...data.containerStyle }}
                >
                    <RNPickerSelect
                        placeholder={{ label: "Vui lòng chọn", value: 0 }}
                        items={data || []}
                        onValueChange={this.onSelectChange}
                        useNativeAndroidPickerStyle={false}
                        style={pickerSelectStyles}
                        value={this.state.value || data[0].value}
                        ref={(el) => {
                            this.pickerRef = el;
                        }}
                        Icon={() => {
                            return <Icon size={24} name='arrow-drop-down' color='gray' />;
                        }}
                    />
                </TouchableWithoutFeedback>
            </View>
        )
    }

    render() {
        return (
            <View>
                {this.renderPickerSelect(this.props.data)}
            </View>
        )
    }
}

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 14,
        //padding: 15,
        paddingRight: 30, // to ensure the text is never behind the icon
        color: 'black',
    },
    inputAndroid: {
        minHeight: 50,
        fontSize: 14,
        textAlign: "right",
        minWidth: 90,
        paddingRight: 30, // to ensure the text is never behind the icon
        color: 'black',
    },
    iconContainer: {
        paddingVertical: 13
    }
});

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    formPiker: {
        flexDirection: 'row',
        marginRight:10,
        marginTop:8,
        borderWidth: 1,
        borderColor: '#CBCBCB',
        borderRadius: 5,
        height: 35,
        alignItems:'center'
    },
    label: {
        marginLeft: 5,
        color: 'black',
        fontSize: 15
    },
    pikerContainer: {
        borderBottomWidth: 0,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
});