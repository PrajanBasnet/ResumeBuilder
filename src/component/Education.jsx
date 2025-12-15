import { useState } from "react"
import { MainTheme, Theme } from "./ThemeSide"

export function Education({ data, setData }) {
    const [educationVisible, setEducationVisible] = useState(false);

    const educationStatic = {
        label: "Education",
        height: "h-100",
    }
    function dlt(index) {
        let newData = data.edu.newEdu.filter((x, item) => item !== index);
        setData.setEduAll({ ...data.edu, newEdu: newData })


    }
    const handleAddDuty = () => {
        if (data.educationInput && data.educationInput.trim()) {
            setData.setEducation({ ...data.education, myEducation: [...data.education.myEducation, data.educationInput] });
        }
        setData.seteducationInput("");
    }
    function dltItem(index) {
        const updatedData = data.education.myEducation.filter((_, item) => item !== index);
        setData.setEducation({ ...data.education.myEducation, myEducation: updatedData })
    }
    function add() {
        setData.setEduAll({
            ...data.edu, newEdu: [...(data.edu?.newEdu || []),
            {
                collagename: data.education.collagename, studyStart: data.education.studyStart, studyEnd: data.education.studyEnd,
                location: data.education.location, course: data.education.course, myEducation: data.education.myEducation
            }]
        })
        setData.seteducationInput({ myEducation: [] })
    }
    return (
        <div>
            {educationVisible ?
                <MainTheme visible={educationVisible} setVisible={setEducationVisible} label={educationStatic.label} height={educationStatic.height} >

                    <div className="flex flex-wrap justify-between flex-col space-y-2">
                        <h1 className="font-mono">Collage Name</h1>
                        <input type="text" name="" value={data.education.collagename} className="border" onChange={(e) => setData.setEducation({ ...data.education, collagename: e.target.value })} />
                        <div>

                            <label className="font-mono">Location </label> <br></br>
                            <input type="text" className="border" value={data.education.location} id="dt" onChange={(e) => setData.setEducation({ ...data.education, location: e.target.value })} />
                        </div>
                        <div>

                            <label className="font-mono">Course </label> <br></br>
                            <input type="text" className="border" value={data.education.course} onChange={(e) => setData.setEducation({ ...data.education, course: e.target.value })} />

                            <br />
                            <label className="font-mono">Duty </label> <br></br>
                            <textarea type="text" className="border w-full" rows="6" value={data.educationInput} onChange={(e) => setData.seteducationInput(e.target.value)} />

                        </div>
                        <button type="button" className="border ml-3 font-mono w-16" onClick={handleAddDuty}>Add</button>
                        <div>
                            {data.education?.myEducation?.map((item, index) => (
                                <div key={index}>
                                    <li key={index}>{item} </li>
                                    <button type="button" className="border bg-yellow-300 mt-3 " onClick={() => dltItem(index)}>Delete</button>
                                </div>
                            ))}
                        </div>


                        <div className="border mt-3">
                            <label className="p-2" >Start:</label>
                            <input type="date" name="dates" id="dt" value={data.education.studyStart} onChange={(e) => setData.setEducation({ ...data.education, studyStart: e.target.value })} />


                            <div className="mt-3">
                                <hr />
                                <label className="p-2" >End: </label>
                                <input type="date" name="dates" id="dt" value={data.education.studyEnd} onChange={(e) => setData.setEducation({ ...data.education, studyEnd: e.target.value })} />
                            </div>

                        </div>
                    </div>
                    <br />
                    <button type="submit" className="border p-3 mt-3  gap-1 hover:bg-yellow-300" onClick={(e) => add()}>Submit</button>

                    <div className="flex flex-col space-y-2 border p-2 bg-white w-full">

                        {data.edu?.newEdu?.map((item, index) => (
                            <li key={index}>
                                {item.location}
                                <button type="button" className="border" onClick={() => dlt(index)}>Delete</button>
                            </li>
                        ))}
                    </div>
                </MainTheme>
                : <Theme visible={educationVisible} setVisible={setEducationVisible} label={educationStatic.label} height={educationStatic.height}></Theme>

            }
        </div>
    )

}