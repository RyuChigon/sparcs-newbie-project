import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useHistory } from 'react-router-dom';


function App() {
  const [id, setId] = useState('');
  const [pw, setPassword] = useState('');
  const history = useHistory();

  const enterId = (e) => {
    setId(e.target.value);
  }

  const enterPw = (e) => {
    setPassword(e.target.value);
  }

  const loginEvent = () => {
    fetch("http://ssal.sparcs.org:51237/login", {
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
        history.push('/home');
      }
      else {
        alert('로그인 실패');
      }
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="title">카이스트 도장깨기</div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>아이디</Form.Label>
            <Form.Control type="id" placeholder="ID" value={id} onChange={enterId} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control  type="password" placeholder="Password" value={pw} onChange={enterPw}/>
          </Form.Group>
        </Form>
        <style type="text/css">
        {`
          .btn-flat {
            background-color: #61dafb;
            color: black;
          }

          .btn-xxl {
            margin: 5px;
            padding: 0.4rem 0.8rem;
            font-size: 1rem;
            font-weight: bold;
          }
          `}
        </style>
        <Button variant="flat" size="xxl" onClick={loginEvent}>
            로그인
        </Button>
        <Link to="/signup">
          <Button variant="flat" size="xxl" type="submit">
            회원가입
          </Button>
        </Link>
      </header>
    </div>
  
  )

}

export default App;
