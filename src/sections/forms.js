import React, { Component } from 'react';

export default class Forms extends Component {
  constructor() {
    super();
    this.state = {
      inputName: '',
      inputTwitter: '@',
      inputTerms: true
    };
  }
  handleSubmit = e => {
    e.preventDefault(); //Para evitar que el boton haga submit
    console.log(this.state);
  };

  handleChange = e => {
    console.log('handleChange');
    console.log(e.target.checked);
    this.setState({ inputTerms: e.target.checked });
  };

  render() {
    return (
      <div>
        <h4>Formularios</h4>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="name">Nombre:</label>
            <input
              id="name"
              name="userName"
              placeholder="Introduce el nombre"
              ref={inputElement => (this.inputName = inputElement)}
              onChange={e => this.setState({ inputName: e.target.value })}
              value={this.state.inputName}
            />
          </p>

          <p>
            <label>Twitter:</label>
            <input
              id="twitter"
              name="twitterAccount"
              placeholder="Introduce tu Twitter"
              onChange={e => this.setState({ inputTwitter: e.target.value })}
              value={this.state.inputTwitter}
            />
          </p>

          <p>
            <label>
              <input
                onChange={this.handleChange}
                type="checkbox"
                checked={this.state.inputTerms}
              />
              Accepted terms
            </label>
          </p>
          <button>Enviar</button>
        </form>
      </div>
    );
  }
}
