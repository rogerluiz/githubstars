import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// import  { clickButton } from '../actions';

import Input from '../components/Input';
import Button from '../components/Button';
import ButtonPrimary from '../components/ButtonPrimary';
import LoaderBar from '../components/LoaderBar';
import Header from '../components/Header';

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

const LoaderText = styled.p`
  margin-top: 20px;
  font-size: 14px;
`;

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
    this.setState({
      inputValue: event.target.value
    });
  }

  getRepositories() {
    const options = {
      params: {
        username: this.state.inputValue
      }
    };

    this.setState({
      isLoading: true
    });

    axios.get('http://localhost:3001/api', options)
      .then((response) => {
        console.log(response.data);

        // this.setState({
        //   isLoading: false,
        //   redirect: true
        // });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const {
      match,
      location,
    } = this.props;

    const {
      inputValue,
      isLoading,
      redirect
    } = this.state;

    if (isLoading && !redirect) {
      return (
        <Container>
          <Header match={match} location={location} />

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
        <Header match={match} location={location} />

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

export default Search;

// const mapStateToProps = store => ({
//   newValue: store.clickState.newValue
// });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ clickButton }, dispatch);
  
// export default connect(mapStateToProps, mapDispatchToProps)(Search);
