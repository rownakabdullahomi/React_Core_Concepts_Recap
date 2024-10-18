import { useEffect, useState } from "react"

export default function Posts(){
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        const loadPosts = async()=>{
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();
            console.log(data);
        }
        loadPosts();
    }, []);
    return(
        <div>
            <h3>Posts: </h3>
        </div>
    )
}