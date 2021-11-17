import { useState, useRef } from 'react'

const SimpleInput = (props) => {
  // Going to show both useState() and useRef() ways of validating forms

  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('')

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault(); // This stops the browsers default behavior in submitting a form which is sending an HTTP request to a server (which we don't have at the moment)

    // useState() is good to use to validate for every key stroke and is cleaner to code 
    console.log(enteredName)
    setEnteredName('')

    // useRef() would be useful if trying to validate on every submit
    const enteredName = nameInputRef.current.value // useRef(nameInputRef) is an object that has current as one of its properties to access the current.value
    
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} ref={nameInputRef}/>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
