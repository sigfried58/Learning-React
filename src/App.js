import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = { mensaje: 'mensaje inicial' };
  }

  componentWillMount() {
    console.log('componentWillMount');
    this.setState({ mensaje: 'mensaje modificado' });
  }

  render() {
    console.log('render');
    return (
      <div className="App">
        <h4>Ciclo de montaje: componentWillMount</h4>
        {this.state.mensaje}
      </div>
    );
  }
}

export default App;
