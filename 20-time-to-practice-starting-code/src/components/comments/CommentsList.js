import CommentItem from "./CommentItem";
import classes from "./CommentsList.module.css";

const CommentsList = (props) => {
  const { onRemoveComment } = props;

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
