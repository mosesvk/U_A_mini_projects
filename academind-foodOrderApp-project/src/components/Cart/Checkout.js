import { useRef, useState } from "react";

import useInput from "../../hooks/use-input";
import classes from "./Checkout.module.scss";

// helper functions
const isEmpty = (value) => value.trim() === "";
const isNotFiveChars = (value) => value.trim().length !== 5;

const Checkout = (props) => {
  const {
    value: { enteredName, enteredStreet, enteredCity },
    isValid: { enteredNameIsValid, enteredStreetIsValid, enteredCityIsValid },
    hasError: { nameInputHasError, streetInputHasError, cityInputHasError },
    valueChangeHandler: {
      nameChangedHandler,
      streetChangeHandler,
      cityChangeHandler,
    },
    inputBlurHandler: { nameBlurHandler, streetBlurHandler, cityBlurHandler },
    reset: { resetNameInput, resetStreetInput, resetCityBlurHandler },
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPostalCode,
    isValid: enteredPostalCodeIsValid,
    hasError: postalCodeHasError,
    valueChangeHandler: postalCodeChangeHandler,
    inputBlurHandler: postalCodeBlurHandler,
    reset: resetPostalCode,
  } = useInput((value) => value.trim().length !== 5);

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredCityIsValid &&
    enteredStreetIsValid &&
    enteredPostalCode
  ) {
    formIsValid = true;
  }

  const confirmHandler = (event) => {
    event.preventDefault();

    if (
      !enteredNameIsValid &&
      !enteredStreetIsValid &&
      !enteredCityIsValid &&
      !enteredPostalCodeIsValid
    ) {
      return;
    }

    resetNameInput();
    resetStreetInput();
    resetCityBlurHandler();
    resetPostalCode();
  }; // confirmHandler()

  const nameControlClasses = `${classes.control} ${
    nameInputHasError ? classes.invalid : ""
  }`;

  const streetControlClasses = `${classes.control} ${
    cityInputHasError ? classes.invalid : ""
  }`;

  const cityControlClasses = `${classes.control} ${
    streetInputHasError ? classes.invalid : ""
  }`;

  const postalCodeControlClasses = `${classes.control} ${
    streetInputHasError ? classes.invalid : ""
  }`

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && <p className={classes['error-text']}>Please enter a valid name</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
          value={enteredStreet}
        />
        {streetInputHasError && <p className={classes['error-text']}>Please enter a valid street</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          onChange={postalCodeChangeHandler}
          onBlur={postalCodeBlurHandler}
          value={enteredPostalCode}
        />
        {postalCodeHasError && <p className={classes['error-text']}>Please enter a valid postal code</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
          value={enteredCity}
        />
        {cityInputHasError && <p className={classes['error-text']}>Please enter a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} disabled={formIsValid}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
