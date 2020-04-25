import { StyleSheet, View, Text } from 'react-native';
import React, { Component } from 'react';
import PagerTabIndicator from '../components/indicator/PagerTabIndicator';
import IndicatorViewPager from '../components/IndicatorViewPager';
import Schedules from "./profile/Schedules";
import Academy from "./profile/Academy";
import PersonalFile from "./profile/PersonalFile";

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
                        <Academy />
                    </View>
                    <View>
                        <PersonalFile />
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
