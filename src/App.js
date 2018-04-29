import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Article extends Component {
  static propTypes = {
    author: PropTypes.string.isRequired
  };

  render() {
    const { title, author, date, children } = this.props;
    return (
      <section style={{ borderBottom: '1px solid #000', marginBottom: 50 }}>
        <h2>{title}</h2>
        {author && (
          <p>
            <em>Escrito por {author}</em>
          </p>
        )}
        <date>{date}</date>
        <article>{children}</article>
      </section>
    );
  }
}

// Article.propTypes = {
//  author: PropTypes.string
// };

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
      </div>
    );
  }
}

export default App;
