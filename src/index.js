import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import SignUp from './components/SignUp'
import Home from './components/Home'
import Write from './components/Write'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path='/write'>
        <Write />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
