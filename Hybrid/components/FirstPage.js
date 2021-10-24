import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import axios from "axios"


export default function FirstPage({ navigation }) {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const retrieveUserLogin = (employeeId) => {
    axios.get(`http://10.0.2.2:8080/api/user/${employeeId}`).then((res) => {
      if (res.data.senha === password) {
        setError(false)
        navigation.navigate("home")
      } else {
        setError(true)
      }
    })
    .catch((err => {
      setError(true)
      console.log(err)
    }))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TALK TO ME</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="ID DE FUNCIONARIO" onChangeText={(id) => setId(id)} />
        <TextInput style={styles.input} placeholder="SENHA" secureTextEntry onChangeText={(password) => setPassword(password)} />
        {error &&
          <Text style={styles.errorText}>*Erro no login. Por favor, revise seus dados e tente novamente</Text>
        }
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("registerPage")}
        >
          <Text style={styles.buttonText}>REGISTRAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={() => retrieveUserLogin(id, password)}>ENTRAR</Text>
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
  errorText: {
    width: 330,
    borderRadius: 20,
    paddingHorizontal: 20,
    color: "#ff0000",
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
