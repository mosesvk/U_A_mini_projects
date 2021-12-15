import { useEffect } from "react";

import classes from "./CommentItem.module.css";
import useHttp from "../../hooks/use-http";
import { removeComment } from "../../lib/api";

const CommentItem = (props) => {
  const { sendRequest, status, error } = useHttp(removeComment);
  const { onRemoveComment } = props;

  useEffect(() => {
    if (status === 'completed' && !error){
      onRemoveComment();
    }
  }, [status, error, onRemoveComment])

  const removeCommentHandler = (event) => {
    event.preventDefault();
    sendRequest({ quoteId: props.id });
  };

  return (
    <li className={classes.item}>
      <p>{props.text}</p>
      <button onClick={removeCommentHandler}>Delete</button>
    </li>
  );
};

export default CommentItem;
