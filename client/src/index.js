import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./providers/AuthProvider";
import { initMiddleware, } from 'devise-axios';

initMiddleware();

// we want our whole application to have access to our Authprovider 
ReactDOM.render(
  <AuthProvider>
    <Router>
      <App />
    </Router>
  </AuthProvider>,
  document.getElementById("root")
);
