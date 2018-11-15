import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Image,
  Text,
  ScrollView,
  ListView

} from 'react-native'
import style from "./src/style/style";
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconTop from 'react-native-vector-icons/Entypo';
import IconWallet from 'react-native-vector-icons/SimpleLineIcons';
import IconLocationPin from 'react-native-vector-icons/Entypo';
import IconDirection from 'react-native-vector-icons/SimpleLineIcons';
import IconLayers from 'react-native-vector-icons/SimpleLineIcons';
import IconSymbolFemale from 'react-native-vector-icons/SimpleLineIcons';
import IconChart from 'react-native-vector-icons/SimpleLineIcons';
import IconBriefcase from 'react-native-vector-icons/SimpleLineIcons';



export default class DemoDisplay extends Component {
  render() {
    return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={style.container}>
        <View style={style.header}>
          <View style={{ height: 151}}>
            <Image style={style.img}
              source={require('./src/img/nhanvien.jpg')}
              // resizeMode={'contain'}
            />
          </View >
          <View style={{flexDirection: 'row',backgroundColor: "#fff"}}>
            <View style={{}}>
              <Image style={style.imgRadius}
              source={require('./src/img/LogoFPT1.jpg')}
                 />
            </View>
            <View style={{marginLeft:15, marginTop: 5 }}>
              <Text style={{fontWeight:'bold'}}>Nhân viên kinh doanh bất độn sản</Text>
              <Text>Công ty cổ phần ADT Quốc Tế</Text>
              <View style={{flexDirection: 'row'}}>
                {myIcon}<Text style={{color:'red'}}>1.1km</Text>
              </View>
            </View>
          </View>
          <View style={{backgroundColor:"white", marginTop:10, fontSize:10}}>
              <View style={{flexDirection: 'row', marginLeft:10}}>
              {IconWallet1}<Text style={{marginLeft:15}}>Mức lương:</Text><Text style={{fontWeight:'bold'}}>10-15 triệu</Text>
              </View>
              <View style={{flexDirection: 'row', marginLeft:10}}>
              {IconLocationPin1}<Text style={{marginLeft:15}}>Nơi làm việc:</Text><Text style={{fontWeight:'bold'}}>Hà Nội, TP Hồ Chí Minh</Text>
              </View>
              <View style={{flexDirection: 'row', marginLeft:10}}>
              {IconDirection1}<Text style={{marginLeft:15}}>Yêu cầu trình độ:</Text><Text style={{fontWeight:'bold'}}>Đại học</Text>
              </View>
              <View style={{flexDirection: 'row', marginLeft:10}}>
              {IconLayers1}<Text style={{marginLeft:15}}>Yêu cầu kinh nghiệm:</Text><Text style={{fontWeight:'bold'}}> Từ 1 năm</Text>
              </View>
              <View style={{flexDirection: 'row', marginLeft:10}}>
              {IconSymbolFemale1}<Text style={{marginLeft:15}}>Yêu cầu giới tính:</Text><Text style={{fontWeight:'bold'}}> Nữ</Text>
              </View>
              <View style={{flexDirection: 'row', marginLeft:10}}>
              {IconChart1}<Text style={{marginLeft:15}}>Cấp bậc:</Text><Text style={{fontWeight:'bold'}}>  Nhân viên</Text>
              </View >
              <View style={{flexDirection: 'row', marginLeft:10}}>
              {IconBriefcase1}<Text style={{marginLeft:15}}>Ngành nghề:</Text><Text style={{fontWeight:'bold'}}>  Quản trị kinh doanh</Text>
              </View>
          </View>
        </View>
        <View style={style.Welfare}>
            <Text style={style.textTitle}>Các phúc lợi dành cho bạn</Text>
            <Text style={style.text}>
                Lương + phụ cấp : 7 triệu + % doanh số bán hàng{"\n"}
                Được đóng bảo hiểm đầy đủ theo quy định của nhà nước{"\n"}
                Được đào tạo 1 -2 tháng ( lương nhận đủ 100%){"\n"}
                Được đào tạo chuyên môn nghiệp vụ và tăng lương theo hiệu quả công tác.{"\n"} 
                Hưởng hoa hồng theo doanh số{"\n"}
                Được tham quan, du lịch, nghỉ mát hằng năm. Thưởng, phép năm{"\n"}
            </Text>
        </View>
        <View style={style.Welfare}>
            <Text style={style.textTitle}>Mô tả công việc</Text>
            <Text style={style.text}>
                1. Tìm kiếm khách hàng và lập kế hoạch bán hàng phát triển thị trường.{"\n"}
                Tìm kiếm, duy trì và phát triển mạng lưới khách hàng đến các đối tượng : dự án, công trình, cao ốc văn phòng, khối doanh nghiệp.{"\n"}
                Chăm sóc khách hàng và theo suốt quá trình thực hiện việc bán hàng nhằm hỗ trợ hiệu quả.{"\n"}
                Phối hợp bô phận triển khai lập dự toán, phương án kỹ thuật, hồ sơ dự án tham gia đầu thầu.{"\n"}
                Lập kế hoạch, báo cáo tình hình công việc theo kế hoạch cho cấp trên.{"\n"}
                Hoàn thành chỉ tiêu doanh số được giao {"\n"}
                2. Phối hợp với bộ phận chăm sóc khách hàng tiếp nhận phản hồi thông tin, giải quyết các vấn đề về đơn hàng cho khách hàng.
            </Text>
        </View>
        <View style={style.Welfare}>
            <Text style={style.textTitle}>Yêu cầu công việc</Text>
            <Text style={style.text}>
                Tốt nghiệp chuyên ngành kinh doanh, marketing.{"\n"}
                Tốt nghiệp trung cấp trở lên, đam mê công việc kinh doanh.{"\n"}
                Tuổi từ 25 - 30.{"\n"}
                Nam hoặc nữ ngoại hình ưa nhìn, tác phong nghiêm túc, giao tiếp tốt, có tinh thần trách nhiệm.{"\n"}
                Có tính cầu tiến trong công việc, biết lắng nghe, chia sẻ công việc khi cần phối hợp theo nhóm.{"\n"}
                Yêu cầu Ngoại Ngữ Anh văn.4 tiêu chuẩn : nghe nói đọc viết.{"\n"}
                Quản lý thời gian, sắp xếp công việc, chịu được áp lực công việc. Lập kế hoạch công việc.{"\n"}
                Có kinh nghiệm 2 năm vị trí tương đương trong ngành nội thất là một lợi thế.{"\n"}
            </Text>
        </View>
        <View style={{backgroundColor:"#fff"}}>
            <Text style={style.textTitle}>Địa điểm làm việc</Text>
            <View>
              <Image
                    style={{height: 150, width:340, marginLeft: 10,marginRight:10, marginBottom:20, borderWidth:1, borderColor:"#a4a4a4"}}
                    source={require('./src/img/map1.jpg')}
                    />
            </View>
        </View>
        <View style={style.address}>
          <Text style={style.introduce}>Giới thiệu về công ty</Text>
   {/* chưa hoàn thiện */}       
          <View style={{flexDirection:"row",justifyContent:"space-between"}}>
              <View style={{marginLeft: 10 ,marginBottom: 8 }}>
                <Text>Mã số thuế: </Text><Text style={{fontWeight:"300", color:'black'}}>01011121123</Text>
              </View>
              <View style={{ marginRight: 5 ,marginBottom: 8, width:"50%"}}>
                <Text>Website:</Text><Text style={{fontWeight:"300" , color:'black' ,textDecorationLine:"underline"}}>https://jobnow.com.vn/</Text>
              </View>
          </View>

          <View style={{flexDirection:"row",justifyContent:"space-between"}}>
              <View style={{marginLeft: 10 ,marginBottom: 8 }}>
                <Text>Quy mô:</Text><Text style={{fontWeight:"300", color:'black'}}>10 - 20 nhân viên</Text>
              </View>
              <View style={{ marginRight: 5 ,marginBottom: 8, width:"50%"}}>
                <Text>Facebook: </Text><Text style={{fontWeight:"300", color:'black', flexWrap:"nowrap",textDecorationLine:"underline", fontSize:10}}>https://www.facebook.com/jobnow</Text>
              </View>
          </View>

          <View style={{flexDirection:"row",justifyContent:"space-between",width:"50%"}}>
              <View style={{marginLeft: 10 ,marginBottom: 8}}>
                <Text>Địa chỉ: </Text><Text style={{fontWeight:"300", color:'black'}}>A30, TT9 KDT Văn Quán, Hà Đông, Hà Nội</Text>
              </View>
              <View style={{marginBottom: 8}}>
                <Text>Thời gian làm việc: </Text><Text style={{fontWeight:"300", color:'black' , flexWrap:"nowrap", fontSize:10}}>8h đến 17h, từ thứ 2 đến thứ 6</Text>
              </View>
          </View>
 {/* chưa hoàn thiện */}
          <Text style={style.text}>Được thành lập từ năm 2001, TAV office furniture là một trong những doanh nghiệp hàng đầu chuyên thiết kế và sản xuất sản phẩm nội thất cho văn phòng. Sản phẩm của TAV đã có mặt hầu hết tại các công ty có quy mô lớn, nhỏ trên thị trường trong &amp; ngoài nước. Với phương châm &quot;Chất lượng tốt nhất cùng giá thành hợp lý nhất &quot;, 
                TAV đã và đang hướng đến những thử thách mới trong lĩnh vực ngành nghề. TAV đặt mục tiêu sẽ là DN dẫn đầu trong ngành sản xuất sản phẩm nội thất văn phòng chất lượng cao tại Việt Nam và đạt ngang tầm các thương hiệu cùng nghành trong khu vực Asia.{"\n"}
                Hiện tại, TAV có tổng cộng trên 300 CNV cùng nhà máy sản xuất tại Linh Trung - Thủ Đức (10.000 m2) được đầu tư hệ thống thiết bị sản xuất mới nhất theo công nghệ từ CHLB Đức và Nhật Bản theo 3 chuyên nghành gia công chính: Ván nhân tạo/HPL - Gỗ/Veneer/Sơn - Gia công Kim loại/Sơn tĩnh điện.</Text>
          <View style={{marginRight:10}}>
            <Image
              style={{height: 204, width:340, marginTop:10, marginLeft: 10, marginBottom:10, borderWidth:1, borderColor:"#a4a4a4"}}
              source={require('./src/img/telesale.jpg')}
            />
          </View>
          <View style={{flexDirection:"row", height:44 }}>
            <View style={{width:66,marginLeft: 10,marginRight:5, }}>
              <Image
                style={style.imgSmaill}
                source={require('./src/img/JobNow.jpg')}
                resizeMode={'center'}
              />
            </View>
            <View style={{width:66 ,marginRight:5,}}>
              <Image
                style={style.imgSmaill}
                source={require('./src/img/JobNow.jpg')}
                resizeMode={'center'}
              />
            </View>
            <View style={{width:66 ,marginRight:5,}}>
              <Image
                style={style.imgSmaill}
                source={require('./src/img/JobNow.jpg')}
                resizeMode={'center'}
              />
            </View >
            <View style={{width:66,marginRight:5,}}>
              <Image
                style={style.imgSmaill}
                source={require('./src/img/JobNow.jpg')}
                resizeMode={'center'}
              />
            </View>
            <View style={{width:56,marginRight:10}}>
              <Image
                style={style.imgSmaill}
                source={require('./src/img/JobNow.jpg')}
                resizeMode={'center'}
              />
            </View>
          </View>
          <View>
            <Text style={style.introduce}>Lí do gia nhập công ty chúng tôi</Text>
            <Text style={style.text}>
              Môi trường làm việc trẻ, năng động{"\n"}
              Cơ hội thăng tiến cao{"\n"}
              Chế độ, lương thưởng tốt nhất Việt Nam{"\n"}
              Cơ hội được đào tạo tại nước ngoài{"\n"}
              Học và làm với các công nghệ mới
            </Text>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor:"#fff"}}>
          <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:10, marginLeft:10}}>
            <Text style={{color:"#fc5830", fontSize:16, fontStyle:"normal", fontWeight:"900"}}>VIỆC LÀM TƯƠNG TỰ</Text>
            <Text style={{ color:"#fc5830",fontSize:11, marginRight:10}}>Xem tất cả ></Text>
          </View> 
          <View style={{flexDirection:"row", marginLeft:10, marginTop: 10 }}>
            <Image
                  style={{height:26, width:56}}
                  source={require('./src/img/JobNow.jpg')}
                  resizeMode={'center'}
            />
            <View style={{flexDirection:"column", marginLeft: 10}}>
              <Text style={{fontWeight:"bold", fontSize:10}}>HN - NV/CV Quan Hệ Khách Hàng Doanh Nghiệp</Text>
              <Text style={{fontSize:10, color:"#4a4a4a"}}>Ngân Hàng Thương Mại Cổ Phần Á Châu</Text>
              <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <View style={{flexDirection:"row",alignItems:"center" }}>{myIcon2}<Text style={{color:'#fc5830', fontSize:11, marginLeft:1}}>1.1km</Text></View>
                <View style={{flexDirection:"row",alignItems:"center" }}>{myIcon3}<Text style={{color:'#fc5830', fontSize:11, marginLeft:2}}>Thương Lượng</Text></View>
              </View>
            </View>
          </View>
          <View style={{flexDirection:"row", marginLeft:10, marginTop: 10 }}>
            <Image
                  style={{height:26, width:56}}
                  source={require('./src/img/JobNow.jpg')}
                  resizeMode={'center'}
            />
            <View style={{flexDirection:"column", marginLeft: 10}}>
              <Text style={{fontWeight:"bold", fontSize:10}}>HN - NV/CV Quan Hệ Khách Hàng Doanh Nghiệp</Text>
              <Text style={{fontSize:10, color:"#4a4a4a"}}>Ngân Hàng Thương Mại Cổ Phần Á Châu</Text>
              <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <View style={{flexDirection:"row",alignItems:"center" }}>{myIcon2}<Text style={{color:'#fc5830', fontSize:11, marginLeft:1}}>1.1km</Text></View>
                <View style={{flexDirection:"row",alignItems:"center" }}>{myIcon3}<Text style={{color:'#fc5830', fontSize:11, marginLeft:2}}>Thương Lượng</Text></View>
              </View>
            </View>
          </View>
          <View style={{flexDirection:"row", marginLeft:10, marginTop: 10 }}>
            <Image
                  style={{height:26, width:56}}
                  source={require('./src/img/JobNow.jpg')}
                  resizeMode={'center'}
            />
            <View style={{flexDirection:"column", marginLeft: 10}}>
              <Text style={{fontWeight:"bold", fontSize:10}}>HN - NV/CV Quan Hệ Khách Hàng Doanh Nghiệp</Text>
              <Text style={{fontSize:10, color:"#4a4a4a"}}>Ngân Hàng Thương Mại Cổ Phần Á Châu</Text>
              <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <View style={{flexDirection:"row",alignItems:"center" }}>{myIcon2}<Text style={{color:'#fc5830', fontSize:11, marginLeft:1}}>1.1km</Text></View>
                <View style={{flexDirection:"row",alignItems:"center" }}>{myIcon3}<Text style={{color:'#fc5830', fontSize:11, marginLeft:2}}>Thương Lượng</Text></View>
              </View>
            </View>
          </View>
          <View style={{flexDirection:"row", marginLeft:10, marginTop: 10 }}>
            <Image
                  style={{height:26, width:56}}
                  source={require('./src/img/JobNow.jpg')}
                  resizeMode={'center'}
            />
            <View style={{flexDirection:"column", marginLeft: 10}}>
              <Text style={{fontWeight:"bold", fontSize:10}}>HN - NV/CV Quan Hệ Khách Hàng Doanh Nghiệp</Text>
              <Text style={{fontSize:10, color:"#4a4a4a"}}>Ngân Hàng Thương Mại Cổ Phần Á Châu</Text>
              <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <View style={{flexDirection:"row",alignItems:"center" }}>{myIcon2}<Text style={{color:'#fc5830', fontSize:11, marginLeft:1}}>1.1km</Text></View>
                <View style={{flexDirection:"row",alignItems:"center" }}>{myIcon3}<Text style={{color:'#fc5830', fontSize:11, marginLeft:2}}>Thương Lượng</Text></View>
              </View>
            </View>
          </View>
          <View style={{flexDirection:"row", marginLeft:10, marginTop: 10 }}>
            <Image
                  style={{height:26, width:56}}
                  source={require('./src/img/JobNow.jpg')}
                  resizeMode={'center'}
            />
            <View style={{flexDirection:"column", marginLeft: 10}}>
              <Text style={{fontWeight:"bold", fontSize:10}}>HN - NV/CV Quan Hệ Khách Hàng Doanh Nghiệp</Text>
              <Text style={{fontSize:10, color:"#4a4a4a"}}>Ngân Hàng Thương Mại Cổ Phần Á Châu</Text>
              <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <View style={{flexDirection:"row",alignItems:"center" }}>{myIcon2}<Text style={{color:'#fc5830', fontSize:11, marginLeft:1}}>1.1km</Text></View>
                <View style={{flexDirection:"row",alignItems:"center" }}>{myIcon3}<Text style={{color:'#fc5830', fontSize:11, marginLeft:2}}>Thương Lượng</Text></View>
              </View>
            </View>
          </View>
          <View style={{flexDirection:"row", marginLeft:10, marginTop: 10 }}>
            <Image
                  style={{height:26, width:56}}
                  source={require('./src/img/JobNow.jpg')}
                  resizeMode={'center'}
            />
            <View style={{flexDirection:"column", marginLeft: 10}}>
              <Text style={{fontWeight:"bold", fontSize:10}}>HN - NV/CV Quan Hệ Khách Hàng Doanh Nghiệp</Text>
              <Text style={{fontSize:10, color:"#4a4a4a"}}>Ngân Hàng Thương Mại Cổ Phần Á Châu</Text>
              <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <View style={{flexDirection:"row",alignItems:"center" }}>{myIcon2}<Text style={{color:'#fc5830', fontSize:11, marginLeft:1}}>1.1km</Text></View>
                <View style={{flexDirection:"row",alignItems:"center" }}>{myIcon3}<Text style={{color:'#fc5830', fontSize:11, marginLeft:2}}>Thương Lượng</Text></View>
              </View>
            </View>
          </View>
          <View style={{flexDirection:"row", marginLeft:10, marginTop: 10 }}>
            <Image
                  style={{height:26, width:56}}
                  source={require('./src/img/JobNow.jpg')}
                  resizeMode={'center'}
            />
            <View style={{flexDirection:"column", marginLeft: 10}}>
              <Text style={{fontWeight:"bold", fontSize:10}}>HN - NV/CV Quan Hệ Khách Hàng Doanh Nghiệp</Text>
              <Text style={{fontSize:10, color:"#4a4a4a"}}>Ngân Hàng Thương Mại Cổ Phần Á Châu</Text>
              <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <View style={{flexDirection:"row",alignItems:"center" }}>{myIcon2}<Text style={{color:'#fc5830', fontSize:11, marginLeft:1}}>1.1km</Text></View>
                <View style={{flexDirection:"row",alignItems:"center" }}>{myIcon3}<Text style={{color:'#fc5830', fontSize:11, marginLeft:2}}>Thương Lượng</Text></View>
              </View>
            </View>
          </View>
          <View style={{flexDirection:"row", marginLeft:10, marginTop: 10 }}>
            <Image
                  style={{height:26, width:56}}
                  source={require('./src/img/JobNow.jpg')}
                  resizeMode={'center'}
            />
            <View style={{flexDirection:"column", marginLeft: 10}}>
              <Text style={{fontWeight:"bold", fontSize:10}}>HN - NV/CV Quan Hệ Khách Hàng Doanh Nghiệp</Text>
              <Text style={{fontSize:10, color:"#4a4a4a"}}>Ngân Hàng Thương Mại Cổ Phần Á Châu</Text>
              <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <View style={{flexDirection:"row",alignItems:"center" }}>{myIcon2}<Text style={{color:'#fc5830', fontSize:11, marginLeft:1}}>1.1km</Text></View>
                <View style={{flexDirection:"row",alignItems:"center" }}>{myIcon3}<Text style={{color:'#fc5830', fontSize:11, marginLeft:2}}>Thương Lượng</Text></View>
              </View>
            </View>
          </View>
        </View>
        </ScrollView>
      </View>
    </ScrollView>
    )
  }
}
const myIcon = (<IconTop name="location-pin" size={20} color="red"/>)
const myIcon2 = (<IconTop name="location-pin" size={11} color="#fc5830" fontWeight="bold"/>)
const myIcon3 = (<Icon name="dollar" size={11} color="#fc5830" fontWeight="bold"/>)
const IconWallet1 = (<IconWallet name="wallet" size={15} color="black" />)
const IconLocationPin1 = (<IconLocationPin name="location-pin" size={15} color="black" />)
const IconDirection1 = (<IconDirection name="direction" size={15} color="black" />)
const IconLayers1 = (<IconLayers name="layers" size={15} color="black" />)
const IconSymbolFemale1 = (<IconSymbolFemale name="symbol-female" size={15} color="black" />)
const IconChart1 = (<IconChart name="chart" size={15} color="black" />)
const IconBriefcase1 = (<IconBriefcase name="briefcase" size={15} color="black" />)




// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type  = {};
// export default class App extends Component{
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
