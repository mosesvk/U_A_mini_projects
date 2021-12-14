import classes from './CommentItem.module.css';
import useHttp from '../../hooks/use-http';
import { removeComment } from '../../lib/api';

const CommentItem = (props) => {

  const { sendRequest, status, error } = useHttp(removeComment);

  const removeCommentHandler = () => {
    
  }

  return (
    <li className={classes.item}>
      <p>{props.text}</p>
      <button onClick={props.remove}>Delete</button>
    </li>
  );
};

export default CommentItem;
