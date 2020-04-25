import React, { Component } from "react";
import {
  View,
  Platform,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  FlatList
} from "react-native";
import moment from "moment";
import { ListItem, Icon } from "react-native-elements";
import { connect } from "react-redux";
import Button from "../components/Button";
import TopBar from "../container/common/TopBar";
import TopBarTitle from "../components/TopBarTitle";
const formatTime = ({ timestamp }) => {
  const formattedDT = moment.tz(timestamp, 'America/Los_Angeles').format('YYYY-MM-DD HH:mm ZZ');
  return formattedDT;
};
const ICON_NEW = require("../assets/images/icon_news.png");
const ICON_NOTIFI = require("../assets/images/icon_noti.png");
const ICON_SCHEDULE = require("../assets/images/icon_schedule.png");
const listData = [
  {
    messageId: "1",
    title: "Kế hoạch tăng cường công tác phòng, chống dịch viêm đường hô hấp cấp do chủng mới của vi rút Corona gây ra",
    isRead: false,
    timestamp: "1587787416",
    type: "NEWS",//NEWS,NOTIFICATION,SCHEDULE,
    imageUrl: "",
    body: `Kính gửi quý Phụ huynh,

    Nhân dịp xuân Canh Tý 2020, Hệ thống Giáo dục school xin kính chúc toàn thể quý Phụ huynh và gia đình nhiều sức khỏe, hạnh phúc và bình an. Chúc các con học sinh thật khỏe, vui, đạt được mục tiêu trong năm học.
    
    Thực hiện công điện số 43/CĐ-BGDĐT ngày 28/01/2020 của Bộ Giáo dục và Đào tạo về việc phòng, chống dịch bệnh viêm đường hô hấp cấp do chủng mới của vi rút Corona gây ra, school xin thông báo tới quý Phụ huynh và học sinh về kế hoạch tăng cường công tác phòng, chống dịch bệnh.
    
    Chủng Corona chính là chủng của các loại virus gây ra các bệnh đường hô hấp như dịch SARS hay Hội chứng Hô hấp Trung Đông (MERS) năm 2012. Đây là dịch bệnh truyền nhiễm cấp tính nguy hiểm do vi rút Corona biến chủng gây ra, hiện nay chưa có thuốc điều trị đặc hiệu và vắc xin phòng bệnh. Bệnh lây truyền từ người sang người qua đường tiếp xúc gần hoặc nước bọt. Các dấu hiệu mắc bệnh điển hình: sốt cao trên 38oC, ho, hụt hơi, khó thở, viêm phổi, phổi có tổn thương lan tỏa, suy hô hấp cấp.
    
    Quý Phụ huynh và học sinh vui lòng tham khảo các khuyến cáo mới nhất từ Bộ Y tế cụ thể:
    
    Khuyến cáo chung với người dân:
    
    Tránh đi lại, du lịch nếu đang có các triệu chứng sốt, ho hoặc khó thở. Đến ngay cơ sở y tế khi có triệu chứng nghi ngờ, đồng thời chia sẻ lịch trình đã di chuyển với nhân viên y tế.
    Tránh tiếp xúc với người bị sốt, ho. Thường xuyên rửa tay bằng xà phòng, tránh chạm vào mắt, mũi, miệng.
    Khi ho, hắt hơi, hãy che kín miệng và bịt mũi bằng khăn giấy. Sau sử dụng khăn giấy, hãy bỏ vào thùng rác và vệ sinh tay sạch sẽ.
    Nếu nghi ngờ có dấu hiệu nhiễm bệnh khi đi lại, du lịch cần thông báo ngay cho nhân viên hàng không, đường sắt, ô tô và tìm đến cơ sở y tế càng sớm càng tốt.
    Chỉ sử dụng các loại thực phẩm chín.
    Không khạc, nhổ bừa bãi nơi công cộng. Tránh tiếp xúc gần với các loại động vật nuôi hoặc hoang dã.
    Đeo khẩu trang khi đi tới chỗ đông người hoặc khi tiếp xúc với người có triệu chứng bệnh.
    Khuyến cáo chung với người từ Trung Quốc trở về:
    
    Cần tự cách ly tại nhà và theo dõi sức khỏe trong vòng 14 ngày. Thực hiện khai báo với cơ quan sở tại nơi gần nhất về địa điểm đã đi qua để được hỗ trợ khi cần thiết.
    Nếu có dấu hiệu sốt, ho, khó thở, phải đeo khẩu trang bảo vệ, thông báo ngay đến cơ sở y tế gần nhất để được tư vấn, khám, điều trị kịp thời.
    Khi đến cơ sở y tế cần gọi điện liên hệ trước để thông tin về các triệu chứng và lịch trình đã di chuyển trong thời gian gần đây để được hỗ trợ.
    Bộ Y tế cũng đã công bố số điện thoại đường dây nóng 19003228 để tiếp nhận các thông tin, ý kiến về tình hình dịch bệnh trên toàn quốc và tư vấn cách phòng chống dịch bệnh.
    
    Các biện pháp phòng chống dịch bệnh tại school:
    
    Các công tác do Nhà trường thực hiện:
    
    Tuyên truyền tới 100% Cán bộ, Giáo viên, Nhân viên (CBNV), Phụ huynh và Học sinh về công tác phòng, chống dịch bệnh.
    Giữ liên lạc thường xuyên với các cơ quan chức năng để nắm bắt thông tin, báo cáo tình hình và phối hợp trong trường hợp cần thiết.
    Công tác vệ sinh: Duy trì hoạt động tổng vệ sinh toàn trường (tất cả các lớp học và các phòng chức năng) bằng hóa chất khử khuẩn (chloramin 0,5%) vào 2 ngày cuối tuần cho đến khi được thông báo hết dịch bệnh; Duy trì tần suất vệ sinh bề mặt tại các lớp học: ít nhất 1 lần/ngày và khi bẩn; Vệ sinh khu vực vui chơi (có đồ chơi chung), nhà ăn, nhà vệ sinh: ít nhất 2 lần/ngày và khi bẩn; Mở cửa phòng học thông thoáng vào cuối ngày và giờ ăn trưa (khi học sinh không còn trên lớp).
    Trang bị các thiết bị đo nhiệt độ cơ thể tại cổng trường, các lớp học; xà phòng rửa tay và dung dịch rửa tay khô tại các khu vực vệ sinh, hành lang lớp học.
    Thực hiện việc kiểm tra nhiệt độ của 100% CBNV, học sinh và khách tại cổng trường trước khi vào khuôn viên trường học.
    100% CBNV sử dụng khẩu trang y tế đúng cách khi ở trường, trên xe buýt đưa đón học sinh hàng ngày.
    Dừng các hoạt động tập thể sinh hoạt chung giữa các lớp, hoạt động ngoại khóa ngoài trường cho đến khi bệnh dịch được kiểm soát.
    Thay đổi thực đơn hàng ngày đảm bảo các món ăn chín, không có món rau sống.
    Quy trình xử lý khi có CBNV, học sinh có biểu hiện nhiễm bệnh ở trường:
    Bước 1: người mắc bệnh (nếu là học sinh thì báo cho Giáo viên chủ nhiệm – GVCN) báo cho phòng Y tế và Ban Giám hiệu.
    Bước 2: phòng Y tế thực hiện các nghiệp vụ y tế theo quy định.
    Bước 3: phòng Y tế/ GVCN thông báo cho người thân của người mắc bệnh đến đón và đưa người mắc bệnh đến bệnh viện để được khám và điều trị kịp thời (nếu nhiễm bệnh).
    Bước 4: phòng Y tế cập nhật kết luận của bệnh viện với trường hợp nghi ngờ bị nhiễm bệnh để báo cáo Ban Giám hiệu và thực hiện các biện pháp phòng tránh bệnh dịch theo đúng quy định.
    Khuyến nghị dành cho Phụ huynh và học sinh:
    
    Phụ huynh, học sinh mới từ Trung Quốc trở về hoặc có tiếp xúc với người thân quen từ Trung Quốc trở về cần tự cách ly tại nhà và theo dõi sức khỏe trong 14 ngày và khai báo với cơ quan sở tại nơi gần nhất để được hỗ trợ;
    100% Phụ huynh và học sinh đeo khẩu trang y tế đúng cách khi vào trường;
    Buổi sáng khi đến trường, Phụ huynh vui lòng không vào trường và để con tự chủ động đi về lớp học của mình (trừ Phụ huynh của học sinh cấp học Mầm non);
    Mỗi học sinh cần được trang bị sẵn khẩu trang y tế, dung dịch rửa tay khô, bình nước cá nhân khi đến trường hàng ngày;
    Học sinh cần ăn chín, uống sôi, sử dụng thêm vitamin C và uống nhiều nước nhằm tăng cường sức đề kháng cho cơ thể;
    Học sinh cần giữ ấm cơ thể, vệ sinh cá nhân, rửa tay thường xuyên bằng xà phòng, súc họng bằng nước sát khuẩn miệng để phòng bệnh viêm phổi;
    Học sinh hạn chế tiếp xúc gần với các trang trại nuôi động vật hoặc động vật hoang dã;
    Trong trường hợp học sinh (hoặc người trong gia đình) có biểu hiện sốt cao, ho kéo dài khi sốt, Phụ huynh vui lòng thực hiện phối hợp với Nhà trường như sau:
    Phụ huynh vui lòng không cho con đến trường và cần đưa con đến bệnh viện để được khám và điều trị kịp thời (nếu nhiễm bệnh).
    Học sinh không quay trở lại lớp học khi chưa có kết luận của bác sĩ.
    Phụ huynh thông báo cho GVCN lớp biết thông tin khi học sinh có biểu hiện sốt.
    Phụ huynh vui lòng hoàn thiện việc khai một số thông tin sau bằng cách vào mục Đăng ký/ Khảo sát trên ứng dụng school Parents (đối với học sinh Tiểu học, THCS, THPT) và ứng dụng Kids Online (đối với học sinh Mầm non):
    Trong vòng 14 ngày qua, Phụ huynh hoặc học sinh có đến/ở thành phố Vũ Hán, tỉnh Hồ Bắc, Trung Quốc không?
    Phụ huynh hoặc học sinh có triệu chứng nào sau đây không: Sốt/ Ho/ Khó thở
    Trong vòng 14 ngày qua, Phụ huynh hoặc học sinh có chăm sóc hoặc tiếp xúc với người nào có triệu chứng ho, sốt và mới đi từ nước ngoài về, hoặc nghi ngờ viêm phổi cấp do Corona không?
    Nhà trường sẽ đón học sinh quay trở lại trường học kể từ ngày 03/02/2020 sau kỳ nghỉ Tết theo đúng lịch năm học đã thông báo đến quý Phụ huynh. Nếu quý Phụ huynh có mong muốn cho con được nghỉ thêm tại nhà do lo lắng các vấn đề liên quan đến dịch bệnh vui lòng thông báo trực tiếp với GVCN lớp. GVCN sẽ hỗ trợ gửi nội dung bài tập và hướng dẫn học ở nhà để Phụ huynh chủ động trong việc hỗ trợ học sinh tự học.
    
    Nhà trường rất mong nhận được sự phối hợp chặt chẽ từ quý Phụ huynh để đảm bảo sức khỏe cho học sinh khi đến trường và góp phần phòng tránh dịch bệnh.
    
    Trân trọng,
    
    Ban lãnh đạo`
  }, {
    messageId: "2",
    title: "Học sinh khối Tiểu học, THCS, THPT tiếp tục nghỉ học nhằm đảm bảo công tác phòng, chống dịch bệnh viêm phổi cấp do vi rút Covid-19 gây ra",
    isRead: true,
    timestamp: "1587787416",
    type: "NEWS",//NEWS,NOTIFICATION,SCHEDULE,
    imageUrl: "",
    body: `Kính gửi quý Phụ huynh,

    Thực hiện chỉ đạo của Ủy ban nhân dân và Sở Giáo dục và Đào tạo thành phố Hà Nội, thành phố Hải Phòng, thành phố Hồ Chí Minh ngày 14/02/2020 về việc tiếp tục cho Học sinh nghỉ học nhằm đảm bảo công tác phòng, chống dịch bệnh viêm phổi cấp do vi rút Covid-19 gây ra, Nhà trường xin thông báo tới quý Phụ huynh về việc tiếp tục cho Học sinh nghỉ học nhằm đảm bảo sự an toàn của cá nhân Học sinh và cộng đồng nói chung. Cụ thể:
    
    Đối với khu vực Hà Nội và Hải Phòng: Học sinh tiếp tục nghỉ học từ ngày 17/02 đến hết ngày 21/02/2020
    Đối với khu vực TP. Hồ Chí Minh: Học sinh tiếp tục nghỉ học từ ngày 17/02 đến hết ngày 28/02/2020
    Giáo viên sẽ gửi tới Phụ huynh kế hoạch và lịch triển khai các tiết học trực tuyến trong tuần tới. Quý Phụ huynh đăng kí cho con đến trường từ ngày 17/02/2020 theo thông báo Nhà trường đã gửi ngày 13/02/2020, xin vui lòng tiếp tục cho con nghỉ tại nhà theo thông báo cập nhật này.
    
    Quý Phụ huynh có bất cứ ý kiến đóng góp nào xin vui lòng liên hệ trực tiếp với bộ phận Chăm sóc Khách hàng – Hệ thống Giáo dục school trong giờ hành chính (8h00-17h00) tại các tổng đài:
    
    Tại TP. Hà Nội: 024 3975 3333 máy lẻ 0/1/2
    Tại TP. Hải Phòng: 024 3975 3333 máy lẻ 6622
    Tại TP. Hồ Chí Minh: 028 3622 6888 máy lẻ 0
    Xin trân trọng cảm ơn quý Phụ huynh và Học sinh đã đồng hành và phối hợp cùng Nhà trường.
    
    Trân trọng,
    
    Ban Giám hiệu`
  },
  {
    messageId: "3",
    title: "Kéo dài thời gian nghỉ học cho Học sinh nhằm hạn chế tình trạng lây lan dịch viêm đường hô hấp cấp do chủng mới của vi rút Corona gây ra",
    isRead: false,
    timestamp: "1587787416",
    type: "NEWS",//NEWS,NOTIFICATION,SCHEDULE,
    imageUrl: "",
    body: `Kính gửi quý Phụ huynh,

    Dịch bệnh viêm đường hô hấp cấp do chủng mới của vi rút Corona gây ra đang diễn biến phức tạp. Tổ chức Y tế thế giới đã tuyên bố dịch vi rút Corona là “tình trạng y tế khẩn cấp toàn cầu”. Nhằm hạn chế khả năng lây lan của dịch bệnh trong trường học, nhất là trong thời gian nghỉ Tết, Học sinh đi du lịch cùng gia đình tại nhiều địa điểm khác nhau ở trong và ngoài nước, Nhà trường xin thông báo tới quý Phụ huynh và Học sinh về việc dời ngày đón Học sinh quay trở lại trường là ngày 03/02/2020 theo lịch cũ sang ngày 10/02/2020. Các biện pháp phòng chống dịch bệnh tại school và khuyến nghị dành cho Phụ huynh và Học sinh tiếp tục được thực hiện theo thông báo của Nhà trường đã gửi vào ngày 31/01/2020.
    
    Với học sinh Tiểu học và Trung học, trong thời gian Học sinh nghỉ học, Giáo viên chủ nhiệm sẽ tổng hợp kế hoạch học tập trong tuần (từ ngày 03/02 đến ngày 07/02/2020) cùng bài tập để ôn luyện kiến thức và đăng tải trên ứng dụng school Parents. Quý Phụ huynh vui lòng hướng dẫn con chủ động nghiên cứu tài liệu và học tập tại nhà. Nhà trường vẫn đảm bảo việc truyền tải đầy đủ kiến thức trong học kỳ 2 cho học sinh theo đúng kế hoạch năm học.
    
    Trong giai đoạn này, nếu Học sinh hoặc người thân trong gia đình có bất cứ biểu hiện nào liên quan đến dịch bệnh, quý Phụ huynh có thể liên hệ đến các đường dây nóng tiếp nhận thông tin, tư vấn phòng chống Corona dưới đây:`
  },

  {
    messageId: "3",
    title: "Kết quả học tập",
    isRead: false,
    timestamp: "1587787416",
    type: "NOTIFICATION",//NEWS,NOTIFICATION,SCHEDULE,
    imageUrl: "",},
    {
      messageId: "3",
      title: "Thông báo lịch học trực tuyến",
      isRead: false,
      timestamp: "1587787416",
      type: "NOTIFICATION",//NEWS,NOTIFICATION,SCHEDULE,
      imageUrl: "",}
];
const readedBody = (style, item) => {
  return (
    <Text style={style} numberOfLines={1}>{item.body}</Text>

  )
}
const readedTitle = (style, item) => {
  return (
    <View
      style={{ justifyContent: "space-between" }}
    >
      <Text style={style} numberOfLines={1}>{item.title} </Text>
      <Text style={{ color: style.color, fontSize: 12 }}>{

        moment.unix(item.timestamp).format("hh:mm DD/MM/YYYY")
      }
      </Text>
    </View>
  )
}
class Notification extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      header: () => (
        <TopBar
          navigation={navigation}
          right={() => { }}
          left={() => (
            <Button
              onPress={() => {
                return navigation.goBack();
              }}
            >
              <Icon
                name="ios-arrow-back"
                type="ionicon"
                color="white"
                size={24}
              />
            </Button>
          )}
          center={() => <TopBarTitle text="Thông báo mới" align="left" />}
        />
      )
    };
  };
  constructor(props) {
    super(props);
    this.pushNotificationEnabled = false;
    this.state = {
      isLoading: false,
      text: "test",
      list: listData
    };
  }

  renderItem = ({ item }) => (

    <TouchableOpacity
      onPress={() => {
        switch (item.type) {
          case "NEWS":
            this.props.navigation.navigate("DetailNews", { item })
            break;
          case "NOTIFICATION":
            this.props.navigation.navigate("DetailNotification", { item })
            break;
          case "SCHEDULE":
            // code block
            break;
          default:
          // code block
        }

      }}
    >
      <ListItem
        opacity={!item.isRead ? 1 : 0.3}
        title={
          readedTitle(!item.isRead ? cardStyles.name : { ...cardStyles.name, fontWeight: "" }, item)
        }
        subtitle={
          <View style={cardStyles.container}>{
            readedBody(!item.isRead ? cardStyles.header : { ...cardStyles.header }, item)}
          </View>
        }
        leftAvatar={
          <View style={{ height: 40, width: 40, borderRadius: 1000 ,backgroundColor:"gray"}} source={item.type == "NEWS" ? ICON_NEW : (item.type == "SCHEDULE" ? ICON_SCHEDULE : ICON_NOTIFI)} />
        }
        bottomDivider
      />
    </TouchableOpacity>
  );

  componentWillUnmount() { }

  componentDidUpdate(prevProps) { }


  _onOpenChannelPress = () => {
    this.props.navigation.navigate("OpenChannel");
  };

  _onGroupChannelPress = () => {
    this.props.navigation.navigate("GroupChannel");
  };

  _onDisconnectButtonPress = () => { };
  render() {
    return (
      <View style={styles.containerViewStyle}>
        <FlatList
          // keyExtractor={(item, index) => index.toString()}
          data={this.state.list}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

export default connect(
  state => {
    return {};
  },
  dispatch => {
    return {

    };
  }
)(Notification);

const styles = {
  containerViewStyle: {
    backgroundColor: "#fff",
    flex: 1
  },
  menuViewStyle: {
    marginLeft: 0,
    marginRight: 0
  },
  buttonStyle: {
    justifyContent: "flex-start",
    paddingLeft: 14,
    flex: 1
  }
};

const cardStyles = StyleSheet.create({
  container: {
    fontFamily: "SF-Compact-Text-Regular"
  },
  name: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 16,

    fontWeight: "bold"
  },
  pos: {
    fontSize: 12,
    color: "#999"
  },
  header: { fontWeight: "500", lineHeight: 16, color: "#000" },
  content: { color: "#222", opacity: 0.7 }
});
