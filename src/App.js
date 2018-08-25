import React, { Component } from "react";
import { DisplayButtons, Breadcrumbs } from "./Modules.jsx";
import { employmentSteps } from "./states.jsx";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentState: "draft"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // e.preventDefault();
    this.setState({
      currentState: employmentSteps.transition(
        this.state.currentState,
        `${e.action}`
      ).value
    });
  }

  handler;

  render() {
    const currentState = this.state.currentState;
    const stateActions = employmentSteps.states[currentState].events;

    console.log(employmentSteps.states);
    return (
      <div>
        <div className="wrapper">
          <div>
            <Breadcrumbs currentState={currentState} />
            <h2>State: {currentState}</h2>
          </div>
          <DisplayButtons
            handleClick={this.handleClick}
            actions={stateActions}
            currentState={currentState}
          />
        </div>
      </div>
    );
  }
}
export default App;
