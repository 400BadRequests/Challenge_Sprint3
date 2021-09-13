import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

import Logs from "./LogsPage";

const DADOS = require("../dados/dados_conversao_libra.json");

export default function Principal({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, margin: 2 }}>
        <Logs dados={DADOS} navigation={navigation} />
      </View>

      <StatusBar barStyle="default" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
