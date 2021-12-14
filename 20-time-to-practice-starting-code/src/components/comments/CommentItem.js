
import classes from './CommentItem.module.css';


const CommentItem = (props) => {

  return (
    <li className={classes.item}>
      <p>{props.text}</p>
      <button>Delete</button>
    </li>
  );
};

export default CommentItem;
