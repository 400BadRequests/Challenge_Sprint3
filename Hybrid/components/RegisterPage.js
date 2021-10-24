import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";

export default function RegisterPage({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="NOME COMPLETO" />
        <TextInput style={styles.input} placeholder="EMAIL" />
        <TextInput style={styles.input} placeholder="SENHA" />
        <TextInput style={styles.input} placeholder="NÚMERO DE TELEFONE" />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>CANCELAR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("home")}
        >
          <Text style={styles.buttonText}>REGISTRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    alignItems: "center",
  },
  input: {
    height: 50,
    margin: 8,
    borderWidth: 2,
    borderColor: "#808080",
    width: 330,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  inputContainer: {
    marginTop: 60,
    marginBottom: 50,
  },
  button: {
    borderWidth: 2,
    height: 34,
    width: 120,
    justifyContent: "center",
    borderRadius: 10,
    borderColor: "#808080",
  },
  buttonText: {
    fontSize: 15,
    textAlign: "center",
    color: "#808080",
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    marginBottom: 100,
  },
});
