import React, { Component } from 'react';
import Counter from "./Counter";
import {Provider} from "react-redux";
import {store} from "./Redux/Store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
       <Counter/>
      </div>
      </Provider>
    );
  }
}