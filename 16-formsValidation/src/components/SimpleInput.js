import { useState, useRef } from 'react'

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault(); // This stops the browsers default behavior in submitting a form which is sending an HTTP request to a server (which we don't have at the moment)

    if (event.trim() === '') { //.trim() takes away whitespace at beginning and end
      setEnteredNameIsValid(false)
      return;
    } // this if statement will Stop the rest of the code from executing if we click on submit and there is nothing typed. To prevent from console.logging a '' blank or setting the enteredName value to a blank. 

    setEnteredNameIsValid(true)

    // useState() is good to use to validate for every key stroke and is cleaner to code 
    console.log(enteredName)
    setEnteredName('')

    // useRef() would be useful if trying to validate on every submit
    const enteredRefName = nameInputRef.current.value // useRef(nameInputRef) is an object that has current as one of its properties to access the current.value
    console.log(enteredRefName)
    nameInputRef.current.value = '' // AVOID DOING THIS... DON'T MANIPULATE DOM... this is the downside to refs
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
