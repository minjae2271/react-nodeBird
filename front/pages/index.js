import React from "react";
import AppLayout from "../components/AppLayout";
import { useSelector } from "react-redux";

const Home = () => {
    const { isLoggedin } = useSelector((state) => state.user);
    const { mainPosts } = useSelector((state) => state.post);
    return (
        <AppLayout>
            {isLoggedin && <PostForm />}
            {mainPosts.map(post => <PostCard key={post.id} post={post}/>)}
        </AppLayout>
    );
}

export default Home;