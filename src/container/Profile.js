import { StyleSheet, View, Text } from 'react-native';
import React, { Component } from 'react';
import PagerTabIndicator from '../components/indicator/PagerTabIndicator';
import IndicatorViewPager from '../components/IndicatorViewPager';
import Schedules from "./profile/Schedules";

export default class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <IndicatorViewPager
                    style={{ flex: 1 }}
                    indicator={this._renderTabIndicator()}
                >
                    <View>
                        <Schedules />
                    </View>
                    <View>
                        <View><Text>Tabs Academy</Text></View>
                    </View>
                    <View>
                        <View><Text>Tabs profile</Text></View>
                    </View>
                </IndicatorViewPager>
            </View>
        );
    }

    _renderTabIndicator() {
        let tabs = [{
            text: 'Thời khoá biểu',

        }, {
            text: 'Bảng Điểm',
        }, {
            text: 'Hồ sơ',
        }];
        return <PagerTabIndicator tabs={tabs} trackScroll={true} />;
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 10,
        backgroundColor: '#FFF',
    }
});
