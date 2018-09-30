import React, { Component } from 'react';
import styled from 'styled-components';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// import  { clickButton } from '../actions';

import Input from '../components/Input';
import Header from '../components/Header';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 70px;
`;


const TableItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const Content = styled.div`
  width: 100%;
  padding: 0 20px;
`;

const SearchBar = styled.div``;

const BorderBox = styled.div`
  background-color: rgb(255, 255, 255);
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  border-color: rgb(225, 228, 232);
  border-radius: 3px;
  padding: 10px;
  margin-top: 20px;
  width: 100%;
`;

const Table = styled.div``;

const TableHead = styled.div``;

const TableItem = styled.div``;

const TableItemRow = styled.div``;

// repository
// description
// language
// tags

class Search extends Component {
  state = {
    inputValue: ''
  }

  constructor(props) {
    super(props);

  }

  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  }

  render() {
    const {
      match,
      location
    } = this.props;

    const { inputValue } = this.state;


    return (
      <Container>
        <Header match={match} location={location} />

        <Content>
          <SearchBar>
            <Input />
          </SearchBar>

          <BorderBox>
            oi
          </BorderBox>
        </Content>
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
