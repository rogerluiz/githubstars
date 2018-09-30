import React, { Component } from 'react';
import styled from 'styled-components';

import Header from '../components/Header';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const TableItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const H1 = styled.h1`
  font-size: 100px;
  line-height: 100px;
`;

const Text = styled.p`
  font-size: 14px;
`;

class NotFound extends Component {
  render() {
    const {
      match,
      location
    } = this.props;

    return (
      <Container>
        <Header match={match} location={location} />

        <TableItems>
          <H1>404</H1>
          <Text>Page not found!</Text>
        </TableItems>
      </Container>
    );
  }
};

export default NotFound;
