import React, { Component } from "react";
import Authentification from "./components/Authentification";
import "./App.css";
import Profile from "./components/Profile";
import Registration from "./components/Registration";
import Loganization from "./components/Logazination";
import HabitForm from "./components/HabitsList/HabitForm";
import Modal from "./components/Modal";
import HabitList from "./components/HabitsList";

class App extends Component {
  state = {
    isProfile: false,
    showModal: false,
  };

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  render() {
    const { showModal } = this.state;
    return (
      <>
        {/* <Authentification /> */}
        <Profile />
        {/* <Registration /> */}
        {/* <Loganization/> */}
        {/* <HabitForm /> */}
        {/* <HabitList showModal={showModal} toggleModal={this.toggleModal} /> */}
      </>
    );
  }
}

export default App;
