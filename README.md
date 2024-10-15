# React CV Builder

This is a simple CV Builder application built with React. It allows users to input and manage their personal information, work experience, and education details interactively. Users can add new work and education entries, edit them in place, and view their formatted CV in real-time.

Live version here: https://mctintor-cv-app-react.netlify.app/

## Features
- Personal Info: Users can input their name, surname, phone number, and email address.
- Work Info: Add, edit, and delete multiple work experience entries. Each entry includes the job title, company name, work dates, and job description.
- Education Info: Add, edit, and delete multiple education entries. Each entry includes the school name, diploma, study subject, and school dates.
- Dynamic Editing: Work and education entries can be toggled between editing and viewing modes.
- Real-Time Display: A live preview of the CV is displayed as users input their information.

### Technologies Used
- React: For creating interactive UI components.
- CSS: For basic styling and layout.
- useState Hook: To manage component states for personal, work, and education info.

## Project Structure
- App.js: The main component that manages the state of the application. It handles adding, editing, and deleting work and education entries, as well as handling personal information.
- PersonalInfo.js: A component responsible for rendering and managing input fields for personal information.
- WorkInfo.js: A component responsible for rendering and managing each work experience entry.
- EducationInfo.js: A component responsible for rendering and managing each education entry.
- DisplayInfo.js: A component responsible for displaying the inputted information in a formatted CV-like view.
- App.css: Contains the basic styling for the layout and components.

## How to Run the Project

1. Clone this repository: git clone https://github.com/McTintor/react-cv-builder.git
2. Navigate into the project directory: cd react-cv-builder
3. Install dependencies: npm install
4. Run the app: npm start
5. Open http://localhost:3000 to view the application in your browser.

## How It Works

Personal Info: The PersonalInfo component renders a form with fields for name, surname, phone, and email. Changes are reflected immediately in the live preview.

Work Info: Users can add new work experience entries with an "Add Work Info" button. Existing work entries can be edited by toggling between view and edit mode, and they can be deleted if necessary.

Education Info: Similarly, users can add education entries with the "Add Education Info" button and manage them in the same way as work experience entries.

Live Display: The DisplayInfo component renders the formatted CV view, which updates in real time as users input their information.

### Future Improvements

Add form validation to ensure required fields are filled.

Improve the styling to provide a more polished, professional CV layout.

Add the ability to download the generated CV as a PDF.
