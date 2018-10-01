import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Button';

const Btn = styled(Button)`
  color: rgb(203, 36, 49);
  background-color: rgb(250, 251, 252);
  background-image: linear-gradient(-180deg, rgb(250, 251, 252) 0%, rgb(239, 243, 246) 90%);

  &:hover {
    color: rgb(255, 255, 255);
    background-color: rgb(203, 36, 49);
    background-image: linear-gradient(-180deg, rgb(222, 68, 80) 0%, rgb(203, 36, 49) 90%);
    border-color: rgba(27, 31, 35, 0.5);
  }
`;

class ButtonDanger extends Component {
  render() {
    return (
      <Btn {...this.props}>{ this.props.children }</Btn>
    );
  }
};

export default ButtonDanger;