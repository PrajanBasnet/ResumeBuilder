function Heading({ data }) {
    return (
        <div className="flex flex-wrap w-full justify-center ">

            <div className="flex  items-center gap-2 px-2 py-2">
                <img src="./public/email.svg" alt="Location" height="25px" width="25px" className="bg-amber-300 rounded-2xl p-1 " />
                <p className="font-serif text-xs text-gray-500">{data.email}</p>
            </div>

            <div className="flex  items-center gap-2 px-2 py-2">
                <img src="./public/location.svg" alt="Location" height="25px" width="25px" className="bg-amber-300 rounded-2xl p-1 " />
                <p className="font-semibold text-xs text-gray-500">
                    {data.phone}
                </p>
            </div>
            <div className="flex  items-center gap-2 px-2 py-2">
                <img src="./public/location.svg" alt="Location" height="25px" width="25px" className="bg-amber-300 rounded-2xl p-1 " />
                <p className="font-serif text-xs text-gray-500">{data.location}</p>
            </div>

        </div>
    )
}

// Professional summery

function ProfessionalSummary({data}){
    return(
        <div>
                <section>
                   <div className="bg-amber-500 m-3 p-1.5 text-center font-bold">
                       <p className="text-gray-600">
                        PROFESSIONAL SUMMARY
                        </p> 
                   </div>
                   <div className="m-3 p-1">
                    {data.desc}
                   </div>
                </section>
        </div>
    )
}


export function ResumeOutput({ allData }) {
    return (
        <div>
            <div className="bg-white w-170 h-screen m-3 p-3 rounded">
                <div>
                    <p className="text-3xl font-bold text-center"> {allData.person.fullname}</p>
                </div>
                <Heading data={allData.person}></Heading>
                <hr className="m-4"/>
                <ProfessionalSummary data={allData.profession}></ProfessionalSummary>
            </div>
        </div>
    )
}


