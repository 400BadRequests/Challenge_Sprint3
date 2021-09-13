import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Modal,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export default function HomePage({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isRecorded, setIsRecorded] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [doneModalVisible, setDoneModalVisible] = useState(false);

  return (
    <View style={{ backgroundColor: "#000000" }}>
      <View style={styles.textView}>
        <View
          style={{
            paddingHorizontal: 50,
          }}
        >
          {isLoading === false && (
            <Text style={styles.textInfo}>
              Clique no botão para tirar a foto
            </Text>
          )}
          {isLoading === true && (
            <Text style={styles.textInfo}>processando sua mensagem...</Text>
          )}
          {/* <Text style={styles.textInfo}>vocês fazem recarga tim?</Text> */}
        </View>
        {isLoading === true && (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="#00ff00" />
          </View>
        )}
        {/* // A ideia é que o Modal apareça após o processamento da foto. Mas ainda
        // não está funcionando a transição do ActivityIndicator para o Modal. */}
        {
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(!modalVisible)}
          >
            <View style={styles.centeredView}>
              {doneModalVisible === false && (
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>
                    Terminar {"\n"} interação?
                  </Text>
                  <View style={styles.modalButtonContainer}>
                    <TouchableOpacity
                      style={{
                        backgroundColor: "#ff0000",
                        borderRadius: 10,
                        width: 60,
                        marginRight: 20,
                      }}
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        não
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        backgroundColor: "#55eca3",
                        borderRadius: 10,
                        width: 60,
                        marginLeft: 20,
                      }}
                      onPress={() => setDoneModalVisible(true)}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        sim
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              {doneModalVisible === true && (
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>
                    Interação {"\n"} Finalizada
                  </Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#55eca3",
                      borderRadius: 10,
                      width: 60,
                    }}
                    onPress={() => setModalVisible(false)}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      ok!
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </Modal>
        }
      </View>
      <View style={styles.buttonContainer}>
        {isLoading === false && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => setIsLoading(true)}
          >
            <Icon
              style={styles.iconButton}
              name="camera"
              size={25}
              color="#fff"
            />
          </TouchableOpacity>
        )}
        {isLoading === true && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => setIsLoading(false)}
          >
            <Icon
              style={styles.iconButton}
              name="pause"
              size={25}
              color="#fff"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textView: {
    height: "75%",
  },
  textInfo: {
    fontSize: 26,
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "#656a67",
    margin: 10,
    padding: 10,
    height: 120,
    textAlignVertical: "center",
    color: "white",
  },
  buttonContainer: {
    height: "25%",
    justifyContent: "center",
  },
  button: {
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#ff0000",
    width: 60,
    height: 60,
    borderRadius: 50,
    paddingVertical: 5,
    right: -125,
  },
  iconButton: {
    alignSelf: "center",
  },
  loading: {
    top: 90,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    backgroundColor: "#656a67",
    borderRadius: 20,
    height: 150,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  modalButtonContainer: {
    width: "90%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
