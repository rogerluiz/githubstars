import React, { Component } from 'react';
import styled from 'styled-components';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// import  { clickButton } from '../actions';

import Input from '../components/Input';
import Header from '../components/Header';
import Modal from '../components/Modal';

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

const ButtonLink = styled.a`
  color: rgb(3, 102, 214);
  margin-bottom: 4px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

class Search extends Component {
  state = {
    inputValue: '',
    openModal: false,
    headerNames: ['Repository', 'Description', 'Language', 'Tags', ''],
  }

  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  }

  onToggleModal = () => {
    this.setState({
      openModal: !this.state.openModal
    });
  }

  render() {
    const {
      match,
      location
    } = this.props;

    const {
      inputValue,
      openModal,
      headerNames,
    } = this.state;
    
    const headerItems = headerNames.map((item, key) => {
      return (
        <TableHeadItem key={key}>{item}</TableHeadItem>
      );
    });

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
                {headerItems}
              </TableRow>
            </TableHead>

            <tbody>
              <TableRow>
                <TableItem></TableItem>
                <TableItem></TableItem>
                <TableItem></TableItem>
                <TableItem></TableItem>
                <TableItem>
                  <ButtonLink onClick={this.onToggleModal}>editar</ButtonLink>
                </TableItem>
              </TableRow>
            </tbody>
          </Table>
        </Content>

        {openModal ? <Modal onCloseModal={this.onToggleModal} /> : ''}
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
