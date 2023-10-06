import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App/App';
import styled, { createGlobalStyle } from'styled-components';
import { BrowserRouter } from 'react-router-dom';


const GlobalStyle = createGlobalStyle`

:root{
  --black:#12110F;
  --bg-color:#211E1C;
  --text:#BEAE97;
  --red:#E05B49;
  --gray:#36332E;
  --border:#D6B88D;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
  ul,li{
    list-style: none;
  }
  a{
    text-decoration:none;
    color: inherit;
  }
}
body{
  font-family: 'Inter', sans-serif;
  font-family: 'Montserrat', sans-serif;
  font-family: 'Open Sans', sans-serif;
  
  background-color: var(--bg-color);
  color: var(--text);
  font-size:16px;
  min-height:100%;
}

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance:none;
}
`


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle/>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


