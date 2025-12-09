
export function Navbar() {
    return (
        <div className="flex flex-wrap justify-around  w-full bg-amber-500 p-5 text-gray-800 ">
                <p  className="font-medium text-2xl "> Resume Builder </p>
            <nav className="flex gap-10 text-lg font-extrabold text-amber-200">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>

        </div>
    )
}