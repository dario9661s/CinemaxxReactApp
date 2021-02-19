import React from "react";
import styled from "styled-components";



const StyledContainer = styled.div.attrs((props) => ({
  className: props.className,
  onClick: props.onClick
}))`
  height: ${({ height }) => height};
  max-height: ${({ maxHeight }) => maxHeight};
  min-height: ${({ minHeight }) => minHeight};
  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};
  min-width: ${({ minWidth }) => minWidth};
  padding: ${({ padding }) => padding};
  box-sizing: ${({ boxSizing }) => boxSizing};
  border: ${({ border }) => border};
  cursor: ${({ cursor }) => cursor};
  border-radius: ${({ borderRadius }) => borderRadius};
  margin: ${({ margin }) => margin};
  display: ${({ display }) => display};
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-wrap: ${({flexWrap}) => flexWrap};
  align-self: ${({ alignSelf }) => alignSelf};
  transition: ${({ transition }) => transition};
  transform: ${({ transform }) => transform};
  opacity: ${({ opacity }) => opacity};
  overflow: ${({ overflow }) => overflow};
  text-align: ${({ textAlign }) => textAlign};
  background-color: ${({ backgroundColor }) => backgroundColor};
  background-image: ${({ backgroundImage }) => backgroundImage};
  position: ${({ position }) => position};
  z-index: ${({ zIndex }) => zIndex};
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
`;

const Container = (props) => {
  return <StyledContainer {...props}>{props.children}</StyledContainer>;
};

export default Container;