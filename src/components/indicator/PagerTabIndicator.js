import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, ViewPropTypes, Image, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import IndicatorViewPager from '../IndicatorViewPager';
import { theme } from '../../config/theme';
const deviceWidth = Dimensions.get("window").width;

export default class PagerTabIndicator extends Component {
    static propTypes = {
        ...ViewPropTypes,
        initialPage: PropTypes.number,
        pager: PropTypes.instanceOf(IndicatorViewPager),
        tabs: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string,
            iconSource: Image.propTypes.source,
            selectedIconSource: Image.propTypes.source
        })).isRequired,
        itemStyle: ViewPropTypes.style,
        selectedItemStyle: ViewPropTypes.style,
        iconStyle: Image.propTypes.style,
        selectedIconStyle: Image.propTypes.style,
        textStyle: Text.propTypes.style,
        selectedTextStyle: Text.propTypes.style,
        changePageWithAnimation: PropTypes.bool,
    }

    static defaultProps = {
        tabs: [],
        changePageWithAnimation: true
    }

    state = {
        selectedIndex: this.props.initialPage
    }

    render() {
        let {
            tabs, pager, style, itemStyle, selectedItemStyle, iconStyle,
            selectedIconStyle, textStyle, selectedTextStyle, changePageWithAnimation
        } = this.props
        if (!tabs || tabs.length === 0) return null

        let tabsView = tabs.map((tab, index) => {
            let isSelected = this.state.selectedIndex === index
            return (
                <TouchableOpacity
                    style={[styles.itemContainer, isSelected ? selectedItemStyle : itemStyle]}
                    activeOpacity={0.6}
                    key={index}
                    onPress={() => {
                        if (!isSelected) {
                            if (this.props.changePageWithAnimation)
                                pager.setPage(index);
                            else pager.setPageWithoutAnimation(index);
                        }
                    }}
                >
                    <Image
                        style={[styles.image, isSelected ? selectedIconStyle : iconStyle]}
                        source={isSelected ? tab.selectedIconSource : tab.iconSource}
                    />
                    <Text
                        style={[isSelected ? styles.textSelected : styles.text, isSelected ? selectedTextStyle : textStyle]}
                    >
                        {tab.text}
                    </Text>
                </TouchableOpacity>
            )
        })
        return (
            <ScrollView style={[styles.container, style]} horizontal={true} >
                {tabsView}
            </ScrollView>
        )

    }

    onPageSelected(e) {
        this.setState({ selectedIndex: e.position })
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        borderTopWidth: 0.5,
        borderTopColor: '#E0E0E0',
        backgroundColor: '#fff',
        maxHeight: 45,
        minWidth: deviceWidth,
        backgroundColor: theme.subMainColor
    },
    itemContainer: {
        alignItems: 'center',
        flex: 1,
        minHeight: 40,
        color: "#666",
        backgroundColor: theme.subMainColor,
        paddingTop: 15,
        marginBottom: 10,
        paddingRight: 10,
        paddingLeft: 5,
        maxHeight: 45,
    },
    image: {},
    text: {
        fontSize: 14,
        lineHeight: 16,
        color: theme.mainTextColor
    },
    textSelected: {
        fontSize: 14,
       // color: theme.mainTextColor,
        lineHeight: 16,
        fontWeight: 'bold',
        color:'#FCD447'
    }
})