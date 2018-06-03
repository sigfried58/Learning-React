import React from 'react';

const _renderCurrencies = bpi =>
  Object.keys(bpi).map(currency => (
    <div key={currency}>
      1 BTC is {bpi[currency].rate}
      <span> {bpi[currency].code}</span>
    </div>
  ));

const BitCoinPrice = ({ bpi }) => (
  <div>
    <h4>Bitcoin Price Index</h4>
    {_renderCurrencies(bpi)}
  </div>
);

export default BitCoinPrice;

//const BitCoinPrice = ({ bpi }) => {
//  function _renderCurrencies() {
//    const currencies = Object.keys(bpi); // Nos devuelve un array
//    return currencies.map(currency => (
//      <div key={currency}>
//        1 BTC is {bpi[currency].rate}
//        <span>{currency}</span>
//      </div>
//    ));
//  }
//
//  return (
//    <Fragment>
//      <h1>Bitcoin Price Index</h1>
//      {_renderCurrencies()}
//    </Fragment>
//  );
//};

//class BitCoinPrice extends Component {
//  _renderCurrencies() {
//    const { bpi } = this.props;
//    // Recorremos sus keys
//    const currencies = Object.keys(bpi); // Nos devuelve un array
//    return currencies.map(currency => (
//      <div key={currency}>
//        1 BTC is {bpi[currency].rate}
//        <span>{currency}</span>
//      </div>
//    ));
//  }
//
//  render() {
//    return (
//      <Fragment>
//        <h1>Bitcoin Price Index</h1>
//        {this._renderCurrencies()}
//      </Fragment>
//    );
//  }
//}
