import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { List } from "react-native-paper";

const FileList = () => {
  const separator = () => (
    <View style={{ height: 0.9, backgroundColor: "gray" }} />
  );
  return (
    <View>
      <View style={{ padding: 8 }}>
        <Text style={{ color: "#1f1f1f", fontWeight: "600" }}>
          3 files found
        </Text>
      </View>
      <View>
        <FlatList
          data={["Images", "Videos", "Documents"]}
          renderItem={({ item }) => <List.Item title={item} />}
          keyExtractor={(_, indx) => indx.toString()}
          ItemSeparatorComponent={() => (
            <View style={{ paddingHorizontal: 16 }}>{separator()}</View>
          )}
        />
      </View>
    </View>
  );
};

export default FileList;

const styles = StyleSheet.create({});
