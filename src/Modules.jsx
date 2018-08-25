import React, { Component } from "react";

class Buttons extends Component {
  // constructor() {
  //   super();
  // }
  render() {
    return (
      <div>
        <button onClick={this.props.handleClick}>Next State</button>
      </div>
    );
  }
}

class StateDisplay extends Component {
  render() {
    return (
      <div>
        <h2>State: {this.props.currentState}</h2>
        <h2>Next State: {this.props.nextState}</h2>
      </div>
    );
  }
}

class Breadcrumbs extends Component {
  render() {
    return (
      <div>
        <span
          className={this.props.currentState == "draft" ? "breadcrumb" : ""}
        >
          draft
        </span>
        <span> > </span>
        <span
          className={this.props.currentState == "review" ? "breadcrumb" : ""}
        >
          review
        </span>
        <span> > </span>
        <span
          className={this.props.currentState == "manager" ? "breadcrumb" : ""}
        >
          manager
        </span>
        <span> > </span>
        <span
          className={this.props.currentState == "complete" ? "breadcrumb" : ""}
        >
          complete
        </span>
      </div>
    );
  }
}
class ActionDisplay extends Component {
  render() {
    return this.props.actions.map((action, i) => <li key={i}>{action}</li>);
  }
}

class DisplayButtons extends Component {
  render() {
    // return (this.props.actions.map((action, i) => <button onClick={this.props.handleClick}>{action}</button>);
    return this.props.actions.map((action, i) => (
      <button onClick={() => this.props.handleClick({ action })}>
        {action}
      </button>
    ));
  }
}

// export default (SomeInput, SomeDisplay);
export { Buttons, StateDisplay, ActionDisplay, DisplayButtons, Breadcrumbs };
