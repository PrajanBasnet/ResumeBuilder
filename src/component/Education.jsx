import { useState } from "react"
import { MainTheme, Theme } from "./ThemeSide"

export function Education() {
    const [educationVisible, setEducationVisible] = useState(false);

    const educationStatic = {
        label: "Education",
        height: "h-100",
    }

    return (
        <div>
            {educationVisible ?
                 <MainTheme visible={educationVisible} setVisible={setEducationVisible} label={educationStatic.label} height={educationStatic.height} >

                    </MainTheme>
                : <Theme visible={educationVisible} setVisible={setEducationVisible} label={educationStatic.label} height={educationStatic.height}></Theme>

            }
        </div>
    )

}