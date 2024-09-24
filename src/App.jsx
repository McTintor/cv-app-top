import './App.css'
import { useState } from 'react'
import WorkInfo from './components/WorkInfo'
import PersonalInfo from './components/PersonalInfo'

const INITIAL_INPUTS = {
  personalInfo: {
    name: 'John',
    surname: 'Doe',
    phone: 555333,
    email: 'johndoe@hotmail.com'
  },
  workInfo: [
    {
      jobTitle: 'something',
      companyName: 'something',
      workDate: 'something',
      jobDescription: 'something',
      isEditing: false,
    }
  ]
};

function App() {
  const [inputs, setInputs] = useState(INITIAL_INPUTS);

  // Handle changes in PersonalInfo
  function handlePersonalInfoChange(targetObject, field, newValue) {
    setInputs(prevUserInput => ({
      ...prevUserInput,
      [targetObject]: {
        ...prevUserInput[targetObject],
        [field]: newValue
      }
    }));
  }

  // Add new workInfo object in edit mode
  function handleAddWorkInfo() {
    setInputs(prevState => ({
      ...prevState,
      workInfo: [
        ...prevState.workInfo,
        {
          jobTitle: '',
          companyName: '',
          workDate: '',
          jobDescription: '',
          isEditing: true, // Automatically set to edit mode
        }
      ]
    }));
  }

  // Update specific workInfo object
  function handleWorkInfoChange(index, field, newValue) {
    const updatedWorkInfo = inputs.workInfo.map((work, i) => 
      i === index ? { ...work, [field]: newValue } : work
    );
    setInputs({ ...inputs, workInfo: updatedWorkInfo });
  }

  // Save or toggle edit mode
  function toggleEdit(index) {
    const updatedWorkInfo = inputs.workInfo.map((work, i) =>
      i === index ? { ...work, isEditing: !work.isEditing } : work
    );
    setInputs({ ...inputs, workInfo: updatedWorkInfo });
  }

  // Delete a specific workInfo object
  function handleDeleteWorkInfo(index) {
    const updatedWorkInfo = inputs.workInfo.filter((_, i) => i !== index);
    setInputs({ ...inputs, workInfo: updatedWorkInfo });
  }

  return (
    <>
      <div className='input-div'>
      <PersonalInfo
          onInputChange={(field, newValue) => handlePersonalInfoChange('personalInfo', field, newValue)}
          currentUserInput={inputs.personalInfo}
        />
      </div>

      <div className='input-div'>
        <h2>Work Info</h2>
        {inputs.workInfo.map((work, index) => (
          <WorkInfo 
            key={index} 
            work={work}
            index={index}
            onInputChange={handleWorkInfoChange}
            onToggleEdit={toggleEdit}
            onDelete={handleDeleteWorkInfo}
          />
        ))}
        <button onClick={handleAddWorkInfo}>Add Work Info</button>
      </div>
    </>
  );
}

export default App;
