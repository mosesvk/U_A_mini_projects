import { useEffect } from "react";

import classes from "./CommentItem.module.css";
import useHttp from "../../hooks/use-http";
import { removeComment } from "../../lib/api";

const CommentItem = (props) => {
  const { sendRequest, status, error } = useHttp(removeComment);
  const { removeComment } = props;

  useEffect(() => {
    if (status === 'completed' && !error){
      removeComment();
    }
  }, [status, error, removeComment])

  const removeCommentHandler = (event) => {
    event.preventDefault();
    console.log(props.id)
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
