import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const PostList = ({ posts }) => {
  if (!posts.length) {
    return <h3>No posts yet</h3>;
  }
  return (
    <>
      {posts.map((post) => (
        <Card key={post._id} className="card my-2 mx-2" style={{width: "20rem"}}>
          <img src={post.image} className="card-img-top" alt="product"/>
          <div className="card-body">
          <h5 className="card-title"><strong>{post.title}</strong></h5>
            <p className="card-text">
              {post.description}
            </p>
          </div>
          <div className="card-footer d-flex justify-content-around  align-items-center">
            <Button className="add-comment" variant="primary">
              Add comment
            </Button>
            <a href={post.url}>
              <Button className="buy-item" variant="info">
                Buy Item
              </Button>
            </a>
          </div>
        </Card>
      ))}
    </>
  );
};

export default PostList;
