import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Redirect, Link } from 'react-router-dom';

class Header extends Component {
  state = {
    redirect: false
  }

  onClickLink = () => {
    this.setState({ redirect: true });
  }

  render() {
    const { location } = this.context.store.getState().repositoriesState.history;

    if (this.state.redirect && location.pathname !== '/') {
      return <Redirect push to="/"/>
    }

    if (location.pathname === '/') {
      return (
        <Container>
          <Title onClick={this.onClickLink}>GithubStars</Title>
        </Container>
      );
    }

    return (
      <Container>
        <Title onClick={this.onClickLink}>GithubStars</Title>
        <NavLink to="/">home</NavLink>
      </Container>
    );
  }
};

const Container = styled.header`
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 20px;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const Title = styled.h1`
  font-size: 20px;
  cursor: pointer;
`;

const NavLink = styled(Link)`
  margin-left: auto;
`;


Header.contextTypes = { store: PropTypes.object };

export default Header;