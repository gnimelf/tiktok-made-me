import React from "react";
import Post from "../../components/Post";
import Row from 'react-bootstrap/Row';

const Home = () => {

    return (
        <main>
            <div>
            <Row xs={1} md={2} lg={4} className="g-4">
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
            </Row>
            </div>
        </main>
    );
};

export default Home;
