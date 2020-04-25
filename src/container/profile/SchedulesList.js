import React, { PureComponent } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Calendar } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";
import moment from "moment";
import { events } from "../../mock_data/eventDate";
import TimeLine from "../../components/TimeLine";

LocaleConfig.locales["fr"] = {
  monthNames: [
    "01 -",
    "02 -",
    "03 -",
    "04 -",
    "05 -",
    "06 -",
    "07 -",
    "08 -",
    "09 -",
    "10 -",
    "11 -",
    "12 -",
  ],
  monthNamesShort: [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ],
  dayNames: ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"],
  dayNamesShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
  today: "Hôm nay",
};
LocaleConfig.defaultLocale = "fr";
class SchedulesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentDay: moment()
        .format("YYYY - MM - DD")
        .replace(/ /g, ""),
      pressDay: null,
      eventsDate: events,
      infoEventOfDay: null,
    };
  }

  _showInfoEvent = (dateString) => {
    const { eventsDate } = this.state;
    const date = Object.keys(eventsDate).filter((date) => date == dateString);
    let textInfoEvent = (date[0] && eventsDate[date[0]]) || undefined;
    let arrInfoEvent = textInfoEvent && textInfoEvent.split(".");
    this.setState({
      infoEventOfDay: arrInfoEvent,
    });
  };

  _renderBoard = (infoEventOfDay) => {
    return (
      <View style={styles.board}>
        {infoEventOfDay &&
          infoEventOfDay.map((t, i) => {
            if (t)
              return (
                <Text style={styles.text} key={i}>
                  {t.trim() + "."}
                </Text>
              );
          })}
      </View>
    );
  };

  componentDidMount() {
    this._showInfoEvent(this.state.currentDay);
  }

  _onMonthChange = () => {
    this.setState({ infoEventOfDay: null });
  };

  render() {
    const {
      currentDay,
      pressDay,
      eventsDate,
      infoEventOfDay,
      currentTime,
    } = this.state;
    let markedDate = {};
    eventsDate &&
      Object.keys(eventsDate).forEach((k) => {
        return (markedDate[k] = { marked: true });
      });
    return (
      <ScrollView>
        <Calendar
          onDayPress={({ dateString }) => this._showInfoEvent(dateString)}
          hideExtraDays={false}
          onMonthChange={() => this._onMonthChange()}
          style={{
            padding: 5,
          }}
          // dayComponent={({ date, state }) => {
          //   return <Text style={{color: '#000'}}>{date.day}</Text>;
          // }}
          theme={{
            backgroundColor: "#ddd",
            today: "red",
            monthTextColor: "#000",
            textMonthFontSize: 17,
            textMonthFontWeight: "bold",
            textDayHeaderFontSize: 16,
            textSectionTitleColor: "#000",
            dotColor: "red",
            selectedDayBackgroundColor: "#0B6DB8",
            "stylesheet.calendar.header": {
              week: {
                marginTop: 20,
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 0,
              },
              // day: {
              //   padding: 0,
              //   margin: 0,
              // },
              header: {
                display: "none",
              },
            },
          }}
        />
        <TimeLine />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    fontFamily: "SF-Compact-Text-Regular",
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  board: {
    backgroundColor: "#F7F7F7",
    margin: 16,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 9,
    paddingRight: 9,
  },
  text: {
    color: "#000",
    lineHeight: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
});

export default SchedulesList;
