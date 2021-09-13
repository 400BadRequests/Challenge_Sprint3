import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function LogsPage({ navigation, dados }) {
  return (
    <View style={{ height: "100%", backgroundColor: "#000000" }}>
      <FlatList
        data={dados}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() =>
                navigation.navigate("logsDetails", {
                  dados: item,
                })
              }
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.id}>{`#0${item.id}`}</Text>
                <Text style={styles.date}>{item.date}</Text>
                <Text style={styles.time}>{`${item.time} >`}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: "center",
    height: 65,
    borderColor: "#55eca3",
  },
  id: {
    flex: 0.5,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "#ff7070",
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
  },
  date: {
    flex: 3,
    fontSize: 18,
    paddingHorizontal: 2,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
  },
  time: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
  },
});
