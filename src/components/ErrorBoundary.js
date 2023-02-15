import React, { Component } from "react";

// Creatinf an Error Boundary component to catch our error
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  // Our Try and catch look alike js.
  componentDidCatch(error, info) {
    // If this is triggered render this
    this.setState({ hasError: true });
  }
  // Message to display to the user. when we get an error
  render() {
    if (this.state.hasError) {
      return <h1>Oooooops. Something went wrong!!</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
