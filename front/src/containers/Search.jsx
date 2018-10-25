import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';


import  {
  updateUsername,
  updateHistory
} from '../actions';

import Input from '../components/Input';
import ButtonPrimary from '../components/ButtonPrimary';
import LoaderBar from '../components/LoaderBar';
import Header from '../components/Header';

class Search extends Component {
  state = {
    inputValue: '',
    isLoading: false,
    redirect: false
  }

  constructor(props) {
    super(props);

    this.getRepositories = this.getRepositories.bind(this);
  }

  inputChange = event => {
    this.setState({ inputValue: event.target.value });
  }

  componentDidMount () {
    this.context.store.dispatch(updateHistory({ match: this.props.match, location: this.props.location }));
  }
  
  getRepositories() {
    const options = {
      username: this.state.inputValue,
    };
  
    this.setState({ isLoading: true });

    axios.post('/api', options)
      .then(() => {
        this.context.store.dispatch( updateUsername(this.state.inputValue) );

        this.setState({
          isLoading: false,
          redirect: true
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { inputValue, isLoading, redirect } = this.state;

    if (isLoading && !redirect) {
      return (
        <Container>
          <Header />

          <Painel>
            <TableColumn>
              <LoaderBar />
              <LoaderText>Getting the repositories list from Github...</LoaderText>
            </TableColumn>
          </Painel>
        </Container>
      );
    }

    if (redirect) {
      return <Redirect push to="/repositories"/>
    }

    return (
      <Container>
        <Header  />

        <Painel>
          <TableItems>
            <Label>https://github.com/</Label>
            <Input type='text' onChange={this.inputChange} value={inputValue} placeholder="username" />
          </TableItems>

          <TableItems>
            <ButtonPrimary onClick={this.getRepositories}>get repositories</ButtonPrimary>
          </TableItems>
        </Painel>
      </Container>
    );
  }
};

// STYLES

const LoaderText = styled.p`
  margin-top: 20px;
  font-size: 14px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Painel = styled.div`
  width: 400px;
  padding: 10px;
`;

const TableItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const TableColumn = styled(TableItems)`
  flex-direction: column;
`;

const Label = styled.p``;

// REDUX
Search.contextTypes = { store: PropTypes.object };

const mapStateToProps = store => ({
  username: store.repositoriesState.username,
  history: store.repositoriesState.history
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateUsername, updateHistory }, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(Search);
