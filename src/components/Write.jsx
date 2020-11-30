import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        fetch("http://ssal.sparcs.org:51237/makecontent", {
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
        <div className="Write">
            <div id="btn2">
                <Link to='/'>
                     <style type="text/css">
                        {`
                            .btn-flat1 {
                            background-color: #61dafb;
                            color: black;
                            }
    
                            .btn-xxl1 {
                            padding: 0.3rem 0.6rem;
                            font-size: 0.8rem;
                            font-weight: bold;
                            }
                        `}
                        </style>
                    <Button variant="flat1" size="xxl1">로그아웃</Button>
                </Link>
            </div>
            <div id="title2">
                카이스트 도장깨기
            </div>
            <div className="sub">
                <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>글 제목</Form.Label>
                    <Form.Control as="textarea" rows={1} onChange={ enterTitle } />
                </Form.Group>
                <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>장소</Form.Label>
                    <Form.Control as="select" custom>
                    <option>카이스트</option>
                    <option>어은동</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>글 내용</Form.Label>
                    <Form.Control as="textarea" rows={20} onChange={ enterContent } />
                </Form.Group>
                </Form>
            </div>

            <style type="text/css">
                {`
                .btn-flat {
                    background-color: #61dafb;
                    color: black;
                }

                .btn-xxl {
                    padding: 0.4rem 20rem;
                    font-size: 1rem;
                    font-weight: bold;
                }
                `}
            </style>
            
            <Link to='/home'>
                <div className="btn">
                    <Button variant="flat" size="xxl" onClick={ pushData }>
                        올리기
                    </Button>
                </div>
            </Link>
            <Link to='/home'>
                <div className="btn">
                    <Button variant="flat" size="xxl">
                        홈으로
                    </Button>
                </div>
            </Link>
        </div>
      
    );
}

export default Write