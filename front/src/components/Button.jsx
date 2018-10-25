

import React, { Component } from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  position: relative;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-size: 110% 110%;
  -webkit-appearance: none;
  padding: 6px 12px;
  background-repeat: repeat-x;
  background-position: -1px -1px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(27, 31, 35, 0.2);
  border-image: initial;
  border-radius: 0.25em;
  color: rgb(36, 41, 46);
  background-color: rgb(239, 243, s246);
  background-image: linear-gradient(-180deg, rgb(250, 251, 252) 0%, rgb(239, 243, 246) 90%);

  &:hover {
    background-color: rgb(230, 235, 241);
    background-image: linear-gradient(-180deg, rgb(240, 243, 246) 0%, rgb(230, 235, 241) 90%);
    background-position: -0.5em center;
    border-color: rgba(27, 31, 35, 0.35);
  }
`;

class Button extends Component {
  render() {
    return (
      <Btn {...this.props}>{ this.props.children }</Btn>
    );
  }
};

export default Button;