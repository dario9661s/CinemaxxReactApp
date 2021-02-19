import React from "react";
import styled from "styled-components";





const StyledTextH1 = styled.h1.attrs((props) => ({
  className: props.className,
  onClick: props.onClick,
}))`
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${({ size }) =>
    size === "small" ? "14px" : size === "medium" ? "20px" : "24px"};
  color: ${({ color }) => (color ? color : "white")};
  @media (max-width: 375px) {
    font-size: ${({ size }) =>
      size === "big" ? "20px" : size === "medium" ? "16px" : "11px"};
  }
`;

const StyledTextH3 = styled.h3.attrs((props) => ({
  className: props.className,
  onClick: props.onClick,
}))`
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${({ size }) =>
    size === "big" ? "17px" : size === "medium" ? "15.5px" : "13px"};
  color: ${({ color }) => (color ? color : "white")};
  @media (max-width: 375px) {
    font-size: ${({ size }) =>
      size === "big" ? "14px" : size === "medium" ? "13.5px" : "11px"};
  }
`;

const StyledTextP = styled.p.attrs((props) => ({
  className: props.className,
  onClick: props.onClick,
}))`
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineHeight }) => lineHeight};
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${({ size }) =>
    size === "big"
      ? "15.5px"
      : size === "medium"
      ? "14px"
      : size === "small"
      ? "13px"
      : size};
  color: ${({ color }) => color};
  @media (max-width: 375px) {
    font-size: ${({ size }) =>
      size === "big" ? "14px" : size === "medium" ? "12.5px" : "10px"};
  }
`;

const Text = ({
  type,
  size,
  margin,
  padding,
  fontWeight,
  lineHeight,
  color,
  className,
  children,
  onClick
}) => {
  const clicked = () => onClick && onClick()
  return type === "h1" ? (
    <StyledTextH1
      size={size}
      margin={margin}
      padding={padding}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      color={color}
      className={className}
    >
      {children}
    </StyledTextH1>
  ) : type === "h3" ? (
    <StyledTextH3
      size={size}
      margin={margin}
      padding={padding}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      color={color}
      className={className}
    >
      {children}
    </StyledTextH3>
  ) : (
    <StyledTextP
      size={size}
      margin={margin}
      padding={padding}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      color={color}
      className={className}
      onClick={() => clicked()}
    >
      {children}
    </StyledTextP>
  );
};

export default Text;
