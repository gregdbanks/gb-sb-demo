import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const ButtonVariations = {
  default: css`
    background-color: ${(props) =>
      props.theme === "light"
        ? "lightGrey"
        : props.theme === "dark"
        ? "#000000"
        : "#ff007f"};
    color: ${(props) =>
      props.theme === "light"
        ? "#000000"
        : props.theme === "dark"
        ? "#ffffff"
        : "#ffffff"};
    border: none;
    &:hover {
      opacity: 0.8;
    }
  `,
  outline: css`
    background-color: transparent;
    color: ${(props) =>
      props.theme === "light"
        ? "#000000"
        : props.theme === "dark"
        ? "#000000"
        : "#000000"};
    border: 2px solid
      ${(props) =>
        props.theme === "light"
          ? "#000000"
          : props.theme === "dark"
          ? "#ffffff"
          : "#ff007f"};
    &:hover {
      background: lightGrey;
    }
  `,
  ghost: css`
    background-color: transparent;
    color: ${(props) =>
      props.theme === "light"
        ? "#000000"
        : props.theme === "dark"
        ? "#000000"
        : "#ffffff"};
    border: 2px solid
      ${(props) =>
        props.theme === "light"
          ? "#000000"
          : props.theme === "dark"
          ? "#ffffff"
          : "#ff007f"};
    &:hover {
      background-color: ${(props) =>
        props.theme === "light"
          ? "#000000"
          : props.theme === "dark"
          ? "#000000"
          : "#ff007f"};
      border-radius: 8px;
      color: ${(props) =>
        props.theme === "light"
          ? "#ffffff"
          : props.theme === "dark"
          ? "#ffffff"
          : "#000000"};
    }
  `,
};

const ButtonSizes = {
  small: css`
    padding: 4px 8px;
    font-size: 12px;
  `,
  medium: css`
    padding: 8px 16px;
    font-size: 16px;
  `,
  large: css`
    padding: 12px 24px;
    font-size: 20px;
  `,
};

const StyledButton = styled.button`
  cursor: pointer;
  border-radius: 4px;
  ${(props) => ButtonSizes[props.size]}
  ${(props) => ButtonVariations[props.variation]}
`;

const FunButton = ({
  children,
  size = "medium",
  variation = "default",
  theme = "light",
  ...props
}) => {
  return (
    <StyledButton size={size} variation={variation} theme={theme} {...props}>
      {children}
    </StyledButton>
  );
};

FunButton.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variation: PropTypes.oneOf(["default", "outline", "ghost"]),
  theme: PropTypes.oneOf(["light", "dark", "colorful"]),
};

FunButton.defaultProps = {
  size: "medium",
  variation: "default",
  theme: "light",
};

export default FunButton;
