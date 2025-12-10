import { useState } from 'react';
import './App.css'
import { ResumeOutput } from './ResumeOutput'
import { SideBar } from './SideBar'
import { Navbar } from './component/NavBar';

function App() {
  const [person,setPerson] = useState({fullname:"Spider Basnet",email:"spider@test123",phone:"98161214",location:"jhapa nepal btm"})
  const [profession,setProfessionSummary] = useState({desc:"I am a dedicated Computer Engineering student with a strong interest in software development, problem-solving, and emerging technologies. I enjoy learning how systems work—from hardware to high-level applications—and building projects that improve efficiency and user experience. I’m always eager to expand my skills, collaborate with others, and take on challenges that help me grow as an engineer." })
  const [skill,setSkill] = useState({allSkill:[]});
  const [skillInput,setSkillInput] = useState({myskill:'ttt'});

  const allData = {person ,profession,skill ,skillInput};
  const setData = {setPerson,setProfessionSummary ,setSkill,setSkillInput};

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
