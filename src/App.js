import React, { Component, Fragment } from 'react';

class ComponenteADesmontar extends Component {
  state = { windowWidth: 0 };

  _updateStateWithWindowWidth = () => {
    this.setState({ windowWidth: document.body.clientWidth });
  };

  componentDidMount() {
    this._updateStateWithWindowWidth();
    window.addEventListener('resize', this._updateStateWithWindowWidth);
  }

  componentWillUnmount() {
    console.log('ComponentWillUnmount');
    window.removeEventListener('resize', this._updateStateWithWindowWidth);
  }

  render() {
    console.log('render 🦄');
    return (
      <div>
        <p>Ancho de la ventana: {this.state.windowWidth}</p>
      </div>
    );
  }
}

class App extends Component {
  state = { mostrarComponente: true };
  render() {
    if (this.state.mostrarComponente) {
      return (
        <Fragment>
          <h1>Ciclo de desmontaje: componentWillUnmount</h1>
          <ComponenteADesmontar />
          <button onClick={() => this.setState({ mostrarComponente: false })}>
            Desmontar componente
          </button>
        </Fragment>
      );
    }
    return <p>Componente desmontado</p>;
  }
}

export default App;
