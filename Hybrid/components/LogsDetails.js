import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function LogsPage({ navigation, route }) {
  const { dados } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.time}>{dados.time}</Text>
        <Text style={styles.texto}>{dados.msg}</Text>
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#000000",
  },
  box: {
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: "center",
    height: 120,
    borderColor: "#55eca3",
  },
  time: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 20,
    textAlign: "left",
    color: "white",
  },
  texto: {
    fontStyle: "italic",
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
    color: "white",
  },
  buttonContainer: {
    backgroundColor: "#c48dff",
    alignSelf: "stretch",
    margin: 5,
    marginTop: 20,
    borderRadius: 20,
    padding: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
