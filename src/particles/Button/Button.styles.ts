import styled from 'styled-components'

export const ButtonWrapper = styled.button<{ color: string }>`
    background-color: var(--background-color);
    margin-top: 20px;
    padding: 10px 15px;
    border-radius: 5px;
    border: 2px solid ${props => `var(--${props.color})`};
    color: ${props => `var(--${props.color})`};
    cursor: pointer;
    font-weight: 700;
    font-size: 1rem;
    box-shadow: 0 0 10px ${props => `var(--${props.color})`};
    transition: background 0.15s ease-in-out;

    &:hover {
      background-color: ${props => `var(--transparent-${props.color})`};
    }
    &:active {
      transform: scale(.95);
    }
`