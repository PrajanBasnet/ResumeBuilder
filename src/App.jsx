import { useState } from 'react';
import './App.css'
import { ResumeOutput } from './ResumeOutput'
import { SideBar } from './SideBar'
import { Navbar } from './component/NavBar';

function App() {
  const [person,setPerson] = useState({fullname:" ",email:" ",phone:"",location:""})
  const [profession,setProfessionSummary] = useState({desc:" " })

  const allData = {person ,profession};
  const setData = {setPerson,setProfessionSummary}

  return (
    <div>
      <Navbar></Navbar>
    <div className='flex flex-wrap justify-center gap-2 m-5'>
        <SideBar data={allData} setData={setData}></SideBar> 
        <ResumeOutput allData={allData} ></ResumeOutput>
    </div>
    </div>
  )
}

export default App
