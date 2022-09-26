import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <View style={styles.book}>
          <Image
            style={{ width: 130, height: 250, resizeMode: "contain" }}
            source={require("./Img/book.png")}
          />
        </View>
        <View style={styles.title}>
          <View style={styles.titleCon}>
            <Text
              style={[
                styles.title1,
                {
                  fontSize: 15,
                },
              ]}
            >
              Nguyên hàm tích phân và ứng dụng
            </Text>
            <Text
              style={[
                styles.title1,
                {
                  fontSize: 15,
                },
              ]}
            >
              Cung cấp bởi Tiki Trading
            </Text>
            <Text
              style={[
                styles.title1,
                {
                  fontSize: 20,
                  color: "red",
                },
              ]}
            >
              141.800 đ
            </Text>
            <Text
              style={[
                styles.title1,
                {
                  fontSize: 15,
                  color: "gray",
                  textDecorationLine: "line-through",
                  textDecorationStyle: "solid",
                },
              ]}
            >
              141.800 đ
            </Text>
            <View style={styles.number}>
              <TouchableOpacity
                style={[styles.button, {}]}
                onPress={() => {
                  alert("you clicked me");
                }}
              >
                <Image
                  source={require("./Img/minus.png")}
                  style={{ width: 15, height: 15, resizeMode: "contain" }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  paddingLeft: 20,
                  paddingRight: 20,
                }}
              >
                1
              </Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  alert("you clicked me");
                }}
              >
                <Image
                  source={require("./Img/plus.png")}
                  style={{ width: 15, height: 15, resizeMode: "contain" }}
                />
              </TouchableOpacity>
              <Text
                style={{ color: "blue", fontWeight: "bold", paddingLeft: 70 }}
              >
                Mua sau
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.content1}>
        <View style={styles.number}>
          <Text style={{ fontWeight: "bold", fontSize: 15, paddingLeft: 15 }}>
            Mã giảm gía đã lưu
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              paddingLeft: 30,
              color: "blue",
            }}
          >
            Xem tại đây
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.sectionStyle}>
            <Image source={require("./Img/yellow.png")} style={styles.imageStyle} />
            <TextInput
              style={{ flex: 1 }}
              placeholder="Mã giảm giá"
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={{ paddingTop: 10, paddingLeft: 5 }}>
            <TouchableOpacity
              style={styles.buttonAp}
              onPress={() => {
                alert("you clicked me");
              }}
            >
              <Text style={{ fontSize: 20, color: "white" }}>Áp dụng</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1, backgroundColor: "#C4C4C4" }} />
        <View
          style={{
            flex: 2,
            paddingLeft: 15,
            flexDirection: "row",
            paddingTop: 8,
          }}
        >
          <Text>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
          <Text style={{ paddingLeft: 20, color: "blue" }}>Nhập tại đây?</Text>
        </View>
      </View>

      <View style={{ flex: 2 }}>
        <View style={{ flex: 0.3, backgroundColor: "#C4C4C4" }} />
        <View style={styles.contentTT}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Tạm tính</Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              paddingLeft: 200,
              color: "red",
            }}
          >
            141.800 đ
          </Text>
        </View>
        <View style={{ flex: 3, backgroundColor: "#C4C4C4" }} />
        <View style={styles.contentTT2}>
          <View style={{ flexDirection: "row", paddingTop: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Thành tiền</Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                paddingLeft: 185,
                color: "red",
              }}
            >
              141.800 đ
            </Text>
          </View>
          <View style={{ paddingTop: 25}}>
            <TouchableOpacity
              style={styles.buttonTT}
              onPress={() => {
                alert("you clicked me");
              }}
            >
              <Text style={{ fontSize: 20, color: "white", fontWeight: "bold"}}>TIẾN HÀNH ĐẶT HÀNG</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonTT:{
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    width: 350,
    height: 60,
    marginBottom: 20,
    shadowColor: "#303838",
  },
  contentTT2: {
    flex: 3,
    paddingLeft: 15,
  },
  contentTT: {
    flex: 1,
    paddingLeft: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonAp: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0A5EB7",
    width: 100,
    height: 60,
    marginBottom: 20,
    shadowColor: "#303838",
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 40,
    resizeMode: "stretch",
    alignItems: "center",
  },
  sectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#000",
    height: 60,
    width: 250,
    borderRadius: 5,
    margin: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    underlineColorAndroid: "transparent",
  },
  content1: {
    flex: 1,
  },
  number: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingTop: 15,
    paddingBottom: 20,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#859a9b",
    width: 25,
    height: 25,
    marginBottom: 20,
    shadowColor: "#303838",
  },
  title1: {
    fontWeight: "bold",
    paddingTop: 10,
  },
  titleCon: {
    paddingTop: 10,
    paddingLeft: 10,
  },
  title: {
    flex: 2,
  },
  book: {
    paddingLeft: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flex: 1,
    flexDirection: "row",
  },
  container: {
    flex: 1,
    paddingTop: 30,
    flexDirection: "column",
  },
});
