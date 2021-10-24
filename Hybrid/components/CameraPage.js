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
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";
import ImageResizer from "react-native-image-resizer";

export default function CameraPage({ navigation }) {
  const camRef = useRef(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasPermission, setHasPermission] = useState(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("contain");
  const [onlyScaleDown, setOnlyScaleDown] = useState(false);
  const [resizeTargetSize, setResizeTargetSize] = useState(80);
  const [capturedPhotoString, setCapturedPhotoString] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();

    (async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
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

      const data = await camRef.current.takePictureAsync();
      setCapturedPhoto(data.uri);
      let imageStringComplete = data.uri;
      let fields = imageStringComplete.split("/");
      let imageString = fields[11];
      setCapturedPhotoString(imageString);
      setOpen(true);
      // let base64String = "data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgA"; // Not a real image

      // // Remove header
      // let base64Image = base64String.split(";base64,").pop();
    }
  }

  // function resize() {
  //   ImageResizer.createResizedImage(
  //     capturedPhotoString,
  //     resizeTargetSize,
  //     resizeTargetSize,
  //     "JPEG",
  //     100,
  //     0,
  //     undefined,
  //     false,
  //     { mode, onlyScaleDown }
  //   )
  //     .then((item) => {
  //       setResizedImage(item);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       return Alert.alert(
  //         "Unable to resize the photo",
  //         "Check the console for full the error message"
  //       );
  //     });
  // }

  async function savePicture() {
    // let resizedImage = resize(capturedPhotoString);
    const asset = await MediaLibrary.createAssetAsync(capturedPhoto)
      .then(() => {
        alert("Salvo com sucesso");
      })
      .catch((error) => {
        console.log("err", error);
      });
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
              alignItems: "center",
            }}
          >
            <Image
              // style={{ width: "100%", height: "100%" }}
              style={{ width: "100%", height: 100, resizeMode: "contain" }}
              source={{ uri: capturedPhoto }}
            />
            <View
              style={{
                margin: 10,
                flexDirection: "row",
                position: "absolute",
                bottom: 20,
                alignContent: "center",
              }}
            >
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
              <TouchableOpacity
                style={styles.windowCloseBtn}
                onPress={savePicture}
              >
                <CloseWindow
                  style={styles.iconButton}
                  name="upload"
                  size={50}
                  color="#121212"
                />
              </TouchableOpacity>
            </View>
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
    alignSelf: "center",
  },
});
