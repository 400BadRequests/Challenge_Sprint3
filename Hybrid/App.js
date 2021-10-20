import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";

import Navegacao from "./components/Navegacao";

export default function App() {
  // const [type, setType] = useState(Camera.Constants.Type.back);

  // const [hasPermission, setHasPermission] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Camera.requestCameraPermissionsAsync();
  //     setHasPermission(status === "granted");
  //   })();
  // }, []);

  // if (hasPermission === null) {
  //   return <View />;
  // }

  // if (hasPermission === false) {
  //   return <Text>Acesso negado!</Text>;
  // }

  return <Navegacao />;
}
