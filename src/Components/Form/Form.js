import React, { useState } from 'react';
import './Form.css';
import FormContainer from './FormContainer'
import Modal from '../Modal';

function Form (props) {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const ageInput = e => {
    setEnteredAge(e.target.value)
  };

  const usernameInput = e => {
    setEnteredUsername(e.target.value)
  };
  const errorHandler = () => {
    setError(null);
  };

  const submitHandler = e => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 ){
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age'
      })
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age'
      })
      return;
    }

      props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge("");
    setEnteredUsername("");

    
  };
  return (
    <div>
      {error && (<Modal 
      title={error.title}
      message={error.message}
      onError={errorHandler}
      />)}
    <FormContainer className={props.className}>
            <div className='form'>
        <form onSubmit={submitHandler}>
          <div className='username-container'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              value={enteredUsername}
              id='username'
              className='username'
              onChange={usernameInput}
            />
          </div>
          <div className='age-container'>
            <label htmlFor='age'>Age</label>
            <input
              type='number'
              value={enteredAge}
              id='age'
              className='age'
              onChange={ageInput}
            />
          </div>
          <button className="form-button" type='submit'>Add New User</button>
        </form>
      </div>
    </FormContainer>
    </div>
  )
}

export default Form
