/* eslint-disable react/prop-types */
export default function DisplayInfo({ input}) {

    return (
        <>
            <div className="display-wrapper">
                <h1>{input.personalInfo.name} {input.personalInfo.surname}</h1>
                <h4>📞 {input.personalInfo.phone}</h4>
                <h4>✉️ {input.personalInfo.email}</h4>
            </div>

            <div className="display-wrapper">
                <h2>Experience</h2>
                <ul>
                    {input.workInfo.map((work, index) => (
                        <li key={index}>
                            <p>{work.jobTitle}</p>
                            <p>{work.companyName}</p>
                            <p>{work.workDate}</p>
                            <p>{work.jobDescription}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="display-wrapper">
                <h2>Education</h2>
                <ul>
                    {input.educationInfo.map((education, index) => (
                        <li key={index}>
                            <p>{education.schoolName}</p>
                            <p>{education.diploma}</p>
                            <p>{education.studySubject}</p>
                            <p>{education.schoolDate}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}