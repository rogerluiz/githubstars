import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// import  { clickButton } from '../actions';

import Input from '../components/Input';
import Header from '../components/Header';
import Modal from '../components/Modal';
import { throws } from 'assert';

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
    tagId: -1,
    tagKey: 0,
    inputValue: '',
    openModal: false,
    repositories: [],
    headerNames: ['Repository', 'Description', 'Language', 'Tags', ''],
  }

  constructor(props) {
    super(props);

    this.searchByTag = this.searchByTag.bind(this);
    this.updatePage = this.updatePage.bind(this);
  }

  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  }

  onToggleModal = (event) => {
    this.setState({
      openModal: !this.state.openModal
    });
  }

  onOpenModal(id, k) {
    this.setState({
      tagId: id,
      tagKey: k,
      openModal: !this.state.openModal
    });
  }

  componentWillMount() {
    this.updatePage();
  }

  searchByTag(event) {
    if (event.keyCode !== 13) {
      return false;
    }

    const options = {
      username: this.props.username,
      search: this.state.inputValue,
    };

    axios.post('/api/search', options)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updatePage(res) {
    if (res !== undefined) {
      this.setState({
        openModal: !this.state.openModal
      });
    }

    const options = {
      params: {
        username: this.props.username,
      },
    };

    axios.get('/api', options)
      .then((response) => {
        this.setState({ repositories: response.data.repositories });
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
      tagId,
      tagKey,
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
          <TableItem><a href={item.url} target="_blank">{ item.name }</a></TableItem>
          <TableItem>{ item.description }</TableItem>
          <TableItem>{ item.language }</TableItem>
          <TableItem>{ item.tags }</TableItem>
          <TableItem>
            <ButtonLink onClick={() => this.onOpenModal(item._id, key)}>editar</ButtonLink>
          </TableItem>
        </TableRow>
      );
    });

    return (
      <Container>
        <Header match={match} location={location} />

        <Content>
          <SearchBar>
            <SearchInput type='text' onChange={this.inputChange} value={inputValue} onKeyDown={this.searchByTag} placeholder="Search by tag" />
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

        {openModal ? <Modal onCloseModal={this.onToggleModal} tagId={tagId} tagKey={tagKey} onUpdateResult={this.updatePage} /> : ''}
      </Container>
    );
  }
};

const mapStateToProps = state => ({
  username: state.usernameState.username,
});
  
export default connect(mapStateToProps)(Repositories);
