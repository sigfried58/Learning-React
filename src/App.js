import React, { Component, Fragment } from 'react';

const HelloRender = props => <h1>Hola render!</h1>;

class App extends Component {
  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = { mensaje: 'mensaje inicial' };
  }

  componentWillMount() {
    console.log('componentWillMount');
    this.setState({ mensaje: 'mensaje modificado' });
  }

  render() {
    console.log('render');
    return (
      <Fragment>
        <h1>Primer elemento</h1>
        <HelloRender />
        <HelloRender />
        <h3>Cuarto elemento</h3>
      </Fragment>
    );

    /* return [
      <h1 key="A">Primer elemento</h1>,
      <HelloRender key="B" />,
      <HelloRender key="C" />,
      <h3 key="D">Cuarto elemento</h3>
    ]; */
    /*return (
      <div>
        <h1>Primer elemento</h1>
        <HelloRender />
        <HelloRender />
        <h3>Cuarto elemento</h3>
      </div>
    );*/
  }
}

export default App;
