import styled, { createGlobalStyle, keyframes } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,700&display=swap');

  body,
  html {
    font-family: 'Lato', sans-serif; 
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    margin: 0px;
    overflow-x: hidden;
  }

  button,
  input[type="submit"],
  input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button  {
  -webkit-appearance: none;
  margin: 0; 
}

`;

const fade_in = keyframes`
   from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  animation-name: ${fade_in};
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
`;

export const AnswersWrappe = styled.div`
  font-size: 16px;
  div {
    border: 1px solid #00000068;
    padding: 10px 5px;
    margin: 10px 0;
  }
`;

export const QuestionsWrappe = styled.div`
  font-family: 'Poppins', sans-serif;
  display: grid;
  a {
    padding: 20px 20px;
    border-bottom: 2px solid #00000028;
    border-radius: 5px;
    color: #000000d9;
    text-decoration: none;
    background-color: #f1f1f1;
    margin: 10px 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

export const UpButton = styled.a`
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 10px 10px;
  font-size: 20px;
  border: none;
  text-decoration: none;
  opacity: 0.3;
  border-radius: 5px;
  background-color: #def9ff;
`;
