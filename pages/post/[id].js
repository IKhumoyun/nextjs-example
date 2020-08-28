import {useState, useEffect} from 'react';
import {useRouter} from "next/router";
import {MainLayout} from "../../components/MainLayout";
import Link from "next/link";

const Post = ({ post: serverPost }) => {
    const [post, setPost] = useState(serverPost);
    const router = useRouter();

    useEffect(() => {
        async function load() {
            const response = await fetch(`http://localhost:3600/posts/${router.query.id}`);
            const data = await response.json();
            setPost(data);
        }
        if(!serverPost) {
            load();
        }
    }, []);

    return (
        <MainLayout title={`Post #${router.query.id}`}>
            {
                post ? (
                    <>
                        <h1>{post.title}</h1>
                        <hr/>
                        <p>{post.body}</p>
                        <Link href={`/posts`}><a>Back to all posts -></a></Link>
                    </>
                ) : (
                    <div>Loading...</div>
                )
            }
        </MainLayout>
    )
}

Post.getInitialProps = async ({ query, req }) => {
    if(!req) {
        return {
            post: null
        }
    }
    const response = await fetch(`http://localhost:3600/posts/${query.id}`);
    const post = await response.json();

    return {
        post
    }
}

// export async function getServerSideProps({ query, req }) {
//     if(!req) {
//         return {
//             post: null
//         }
//     }
//     const response = await fetch(`http://localhost:3600/posts/${query.id}`);
//     const post = await response.json();
//
//     return {
//         props: {
//             post
//         }
//     }
// }

export default Post;