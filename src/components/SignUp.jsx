import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useHistory } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pwc, setPwc] = useState('');
  const history = useHistory();

  const enterId = (e) => {
    setId(e.target.value);
  }

  const enterPw = (e) => {
    setPw(e.target.value);
  }

  const enterPwc = (e) => {
    setPwc(e.target.value);
  }

  const pushData = () => {
    if (pw === pwc) {
      fetch("http://ssal.sparcs.org:51237/signup", {
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
        if (text === "used id") {
          alert("중복되는 아이디가 있습니다.(회원가입 실패)");
        }
        else if (text === "no id") {
          alert("아이디를 입력하세요.");
        }
        else {
          alert("회원가입이 완료되었습니다.")
          history.push('/');
        }
      })
    }
    else {
      alert('비밀번호를 다시 한 번 확인하세요.');
    }

  }



  

  return (
    <div className="SignUp">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>아이디</Form.Label>
          <Form.Control type="id" placeholder="ID" value={id} name="content" onChange={enterId} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control  type="password" placeholder="Password" value={pw} onChange={enterPw}/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>비밀번호 확인</Form.Label>
          <Form.Control  type="password" placeholder="Password" value={pwc} onChange={enterPwc}/>
        </Form.Group>
        <style type="text/css">
        {`
          .btn-flat {
            background-color: #61dafb;
            margin: 5px;
            color: black;
          }

          .btn-xxl {
            padding: 0.4rem 0.8rem;
            font-size: 1rem;
            font-weight: bold;
          }
          `}
        </style>
      </Form>
      <Button className="post_send" variant="flat" size="xxl" onClick={pushData}>
          완료
        </Button>
      <Link to='/'>
        <Button className="post_send" variant="flat" size="xxl">
          뒤로
        </Button>
      </Link>
    </div>
  );
}

export default SignUp