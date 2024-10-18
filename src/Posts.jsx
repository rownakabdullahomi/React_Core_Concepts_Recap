import { useEffect, useState } from "react"
import Post from "./Post";

export default function Posts(){
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        const loadPosts = async()=>{
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();
            setPosts(data);
        }
        loadPosts();
    }, []);
    return(
        <div>
            <h3>Posts: {posts.length}</h3>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}