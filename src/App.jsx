import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Collapsible } from './components/Collapsible.jsx';
import { GeneralInformationForm } from './components/GeneralInfo.jsx';
import { Resume } from './components/Resume.jsx';
import { Button } from './components/Button.jsx';

function App() {

  const initialPersonal = {
    id: crypto.randomUUID(),
    firstName: "Jimbo",
    lastName: "Baggins",
    email: "jimbobaggins@theshire.com",
    phone: "+44 123 456 789",
    address: "Bag End, Bagshot Row, Hobbiton",
  };

  const initialEducation = {
    id: crypto.randomUUID(),
    educationLevel: "MEng",
    degreeTitle: "Electrical & Electronic Engineering",
    years: "2017 - 2021",
    description: "Brief description of time at uni",
  };

  const initialExperience = {
    id: crypto.randomUUID(),
    title: "Burglar",
    description: "Went on a journey to steal from a dragon with a company of thirteen homeless dwarves",
  }

  const [personalData, setPersonalData] = useState(initialPersonal);

  const [educationData, setEducationData] = useState([ initialEducation, ]);

  const [experienceData, setExperienceData] = useState([ initialExperience, ]);

  const updatePersonal = (e) => {
    const { name, value } = e.target;

    setPersonalData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const updateEducation = (e, id) => {
    const { name, value } = e.target;

    setEducationData(educationData.map(education => {
      if (id === education.id) {
        return { ...education, [name]: value }
      }
      return education;
    }));
  };

  const updateExperience = (e, id) => {
    const { name, value } = e.target;

    setExperienceData(experienceData.map(experience => {
      if (id === experience.id) {
        return { ...experience, [name]: value }
      }
      return experience;
    }));
  };

  const addEducation = () => {
    // Start with clean slate for new education, rather than copying the inital
    const blankEducation = { ...initialEducation };
    Object.keys(blankEducation).forEach(key => blankEducation[key] = null);
    const newEducation = { ...blankEducation, id: crypto.randomUUID() };
    setEducationData([
      ...educationData,
      newEducation
    ]);
  };

  const addExperience = () => {
    const blankExperience = { ...initialExperience };
    Object.keys(blankExperience).forEach(key => blankExperience[key] = null);
    const newExperience = { ...blankExperience, id: crypto.randomUUID() };
    setExperienceData([
      ...experienceData,
      newExperience
    ]);
  };

  return (
    <div className='container flex w-screen'>
      <aside className='left-side overflow-y-auto p-5 bg-slate-50 w-1/3'>
        <Collapsible title={'General Information'} content={<GeneralInformationForm formFields={personalData} handleUpdate={e => updatePersonal(e)} />}/>
        <Collapsible title={'Education'} content={educationData.map(education => <GeneralInformationForm key={education.id} formFields={education} handleUpdate={e => updateEducation(e, education.id)} />)} buttons={<Button text={'Add'} handleClick={addEducation} />} />
        <Collapsible title={'Experience'} content={experienceData.map(experience => <GeneralInformationForm key={experience.id} formFields={experience} handleUpdate={e => updateExperience(e, experience.id)} />)} buttons={<Button text={'Add'} handleClick={addExperience} />} />
      </aside>
      <div className='right-side shadow min-h-screen w-2/3 py-5 px-24'>
        <Resume generalInfoFields={personalData} educationFields={educationData} experienceFields={experienceData}/>
      </div>
    </div>
  )




  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App
