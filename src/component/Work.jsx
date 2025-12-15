import { Component, useState } from "react"
import { Input, MainTheme, Theme } from "./ThemeSide";


export function Work({ data, setData }) {
    const [workVisible, visibleWork] = useState(false);
    const workStatic = {
        label: "Work",
        height: "h-100",
    }
    function dlt(index) {
        let newData = data.exp.newExp.filter((x, item) => item !== index);
        setData.setExpAll({ ...data.exp, newExp: newData })


    }
    const handleAddDuty = () => {
        if (data.dutyInput && data.dutyInput.trim()) {
            setData.setExperiences({ ...data.experiences, myDuty: [...data.experiences.myDuty, data.dutyInput] });
        }
        setData.setDutyInput("");
    }
    function dltItem(index) {
        const updatedData = data.experiences.myDuty.filter((_, item) => item !== index);
        setData.setExperiences({ ...data.experiences.myDuty, myDuty: updatedData })
    }
    function add() {
        setData.setExpAll({
            ...data.exp, newExp: [...(data.exp?.newExp || []),
            {
                companyname: data.experiences.companyname, workstart: data.experiences.workstart, workend: data.experiences.workend,
                lct: data.experiences.lct, position: data.experiences.position, myDuty: data.experiences.myDuty
            }]
        })
        setData.setExperiences({myDuty:[]})
    }
    return (
        <div>
            {workVisible ?
                <MainTheme visible={workVisible} setVisible={visibleWork} label={workStatic.label} height={workStatic.height} >
                    <div>

                        <div className="flex flex-wrap justify-between flex-col space-y-2">
                            <h1 className="font-mono">Company Name</h1>
                            <input type="text" name="" value={data.experiences.companyname} className="border" onChange={(e) => setData.setExperiences({ ...data.experiences, companyname: e.target.value })} />
                            <div>

                                <label className="font-mono">Location </label> <br></br>
                                <input type="text" className="border" value={data.experiences.lct} id="dt" onChange={(e) => setData.setExperiences({ ...data.experiences, lct: e.target.value })} />
                            </div>
                            <div>

                                <label className="font-mono">Position </label> <br></br>
                                <input type="text" className="border" value={data.experiences.position} onChange={(e) => setData.setExperiences({ ...data.experiences, position: e.target.value })} />

                                <p>Job</p>
                                <label className="font-mono">Work </label> <br></br>
                                <textarea type="text" className="border w-full" rows="6" value={data.dutyInput} onChange={(e) => setData.setDutyInput(e.target.value)} />
                            </div>
                            <button type="button" className="border ml-3 font-mono w-16" onClick={handleAddDuty}>Add</button>
                            <div>
                                {data.experiences?.myDuty?.map((item, index) => (
                                    <div key={index}>
                                        <li key={index}>{item} </li>
                                        <button type="button" className="border bg-yellow-300 mt-3 " onClick={() => dltItem(index)}>Delete</button>
                                    </div>
                                ))}
                            </div>


                            <div className="border mt-3">
                                <label className="p-2" >Start:   </label>
                                <input type="date" name="dates" id="dt" value={data.experiences.workstart} onChange={(e) => setData.setExperiences({ ...data.experiences, workstart: e.target.value })} />


                                <div className="mt-3">
                                    <hr />
                                    <label className="p-2" >End: </label>
                                    <input type="date" name="dates" id="dt" value={data.experiences.workend} onChange={(e) => setData.setExperiences({ ...data.experiences, workend: e.target.value })} />
                                </div>


                            </div>
                        </div>
                        <br />
                        <button type="submit" className="border p-3 mt-3  gap-1 hover:bg-yellow-300" onClick={(e) => add()}>Submit</button>
                        <div className="flex flex-col space-y-2 border p-2 bg-white w-full">

                            {data.exp?.newExp?.map((item, index) => (
                                <li key={index}>
                                    {item.lct}
                                    <button type="button" className="border" onClick={() => dlt(index)}>Delete</button>
                                </li>
                            ))}
                        </div>
                    </div>

                </MainTheme> : <Theme visible={workVisible} setVisible={visibleWork} label={workStatic.label}></Theme>
            }
        </div>

    )
}
