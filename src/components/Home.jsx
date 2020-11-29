import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './Home.css';

const list_title = [];
const list_content = [];

fetch("http://localhost:8000/contentlist", {
    method: "GET",
    headers: {
        'Content-type': 'application/json'
    },
})
.then(res => res.json())
.then(res => {
    for (var i = 0; i < res.length ; i++) {
        list_title.push(res[i].title);
        list_content.push(res[i].content);
    }

})

const Home = (props) => {

    console.log("Home used");

    return (
        <div>
            {list_title[props.index]}
        </div>
    )

}


const HomeContainer = () => {


    console.log(list_title);
    return (
        <div className="Home">
            <div id="title">
                <h1 >카이스트 도장깨기</h1>
            </div>
            <div>
                <Link to='/write'>
                    <Button variant="success">글 작성</Button>
                </Link>
                <Home index={0} />
                <Home index={1} />
                <Home index={2} />
                <Home index={3} />
                <Home index={4} />
                <Home index={5} />
                <Home index={6} />
                <Home index={7} />
                <Home index={8} />
            </div>
        </div>
    );
}

export default HomeContainer