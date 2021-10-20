import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export default function Rodape() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, styles.homeButton]}>
        <Icon style={styles.iconButton} name="home" size={30} color="#000000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Icon style={styles.iconButton} name="user" size={30} color="#000000" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1.3,
    width: "100%",
    flexDirection: "row",
    height: 60,
    // backgroundColor: "lightgreen",
    justifyContent: "space-around",
  },
  texto: {
    flex: 1,
    padding: 3,
    fontSize: 14,
    borderWidth: 0.5,
    textAlign: "center",
    fontWeight: "bold",
    borderRadius: 20,
    margin: 2,
  },
  button: {
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: 50,
    height: 50,
    borderRadius: 50,
    paddingVertical: 5,
    borderWidth: 1.3,
    borderColor: "#000000",
  },
  iconButton: {
    alignSelf: "center",
  },
  homeButton: {
    borderColor: "#fff",
  },
});
