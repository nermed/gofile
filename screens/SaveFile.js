import { Platform, StyleSheet, Text, View } from "react-native";
import React, { useId } from "react";
import ButtonComponent from "../components/ButtonComponent";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../configs/firebase";
import { getStorage, ref } from "firebase/storage";

const SaveFile = ({ navigation }) => {
  const openDocument = async () => {
    DocumentPicker.getDocumentAsync({ copyToCacheDirectory: true,  })
      .then(async (res) => {
        console.log(res);
        // const blob = new Blob(res.uri);
        // console.log(blob);
        // Create a root reference
        // const storage = getStorage();
        // const dataToStore = {
        //   code: Date.now().toString(),
        //   createdAt: new Date(),
        //   // file: res.uri,
        //   filename: res.name,
        //   size: res.size.toString(),
        //   type: res.mimeType,
        // };
        // try {
        //   const docRef = await addDoc(collection(firestore, "fileSaved"), dataToStore);
        //   console.log("Document written with ID: ", docRef.id);
        // } catch (e) {
        //   console.error("Error adding document: ", e);
        // }
        FileSystem.getInfoAsync(res.uri).then((rr) => {
          console.log(rr);
        })
        // FileSystem.readAsStringAsync(res.uri, { encoding: "base64" })
        //   .then((ress) => {
        //     console.log(ress);
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
        // fetch('http://localhost:9000/storeFile', {
        //   method: 'POST',
        //   body:
        // })
      })
      .catch((err) => console.log(err));
  };
  return (
    <View
      style={{
        gap: 8,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ButtonComponent
        actionFn={() => openDocument()}
        icon="file"
        mode={"contained"}
        label="Upload"
      />
    </View>
  );
};

export default SaveFile;

const styles = StyleSheet.create({});
