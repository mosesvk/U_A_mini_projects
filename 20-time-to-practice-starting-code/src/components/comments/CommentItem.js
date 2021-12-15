import classes from "./CommentItem.module.css";
import useHttp from "../../hooks/use-http";
import { removeComment } from "../../lib/api";

const CommentItem = (props) => {
  const { sendRequest, status, error } = useHttp(removeComment);
  const { removeComment } = props;

  const removeCommentHandler = (event) => {
    event.preventDefault();
    sendRequest({ quoteId: props.id });
  };

  return (
    <li className={classes.item}>
      <p>{props.text}</p>
      <button onClick={props.removeComment}>Delete</button>
    </li>
  );
};

export default CommentItem;
