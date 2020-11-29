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
        <div>
            {props.title}
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
            // for (var i = 0; i < res.length ; i++) {
            //     list_title.push(res[i].title);
            //     list_content.push(res[i].content);
            // }
        })
    }, []); // 빈배열이면 처음 그려질때만 작동이 되는데, 다른 페이지 갔다온것도 처음 그려진것으로 인식한다, 변수가 있다면 그 변수가 변화할때 마다 작동


    //console.log(list_title);
    return (
        <div className="Home">
            <div id="title">
                <h1 >카이스트 도장깨기</h1>
            </div>
            <div>
                <Link to='/write'>
                    <Button variant="success">글 작성</Button>
                </Link>
                {posts.map(post => <Home title={post.title} />)}
            </div>
        </div>
    );
}

export default HomeContainer