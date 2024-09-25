/* eslint-disable react/prop-types */

function EducationInfo({ education, index, onInputChange, onToggleEdit, onDelete }) {

    // Handle input changes in fields
    function handleChange(event) {
      const { name, value } = event.target;
      onInputChange(index, name, value);
    }
  
    return (
      <div className="wrapper">
        {education.isEditing ? (
          <>
            <input
              type='text'
              name='schoolName'
              placeholder='School Name'
              value={education.schoolName}
              onChange={handleChange}
            />
            <input
              type='text'
              name='diploma'
              placeholder='Diploma'
              value={education.diploma}
              onChange={handleChange}
            />
            <input
              type='text'
              name='studySubject'
              placeholder='Study Subject'
              value={education.studySubject}
              onChange={handleChange}
            />
            <input
              type='text'
              name='schoolDate'
              placeholder='School Date'
              value={education.schoolDate}
              onChange={handleChange}
            />
            <button onClick={() => onToggleEdit(index)}>Save</button>
          </>
        ) : (
          <>
            <p>{education.schoolName}</p>
            <p>{education.diploma}</p>
            <p>{education.studySubject}</p>
            <p>{education.schoolDate}</p>
            <button onClick={() => onToggleEdit(index)}>Edit</button>
          </>
        )}
        <button onClick={() => onDelete(index)}>Delete</button>
      </div>
    );
  }
  
  export default EducationInfo;
  