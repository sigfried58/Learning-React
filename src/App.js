import React, { Component, Fragment } from 'react';

//const HelloRender = props => <h1>Hola render!</h1>;

class App extends Component {
  state = { bpi: {} };
  componentDidMount() {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(res => res.json())
      .then(data => {
        const { bpi } = data;
        this.setState({ bpi });
      });
  }

  _renderCurrencies() {
    const { bpi } = this.state;
    // Recorremos sus keys
    const currencies = Object.keys(bpi); // Nos devuelve un array
    return currencies.map(currency => (
      <div key={currency}>
        1 BTC is {bpi[currency].rate}
        <span>{currency}</span>
      </div>
    ));
  }

  render() {
    return (
      <Fragment>
        <h1>Bitcoin Price Index</h1>
        {this._renderCurrencies()}
      </Fragment>
    );
  }
}

export default App;
