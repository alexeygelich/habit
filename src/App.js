import React, { Component, Suspense } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import HabitsList from "./components/HabitsList";
import routers from "./routers";
import ErrorBoundary from "./components/ErrorBaundary";
import UserContext from "./context/UserContext";
import HabitProfile from "./components/Profile";

class App extends Component {
  state = {
    showModal: false,
    users: [
      {
        email: "",
        name: "",
        phone: "",
        habits: [],
      },
    ],
  };

  modalToggle = () => this.setState((state) => ({ showModal: !state.showModal }));

  render() {
    const { showModal } = this.state;
    return (
      <>
        <UserContext>
          <ErrorBoundary>
            <Suspense fallback={<h1>Loading...</h1>}>
              {routers.map((route, idx) => (
                <Route key={idx} {...route}></Route>
              ))}
              <Route
                path="/profile/habit-list"
                exact
                render={(props) => <HabitsList {...props} showModal={showModal} modalToggle={this.modalToggle} />}
              />
              <Route
                path="/profile/habit-list/:habitId"
                exact
                render={(props) => <HabitProfile {...props} showModal={showModal} modalToggle={this.modalToggle} />}
              />
            </Suspense>
          </ErrorBoundary>
        </UserContext>
      </>
    );
  }
}

export default App;
