import React, { Component, Fragment } from 'react';

class Button extends Component {
  render() {
    return (
      <button style={{ borderColor: this.props.borderColor, display: 'block' }}>
        {this.props.label}
      </button>
    );
  }
}

Button.defaultProps = {
  borderColor: '#09f'
};

class ButtonDanger extends Component {
  render() {
    return <Button borderColor="red" label={this.props.label} />;
  }
}

class ButtonWithLegend extends Component {
  render() {
    return (
      <div>
        <Button borderColor={this.props.borderColor} label={this.props.label} />
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
