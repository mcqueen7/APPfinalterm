import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';

import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import store from './src/redux/store';

export default function App() {
  return (
    
    <SafeAreaProvider>
      {/* <SafeAreaView>  
      </SafeAreaView> */}
      <Provider store={store}>
      <NativeBaseProvider>
        <Navigation />
      </NativeBaseProvider>
      </Provider>
   </SafeAreaProvider>
  );
}
