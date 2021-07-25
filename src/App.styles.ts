import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./images/todo.jpg";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .form input,
  .form button {
    display: inline-block;
    color: #000;
    border: none;
    height: 50px;
  }
  .form input:focus,
  .form button:focus {
    border-color: goldenrod;
  }

  .form input {
    width: 300px;
  }
  .form button {
    background-color: tomato;
    color: white;
    border-radius: 5%;
  }

  h1 {
    font-family: Fascinate Inline;
    background-color: lightgoldenrodyellow;
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }

  ul {
    color: tomato;
    list-style: none;
  }
  ul li {
    font-size: 2rem;
  }

  ul li:hover {
    text-decoration: underline;
  }
  .errorMsg {
    color: red;
    font-size: 1.5rem;
  }
`;
