import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { connect } from 'react-redux';
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

const SearchBar = styled.div`
  width: 300px;


`;

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

const SearchInput = styled(Input)`
   width: 100%;
`;

class Repositories extends Component {
  state = {
    inputValue: '',
    openModal: false,
    // username: 'rafaelrinaldi',
    repositories: [],
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

  componentWillMount() {
    const options = {
      params: {
        username: 'rogerluiz', //this.props.username
      },
    };

    axios.get('http://localhost:4000/api', options)
      .then((response) => {
        this.setState({ repositories: response.data.repositories });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  searchByTag() {
    const options = {
      username: 'rogerluiz',
      search: this.state.inputValue,
    };

    axios.post('http://localhost:4000/api/search', options)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
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
      repositories,
    } = this.state;
    
    const HeaderItems = headerNames.map((item, key) => {
      return (
        <TableHeadItem key={key}>{item}</TableHeadItem>
      );
    });

    const BodyItems = repositories.map((item, key) => {
      return (
        <TableRow key={key}>
          <TableItem>{ item.name }</TableItem>
          <TableItem>{ item.description }</TableItem>
          <TableItem>{ item.language }</TableItem>
          <TableItem>{ item.tags }</TableItem>
          <TableItem>
            <ButtonLink data-id={item._id} onClick={this.onToggleModal}>editar</ButtonLink>
          </TableItem>
        </TableRow>
      );
    });

    return (
      <Container>
        <Header match={match} location={location} />

        <Content>
          <SearchBar>
            <SearchInput type='text' onChange={this.inputChange} value={inputValue} placeholder="Search by tag" />
          </SearchBar>

          <Table>
            <TableHead>
              <TableRow>
                {HeaderItems}
              </TableRow>
            </TableHead>

            <tbody>
              { BodyItems }
            </tbody>
          </Table>
        </Content>

        {openModal ? <Modal onCloseModal={this.onToggleModal} tagId={this.state.tagId} /> : ''}
      </Container>
    );
  }
};

// export default Search;

const mapStateToProps = state => ({
  username: state.usernameState.username,
});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ clickButton }, dispatch);
  
export default connect(mapStateToProps)(Repositories);
