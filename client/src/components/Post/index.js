import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Post() {
    return (
        <>
            <Card >
                <Card.Img variant="top" src="holder.js/100px160"  />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                    </Card.Text>
                    <Button variant="info">Add comment</Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default Post;
