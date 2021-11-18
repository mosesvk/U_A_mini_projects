import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouch, setEnteredNameTouch] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== ''
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouch;


  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouch(true);
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault(); // This stops the browsers default behavior in submitting a form which is sending an HTTP request to a server (which we don't have at the moment)

    setEnteredNameTouch(true)

    if (!enteredNameIsValid) { 
      return;
    }// this if statement will Stop the rest of the code from executing if we click on submit and there is nothing typed. To prevent from console.logging a '' blank or setting the enteredName value to a blank. 

    setEnteredName("");
    setEnteredNameTouch(false)
    
  } // formSubmissionHandler()

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
