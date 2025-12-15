import email from './assets/email.svg';
import lctImg from './assets/location.svg';
import address from './assets/add.svg';



function Heading({ data, ig }) {
    return (
        <div>
            <div className="flex flex-wrap w-full justify-center ">
            <div className="flex items-center flex-wrap justify-center">
                <img
                    src={ig}
                    alt="Preview"
                    class="w-20 h-20 rounded-full object-cover aspect-square"
                    />
                    </div>
                <div className="flex  items-center gap-2 px-2 py-2">
                    <img src={email} alt="Location" height="25px" width="25px" className="bg-amber-300 rounded-2xl p-1 " />
                    <p className="font-serif text-xs text-gray-500">{data.email}</p>
                </div>

                <div className="flex  items-center gap-2 px-2 py-2">
                    <img src={address} alt="Location" height="25px" width="25px" className="bg-amber-300 rounded-2xl p-1 " />
                    <p className="font-semibold text-xs text-gray-500">
                        {data.phone}
                    </p>
                </div>
                <div className="flex  items-center gap-2 px-2 py-2">
                    <img src={lctImg} alt="Location" height="25px" width="25px" className="bg-amber-300 rounded-2xl p-1 " />
                    <p className="font-serif text-xs text-gray-500">{data.location}</p>
                </div>

            </div>
        </div>
    )
}

// Professional summery

function ProfessionalSummary({ data }) {
    return (
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

//  Skill Ul
function SkillUi({ data }) {
    return (
        <div>
            <div className="bg-amber-500 m-3 p-1 text-center font-bold">
                <p className="text-gray-600">
                    Skill
                </p>
            </div>
            <section className=" h-40 p-2 m-3 overflow-hidden">
                <ul className="columns-2  list-disc">

                    {
                        data.allSkill.map((item, index) => (<li className="list-disc ml-4 " key={index}> {item}</li>))
                    }


                </ul>
            </section>
        </div>
    )
}

export function Work({ data }) {
    return (
        <div>
            <div>
                <div className="bg-amber-500 m-3 p-1 text-center font-bold">
                    <p className="text-gray-600">
                        Work Expirence
                    </p>
                </div>
                <section className=" h-auto- p-2 m-3 overflow-hidden items-baseline">
                    {data.newExp.slice(1).map((item, index) => (
                        <div key={index}>
                            <div className="flex felx-wrap justify-between">

                                <div className="flex flex-wrap items-baseline gap-2">
                                    <p className="font-extrabold text-2xl">{item.companyname} ||</p>
                                    <span className="font-normal font-2xl">{item.lct}</span>
                                </div>

                                <div className="flex flex-wrap">
                                    <p >{item.workstart}</p>
                                    <span className="ml-3 mr-3">To</span>
                                    <p>{item.workend}</p>
                                </div>
                            </div>
                            <div className="text-yellow-700 font-bold flex flex-col">
                                {item.position}

                            </div>
                            <div>
                                <ul class="list-disc pl-5">

                                    {item.myDuty.map((vlue, valueIndex) =>
                                        <li className="list-disc" key={valueIndex}>{vlue}</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    ))}

                </section>
            </div>
        </div>
    )
}

export function Education({ data }) {
    return (
        <div>
            <div>
                <div className="bg-green-500 m-3 p-1 text-center font-bold">
                    <p className="text-gray-600">
                        Education
                    </p>
                </div>
                <section className=" h-auto- p-2 m-3 overflow-hidden items-baseline">
                    {data.newEdu?.slice(1).map((item, index) => (
                        <div key={index}>
                            <div className="flex felx-wrap justify-between">

                                <div className="flex flex-wrap items-baseline gap-2">
                                    <p className="font-extrabold text-2xl">{item.collagename} ||</p>
                                    <span className="font-normal font-2xl">{item.location}</span>
                                </div>

                                <div className="flex flex-wrap">
                                    <p >{item.studyStart}</p>
                                    <span className="ml-3 mr-3">To</span>
                                    <p>{item.studyEnd}</p>
                                </div>
                            </div>
                            <div className="text-yellow-700 font-bold flex flex-col">
                                {item.course}

                            </div>
                            <div>
                                <ul class="list-disc pl-5">

                                    {item.myEducation.map((vlue, valueIndex) =>
                                        <li className="list-disc" key={valueIndex}>{vlue}</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    ))}

                </section>
            </div>
        </div>
    )


}

export function ResumeOutput({ allData }) {
    return (
        <div>
            <div className="bg-white w-full h-auto max-w-4xl min-h-screen  m-3 p-3 rounded">
                <div>
                    <p className="text-3xl font-bold text-center"> {allData.person.fullname}</p>
                </div>
                <Heading data={allData.person} ig={allData.img}></Heading>
                <hr className="m-4" />
                <ProfessionalSummary data={allData.profession}></ProfessionalSummary>
                <SkillUi data={allData.skill}></SkillUi>
                <Work data={allData.exp} ></Work>
                <Education data={allData.edu}></Education>


            </div>
        </div>
    )
}


