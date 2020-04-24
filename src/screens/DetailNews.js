import React from "react";
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import TopBar from "../container/common/TopBar";
import Button from "../components/Button";
import { Icon } from "react-native-elements";
import LineEB from '../components/LineEB';
import WallpaperHorizontal from '../components/WallpaperHorizontal';
import { theme } from "../config/theme";

const DetailNews = ({ navigation }) => {
  let item = navigation.getParam("item", {});
  console.log("item", item)
  _render = list => {
    return list.map((v,index) => {
      return (
        <View style={{ flexDirection: "row" }} key={"notification____"+index}>
          <Text style={styles.left}>{v.left}</Text>
          <Text style={styles.right}>{v.right}</Text>
        </View>
      );
    });
  };
  return (
    <ScrollView
      style={{ paddingLeft: 0, paddingRight: 0, paddingBottom: 20 }}
    >
      <View style={styles.content}>
        <Text style={styles.header}>
          {item.title}
        </Text>
        <Text style={styles.text}>
          Trường học trên toàn cầu đang nỗ lực đảm bảo việc học tập không bị gián đoạn bởi Covid-19 nhờ công nghệ và các công ty edtech.

          Chuyển từ học thực sang học trực tuyến

          Trên trang Entrepreneur, Beas Dev Ralhan, Co-Founder & CEO của công ty công nghệ giáo dục (edtech) Next Education India nhận định, Covid-19 giúp ngành giáo dục nhận ra tiềm năng của học tập kỹ thuật số. Các công ty Edtech có thể giúp nhà trường dạy học trực tuyến thông qua công cụ và nền tảng hiệu quả, thân thiện với người dùng.

          Một trong những lợi thế của những giải pháp từ các công ty edtech là khả năng bảo mật dữ liệu mà nền tảng miễn phí không có. Thông tin đăng nhập chỉ được gửi cho sinh viên và giáo viên, người ngoài không thể khai thác dữ liệu của các lớp học.

          Không chỉ mở các lớp học trực tuyến, công ty edtech cũng cung cấp các giải pháp toàn diện, đáp ứng nhu cầu học thuật như: Làm bài tập, bài kiểm tra trực tuyến, công cụ đánh giá, chấm điểm học sinh... thông qua hệ thống quản lý học tập. Các giải pháp kỹ thuật số đơn giúp giáo viên giao bài tập về nhà và thực hiện chấm bài tại nhà, giúp quá trình học trực tuyến có tính tương tác cao.

          Hiện nhiều công ty edtech cung cấp các lớp học trực tuyến miễn phí, sách điện tử, ngân hàng câu hỏi và thực hiện các đánh giá trực tuyến, để đảm bảo rằng việc học không bị cản trở trong cuộc khủng hoảng dịch bệnh.
      </Text>
        <Image style={{ height: 200, marginTop: 8, marginBottom: 8 }} source={{ uri: item.imageLink }} />
        <Text>
          Khai thác đúng cơ hội

          Beas Dev Ralhan đồng thời đặt ra vấn đề, liệu việc học kỹ thuật số có còn được khuyến khích sau khi lệnh giãn cách xã hội được dỡ bỏ?

          Mặc dù các giải pháp edtech trong học tập kỹ thuật số chỉ tạm thời thay thế trong thời điểm dịch bệnh. Tuy nhiên, học tập trực tuyến từ lâu đã trở thành một phần không thể thiếu trong hệ thống giáo dục. Ralhan cho rằng, ngay cả sau khi đại dịch kết thúc, lĩnh vực edtech sẽ chứng kiến sự tăng trưởng đáng kể.

          Trọng tâm giáo dục vẫn được chú trọng vào học trực tiếp trên lớp, tuy nhiên chuyên gia Beas Dev Ralhan tin rằng sự kết hợp giữa học trực tuyến và trực tiếp có thể thống trị hệ thống giáo dục. Về lâu dài, phương pháp học kết hợp trực tiếp với trực tuyến sẽ giúp giáo viên thiết kế phương pháp sư phạm giúp chuyển trọng tâm từ học thuộc đơn thuần sang giáo trình tương tác và phát triển toàn diện của học sinh.

          Các trường nên kiên định áp dụng giải pháp học tập trực tuyến đồng thời với các lớp học truyền thống. Các giải pháp kỹ thuật số như lớp học đảo ngược (flipped classroom), tập trung vào sự tham gia của học sinh, hệ thống quản lý học tập giúp việc học toàn diện hơn.

          "Dự báo, khi mọi thứ trở lại bình thường sau dịch bệnh, ngành giáo dục có khả năng được điều khiển bởi các nền tảng edtech, giúp giáo viên dễ tiếp cận hơn với học sinh. Các giải pháp như vậy đảm bảo học sinh có thể học mọi lúc mọi nơi, ngay cả khi không thể đến trường", Ralhan nhận định.

          Tiến sĩ Nguyễn Thành Nam, nhà sáng lập đơn vị đào tạo trực tuyến FUNiX nhận định, có rất nhiều điểm sáng cho giáo dục trong đại dịch Covid-19. Trong đó, ngành giáo dục có thể nhân cơ hội này để đưa ra những hình thức học tập mới, không cần phải đến trường hoặc đến trường không chỉ để học. Học trực tuyến sẽ trở thành xu hướng bền vững chứ không chỉ là giải pháp tạm thời trong mùa dịch.

          Ông Nguyễn Thành Nam cho rằng: "Giáo dục hiện nay cần chuyển sang các giải pháp hiện đại. Chúng ta có thể đưa những nội dung giảng dạy lên mạng. Các thầy cô đã bắt đầu nhận thấy việc triển khai đào tạo trực tuyến giúp ta những việc mà trước đây chúng ta không làm được. Giao tiếp online giúp phụ huynh cũng như thầy cô giáo có thể thấu hiểu nhau hơn. Bên cạnh đó, giáo dục trực tuyến còn giải quyết được vấn đề như thực hành, khi học trên mạng có thể thực hiện mô phỏng lại các hiện tượng trong thực tế, trong cuộc sống vừa dễ dàng và lại không tốn kém".

          Hiện, nhiều trường đại học đã kết hợp cùng FUNiX tổ chức các hoạt động nghiên cứu, đào tạo trực tuyến cho sinh viên như: Đại học Quốc Gia Hà Nội, Đại học Lạc Hồng, Đại học HUTECH, Đại học FPT, Đại học Social Sciences (Singapore), Đại học Thăng Long, Đại học Công nghệ Đồng Nai...

          Năm học 2019-2020, FUNiX triển khai lớp học trực tuyến cho sinh viên các trường theo phương pháp FUNiX Way: Học trực tuyến với bài giảng, có hệ thống chuyên gia (mentor) kèm cặp sinh viên về kiến thức và các cán bộ hỗ trợ (hannah) theo sát, động viên sinh viên.
      </Text>
      </View>

      <Text style={styles.title}>CÁC TIN KHÁC</Text>
      {/* {listNews.map((e, i) => {
        return (
          <TouchableOpacity
          //onPress={() => this.props.navigation.navigate("DetailNews", { item: e })}
          >
            <View key={i}>
              <LineEB />
              <WallpaperHorizontal key={i} record={e} />
            </View>
          </TouchableOpacity>
        ); */}
      })}
    </ScrollView>
  );
};

DetailNews.navigationOptions = ({ navigation }) => {
  return {
    header: () => (
      <TopBar
        navigation={navigation}
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
        center={() => { }

        }
        right={() => {
        }}
      />
    )
  };
};

const styles = StyleSheet.create({
  header: {
    color: "#000",
    fontSize: 24,
    fontWeight: "800",


  },
  content: {
    padding: 12
  },
  title: {
    backgroundColor: theme.mainColor,
    marginRight: 0,
    marginLeft: 0,
    color: "white",
    paddingBottom: 6,
    paddingTop: 6,
    paddingLeft: 12


  },
  box: {
    backgroundColor: "#efefef",
    padding: 10
  },
  hightlight: {
    color: "#000",
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 8
  },
  note: {
    color: "#000",
    lineHeight: 16,
    fontStyle: "italic",
    opacity: 0.8
  },
  left: {
    color: "#666"
  },
  right: {
    color: "#000"
  }
});

export default DetailNews;
