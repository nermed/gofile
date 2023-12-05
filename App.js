import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import MainNavigation from './navigation/MainNavigation';
import { app } from './configs/firebase';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MainNavigation />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
