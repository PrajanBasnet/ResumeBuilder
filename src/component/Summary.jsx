import { useState } from "react"
import { Input, MainTheme, Theme } from "./ThemeSide";

export function Summary({data,setData}) {
    const [SummaryVision, setSummary] = useState(false);

    const summaryStatic = {
        label:"Professional Summary",
        height:"h-100",
}


    return (
        <div>
            {SummaryVision ?
                <MainTheme visible={SummaryVision} setVisible={setSummary} label={summaryStatic.label} height={summaryStatic.height} >
                    <div>
                        <h1 className="font-mono m-1">Summary </h1>
                        <textarea name="Text" id="" cols="35" rows="10" className=" border p-2" ></textarea>
                    </div>
                </MainTheme> : <Theme visible={SummaryVision} setVisible={setSummary} label={summaryStatic.label}></Theme>
            }
        </div>
    )
}

