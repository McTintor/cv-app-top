/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function OtherInfo({ index, currentOtherInfo, onOtherInfoChange }) {
  const [otherInfo, setOtherInfo] = useState(currentOtherInfo);

  function handleAddField(fieldName) {
    setOtherInfo((prevOtherInfo) => ({
      ...prevOtherInfo,
      [fieldName]: [...prevOtherInfo[fieldName], ''],  // Add a new empty string
    }));
  }

  function handleFieldChange(fieldName, indexInArray, newValue) {
    const updatedFieldArray = [...otherInfo[fieldName]];
    updatedFieldArray[indexInArray] = newValue;
    setOtherInfo((prevOtherInfo) => ({
      ...prevOtherInfo,
      [fieldName]: updatedFieldArray,
    }));
    onOtherInfoChange(index, fieldName, updatedFieldArray);  // Pass index to parent component
  }

  function renderFields(fieldName) {
    return otherInfo[fieldName].map((value, indexInArray) => (
      <input
        key={indexInArray}
        type="text"
        value={value}
        onChange={(e) => handleFieldChange(fieldName, indexInArray, e.target.value)}
      />
    ));
  }

  return (
    <div>
      <h3>Skills</h3>
      {renderFields('skills')}
      <button onClick={() => handleAddField('skills')}>Add Skill</button>

      <h3>Languages</h3>
      {renderFields('languages')}
      <button onClick={() => handleAddField('languages')}>Add Language</button>

      <h3>Hobbies</h3>
      {renderFields('hobbies')}
      <button onClick={() => handleAddField('hobbies')}>Add Hobby</button>
    </div>
  );
}
