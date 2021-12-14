import { useEffect } from "react";

import CommentItem from "./CommentItem";
import classes from "./CommentsList.module.css";
import useHttp from "../../hooks/use-http";
import { removeComment } from "../../lib/api";

const CommentsList = (props) => {
  const { onRemoveComment } = props;
  const { sendRequest, status, error } = useHttp(removeComment);

  useEffect(() => {
    if (status === "completed" && !error) {
      onRemoveComment();
    }
  }, [status, error, onRemoveComment]);

  const removeCommentHandler = (event) => {
    event.preventDefault();
    sendRequest({ quoteId: props.key });
  };

  return (
    <ul className={classes.comments}>
      {props.comments.map((comment) => (
        <CommentItem
          key={comment.id}
          text={comment.text}
          removeComment={removeCommentHandler}
        />
      ))}
    </ul>
  );
};

export default CommentsList;
