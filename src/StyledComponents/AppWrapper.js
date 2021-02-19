import React from "react";
import styled from "styled-components";


const StyledOrnament = styled.div`
  box-sizing: border-box;
  background-color: #152a55;
  margin: 0 auto;
  padding: 20px 0;
  font-family: sans-serif;
  font-style: normal;

  background-repeat: no-repeat;
  background-position: top;
  background-size: 100% 275px;
`;

const AppWrapper = (props) => {
  return (
    <StyledOrnament>
        {props.children}
    </StyledOrnament>
  );
};

export default AppWrapper;
