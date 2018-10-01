import React, { Component } from 'react';
import styled from 'styled-components';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// import  { clickButton } from '../actions';

import Input from '../components/Input';
import Button from '../components/Button';
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

const ButtonPrimary = styled(Button)`
  color: rgb(255, 255, 255);
  background-color: rgb(40, 167, 69);
  background-image: linear-gradient(-180deg, rgb(52, 208, 88) 0%, rgb(40, 167, 69) 90%);

  &:hover {
    background-color: rgb(38, 159, 66);
    background-image: linear-gradient(-180deg, rgb(47, 203, 83) 0%, rgb(38, 159, 66) 90%);
    background-position: -0.5em center;
    border-color: rgba(27, 31, 35, 0.5);
  }
`;

const LoaderText = styled.p`
  margin-top: 20px;
  font-size: 14px;
`;

class Search extends Component {
  state = {
    inputValue: '',
    isLoading: false
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
    this.setState({
      isLoading: true
    });
  }

  render() {
    const {
      match,
      location
    } = this.props;

    const { inputValue, isLoading } = this.state;

    if (isLoading) {
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
