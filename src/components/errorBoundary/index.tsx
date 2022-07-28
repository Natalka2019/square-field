import React, { ErrorInfo } from "react";
import ErrorFallback from "../errorFallback";

interface IProps {
  children: React.ReactNode;
}

interface IState {
  hasError: Boolean;
}

class ErrorBoundary extends React.Component<IProps, IState> {
  state = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log("ERROR BOUNDARY");
    console.log({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
