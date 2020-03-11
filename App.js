import React from 'react';
//components
import Enter from "./screens/Enter";
//redux
import { Provider } from 'react-redux'
import {store} from "./redux/store";

export default function App() {

  return (
      <Provider store={store}>
          <Enter />
      </Provider>
  )
}