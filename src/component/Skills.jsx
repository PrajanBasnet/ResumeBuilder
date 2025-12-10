import { useState } from "react"
import { Input, MainTheme, Theme } from "./ThemeSide";

export function Skill({data,setData}) {
    const [skl, sklSkill] = useState(false);
    let t = data.skill.allSkill;
    console.log(t)
    const skillStatic = {
        label:"Personal Information",
        height:"h-100",
}

    return (
        <div>
            {skl ?
                <MainTheme visible={skl} setVisible={sklSkill} label={skillStatic.label} height={skillStatic.height} >
                    <div>
                        <input type="text" name="skill" id="myValue" placeholder="skill" value={data.skillInput.myskill} onChange={(e)=> setData.setSkillInput({...data.skillInput, myskill:e.target.value})} />
                        
                        <button onClick={(e) => setData.setSkill({...data.skill ,allSkill:[...data.skill.allSkill,data.skillInput.myskill] })}> Submit</button>
                     
                    </div>
                </MainTheme> : <Theme visible={skl} setVisible={sklSkill} label={skillStatic.label}></Theme>
            }
        </div>
    )
}

