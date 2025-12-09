
export function Navbar() {
    return (
        <div className="flex flex-wrap justify-around w-full bg-amber-500 p-5 text-white ">
                <p  className="font-extrabold text-2xl "> Resume Builder </p>
            <nav className="flex gap-10 text-lg">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>

        </div>
    )
}