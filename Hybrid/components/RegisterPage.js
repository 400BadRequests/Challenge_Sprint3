import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import axios from "axios";

export default function RegisterPage({ navigation, route }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);

  const registerIntegration = (email, name, phone, password) => {
    var today = new Date();
    axios
      .post("http://10.0.2.2:8080/api/user", {
        email: email,
        nomeCompleto: name,
        numeroTelefone: phone,
        senha: password,
        dataCadastro:
          today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate(),
      })
      .then((res) => navigation.navigate("home"))
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="NOME COMPLETO"
          onChangeText={(name) => setName(name)}
        />
        <TextInput
          style={styles.input}
          placeholder="EMAIL"
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          style={styles.input}
          placeholder="SENHA"
          secureTextEntry
          onChangeText={(password) => setPassword(password)}
        />
        <TextInput
          style={styles.input}
          placeholder="NÚMERO DE TELEFONE"
          onChangeText={(phone) => setPhone(phone)}
        />
        {error && (
          <Text style={styles.errorText}>
            *Erro no registro. Por favor, revise seus dados e tente novamente
          </Text>
        )}
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
          onPress={() => registerIntegration(name, email, password, phone)}
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
  errorText: {
    width: 330,
    borderRadius: 20,
    paddingHorizontal: 20,
    color: "#ff0000",
  },
});
