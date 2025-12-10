import { Personal } from "./component/Personal";
import { Skill } from "./component/Skills";
import { Summary } from "./component/Summary";

export function SideBar({data,setData}){
    
    return(
        <div >
                <Personal data={data} setData={setData} />
                <Summary data={data} setData={setData}></Summary>
                <Skill data={data} setData={setData}> </Skill>
        </div>
    )
}