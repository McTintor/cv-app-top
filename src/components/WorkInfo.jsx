/* eslint-disable react/prop-types */

function WorkInfo({ work, index, onInputChange, onToggleEdit, onDelete }) {
  
    // Handle input changes in fields
    function handleChange(event) {
      const { name, value } = event.target;
      onInputChange(index, name, value);
    }
  
    return (
      <div id="work-info-wrapper">
        {work.isEditing ? (
          <>
            <input
              type='text'
              name='jobTitle'
              placeholder='Job Title'
              value={work.jobTitle}
              onChange={handleChange}
            />
            <input
              type='text'
              name='companyName'
              placeholder='Company Name'
              value={work.companyName}
              onChange={handleChange}
            />
            <input
              type='text'
              name='workDate'
              placeholder='Work Date'
              value={work.workDate}
              onChange={handleChange}
            />
            <input
              type='text'
              name='jobDescription'
              placeholder='Job Description'
              value={work.jobDescription}
              onChange={handleChange}
            />
            <button onClick={() => onToggleEdit(index)}>Save</button>
          </>
        ) : (
          <>
            <p>{work.jobTitle}</p>
            <p>{work.companyName}</p>
            <p>{work.workDate}</p>
            <p>{work.jobDescription}</p>
            <button onClick={() => onToggleEdit(index)}>Edit</button>
          </>
        )}
        <button onClick={() => onDelete(index)}>Delete</button>
      </div>
    );
  }
  
  export default WorkInfo;
  