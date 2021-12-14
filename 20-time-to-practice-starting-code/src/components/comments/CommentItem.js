import { useEffect } from 'react';

import classes from './CommentItem.module.css';
import useHttp from '../../hooks/use-http';
import { removeComment } from '../../lib/api';

const CommentItem = (props) => {
  const {remove} = props
  const { sendRequest, status, error } = useHttp(removeComment);

  useEffect(() => {
    if (status === 'completed' && !error) {
      remove();
    }
  }, [status, error, remove])

  const removeCommentHandler = (event) => {
    event.preventDefault();
    sendRequest({quoteId: props.quoteId});
  }

  return (
    <li className={classes.item}>
      <p>{props.text}</p>
      <button onClick={removeCommentHandler}>Delete</button>
    </li>
  );
};

export default CommentItem;
