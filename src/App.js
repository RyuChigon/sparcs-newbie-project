import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

var loginState = 0;

function App() {
  const [id, setId] = useState('');
  const [pw, setPassword] = useState('');

  const enterId = (e) => {
    setId(e.target.value);
  }

  const enterPw = (e) => {
    setPassword(e.target.value);
  }

  const loginEvent = ( {history} ) => {
    fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
        pw: pw,
      }),
    })
    .then(res => res.text())
    .then(text => {
      if (text === "Yes") {
        alert("로그인 성공");
      }
      else {
        alert('로그인 실패"');
      }
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>아이디</Form.Label>
            <Form.Control type="id" placeholder="ID" value={id} onChange={enterId} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control  type="password" placeholder="Password" value={pw} onChange={enterPw}/>
          </Form.Group>
          <Link to='/home'>
            <Button variant="primary" onClick={loginEvent}>
              로그인
            </Button>
          </Link>

        </Form>
        <br></br>
        <Link to="/signup">
          <Button variant="primary" type="submit">
            회원가입
          </Button>
        </Link>
      </header>
    </div>
  
  )

}

export default App;
