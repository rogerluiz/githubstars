import React, { Component } from 'react';
import styled from 'styled-components';

const InputText = styled.input`
  min-height: 34px;
  padding: 6px 8px;
  font-size: 16px;
  line-height: 20px;
  color: #24292e;
  vertical-align: middle;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: right 8px center;
  border: 1px solid #d1d5da;
  border-radius: 3px;
  outline: none;
  box-shadow: inset 0 1px 2px rgba(27,31,35,0.075);
`;

class Input extends Component {
  render() {
    return (
      <InputText {...this.props} />
    );
  }
};

export default Input;