import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { Row, Card, Form, Button } from "react-bootstrap";
import { QUERY_SINGLE_POST } from "../utils/queries";
import { ADD_COMMENT } from "../utils/mutations";
import { useState } from "react";
import Auth from "../utils/auth";

const SinglePost = () => {
    // Handle form input state
    const [formState, setFormState] = useState({ title: "", commentText: "" });

    const [addComment] = useMutation(ADD_COMMENT);

    // Get url params
    const { postId } = useParams();

    // handle input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
    };

    // Handle Submit
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try{
            const {data} = await addComment({
            variables: {
                postId: postId,
                title: formState.title,
                commentText: formState.commentText,
            },
        });
        } catch (err) {
            console.error(err);
        }
 
        //clear form
        setFormState({
            userName: "",
            password: "",
        });

        window.location.reload();
    };

    const { loading, data } = useQuery(QUERY_SINGLE_POST, {
        variables: { postId: postId },
    });
    const singlePost = data?.post || [];
    console.log();

    if (loading) {
        return (
            <main>
                <div>loading...</div>
            </main>
        );
    }
    return (
        <main>
            <Row className="gx-0" style={{ justifyContent: "center" }}>
                <Card>
                    <h5
                        className="card-header"
                        style={{ backgroundColor: "#8beeec" }}
                    >
                        <img
                            alt="product"
                            src={singlePost.image}
                            className="rounded"
                            style={{ width: "20rem" }}
                        />{" "}
                        {singlePost.title}
                    </h5>
                    <p className="card-body">{singlePost.description}</p>
                </Card>
                {Auth.loggedIn() ? (
                    <>
                        <Form className="my-5" onSubmit={handleFormSubmit}>
                            <h2 style={{ textAlign: "center" }}>
                                Add a Comment
                            </h2>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicUsername"
                            >
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    onChange={handleChange}
                                    name="title"
                                    type="text"
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="formBasicComment"
                            >
                                <Form.Label>Comment</Form.Label>
                                <Form.Control
                                    onChange={handleChange}
                                    name="commentText"
                                    type="text"
                                />
                            </Form.Group>
                            <Button className="login-btn" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </>
                ) : (
                    <></>
                )}
                {singlePost.comments.length > 0 ? (
                    <>
                        {singlePost.comments.map((comment) => (
                            <Card
                                style={{ maxWidth: "800px" }}
                                key={comment._id}
                                className="card comment-card my-2 mx-2"
                            >
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <strong>{comment.title}</strong>
                                    </h5>
                                    <p className="card-body">
                                        {comment.commentText}
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <p>
                                        post by:{" "}
                                        <strong>{comment.userName}</strong>
                                    </p>
                                </div>
                            </Card>
                        ))}
                    </>
                ) : (
                    <div>
                        <h4 className="py-4" style={{ textAlign: "center" }}>
                            No comments at this time
                        </h4>
                    </div>
                )}
            </Row>
        </main>
    );
};

export default SinglePost;
