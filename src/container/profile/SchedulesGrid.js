import React, { PureComponent } from "react";
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    Image,
    FlatList,
    Button
} from "react-native";
import moment from "moment";
import { dataSchedule } from "../../mock_data/points";
import { Icon } from "react-native-elements";
const dateTime = ["", "T2", "T3", "T4", "T5", "T6", "T7", "CN"];
const deviceWidth = Dimensions.get("window").width;
import Modal from 'react-native-modal';
import { theme } from '../../config/theme';


class SchedulesGrid extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            deviceWidth,
            count: 0, // counter: click next/ previous of week.
            isModalVisible: false,
            content: '',
            layout: false
        };
    }

    componentDidMount() {

        Dimensions.addEventListener("change", ({ window }) =>
            this.setState({ deviceWidth: window.width })
        );
        return () => {
            Dimensions.removeEventListener("change", onChange);
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


    _handleTextCalendar = (name = "") => {
        let k = name.indexOf(" ");
        let textTop = name;
        let textBottom = "";
        if (k !== -1) {
            textTop = name.slice(0, k);
            textBottom = name.slice(k + 1);
        }
        return (
            <View
                style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
            >
                <Text style={{ ...styles1.textStyle, color: '#000', paddingBottom: 0 }}>
                    {textTop}
                </Text>
                <Text style={{ ...styles1.textStyle, color: '#000', padding: 0 }}>
                    {textBottom}
                </Text>
            </View>
        );
    };
    _keyExtractor = (item, index) => {
        return item.subject + Math.random().toString()
    };

    _containerCalender() {
        return (
            <View style={{ width: 7 * deviceWidth / 8, flexDirection: 'row' }}>
                {dataSchedule.map((it, i) => {
                    return (
                        <View style={{ width: deviceWidth / 8, flexDirection: 'column', flex: 1 }} key={'schedule___' + i}>
                            {
                                it.map((item, index) => {
                                    return (
                                        <TouchableOpacity activeOpacity={1} onPress={item.note ? this.toggleModal : null} key={'item___calendar' + index}>
                                            <View
                                                style={((moment().day() === i) && (this.state.count === 0) && index === 2) ? styles.textItemCalendarNow : (item.subject ?  styles.textItemCalendar : styles.textItemCalendarNo)}
                                            >
                                                <View style={{ width: 10, height: 10, position: 'absolute' }}>
                                                    {item.note ? <Icon name='star' type='antdesign' color='#FACC2E' size={10} /> : null}
                                                </View>
                                                {this._handleTextCalendar(item.subject)}
                                            </View>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                    )
                })}
            </View>
        )
    }
    _titleItemCalendar() {
        return (
            <View style={styles.boxItem}>
                {dataSchedule[0].map((item, index) => {
                    return (
                        <Text
                            key={index}
                            style={styles.titleItemCalendar}
                        >
                            Tiết {index + 1}
                        </Text>
                    )
                })}
            </View>
        )
    }

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

    toggleModal = () => {
        this.setState({
            content: 'Buổi học này có các thầy cô trên khoa đến dự giờ nên các em nhớ mặc đồng phục đi nhé!',
            isModalVisible: !this.state.isModalVisible
        });
    };
    _calendarGrid = () => {
        return (
            <View>
                <Bar>Buổi sáng</Bar>
                <View style={styles.barDateTime}>
                    {dateTime.map((t, index) => {
                        return (
                            <View
                                key={t}
                                style={styles.barTitle}
                            >
                                <Text style={((moment().day() === index) && (this.state.count === 1)) ? styles.titleNow : styles.title}>{t}</Text>
                            </View>
                        )
                    })}
                </View>
                <View style={{ flexDirection: "row" }}>
                    {this._titleItemCalendar()}
                    {this._containerCalender()}
                </View>

                <Bar>Buổi chiều</Bar>
                <View style={{ flexDirection: "row" }}>
                    {this._titleItemCalendar()}
                    {this._containerCalender()}
                </View>
                <Bar>Buổi Tối</Bar>
                <View style={{ flexDirection: "row" }}>
                    {this._titleItemCalendar()}
                    {this._containerCalender()}
                </View>
            </View>
        )
    }

    render() {
        let { layout } = this.state
        return (
            <ScrollView style={styles.container}>
                <Modal
                    isVisible={this.state.isModalVisible}
                >
                    <View style={{ height: 200, backgroundColor: '#fff', borderRadius: 10 }}>
                        <TouchableOpacity onPress={this.toggleModal} style={{ alignItems: 'flex-end', paddingTop: 15, paddingRight: 15 }} >
                            <Icon name="close-o" type="evilicon" color="#FA5858" size={25} />
                        </TouchableOpacity>
                        <View style={{ padding: 30, paddingTop: 15 }}>
                            <Text style={styles.titleModal}>Chú ý :</Text>
                            <Text style={styles.contentModal}>{this.state.content}</Text>
                            <Text style={styles.author}>{'Gv: Nguyễn Thu Thuỷ'}</Text>
                        </View>
                    </View>
                </Modal>
                {this._calendarGrid()}
                <View style={{ height: 70 }} />
            </ScrollView>
        );
    }
}

const Bar = ({ children }) => {
    return (
        <Text key={children} style={stylesBar.box}>
            {children}
        </Text>
    );
};

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
    textItemCalendarNo: {
        height: 50,
        width: deviceWidth / 8,
        borderColor: "#EAEAEA",
        borderWidth: 0.5,
        backgroundColor:'#F3F3F3'
    },
    textItemCalendarNow: {
        height: 50,
        width: deviceWidth / 8,
        borderColor: "#EAEAEA",
        borderWidth: 0.5,
        backgroundColor: '#FCD447'
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

export default SchedulesGrid;
