import { useEffect, useState } from 'react';
import {MainLayout} from "../components/MainLayout";
import Link from "next/link";

const Posts = ({posts: serverPosts}) => {
    const [posts, setPosts] = useState(serverPosts);
    useEffect(() => {
        async function load() {
            const response = await fetch('http://localhost:3600/posts');
            const data = await response.json();
            setPosts(data);
        }
        if(!serverPosts) {
            load();
        }
    }, []);

    return (
        <MainLayout title='Posts'>
            <h1>Posts page!!!</h1>
            {
                posts ? (
                    <>
                        {
                            posts.map((item, key) => (
                                <div key={key} className="post-card">
                                    <Link href={`/post/[id]`} as={`/post/${item.id}`}><a>{item.title}</a></Link>
                                    <p>{item.body}</p>
                                </div>
                            ))
                        }
                    </>
                ) : (
                    <div>Loading...</div>
                )
            }
        </MainLayout>
    )
}

export default Posts;

Posts.getInitialProps = async ({req}) => {
    if(!req) {
        return {
            posts: null
        }
    }
    const response = await fetch('http://localhost:3600/posts');
    const posts = await response.json();

    return {
        posts
    }
}