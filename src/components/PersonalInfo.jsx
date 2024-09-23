/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

export default function PersonalInfo({ initialUserInput, onInputChange }) {
  const [userInput, setUserInput] = useState(initialUserInput);
  const [isEditing, setIsEditing] = useState(false);

  // Sync local state with initialUserInput when it changes
  useEffect(() => {
    setUserInput(initialUserInput);
  }, [initialUserInput]);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      // Call the parent's onInputChange for each field
      onInputChange('name', userInput.name);
      onInputChange('surname', userInput.surname);
      onInputChange('phone', userInput.phone);
      onInputChange('email', userInput.email);
    }
  }

  function handleChange(event, field) {
    setUserInput(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  }

  let nameElement = <p>{userInput.name}</p>;
  let surnameElement = <p>{userInput.surname}</p>;
  let phoneElement = <p>{userInput.phone}</p>;
  let emailElement = <p>{userInput.email}</p>;

  if (isEditing) {
    nameElement = (
      <input
        type='text'
        required
        value={userInput.name || ''}
        onChange={(e) => handleChange(e, 'name')}
      />
    );
    surnameElement = (
      <input
        type='text'
        required
        value={userInput.surname || ''}
        onChange={(e) => handleChange(e, 'surname')}
      />
    );
    phoneElement = (
      <input
        type='number'
        required
        value={userInput.phone || ''}
        onChange={(e) => handleChange(e, 'phone')}
      />
    );
    emailElement = (
      <input
        type='email'
        required
        value={userInput.email || ''}
        onChange={(e) => handleChange(e, 'email')}
      />
    );
  }

  return (
    <div id="wrapper">
      {nameElement}
      {surnameElement}
      {phoneElement}
      {emailElement}
      <button onClick={handleEditClick}>{!isEditing ? 'Edit' : 'Save'}</button>
    </div>
  );
}
