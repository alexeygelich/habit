import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ErrorBaundary extends Component {
  state = {
    error: false,
  };

  componentDidCatch(error, info) {
    this.setState({ error: true });
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;
    return <div>{error ? <p>Oops, somthing went wrong</p> : children}</div>;
  }
}
