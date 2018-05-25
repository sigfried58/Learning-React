import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

const ANIMAL_IMAGES = {
  panda: 'https://goo.gl/oNbtoq',
  cat: 'https://goo.gl/PoQQXb',
  dolphin: 'https://goo.gl/BbiKCd'
};

const ANIMALS = Object.keys(ANIMAL_IMAGES);

class AnimalImage extends Component {
  state = { src: ANIMAL_IMAGES[this.props.animal] };

  componentWillReceiveProps(nextProps) {
    console.log('1.-componentWillReceiveProps');
    if (this.props.animal !== nextProps.animal) {
      this.setState({ src: ANIMAL_IMAGES[nextProps.animal] });
    }
  }

  shouldComponentUpdate(nextProps) {
    console.log('2.-shouldComponentUpdate');
    console.log('anterior:', this.props.animal);
    console.log('actual:', nextProps.animal);
    return this.props.animal !== nextProps.animal;
  }

  render() {
    console.log('render 🦄');
    return (
      <div>
        <p>Selected {this.props.animal}</p>
        <img alt={this.props.animal} src={this.state.src} width="250" />
      </div>
    );
  }
}

AnimalImage.propTypes = {
  animal: PropTypes.oneOf(ANIMALS)
};

class App extends Component {
  state = { animal: 'panda' };

  _renderAnimalButton = animal => {
    return (
      <button
        //disabled={animal === this.state.animal}
        key={animal}
        onClick={() => this.setState({ animal })}
      >
        {animal}
      </button>
    );
  };

  render() {
    return (
      <Fragment>
        <h1>Ciclo de Actualización, Ejemplo de: ShouldComponentUpdate</h1>
        {ANIMALS.map(this._renderAnimalButton)}
        <AnimalImage animal={this.state.animal} />
      </Fragment>
    );
  }
}

export default App;
