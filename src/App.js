import React, { Component } from 'react';

class App extends Component {
  /* constructor por defecto
  constructor (...args) {
    super(...args)
  }
  */

  constructor(props) {
    // Este método llama al constructor de Component
    super(props);
    // Inicializamos el state de nuestro componente
    this.state = { mensajeInicial: 'mensaje inicial' };
    // Bindeamos el contexto al método
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({ mensajeInicial: 'mensaje cambiado' });
  };

  render() {
    return (
      <div className="App">
        <h4>Ciclo de montaje: constructor</h4>
        {this.state.mensajeInicial}
        <button onClick={this.handleClick}>Cambiar mensaje</button>
      </div>
    );
  }
}

export default App;
