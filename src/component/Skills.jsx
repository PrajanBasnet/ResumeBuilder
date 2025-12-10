import { useState } from "react"
import { Input, MainTheme, Theme } from "./ThemeSide";

export function Skill({ data, setData }) {
    const [skl, sklSkill] = useState(false);
    const skillStatic = {
        label: "Add Skills",
        height: "h-130",
    }
    const dlt = (index) => {
        const updated = data.skill.allSkill.filter((_, i) => i !== index);
        console.log(updated)
        setData.setSkill({ ...data.skill, allSkill: updated});
    }
    return (
        <div>
            {skl ?
                <MainTheme visible={skl} setVisible={sklSkill} label={skillStatic.label} height={skillStatic.height} >
                    <div className="flex flex-wrap justify-between">
                        <input type="text" className="p-1 border" name="skill" id="myValue" placeholder="skill" value={data.skillInput.myskill} onChange={(e) => setData.setSkillInput({ ...data.skillInput, myskill: e.target.value })} />

                        <button className="border p-1  gap-1" onClick={(e) => setData.setSkill({ ...data.skill, allSkill: [...data.skill.allSkill, data.skillInput.myskill] })}> Submit</button>

                    </div>
                    <div className="flex flex-col">
                        {
                            data.skill.allSkill.map((item, index) => (
                                <li key={index} className="flex flex-wrap justify-between w-full gap-10 mt-3 p-2 rounded bg-amber-400 " >

                                    {item}
                                    <button className="bg-gray-50" onClick={() => dlt(index)}>Delete</button>
                                </li>
                            ))
                        }
                    </div>
                </MainTheme> : <Theme visible={skl} setVisible={sklSkill} label={skillStatic.label}></Theme>
            }
        </div>

    )
}


