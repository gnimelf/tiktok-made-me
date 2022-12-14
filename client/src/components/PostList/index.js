import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const PostList = ({ posts }) => {
    if (!posts.length) {
        return <h3>No posts yet</h3>;
    }
    return (
        <>
            {posts.map((post) => (
                <Card
                    key={post._id}
                    className="card my-2 mx-2"
                    style={{ width: "20rem" }}
                >
                    <img
                        src={post.image}
                        className="card-img-top"
                        alt="product"
                    />
                    <div className="card-body">
                        <h5 className="card-title">
                            <strong>{post.title}</strong>
                        </h5>
                        <p className="card-text">{post.description}</p>
                    </div>
                    <div className="card-footer d-flex justify-content-around  align-items-center">
                        <>
                            <Link
                                className="btn add-comment btn-primary"
                                to={`/post/${post._id}`}
                            >
                                View comments
                            </Link>
                            <Button className="buy-item" href={post.url} target="_blank" variant="info">
                                Buy Item
                            </Button>
                        </>
                    </div>
                </Card>
            ))}
        </>
    );
};

export default PostList;
