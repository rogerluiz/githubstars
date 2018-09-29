import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';


const move = keyframes`
  0% {
  	background-position: 0 0;
  }
  100% {
  	background-position: 50px 50px;
  }
`;

const Container = styled.div`
  height: 10px;
  width: 200px;
  position: relative;
  background-color: rgba(0, 0, 0, .1);
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(255, 255, 255, .03),inset 0 1px 0 rgba(0, 0, 0, .1);
`;

const Span = styled.span`
  display: block;
	height: 100%;
  width: 100%;
  border-radius: 3px;
	border: 1px solid #8a8a89;
	border-bottom-color: #0e0e0e;
	background-color: #d3d3d3;
	background-image: linear-gradient(
		-45deg, #afaeae 25%, transparent 25%, transparent 50%,
		#afaeae 50%, #afaeae 75%, transparent 75%, transparent
	);
	background-size: 50px 50px;
	animation: ${move} 2s linear infinite;
	overflow: hidden;
	box-shadow: inset 0 10px 0 rgba(255,255,255,.2);
`;

class LoaderBar extends Component {
  render() {
    return (
      <Container>
        <Span />
      </Container>
    );
  }
};

  
export default LoaderBar;