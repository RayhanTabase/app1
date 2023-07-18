// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import React from 'react';
import ReactDOM from 'react-dom';

import App from "./app";
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);