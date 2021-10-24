import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export default function FirstPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TALK TO ME</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="EMAIL" />
        <TextInput style={styles.input} placeholder="SENHA" />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("registerPage")}
        >
          <Text style={styles.buttonText}>REGISTRAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    color: "#383838",
    marginTop: 100,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 2,
    borderColor: "#808080",
    width: 330,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  inputContainer: {
    marginVertical: 30,
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
    flex: 1,
  },
});
