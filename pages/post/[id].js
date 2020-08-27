import {useRouter} from "next/router";
import {MainLayout} from "../../components/MainLayout";

const Post = () => {
    const router = useRouter();
    return (
        <MainLayout title={`Post #${router.query.id}`}>
            <h1>Post number {router.query.id}</h1>
        </MainLayout>
    )
}

export default Post;