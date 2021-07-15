import React, { ReactChild } from "react";
import DisplayError from "./DisplayError";
import Centered from "./Centered";

type ErrorBoundaryProps = {
  children: ReactChild | ReactChild[];
};

type ErrorBoundaryState = { error: Error };

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error)
      return (
        <Centered containerClassName="h-full">
          <DisplayError message={this.state.error.message} />
        </Centered>
      );
    return this.props.children;
  }
}

export default ErrorBoundary;
