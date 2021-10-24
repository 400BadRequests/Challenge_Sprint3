import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import Rodape from "./Rodape";

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Olá, x</Text>
      <Text style={styles.title}>ATENDIMENTOS</Text>
      <View style={styles.attendanceInfo}>
        <Text style={styles.attendanceId}>#2</Text>
        <Text style={styles.date}>03/04/2020</Text>
        <Text style={styles.time}>15:32</Text>
      </View>
      <View style={styles.attendanceInfo}>
        <Text style={styles.attendanceId}>#2</Text>
        <Text style={styles.date}>04/04/2020</Text>
        <Text style={styles.time}>15:32</Text>
      </View>
      <View style={styles.attendanceInfo}>
        <Text style={styles.attendanceId}>#2</Text>
        <Text style={styles.date}>05/04/2020</Text>
        <Text style={styles.time}>15:32</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("newService")}
        >
          <Icon
            style={styles.iconButton}
            name="plus"
            size={30}
            color="#000000"
          />
        </TouchableOpacity>
      </View>
      <Rodape />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 30,
  },
  name: {
    fontSize: 18,
    color: "#383838",
    marginBottom: 30,
    textAlign: "left",
    width: "100%",
    paddingLeft: 10,
  },
  title: {
    fontSize: 24,
    color: "#383838",
    marginBottom: 20,
  },
  attendanceInfo: {
    height: 50,
    margin: 12,
    borderWidth: 2,
    borderColor: "#808080",
    width: 330,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  date: {
    fontSize: 28,
    fontWeight: "bold",
    marginHorizontal: 35,
  },
  attendanceId: {
    fontSize: 15,
    fontWeight: "bold",
  },
  time: {
    fontSize: 15,
    fontWeight: "bold",
  },
  button: {
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: 50,
    height: 50,
    borderRadius: 50,
    paddingVertical: 5,
    right: -145,
    borderWidth: 1.3,
    borderColor: "#000000",
  },
  iconButton: {
    alignSelf: "center",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 25,
  },
});
