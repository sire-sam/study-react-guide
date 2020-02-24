import React, { Component, ErrorInfo } from 'react';

export class ErrorBoundary<P extends {}, S extends { error: Error | null, errorInfo: ErrorInfo | null }> extends Component<P, S> {
  constructor(props: P) {
    super(props);
    this.state = { error: null, errorInfo: null } as Readonly<S>;
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br/>
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}
