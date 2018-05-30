import React, { Component, Fragment } from 'react';

class BotonQueLanzaError extends Component {
  state = { throwError: false };

  render() {
    if (this.state.throwError) {
      throw new Error('Error lanzado por el botón');
    }
    return (
      <button onClick={() => this.setState({ throwError: true })}>
        Lanzar error!
      </button>
    );
  }
}

class App extends Component {
  state = { hasError: false, errorMsg: '' };

  componentDidCatch(error, info) {
    console.log('componentDidCatch');
    console.log({ error, info });
    this.setState({ hasError: true, errorMsg: error.toString() });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Fragment>
          <p>Error en el componente: {this.state.errorMsg}</p>
          <button
            onClick={() => {
              this.setState({ hasError: false });
            }}
          >
            Volver a la aplicación
          </button>
        </Fragment>
      );
    }
    return (
      <Fragment>
        <h1>Ciclo de montaje: componentDidCatch</h1>
        <BotonQueLanzaError />
      </Fragment>
    );
  }
}

export default App;
