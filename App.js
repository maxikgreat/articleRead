import React from 'react';
//components
import Navigation from "./components/Navigation";
//redux
import { Provider } from 'react-redux'
import {store} from "./redux/store";
import {useSelector} from "react-redux";

export default function App() {

  return (
      <Provider store={store}>
          <Navigation />
      </Provider>
  )
}