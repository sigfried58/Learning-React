import React, { Component } from 'react';

export default class Forms extends Component {
  handleSubmit = e => {
    e.preventDefault(); //Para evitar que el boton haga submit
    // const name = document.getElementById('name').value;
    const name = this.inputName.value;
    const email = document.getElementById('twitter').value;
    console.log({ name, email });
  };

  handleChange(e) {
    console.log('handleChange');
    console.log(e.target.checked);
  }

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
            />
          </p>

          <p>
            <label>Twitter:</label>
            <input
              id="twitter"
              name="twitterAccount"
              placeholder="Introduce tu Twitter"
            />
          </p>

          <p>
            <label>
              <input onChange={this.handleChange} type="checkbox" />
              Accepted terms
            </label>
          </p>
          <button>Enviar</button>
        </form>
      </div>
    );
  }
}
