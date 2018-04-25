import React, { Component } from 'react';

export default class Forms extends Component {
  handleClick = e => {
    e.preventDefault(); //Para evitar que el boton haga submit
    // const name = document.getElementById('name').value;
    const name = this.inputName.value;
    const email = document.getElementById('twitter').value;
    console.log({ name, email });
  };
  render() {
    return (
      <div>
        <h4>Formularios</h4>
        <form>
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
          <button onClick={this.handleClick}>Enviar</button>
        </form>
      </div>
    );
  }
}
