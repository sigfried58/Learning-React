import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Hello extends Component {
  render() {
    return <h2>{this.props.title}</h2>;
  }
}

class Text extends Component {
  render() {
    const textoSegundoBool = this.props.isActivated ? "On" : "Off";
    const mappedNumbers = this.props.arrayOfNumbers.map(n => n * 2);
    return (
      <div>
        <p>{mappedNumbers.join(", ")}</p>
        <p>{this.props.objectWithInfo.key}</p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Hello title="Hello from props" />
        </header>
        <Text
          arrayOfNumbers={[2, 3, 10]}
          isActivated
          number={2}
          objectWithInfo={{ key: "First Value", key2: "otherValue" }}
          text="Texto en string"
        />
      </div>
    );
  }
}

export default App;
