import React from 'react'

import Classes from './Input.module.scss'

const Input = (props) => {
  return (
    <div
    className={`${classes.control} ${
      emailIsValid === false ? classes.invalid : ""
    }`}
  >
    <label htmlFor="email">E-Mail</label>
    <input
      type="email"
      id="email"
      value={emailState.value}
      onChange={emailChangeHandler}
      onBlur={validateEmailHandler}
    />
  </div>
  )
}

export default Input
