import React, { useEffect } from 'react';
import { useState } from 'react';
import ShowPost from './ShowPost';


function Posts(){
     const [posts,setPosts]= useState([]);
     useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
       .then(data => setPosts(data));
     },[])


    return (
        <div>
            <h1>Post:{posts.length}</h1>
            {
            posts.map( post => (<ShowPost post={post}></ShowPost>) )
}
        </div>
    );
};

export default Posts;