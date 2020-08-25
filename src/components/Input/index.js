import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

const InputBlock = styled.div`
  width: 100%;
  height: 3.875rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Label = styled.label`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #212121;
`;

const InputField = styled.input`
  width: 100%;
  height: 2.5rem;
  border: 1px solid;
  padding: 8px;
`;

function Input(props) {
  return (
    <>
      <InputBlock>
        <Label label="label"></Label>
        <InputField type="text" placeholder="placeholder" />
      </InputBlock>
    </>
  );
}

export default Input;
