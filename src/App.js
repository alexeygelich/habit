import React, { Component } from "react";
import Authentification from "./components/Authentification";
import "./App.css";
import Profile from "./components/Profile";
import Registration from "./components/Registration";
import Loganization from "./components/Logazination";
import HabitForm from "./components/HabitsList/HabitForm";

class App extends Component {
  render() {
    return (
      <>
        <Authentification />
        {/* <Profile /> */}
        {/* <Registration /> */}
        {/* <Loganization/> */}
        {/* <HabitForm /> */}
      </>
    );
  }
}

export default App;
