import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './Home.css';

//const list_title = [];
//const list_content = [];



const Home = (props) => {

    console.log("Home used");

    return (
        <div className="com">
            {props.title}
            <hr/>
        </div>
    )

}


const HomeContainer = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => { 
        fetch("http://ssal.sparcs.org:51237/contentlist", {
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(res => {
            setPosts(res);
        })
    }, []); // 빈배열이면 처음 그려질때만 작동이 되는데, 다른 페이지 갔다온것도 처음 그려진것으로 인식한다, 변수가 있다면 그 변수가 변화할때 마다 작동


    //console.log(list_title);
    return (
        <div className="Home">
            <div id="btn1">
                <Link to='/write'>
                    <style type="text/css">
                    {`
                        .btn-flat {
                        background-color: #61dafb;
                        color: black;
                        }

                        .btn-xxl {
                        padding: 0.3rem 0.6rem;
                        font-size: 0.8rem;
                        font-weight: bold;
                        }
                    `}
                    </style>
                    <Button variant="flat" size="xxl">글 작성</Button>
                </Link>
            </div>
            <div id="btn2">
                <Link to='/'>
                    <Button variant="flat" size="xxl">로그아웃</Button>
                </Link>
            </div>
            <div id="title">
                카이스트 도장깨기
            </div>
            <div id="container">
                <div id="left">
                    {posts.map(post => <Home title={post.title} />)}
                </div>
                <div id="right">
                    <div id="post_title">안뇽</div>
                    <div id="post_content">우리히히히히ㅣ히ㅣㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ</div>
                </div>
            </div>
        </div>
    );
}

export default HomeContainer