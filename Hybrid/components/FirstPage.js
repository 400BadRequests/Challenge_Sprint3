import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export default function FirstPage({ navigation }) {
  return (
    <View style={{ backgroundColor: "#000000" }}>
      <View style={styles.textView}>
        <View style={{ paddingHorizontal: 120 }}>
          <Text style={styles.textInfo}>OLÁ! {"\n"}</Text>
        </View>
        <View style={{ paddingHorizontal: 70 }}>
          <Text style={styles.textInfo}>TIRE UMA{"\n"}</Text>
        </View>
        <View style={{ paddingHorizontal: 120 }}>
          <Text style={styles.textInfo}>FOTO{"\n"}</Text>
        </View>
        <View style={{ paddingHorizontal: 80 }}>
          <Text style={styles.textInfo}>PARA SER{"\n"}</Text>
        </View>
        <View style={{ paddingHorizontal: 40 }}>
          <Text style={styles.textInfo}>INTERPRETADA</Text>
        </View>
      </View>
      <View style={{ height: "30%" }}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("⚡")}
          >
            <Icon style={styles.icon} name="camera" size={25} color="#c48dff" />
            <Text style={styles.textButton}>INICIAR</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.logButton}
            onPress={() => navigation.navigate("logs")}
          >
            <Text style={styles.textButton}>REGISTROS</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textView: {
    height: "70%",
    justifyContent: "center",
  },
  textInfo: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    lineHeight: 50,
    backgroundColor: "#c48dff",
    margin: 7,
    maxHeight: 50,
  },
  buttonContainer: {
    height: "50%",
    justifyContent: "center",
  },
  button: {
    alignSelf: "center",
    backgroundColor: "#55eca3",
    width: "50%",
    borderRadius: 15,
    paddingVertical: 5,
    flexDirection: "row",
  },
  logButton: {
    alignSelf: "center",
    backgroundColor: "#55eca3",
    width: "60%",
    borderRadius: 15,
    paddingVertical: 5,
  },
  textButton: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  icon: {
    alignSelf: "center",
    paddingHorizontal: 12,
  },
});
