import thunk from "redux-thunk";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import accountReducer from "./accountSlice";
// import settingsReducer from "./settingsSlice"
//import contentReducer from "./contentSlice";
import articleNumReducer from "./articleNumSlice"
import msgsReduer from "./msgsSlice"
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export const store = configureStore({
  reducer: {
    account: accountReducer,
    //settings: settingsReducer,
    //content: contentReducer,
    articleNum: articleNumReducer,
    msgs: msgsReduer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

persistStore(store);


