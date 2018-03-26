import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

function Hello(props) {
  return <h2>{props.title}</h2>;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Hello title="Hello from props" />
        </header>
        <h3>Vamos a aprender React</h3>
        <p>Hola mundo, estoy usando React</p>
      </div>
    );
  }
}

export default App;
