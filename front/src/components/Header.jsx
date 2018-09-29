import React, { Component } from 'react';
import styled from 'styled-components';

import { Redirect } from 'react-router-dom';

const Container = styled.header`
  top: 0;
  left: 0;
  padding: 10px 20px;
  position: absolute;
`;

const Title = styled.h1`
  font-size: 20px;
`;

class Header extends Component {
  state = {
    redirect: false
  }

  onClickLink = () => {
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/"/>
    }

    

    return (
      <Container>
        <Title onClick={this.onClickLink}>GithubStars</Title>
      </Container>
    );
  }
};

export default Header;