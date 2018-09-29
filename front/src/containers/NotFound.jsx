import React, { Component } from 'react';
import Header from '../components/Header';

class NotFound extends Component {
  render() {
    return (
      <div>
        <Header />

        <h1>404</h1>
        <p>Nenhum conteúdo encontrado</p>
      </div>
    );
  }
};

export default NotFound;
