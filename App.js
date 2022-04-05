import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';

import Navigation from './src/navigation';

export default function App() {
  return (
    <SafeAreaProvider>
    {/* <SafeAreaView style={{ flex: 1 }}> */}
      <NativeBaseProvider>
        <Navigation />
      </NativeBaseProvider>
    {/* </SafeAreaView> */}
  </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
