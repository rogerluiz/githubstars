import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Input from './Input';
import Button from './Button';
import ButtonDanger from './ButtonDanger';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      username: window.store.getState().usernameState.username
    };
    this.updateTag =  this.updateTag.bind(this);
  }

  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  }

  updateTag() {
    const options = {
      username: this.state.username,
      id: this.props.tagId,
      tags: this.state.inputValue
    };

    axios.post('/api/tag', options)
      .then((response) => {
        this.props.onUpdateResult(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Container>
        <Inner>
          <Column>
            <Label>edit tags for (reponame)</Label>
            <InputText type='text' onChange={this.inputChange} value={this.state.inputValue} />
          </Column>
          
          <Row>
            <Button onClick={this.updateTag}>Save</Button>
            <ButtonDanger onClick={this.props.onCloseModal}>Cancel</ButtonDanger>
          </Row>
        </Inner>

        <Overlay onClick={this.props.onCloseModal}></Overlay>
      </Container>
    );
  }
};

const Container = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const Inner = styled.div`
  width: 448px;
  margin-right: auto;
  margin-left: auto;
  background-color: #fff;
  background-clip: padding-box;
  border-color: #444d56;
  box-shadow: 0 0 18px rgba(0,0,0,0.4);
  position: relative;
  padding: 20px;
  z-index: 3;
`;

const Label = styled.p``;

const Overlay = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0,  0, 0, .6);
  z-index: 1;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Column = styled(Row)`
  flex-direction: column;
  align-items: flex-start;
`;

const InputText = styled(Input)`
  width: 100%;
`;


export default Modal;