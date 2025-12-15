import { useState } from "react"
import { Input, MainTheme, Theme } from "./ThemeSide";

export function Personal({data,setData}) {
    const [PersonalVisual, setPersonalVisual] = useState(false);

    const personStatic = {
        label:"Personal Information",
        height:"h-100",
}
function handleImg(e){
    const file = e.target.files[0]

    if(file){
        const url = URL.createObjectURL(file);
      setData.setImg(url);

      console.log(data.img)
    }
}
    return (
        <div>
            {PersonalVisual ?
                <MainTheme visible={PersonalVisual} setVisible={setPersonalVisual} label={personStatic.label} height={personStatic.height} >
                    <div>
                        <Input value={data.person.fullname} label="Full Name" placeholder="Full Name" updatedValue={(e)=> setData.setPerson({...data.person,fullname: e.target.value})}></Input>
                        <Input value={data.person.email} placeholder="Email" type="email" label="Email"  updatedValue={(e)=> setData.setPerson({...data.person,email: e.target.value})} ></Input>
                        <Input value={data.person.phone} placeholder="tel" label="Phone" updatedValue={(e)=> setData.setPerson({...data.person,phone: e.target.value})} ></Input>
                        <Input value={data.person.location} placeholder="location" type="tel" label="location" updatedValue={(e)=> setData.setPerson({...data.person,location: e.target.value})} ></Input>
                        <input type="file" name="file upload" id="" onChange={(e) => handleImg(e)} />
                    </div>
                </MainTheme> : <Theme visible={PersonalVisual} setVisible={setPersonalVisual} label={personStatic.label}></Theme>
            }
        </div>
    )
}

