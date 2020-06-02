import React, { Component } from "react";
import { HashRouter } from 'react-router-dom'
import Nav from "./Components/Nav/Nav";
import router from './router'
import "./App.css";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Nav />
          {router}
        </div>
      </HashRouter>
    ); // HashRouter wrap our div to allow us to use routes inside the div.
  }
}

export default App;
