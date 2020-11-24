import React, { Component } from "react";
import Authentification from "./components/Authentification";
import "./App.css";
import Profile from "./components/Profile";

class App extends Component {
  render() {
    return (
      <>
        <Authentification />
        <Profile />
      </>
    );
  }
}

export default App;
