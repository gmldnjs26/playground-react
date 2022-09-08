import { useEffect, useState } from "react";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import { fetchComments, createComment } from "../../api";
import useHttp from "../../hooks/use-http";
import { useParams } from "react-router-dom";
import CommentsList from "./CommentsList";
import LoadingSpinner from "../../components/UI/LoadingSpinner";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const { sendRequest, data, status } = useHttp(fetchComments);
  const { sendRequest: createCommentRequest, status: createCommentSts } =
    useHttp(createComment);
  const params = useParams();

  useEffect(() => {
    sendRequest(params.quoteId);
  }, [sendRequest, isAddingComment]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const onAddCommentHandler = (contents) => {
    console.log(contents);
    createCommentRequest({ quoteId: params.quoteId, contents });
    setIsAddingComment(false);
  };

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm onAddComment={onAddCommentHandler} />}
      {status === "completed" ? (
        <CommentsList comments={data} />
      ) : (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
    </section>
  );
};

export default Comments;
