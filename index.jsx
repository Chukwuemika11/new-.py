// GET REQUEST

import React, { useEffect, useState } from "react";

function GetRequests(){
   const [posts, setPosts] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() =>{
   const fetchPosts = async () =>{
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if(!response.ok){
                throw new Error("Network error try again");
            }
            const data = await response.json();
            setPosts(data);
        }catch(error){
            setError(error, "Error fetching posts");
        }finally{
            setLoading(false);
        }
    }
    fetchPosts();
    },[])

    if(loading) return <div>loading...</div>
    if(error) return <div>error</div>
   
    return(
        <>
        <p>Get output</p>
      <ul>
       {posts.map(post =>(
          <li key={post.id}>
          <h2>{post.title}</h2>
          <h2>{post.body}</h2>
  
          </li>
       ))}
      </ul>
        </>
    )
}

export default GetRequests;