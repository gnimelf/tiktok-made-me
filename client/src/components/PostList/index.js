import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const PostList = ({ posts }) => {
    if (!posts.length) {
        return <h3>No posts yet</h3>;
    }
    return (
        <>
            {posts.map((post) => (
                <Card key={post._id} className="m-3">
                    <Card.Header className="text-center">
                        <strong>{post.title}</strong>
                    </Card.Header>
                    <Card.Body className="d-flex justify-content-between align-items-center">
                        <Card.Img
                            className="product-image"
                            variant="top"
                            src={post.image}
                        />
                        <Card.Text className="align-middle">
                            {post.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-around  align-items-center">
                        <Button className="add-comment" variant="info">
                            Add comment
                        </Button>
                        <a href={post.url}>
                            <Button className="buy-item" variant="info">
                                Buy Item
                            </Button>
                        </a>
                    </Card.Footer>
                </Card>
            ))}
        </>
    );
};

export default PostList;
