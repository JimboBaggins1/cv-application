import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Collapsible } from './components/Collapsible.jsx';
import { GeneralInformationForm } from './components/Components.jsx';

function App() {
  return (
    <div className='container flex w-screen'>
      <aside className='left-side overflow-y-auto p-5 bg-slate-50 w-1/3'>
        <Collapsible title={'General Information'} content={<GeneralInformationForm />}/>
        <section >
          <header className='text-2xl font-bold text-slate-600 p-3.5'>Education</header>
        </section>
        <section>
          <header className='text-2xl font-bold text-slate-600 p-3.5'>Experience</header>
        </section>
      </aside>
      <div className='right-side shadow min-h-screen w-2/3'></div>
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
