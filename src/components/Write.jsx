import React, { useState } from 'react';
import { Link, forceUpdate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Write.css';

const Write = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
  
    const enterTitle = (e) => {
      setTitle(e.target.value);
    }
  
    const enterContent = (e) => {
      setContent(e.target.value);
    }
    
    const pushData = () => {
        fetch("http://ssal.sparcs.org:42304/makecontent", {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            content: content,
        }),
        })
        .then((response) => response.json())
    
        alert("글 작성 완료");
    }

    

    return (
        <div className="Home">
        <div id="title">
          <h1 >카이스트 도장깨기</h1>
        </div>
        
        <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>글 제목</Form.Label>
            <Form.Control as="textarea" rows={1} onChange={ enterTitle } />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>글 내용</Form.Label>
            <Form.Control as="textarea" rows={20} onChange={ enterContent } />
        </Form.Group>
        <Link to='/home'>
            <Button variant="success" size="lg" block onClick={ pushData }>
                올리기
            </Button>
        </Link>
        <br></br>
        <Link to='/home'>
            <Button variant="success" size="lg" block>
                뒤로 가기
            </Button>
        </Link>
        </Form>

      </div>
    );
}

export default Write