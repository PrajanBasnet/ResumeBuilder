import { Component, useState } from "react"
import { Input, MainTheme, Theme } from "./ThemeSide";


export function Work({ data, setData }) {
    const [workVisible, visibleWork] = useState(false);
    const workStatic = {
        label: "Work",
        height: "h-100",
    }

    return (
        <div>
            {workVisible ?
                <MainTheme visible={workVisible} setVisible={visibleWork} label={workStatic.label} height={workStatic.height} >
                    <div>

                        <div className="flex flex-wrap justify-between">
                            <h1 className="font-mono">Company Name</h1>
                            <input type="text" name="" value={data.experiences.companyname} className="border" onChange={(e) => setData.setExperiences({ ...data.experiences, companyname: e.target.value })} />
           

                            <div className="border mt-3">
                                <label className="p-2" >Start:   </label>
                                <input type="date" name="dates" id="dt" value={data.experiences.workstart} onChange={(e) => setData.setExperiences({ ...data.experiences, workstart: e.target.value })} />


                            <div className="mt-3">
                                <hr />
                                <label className="p-2" >End: </label>
                                 <input type="date" name="dates" id="dt" value={data.experiences.workend} onChange={(e) => setData.setExperiences({ ...data.experiences, workend: e.target.value })} />

                            </div>
                                <label className="font-mono">lct </label> <br></br>
                                 <input type="text" className="border" value={data.experiences.lct}  id="dt" onChange={(e) => setData.setExperiences({ ...data.experiences, lct: e.target.value })} />


                            </div>
                        </div>
                            <br />
                            <button type="submit" className="border p-3 mt-3  gap-1 hover:bg-yellow-300" onClick={(e) => setData.setExpAll({ ...data.exp, newExp: [...(data.exp?.newExp || []), { companyname: data.experiences.companyname, workstart: data.experiences.workstart , workend:data.experiences.workend, lct:data.experiences.lct }] })}>Submit</button>
                        <div className="flex flex-col">
                            {data.exp?.newExp?.map((item, index) => (
                                <li key={index}>
                                    {item.lct}
                                </li>
                            ))}
                        </div>
                    </div>

                </MainTheme> : <Theme visible={workVisible} setVisible={visibleWork} label={workStatic.label}></Theme>
            }
        </div>

    )
}
