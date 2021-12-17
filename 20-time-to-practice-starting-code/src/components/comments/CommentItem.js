import { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import classes from "./CommentItem.module.css";
import useHttp from "../../hooks/use-http";
import { removeComment } from "../../lib/api";

const CommentItem = (props) => {
  const { sendRequest, status, error } = useHttp(removeComment);
  const { onRemoveComment } = props;
  const match = useRouteMatch();
  console.log(match.params.quoteId) // -MqXTW2mWShSCu9VHxo1
  console.log(props.id) // differs every item


  useEffect(() => {
    if (status === 'completed' && !error){
      onRemoveComment();
    }
  }, [status, error, onRemoveComment])

  const removeCommentHandler = (event) => {
    event.preventDefault();
    sendRequest({ commentId: props.id, quoteId: match.params.quoteId });
  };

  return (
    <li className={classes.item}>
      <p>{props.text}</p>
      <button onClick={removeCommentHandler}>Delete</button>
    </li>
  );
};

export default CommentItem;
