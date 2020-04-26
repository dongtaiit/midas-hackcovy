import {StyleSheet, View, Text,Dimensions,TouchableOpacity,Image} from 'react-native';
import React, {Component} from 'react';
import SchedulesList from './SchedulesList';
import SchedulesGrid from './SchedulesGrid';
import { theme } from '../../config/theme';
import arrowLeft from "../../assets/images/arrowLeftWeek.png";
import arrowRight from "../../assets/images/arrowRightWeek.png";
import moment from "moment";
import { Icon } from "react-native-elements";
const deviceWidth = Dimensions.get("window").width;

export default class Schedules extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deviceWidth,
            count: 0, // counter: click next/ previous of week.
            content: '',
            layout: true
        };
    }

    _onChangeArrow(number) {
        this.setState({ count: this.state.count + number });
    }

    _getDayOfEarlyWeek = (count) => {
        return moment()
            .day(count * 7)
            .startOf("week")
            .format("DD/MM");
    };

    _getDayOfWeekend = (count) => {
        return moment()
            .day(count * 7)
            .endOf("week")
            .format("DD/MM/YYYY");
    };
    _switchGrid() {
        this.setState({
            layout: false
        })
    }

    _switchList() {
        this.setState({
            layout: true
        })
    }

    _weekCalendarGrid = () => {
        return (
            <View style={styles1.container}>
                <TouchableOpacity onPress={() => this._onChangeArrow(-1)}>
                    <Image source={arrowLeft} style={styles1.image} />
                </TouchableOpacity>
                <View>
                    <Text style={styles1.text}>
                        {this.state.count != 1 ? "Tuần" : "Tuần hiện tại"}
                    </Text>
                    <Text style={styles1.date}>{`${this._getDayOfEarlyWeek(
                        this.state.count
                    )} -> ${this._getDayOfWeekend(this.state.count)}`}</Text>
                </View>
                <TouchableOpacity onPress={() => this._onChangeArrow(1)}>
                    <Image source={arrowRight} style={styles1.image} />
                </TouchableOpacity>
            </View>
        )
    }
    render() {
        let { layout } = this.state
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.left}>
                        {this._weekCalendarGrid()}
                    </View>
                    <View style={styles.right}>
                        <View style={[styles1.container, { paddingTop: 5 }]}>
                            <TouchableOpacity onPress={() => this._switchList()}>
                                <Icon
                                    name="list"
                                    type="feather"
                                    color={layout ? "#0B6DB8" : "#666666"}
                                    size={30}
                                    containerStyle={{ paddingRight: 15 }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this._switchGrid()} >
                                <Icon
                                    name="grid"
                                    type="entypo"
                                    color= {layout ? "#666666" : "#0B6DB8"}
                                    size={30}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {layout ? <SchedulesList /> :  <SchedulesGrid />  }
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        fontFamily: "SF-Compact-Text-Regular",
    },
    barDateTime: {
        backgroundColor: "#F2F2F2",
        flexDirection: "row",
    },
    barTitle: {
        color: "#1473BC",
        width: deviceWidth / 8,
        padding: 5,
        alignItems: 'center'
    },
    title: {
        color: "#1473BC",
        padding: 3
    },
    titleNow: {
        color: "#FFF",
        backgroundColor: theme.mainColor,
        padding: 3,
        paddingLeft: 4,
        width: 25,
        height: 25,
        borderRadius: 25 / 2
    },
    boxItem: {
        width: deviceWidth / 8,
    },
    titleItemCalendar: {
        color: "#1473BC",
        width: deviceWidth / 8,
        borderColor: "#EAEAEA",
        borderWidth: 0.5,
        height: 50,
        paddingTop: 15,
        paddingBottom: 5,
        fontSize: 12,
        padding: 4,
        textAlign: "center",
    },
    textItemCalendar: {
        height: 50,
        width: deviceWidth / 8,
        borderColor: "#EAEAEA",
        borderWidth: 0.5,
    },
    titleModal: {
        fontFamily: 'SF Compact Text',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 17,
        color: '#000',
        paddingBottom: 10
    },
    contentModal: {
        fontFamily: 'SF Compact Text',
        fontStyle: 'italic',
        fontWeight: '300',
        fontSize: 14,
        lineHeight: 17,
        color: '#000'
    },
    author: {
        fontFamily: 'SF Compact Text',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 17,
        color: '#000',
        paddingTop: 10
    },
    left: { flex: 2, alignItems: 'center' },
    right: { flex: 1, alignItems: 'center' },
});

const styles1 = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10,
    },
    image: {
        marginLeft: 32,
        marginRight: 32,
    },
    text: {
        textAlign: "center",
        fontSize: 17,
        fontWeight: "bold",
        color: "#000",
    },
    date: {
        fontStyle: "italic",
        color: "#000",
        fontSize: 14,
        fontWeight: "300",
    },
    textStyle: {
        // textAlignVertical: "center",
        textAlign: "center",
        fontSize: 12,
        padding: 4,
    },
});

const stylesBar = StyleSheet.create({
    box: {
        backgroundColor: "#46A7F1",
        color: "#fff",
        fontSize: 17,
        paddingTop: 6,
        paddingBottom: 6,
        textAlign: "center",
        fontWeight: "bold",
    },
});