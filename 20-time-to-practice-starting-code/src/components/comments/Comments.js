import { useState } from 'react';
import { useParams } from 'react-router';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';

const Comments = () => {
  const params = useParams();
  console.log(params)
  const quoteId = params.quoteId
  const [isAddingComment, setIsAddingComment] = useState(false);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler = () => {

  }
  
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={quoteId} onAddedComment={addedCommentHandler} />}
      <p>Comments...</p>
    </section>
  );
};

export default Comments;
