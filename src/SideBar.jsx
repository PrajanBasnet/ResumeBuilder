import { Personal } from "./component/Personal";
import { Summary } from "./component/Summary";

export function SideBar({data,setData}){
    
    return(
        <div >
                <Personal data={data} setData={setData} />
                <Summary data={data} setData={setData}></Summary>
        </div>
    )
}