import React from "react";
import { hot } from 'react-hot-loader/root';

import '../styles/App.css';


const App = ({counter, increment, decrement}) => (
  <div>
    <h1>My React App!</h1>
    <h2>{counter}</h2>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
  </div>
);

export default hot(App);