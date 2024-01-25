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
  --goldenWhite:#FFEBCC;
  --red:#E05B49;
  --gray:#36332E;
  --border:#D6B88D;
  --svg:#37332F;
}

* {
	margin: 0;
	padding: 0;
	border: 0;
}

*,
*:before,
*:after {
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}

:focus,
:active {
	outline: none;
}

a:focus,
a:active {
	outline: none;
}

nav,
header,
footer,
aside {
	display: block;
}

input,
button,
textarea {
	-webkit-appearance: none;
	border-radius: 0;
	border: none;
	-webkit-border-radius: 0;
  font-size:16px;
}

input::-ms-clear {
	display: none;
}

button {
	cursor: pointer;
}

button::-moz-focus-inner {
	padding: 0;
	border: 0;
}

a,
a:visited {
	text-decoration: none;
	color: inherit;
}

a:hover {
	text-decoration: none;
}

ul li {
	list-style: none;
}

img {
	vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {

	font-size: inherit;
	font-weight: 400;
}

::-webkit-button {
	margin: 0;
	color: #000;
	border: none;

}

:-moz-button {
	margin: 0;
	color: #000;
	border: none;
	opacity: 1;
}

::-moz-button {
	color: #000;
	border: none;
	opacity: 1;
}

:-ms-button {
	margin: 0;
	border: none;
	color: #000;
}

::-ms-button {
	margin: 0;
	border: none;
	color: #000;
}

:-webkit-input {
	background: none;
	border: none;
	border-radius: 0;
}

::-webkit-input {
	background: none;
	border: none;
	border-radius: 0;

}

::placeholder {
	-webkit-appearance: none;
	background: none;
	border: none;
	border-radius: 0;
}

input {
	border: none;
	border-radius: 0;
	background: none;
}

input::-ms-clear {
	display: none
}

button {
	cursor: pointer;
	background: none;
	margin: 0;
	padding: 0;	
}

button::-moz-focus-inner {
	padding: 0;
	border: 0;
}

html,body{
  font-family: 'Inter', sans-serif;
  font-family: 'Montserrat', sans-serif;
  font-family: 'Open Sans', sans-serif;
  
  background-color: var(--bg-color);
  color: var(--text);
  font-size:16px;
  min-height:100%;
}
body.overflow{
	overflow: hidden;
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


