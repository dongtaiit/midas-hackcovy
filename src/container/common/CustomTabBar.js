import React, {PureComponent} from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import {theme} from "../../config/theme";
import Button from "../../components/Button";
import { Text } from 'native-base';

const {width} = Dimensions.get('window');

class CustomTabBar extends PureComponent {

    handleChangeTab(routeName) {
        setTimeout(() => {
            this.props.navigation.navigate(routeName)
        }, 0)
    }

    render() {
        let navigation = this.props.navigation;
        let images = {
            News: {
                image: require('../../assets/images/newspaper.png'),
                tittle: 'Bảng tin'
            },
            Discus: {
                image: require('../../assets/images/language.png'),
                tittle: 'Diễn đàn'
            },
            Profile: {
                image: require('../../assets/images/user.png'),
                tittle: 'Học sinh'
            },
            Service: {
                image: require('../../assets/images/my_business.png'),
                tittle: 'Dịch vụ'
            },
            Chat: {
                image: require('../../assets/images/speech_bubble_3.png'),
                tittle: 'Trò chuyện'
            }
        };

        const {routes, index} = navigation.state;
        return (
            <View style={styles.tabContainer}>
                {routes.map((route, idx) => {
                    const color = (index === idx) ? theme.mainColor : theme.inactiveColor;
                    const isActive = index === idx;
                    return (
                        <Button
                            onPress={() => this.handleChangeTab(route.routeName)}
                            style={[styles.tab, {backgroundColor: isActive ? theme.lightBackground : '#fff'}]}
                            key={route.routeName}
                        >
                            <View style={styles.centerBox}>
                                {(
                                    <Image
                                        source={images[route.routeName].image}
                                        style={[styles.icon, {tintColor: color}]}
                                        resizeMode={'contain'}
                                    />
                                )}
                            <Text 
                                style={[styles.text,{ color : isActive ? theme.mainColor : '#888888'}]}
                                >{images[route.routeName].tittle}
                            </Text>    
                            </View>
                        </Button>
                    )
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        width,
        borderTopWidth: 1,
        borderTopColor: '#888888'
    },
    text:{
        fontSize: 12,
        paddingTop: 5,
        lineHeight:14,
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
    },
    centerBox: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        minWidth: 80,
    },
    icon: {
        width: 22,
        height: 22
    }
});

export default CustomTabBar;