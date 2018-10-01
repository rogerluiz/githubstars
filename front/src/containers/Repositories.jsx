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


const Content = styled.div`
  width: 100%;
  padding: 0 20px;
`;

const SearchBar = styled.div``;

// const BorderBox = styled.div`
//   background-color: rgb(255, 255, 255);
//   border-width: 1px;
//   border-style: solid;
//   border-image: initial;
//   border-color: rgb(225, 228, 232);
//   border-radius: 3px;
//   margin-top: 20px;
//   width: 100%;
// `;

const Table = styled.table`
  width: 100%;
  overflow: auto;
  border-spacing: 0;
  border-collapse: collapse;
  margin-top: 20px;
  margin-bottom: 16px;
`;

const TableItem = styled.td`
  font-size: 14px;
  padding: 6px 13px;
  border: 1px solid #dfe2e5;
  text-align: left;
`;

const TableHeadItem = styled.th`
  font-size: 14px;
  font-weight: 600;
  padding: 6px 13px;
  text-align: left;
  border: 1px solid #dfe2e5;

  &:nth-child(2) {
    width: 100%;
  }
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;

  &:nth-child(odd) {
    background-color: #f8f8f8;
  }

  &:last-of-type {
    border-bottom: none;
  }
`;
// 
const TableHead = styled.thead`
  background-color: #fff;
  border-top: 1px solid #c6cbd1;

  ${TableRow} {
    background-color: #c8cbce;
  }
`;

class Search extends Component {
  state = {
    inputValue: ''
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

    console.log(inputValue);

    return (
      <Container>
        <Header match={match} location={location} />

        <Content>
          <SearchBar>
            <Input />
          </SearchBar>

          <Table>
            <TableHead>
              <TableRow>
                <TableHeadItem>Repository</TableHeadItem>
                <TableHeadItem>Description</TableHeadItem>
                <TableHeadItem>Language</TableHeadItem>
                <TableHeadItem>Tags</TableHeadItem>
                <TableHeadItem></TableHeadItem>
              </TableRow>
            </TableHead>

            <TableRow>
              <TableItem></TableItem>
              <TableItem></TableItem>
              <TableItem></TableItem>
              <TableItem></TableItem>
              <TableItem>editar</TableItem>
            </TableRow>

            <TableRow>
              <TableItem></TableItem>
              <TableItem></TableItem>
              <TableItem></TableItem>
              <TableItem></TableItem>
              <TableItem>editar</TableItem>
            </TableRow>
          </Table>
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
