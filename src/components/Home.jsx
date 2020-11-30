import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './Home.css';


const Home = (props) => {

    console.log("Home used");

    return (
        <div className="com">
            <input type="button" id="btn3" value = {props.title} />
            <p>{props.content}</p>
            <hr/>
        </div>
    )

}


const HomeContainer = () => {
    const [posts, setPosts] = useState([]);
    //const [location, setLocation] = useState('');


    useEffect(() => { 
        fetch("http://ssal.sparcs.org:51237/contentlist", {
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(res => {
            setPosts(res.reverse());
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
                    <Button variant="flat" size="xxl" >글 작성</Button>
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
                    {posts.map(post => <Home title={post.title} content={post.content} />)}
                </div>
                <div id="right">
                    <div id="kaist">
                        <img src="http://newskaistaff.kaist.ac.kr/wp-content/uploads/2019/07/201907_04_01.jpg" width="300" alt="profile"/>
                        <br></br>
                        <input type="button" id="btn4" value = "카이스트"  />
                    </div>
                    <div id="uen" >
                        <img src="https://img.siksinhot.com/place/1453730020565876.jpg?w=440&h=440&c=Y" width="300" height="200" alt="profile" />
                        <br></br>
                        <input type="button" id="btn4" value = "어은동" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeContainer