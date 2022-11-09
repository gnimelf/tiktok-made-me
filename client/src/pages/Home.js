import React from "react";
import PostList from "../components/PostList";
import Row from 'react-bootstrap/Row';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries'

const Home = () => {
    const { loading, data } =  useQuery(QUERY_POSTS);
    const posts = data?.posts || [];

    return (
        <main>
            <div >
            <Row lg={2} xl={3} className=" justify-content-center g-0">
                {loading ? (<div>loading...</div>) : (
                    <PostList posts={posts}/>
                )}
            </Row>
            </div>
        </main>
    );
};

export default Home;
