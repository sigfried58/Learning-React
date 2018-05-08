import React, { Component, Fragment } from 'react';

//const HelloRender = props => <h1>Hola render!</h1>;

class App extends Component {
  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = { scroll: 0 };
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
    document.addEventListener('scroll', () => {
      this.setState({ scroll: window.scrollY });
      //console.log(window.scrollY);
    });
  }

  render() {
    console.log('render');
    return (
      <Fragment>
        <h1>Ciclo de montaje: ComponentDidMount</h1>
        <p>El scroll es {this.state.scroll}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit netus leo nunc
          odio ante egestas arcu, vehicula posuere fermentum etiam cubilia
          quisque sem eleifend torquent sollicitudin porttitor risus venenatis.
          Montes maecenas consequat sociosqu aenean libero cubilia mollis enim,
          habitant vel semper nullam luctus sollicitudin convallis dis
          venenatis, sociis curae viverra egestas eleifend mus dapibus. Urna
          senectus litora suscipit torquent massa magnis felis conubia, viverra
          cum interdum habitasse metus enim vitae congue sociosqu, primis mauris
          nibh ligula semper fringilla neque. Lacinia eget urna nullam fusce
          tempor euismod tellus lobortis cubilia praesent porttitor per
          inceptos, sagittis faucibus ullamcorper suspendisse conubia volutpat
          metus sociis blandit quam luctus. Aenean facilisis montes pellentesque
          vestibulum rhoncus at felis metus quisque, sem faucibus neque nisl
          curabitur orci eros ut nulla, placerat diam tempus suscipit eu ad
          blandit urna.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit netus leo nunc
          odio ante egestas arcu, vehicula posuere fermentum etiam cubilia
          quisque sem eleifend torquent sollicitudin porttitor risus venenatis.
          Montes maecenas consequat sociosqu aenean libero cubilia mollis enim,
          habitant vel semper nullam luctus sollicitudin convallis dis
          venenatis, sociis curae viverra egestas eleifend mus dapibus. Urna
          senectus litora suscipit torquent massa magnis felis conubia, viverra
          cum interdum habitasse metus enim vitae congue sociosqu, primis mauris
          nibh ligula semper fringilla neque. Lacinia eget urna nullam fusce
          tempor euismod tellus lobortis cubilia praesent porttitor per
          inceptos, sagittis faucibus ullamcorper suspendisse conubia volutpat
          metus sociis blandit quam luctus. Aenean facilisis montes pellentesque
          vestibulum rhoncus at felis metus quisque, sem faucibus neque nisl
          curabitur orci eros ut nulla, placerat diam tempus suscipit eu ad
          blandit urna.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit netus leo nunc
          odio ante egestas arcu, vehicula posuere fermentum etiam cubilia
          quisque sem eleifend torquent sollicitudin porttitor risus venenatis.
          Montes maecenas consequat sociosqu aenean libero cubilia mollis enim,
          habitant vel semper nullam luctus sollicitudin convallis dis
          venenatis, sociis curae viverra egestas eleifend mus dapibus. Urna
          senectus litora suscipit torquent massa magnis felis conubia, viverra
          cum interdum habitasse metus enim vitae congue sociosqu, primis mauris
          nibh ligula semper fringilla neque. Lacinia eget urna nullam fusce
          tempor euismod tellus lobortis cubilia praesent porttitor per
          inceptos, sagittis faucibus ullamcorper suspendisse conubia volutpat
          metus sociis blandit quam luctus. Aenean facilisis montes pellentesque
          vestibulum rhoncus at felis metus quisque, sem faucibus neque nisl
          curabitur orci eros ut nulla, placerat diam tempus suscipit eu ad
          blandit urna.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit netus leo nunc
          odio ante egestas arcu, vehicula posuere fermentum etiam cubilia
          quisque sem eleifend torquent sollicitudin porttitor risus venenatis.
          Montes maecenas consequat sociosqu aenean libero cubilia mollis enim,
          habitant vel semper nullam luctus sollicitudin convallis dis
          venenatis, sociis curae viverra egestas eleifend mus dapibus. Urna
          senectus litora suscipit torquent massa magnis felis conubia, viverra
          cum interdum habitasse metus enim vitae congue sociosqu, primis mauris
          nibh ligula semper fringilla neque. Lacinia eget urna nullam fusce
          tempor euismod tellus lobortis cubilia praesent porttitor per
          inceptos, sagittis faucibus ullamcorper suspendisse conubia volutpat
          metus sociis blandit quam luctus. Aenean facilisis montes pellentesque
          vestibulum rhoncus at felis metus quisque, sem faucibus neque nisl
          curabitur orci eros ut nulla, placerat diam tempus suscipit eu ad
          blandit urna.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit netus leo nunc
          odio ante egestas arcu, vehicula posuere fermentum etiam cubilia
          quisque sem eleifend torquent sollicitudin porttitor risus venenatis.
          Montes maecenas consequat sociosqu aenean libero cubilia mollis enim,
          habitant vel semper nullam luctus sollicitudin convallis dis
          venenatis, sociis curae viverra egestas eleifend mus dapibus. Urna
          senectus litora suscipit torquent massa magnis felis conubia, viverra
          cum interdum habitasse metus enim vitae congue sociosqu, primis mauris
          nibh ligula semper fringilla neque. Lacinia eget urna nullam fusce
          tempor euismod tellus lobortis cubilia praesent porttitor per
          inceptos, sagittis faucibus ullamcorper suspendisse conubia volutpat
          metus sociis blandit quam luctus. Aenean facilisis montes pellentesque
          vestibulum rhoncus at felis metus quisque, sem faucibus neque nisl
          curabitur orci eros ut nulla, placerat diam tempus suscipit eu ad
          blandit urna.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit netus leo nunc
          odio ante egestas arcu, vehicula posuere fermentum etiam cubilia
          quisque sem eleifend torquent sollicitudin porttitor risus venenatis.
          Montes maecenas consequat sociosqu aenean libero cubilia mollis enim,
          habitant vel semper nullam luctus sollicitudin convallis dis
          venenatis, sociis curae viverra egestas eleifend mus dapibus. Urna
          senectus litora suscipit torquent massa magnis felis conubia, viverra
          cum interdum habitasse metus enim vitae congue sociosqu, primis mauris
          nibh ligula semper fringilla neque. Lacinia eget urna nullam fusce
          tempor euismod tellus lobortis cubilia praesent porttitor per
          inceptos, sagittis faucibus ullamcorper suspendisse conubia volutpat
          metus sociis blandit quam luctus. Aenean facilisis montes pellentesque
          vestibulum rhoncus at felis metus quisque, sem faucibus neque nisl
          curabitur orci eros ut nulla, placerat diam tempus suscipit eu ad
          blandit urna.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit netus leo nunc
          odio ante egestas arcu, vehicula posuere fermentum etiam cubilia
          quisque sem eleifend torquent sollicitudin porttitor risus venenatis.
          Montes maecenas consequat sociosqu aenean libero cubilia mollis enim,
          habitant vel semper nullam luctus sollicitudin convallis dis
          venenatis, sociis curae viverra egestas eleifend mus dapibus. Urna
          senectus litora suscipit torquent massa magnis felis conubia, viverra
          cum interdum habitasse metus enim vitae congue sociosqu, primis mauris
          nibh ligula semper fringilla neque. Lacinia eget urna nullam fusce
          tempor euismod tellus lobortis cubilia praesent porttitor per
          inceptos, sagittis faucibus ullamcorper suspendisse conubia volutpat
          metus sociis blandit quam luctus. Aenean facilisis montes pellentesque
          vestibulum rhoncus at felis metus quisque, sem faucibus neque nisl
          curabitur orci eros ut nulla, placerat diam tempus suscipit eu ad
          blandit urna.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit netus leo nunc
          odio ante egestas arcu, vehicula posuere fermentum etiam cubilia
          quisque sem eleifend torquent sollicitudin porttitor risus venenatis.
          Montes maecenas consequat sociosqu aenean libero cubilia mollis enim,
          habitant vel semper nullam luctus sollicitudin convallis dis
          venenatis, sociis curae viverra egestas eleifend mus dapibus. Urna
          senectus litora suscipit torquent massa magnis felis conubia, viverra
          cum interdum habitasse metus enim vitae congue sociosqu, primis mauris
          nibh ligula semper fringilla neque. Lacinia eget urna nullam fusce
          tempor euismod tellus lobortis cubilia praesent porttitor per
          inceptos, sagittis faucibus ullamcorper suspendisse conubia volutpat
          metus sociis blandit quam luctus. Aenean facilisis montes pellentesque
          vestibulum rhoncus at felis metus quisque, sem faucibus neque nisl
          curabitur orci eros ut nulla, placerat diam tempus suscipit eu ad
          blandit urna.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit netus leo nunc
          odio ante egestas arcu, vehicula posuere fermentum etiam cubilia
          quisque sem eleifend torquent sollicitudin porttitor risus venenatis.
          Montes maecenas consequat sociosqu aenean libero cubilia mollis enim,
          habitant vel semper nullam luctus sollicitudin convallis dis
          venenatis, sociis curae viverra egestas eleifend mus dapibus. Urna
          senectus litora suscipit torquent massa magnis felis conubia, viverra
          cum interdum habitasse metus enim vitae congue sociosqu, primis mauris
          nibh ligula semper fringilla neque. Lacinia eget urna nullam fusce
          tempor euismod tellus lobortis cubilia praesent porttitor per
          inceptos, sagittis faucibus ullamcorper suspendisse conubia volutpat
          metus sociis blandit quam luctus. Aenean facilisis montes pellentesque
          vestibulum rhoncus at felis metus quisque, sem faucibus neque nisl
          curabitur orci eros ut nulla, placerat diam tempus suscipit eu ad
          blandit urna.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit netus leo nunc
          odio ante egestas arcu, vehicula posuere fermentum etiam cubilia
          quisque sem eleifend torquent sollicitudin porttitor risus venenatis.
          Montes maecenas consequat sociosqu aenean libero cubilia mollis enim,
          habitant vel semper nullam luctus sollicitudin convallis dis
          venenatis, sociis curae viverra egestas eleifend mus dapibus. Urna
          senectus litora suscipit torquent massa magnis felis conubia, viverra
          cum interdum habitasse metus enim vitae congue sociosqu, primis mauris
          nibh ligula semper fringilla neque. Lacinia eget urna nullam fusce
          tempor euismod tellus lobortis cubilia praesent porttitor per
          inceptos, sagittis faucibus ullamcorper suspendisse conubia volutpat
          metus sociis blandit quam luctus. Aenean facilisis montes pellentesque
          vestibulum rhoncus at felis metus quisque, sem faucibus neque nisl
          curabitur orci eros ut nulla, placerat diam tempus suscipit eu ad
          blandit urna.
        </p>
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
