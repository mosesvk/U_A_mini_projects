import CommentItem from './CommentItem';
import classes from './CommentsList.module.css';

const CommentsList = (props) => {
  const remove = props.onRemoveComment;
  return (
    <ul className={classes.comments}>
      {props.comments.map((comment) => (
        <CommentItem key={comment.id} text={comment.text} remove={remove} />
      ))}
    </ul>
  );
};

export default CommentsList;
