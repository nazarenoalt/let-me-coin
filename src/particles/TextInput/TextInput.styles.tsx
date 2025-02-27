import styled from "styled-components";

export const TextInputWrapper = styled.input<{ color: string, inputSize: string }>`
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px;
  width: 100%;
  border: 2px solid ${props => `var(--${props.color})`};
  background-color: ${props => `var(--transparent-${props.color})`};
  color: ${props => `var(--${props.color})`};
  outline: none;
  font-size: ${props => `${props.size || 1}rem`};
`