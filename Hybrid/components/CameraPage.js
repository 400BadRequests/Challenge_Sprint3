import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import BtnTakePicture from "react-native-vector-icons/Entypo";
import CloseWindow from "react-native-vector-icons/FontAwesome";
import GoBackIcon from "react-native-vector-icons/AntDesign";
import { Camera } from "expo-camera";
// import * as fs from "fs";

export default function CameraPage({ navigation }) {
  const camRef = useRef(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasPermission, setHasPermission] = useState(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>Acesso negado!</Text>;
  }

  async function takePicture() {
    if (camRef) {
      const options = { base64: true };

      const data = await camRef.current.takePictureAsync(options);
      setCapturedPhoto(data.base64);
      setOpen(true);
      let base64String = "data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgA"; // Not a real image

      // Remove header
      let base64Image = base64String.split(";base64,").pop();
      // fs.writeFile(
      //   "image.jpg",
      //   base64Image,
      //   { encoding: "base64" },
      //   function (err) {
      //     console.log("File created");
      //   }
      // );
      console.log(data);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera style={{ height: "85%" }} type={type} ref={camRef}></Camera>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={{
            position: "absolute",
            left: 30,
          }}
          onPress={() => navigation.goBack()}
        >
          <GoBackIcon
            style={styles.iconButton}
            name="closecircle"
            size={45}
            color="#fff"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnTakePicture} onPress={takePicture}>
          <BtnTakePicture
            style={styles.iconButton}
            name="circle"
            size={60}
            color="#000000"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: "absolute",
            right: 30,
          }}
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}
        >
          <Icon
            style={styles.iconButton}
            name="camera-reverse"
            size={50}
            color="#fff"
          />
        </TouchableOpacity>
      </View>

      {capturedPhoto && (
        <Modal animationType="slide" transparent={false} visible={open}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Image
              // style={{ width: "100%", height: "100%" }}
              style={{ width: "100%", height: 100, resizeMode: "contain" }}
              source={{ uri: capturedPhoto }}
            />
            <TouchableOpacity
              style={styles.windowCloseBtn}
              onPress={() => setOpen(false)}
            >
              <CloseWindow
                style={styles.iconButton}
                name="window-close"
                size={60}
                color="#FF0000"
              />
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  iconButton: {
    alignSelf: "center",
  },
  buttonsContainer: {
    height: "15%",
    justifyContent: "center",
    backgroundColor: "#404040",
    borderTopWidth: 3,
    borderColor: "#000000",
  },
  btnTakePicture: {
    position: "absolute",
    alignSelf: "center",
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "#000000",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  windowCloseBtn: {
    margin: 10,
    position: "absolute",
    alignSelf: "center",
    bottom: 20,
  },
});
