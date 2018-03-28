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
    const { arrayOfNumbers, multiply, objectWithInfo } = this.props;

    this.props.title = <h3>Otra cosa</h3>;

    const mappedNumbers = arrayOfNumbers.map(multiply);
    return (
      <div>
        {this.props.title}
        <p>{mappedNumbers.join(", ")}</p>
        <p>{objectWithInfo.key}</p>
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
          multiply={number => number * 4}
          number={2}
          objectWithInfo={{ key: "First Value", key2: "otherValue" }}
          text="Texto en string"
          title={<h1>Este es el titulo</h1>}
        />
      </div>
    );
  }
}

export default App;
