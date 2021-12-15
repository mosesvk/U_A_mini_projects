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

  return (
    <ul className={classes.comments}>
      {props.comments.map((comment) => (
        <CommentItem
          id={comment.id}
          key={comment.id}
          text={comment.text}
          onRemoveComment={onRemoveComment}
        />
      ))}
    </ul>
  );
};

export default CommentsList;
