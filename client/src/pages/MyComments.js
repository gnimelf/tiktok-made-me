import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { REMOVE_COMMENT } from "../utils/mutations";

const MyComments = () => {
    const { loading, data } = useQuery(QUERY_ME);
    const mycomments  = data?.me.comments || [];
    const [removeComment] = useMutation(REMOVE_COMMENT);

    // Remove commment
    const handleDelete = async (event) => {
        const commentId = event.target.name;
        await removeComment({ variables: { commentId } });
        window.location.reload()
    };

    return (
        <main>
            <Row xxl={3} className="justify-content-center g-0">
                {loading ? (
                    <h1>getting your data...</h1>
                ) : (
                    <>
                        {mycomments.map((mycomment) => (
                            <Card
                                key={mycomment._id}
                                className="card comment-card my-2 mx-2"
                            >
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <strong>{mycomment.title}</strong>
                                    </h5>
                                    <p className="card-text">
                                        {mycomment.commentText}
                                    </p>
                                </div>
                                <div className="card-footer d-flex justify-content-around align-items-center">
                                    <a>
                                        <Button
                                            onClick={handleDelete}
                                            name={mycomment._id}
                                            className="add-comment"
                                            variant="primary"
                                        >
                                            Delete comment
                                        </Button>
                                    </a>
                                </div>
                            </Card>
                        ))}
                    </>
                )}
            </Row>
        </main>
    );
};

export default MyComments;
