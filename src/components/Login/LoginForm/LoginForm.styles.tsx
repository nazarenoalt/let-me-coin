import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .signup-span {
    margin-top: 20px;
    color: var(--very-light-violet);
  }
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .form-label {
    padding-top: 10px;
    padding-bottom: 5px;
    color: var(--very-light-violet);
    font-size: 1.5rem;
  }
`;

export const SubmitButton = styled.input`
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  color: black;

`