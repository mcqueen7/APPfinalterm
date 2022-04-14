import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';

import Navigation from './src/navigation';
import { Provider } from "react-redux";
import store from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
    <SafeAreaProvider>
      {/* <SafeAreaView>  
      </SafeAreaView> */}
      <NativeBaseProvider>
        <Navigation />
      </NativeBaseProvider>
   </SafeAreaProvider>
    </Provider>
  );
}
