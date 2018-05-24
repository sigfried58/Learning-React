import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

const ANIMAL_IMAGES = {
  cat: 'https://goo.gl/PoQQXb',
  dolphin: 'https://goo.gl/BbiKCd',
  panda: 'https://goo.gl/oNbtoq'
};

class AnimalImage extends Component {
  state = { src: ANIMAL_IMAGES[this.props.animal] };

  componentWillReceiveProps(nextProps) {
    if (this.props.animal !== nextProps.animal) {
      this.setState({ src: ANIMAL_IMAGES[nextProps.animal] });
    }
  }

  render() {
    return (
      <div>
        <p>Selected {this.props.animal}</p>
        <img alt={this.props.animal} src={this.state.src} width="250" />
      </div>
    );
  }
}

AnimalImage.propTypes = {
  animal: PropTypes.oneOf(['cat', 'dolphin', 'panda'])
};

AnimalImage.defaultProps = {
  animal: 'panda'
};

class App extends Component {
  state = { animal: 'panda' };
  render() {
    return (
      <Fragment>
        <h1>Ciclo de Actualización, Ejemplo de: ComponentWillReceiveProps</h1>
        <button onClick={() => this.setState({ animal: 'panda' })}>
          Panda
        </button>
        <button onClick={() => this.setState({ animal: 'cat' })}>Cat</button>
        <button onClick={() => this.setState({ animal: 'dolphin' })}>
          Dolphin
        </button>
        <AnimalImage animal={this.state.animal} />
      </Fragment>
    );
  }
}

export default App;
