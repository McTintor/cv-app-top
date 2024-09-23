import './App.css';
import { useState } from 'react';
import PersonalInfo from './components/PersonalInfo';

const INITIAL_INPUTS = {
  personalInfo: {
    name: 'John',
    surname: 'Doe',
    phone: 555333,
    email: 'johndoe@hotmail.com'
  },
  workInfo: {
    jobTitle: 'something',
    companyName: 'something',
    workDate: 'something'
  }
};

function App() {
  const [inputs, setInputs] = useState(INITIAL_INPUTS);

  function handleInputChange(targetObject, field, newValue) {
    setInputs(prevUserInput => {
      return {
        ...prevUserInput,
        [targetObject]: {
          ...prevUserInput[targetObject],
          [field]: newValue
        }
      };
    });
  }

  return (
    <>
      <div className='input-div'>
        <PersonalInfo
          onInputChange={(field, newValue) => handleInputChange('personalInfo', field, newValue)}
          initialUserInput={inputs.personalInfo}
        />
      </div>
      <div className='display-div'>
        {/* Add your display logic here */}
      </div>
    </>
  );
}

export default App;
