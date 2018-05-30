import React, { Component, Fragment } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.borderColor = '#09f';
  }
  render() {
    return (
      <button style={{ borderColor: this.borderColor, display: 'block' }}>
        {this.props.label}
      </button>
    );
  }
}

class ButtonDanger extends Button {
  constructor(props) {
    super(props);
    this.borderColor = 'red';
  }
}

class ButtonWithLegend extends Button {
  render() {
    return (
      <div>
        {super.render()}
        <small>{this.props.legend}</small>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Composición vs Herencia</h1>
        <Button label="Click aquí" />
        <br />
        <ButtonDanger label="Cuidado!!!" />
        <br />
        <ButtonWithLegend
          label="Botón con explicación"
          legend="Clicka el botón para hacer algo"
        />
      </Fragment>
    );
  }
}

export default App;
