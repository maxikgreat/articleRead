import React from 'react';
//components
import Enter from "./screens/Enter";
//import FlashMessage from "react-native-flash-message";
//redux
import { Provider } from 'react-redux'
import {store} from "./redux/store";
import { ActionSheetProvider } from '@expo/react-native-action-sheet'

export default function App() {

  return (
      <Provider store={store}>
          <ActionSheetProvider>
              <Enter />
          </ActionSheetProvider>
      </Provider>
  )
}