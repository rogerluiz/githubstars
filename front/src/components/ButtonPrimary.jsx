import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Button';

const Btn = styled(Button)`
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

class ButtonPrimary extends Component {
  render() {
    return (
      <Btn {...this.props}>{ this.props.children }</Btn>
    );
  }
};

export default ButtonPrimary;