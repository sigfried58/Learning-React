import React, { Component } from 'react';
import PropTypes from 'prop-types';

//class Article extends Component {
//  render() {
//    const { title, author, date, children } = this.props;
//    return (
//      <section style={{ borderBottom: '1px solid #000', marginBottom: 50 }}>
//        <h2>{title}</h2>
//        {author && (
//          <p>
//            <em>Escrito por {author}</em>
//          </p>
//        )}
//        <date>{date}</date>
//        <article>{children}</article>
//      </section>
//    );
//  }
//}

function Article(props) {
  return (
    <section style={{ borderBottom: '1px solid #000', marginBottom: 50 }}>
      <h2>{props.title}</h2>
      {props.author && (
        <p>
          <em>Escrito por {props.author}</em>
        </p>
      )}
      <date>{props.date}</date>
      <article>{props.children}</article>
    </section>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  children: PropTypes.any
};

//class Button extends Component {
//  render() {
//    return (
//      <button style={{ borderColor: this.props.borderColor, display: 'block' }}>
//        {this.props.label}
//      </button>
//    );
//  }
//}

const Button = ({ borderColor = 'red', label }) => (
  <button style={{ borderColor, display: 'block' }}>{label}</button>
);

//Button.defaultProps = {
//  borderColor: 'blue'
//};

Button.propTypes = {
  borderColor: PropTypes.string,
  label: PropTypes.string.isRequired
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <h4>Children Props</h4>
        <Article
          date={new Date().toLocaleDateString()}
          title="Artículo sobre la prop children"
        >
          <p>
            El contenido que envolvemos dentro del componente Article será
            enviado al componente como this.props.children
          </p>
          <strong>
            Y mantiene las etiquetas y componentes que hayáis añadido dentro
          </strong>
        </Article>
        <Button label="Compartir publicación" borderColor="red" />
      </div>
    );
  }
}

export default App;
