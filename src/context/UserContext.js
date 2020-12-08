import React, { Component, createContext } from "react";

const Context = createContext();

const fetchedUser = {
  id: 1,
  email: "mango@gmail.com",
  name: "Mango",
  phone: "123456789",
  avatar: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-512.png",
  habits: [
    {
      title: "Бег",
      comment: "Мотивация",
      repeat: "Каждый день",
      color: "#1f1db6",
      remind: true,
      progress: "7",
      id: 1,
    },
  ],
};

export default class UserContext extends Component {
  static Consumer = Context.Consumer;

  handleLogIn = () => {
    this.setState({ user: fetchedUser, isLogin: true });
  };

  handleLogOut = () => {
    this.setState({ user: null, isLogin: false });
  };

  state = {
    user: fetchedUser,
    isLogIn: false,
    handleLogIn: this.handleLogIn,
    handleLogOut: this.handleLogOut,
  };

  render() {
    const { children } = this.props;
    return <Context.Provider value={this.state}>{children}</Context.Provider>;
  }
}
