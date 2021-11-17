import { useState, useRef } from 'react'

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault(); // This stops the browsers default behavior in submitting a form which is sending an HTTP request to a server (which we don't have at the moment)
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler}/>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
