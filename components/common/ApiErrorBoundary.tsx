"use client";

import React from "react";
import Router from "next/navigation";

import ApiError from "components/common/ApiError";

type ErrorBoundaryProps = React.PropsWithChildren<{}>;

interface ErrorBoundaryState {
  error: Error | null;
}

const errorBoundaryState: ErrorBoundaryState = {
  error: null,
};

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = errorBoundaryState;
  }

  static getDerivedStateFromError(error: Error) {
    console.log(error);
    return { error };
  }

  private resetState = () => {
    this.setState(errorBoundaryState);
  };

  private setError = (error: Error) => {
    console.log(error);

    this.setState({ error });
  };

  private handleError = (event: ErrorEvent) => {
    this.setError(event.error);
    event.preventDefault?.();
  };

  private handleRejectedPromise = (event: PromiseRejectionEvent) => {
    event?.promise?.catch?.(this.setError);
    event.preventDefault?.();
  };

  componentDidMount() {
    window.addEventListener("error", this.handleError);
    window.addEventListener("unhandledrejection", this.handleRejectedPromise);
  }

  componentWillUnmount() {
    window.removeEventListener("error", this.handleError);
    window.removeEventListener("unhandledrejection", this.handleRejectedPromise);
  }

  componentDidCatch(error: Error) {
    console.log(error);
    this.setError(error);
  }

  render() {
    const { error } = this.state;

    if (error) {
      return <ApiError onClickRetry={() => this.setState({ error: null })} />;
    }

    return this.props.children;
  }
}
