export function Input({label,placeholder,type="text" ,cls="inpPrime" ,updatedValue,value}){
    return (
        <div>
            <label className="font-mono">{label}</label>
            <input type={type} placeholder={placeholder} value={value}  className={cls} onChange={updatedValue} />
        </div>
    )
}
export function Theme({ label, visible, setVisible, children }) {
    return (
        <div>
                  <section className="bg-white w-80 shadow-sm rounded m-2 overflow-hidden transition-all duration-300">
                    <div className="flex flex-wrap text-center justify-between font-mono font-bold p-3">

                    <p className="ml-5 text-lg ">{label}</p>
                    <img src="../../public/arrow.svg" alt="Arrow" onClick={(e) => visible ? setVisible(false) : setVisible(true)} width="20px" />
                </div>
            </section>
        </div>
    )
}

export function MainTheme({ label, visible, setVisible, children }) {

    return (
        <div>
             <section className={`bg-white w-80 shadow-sm rounded m-2  `}>
                <div className="flex flex-wrap text-center justify-between  font-mono font-bold p-3">
                    <p className="ml-5 text-lg">{label}</p>
                    <img src="../../public/arrow.svg" alt="Arrow" onClick={(e) => visible ? setVisible(false) : setVisible(true)} width="20px" />
                </div>
                                {visible && (
                    <div className="p-4">
                        {children}
                    </div>
                )}

            </section>
        </div>
    )
}

