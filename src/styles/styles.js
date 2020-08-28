import styled from "styled-components";

export const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 13px;
  padding: 10px 10px;
  border: none;
  font-family: Montserrat;
  max-height: 35px;
`;

export const WhiteButton = styled.button`
  background-color: white;
  color: black;
  font-size: 13px;
  padding: 10px 10px;
  border: none;
  font-family: Montserrat;
  font-weight: bold;
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 30px;
`;

export const FlexDiv = styled.div`
  display: flex;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 20px;
`;

export const InputParagraph = styled.p`
  color: black;
  font-size: 14px;
  font-weight: bold;
  font-family: Montserrat;
  margin: 0 0 0 8px;
`;

export const StyledInput = styled.input`
  font-size: 14px;
  padding: 10px 10px;
  margin: 5px;
  border: 1px solid #424242;
  font-family: Montserrat;
  width: 378px;
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  height: 500px;
`;

export const NaverCardName = styled.p`
  font-family: Montserrat;
  font-weight: bold;
  margin: 8px;
`;

export const NaverCardJobRole = styled.p`
  font-family: Montserrat;
  margin: 8px;
`;

export const NaverPhoto = styled.img`
  max-width: 300px;
  max-height: 300px;
`;
