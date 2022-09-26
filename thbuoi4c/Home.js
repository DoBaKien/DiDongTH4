import React from "react";
import {
  Text,
  View,
  Button,
  Modal,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";

function Home() {
  const [modalOpen, setModalOpen] = React.useState(true);
  return (
    <View>
      <Modal visible={modalOpen} animationType="slide" style={styles.modal}>
        <StatusBar style="auto" />
        <View style={styles.container2}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View
              style={{
                flex: 1,
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  resizeMode: "contain",
                }}
                source={require("./Img/vsmart.png")}
              />
            </View>
            <View
              style={{
                flex: 1,
              }}
            >
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 18,
                }}
              >
                Điện Thoại Vsmart Joy 3 Hàng chính hãng
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 3,
              backgroundColor: "#C4C4C4",
            }}
          >
            <View
              style={{
                flex: 0.5,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                }}
              >
                Chọn một màu bên dưới
              </Text>
            </View>
            <View
              style={{
                justifyContent: "space-around",
                alignItems: "center",
                flex: 7,
              }}
            >
              <View style={[styles.box, { backgroundColor: "#C5F1FB" }]} />
              <View style={[styles.box, { backgroundColor: "red" }]} />
              <View style={[styles.box, { backgroundColor: "black" }]} />
              <View style={[styles.box, { backgroundColor: "#234896" }]} />
            </View>
            <View
              style={{
                flex: 0.5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={styles.buttonXong}
                onPress={() => setModalOpen(false)}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Xong
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      
    </View>
  )
}
const styles = StyleSheet.create({
  container2: {
    justifyContent: "center",
    flex: 1,
  },
  buttonXong: {
    backgroundColor: "#1952E294",
    width: 350,
    height: 30,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 100,
    height: 100,
  },
});

export default Home;
