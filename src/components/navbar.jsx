import logoIcon from "/favicon.svg" 

function Navbar() {
    return (
        <div className="flex items-center bg justify-between sm:pt-8 pt-16 px-14">
            <div className="flex space-x-3.5 items-center ">
                <a href="#" className="font-sikscreen text-2xl font-bold tracking-wider flex items-center">AIDEN</a>
            </div>
            <div className="hidden sm:block space-x-4">
                <a href="#contact" className="text-xl font-sikscreen">Contact</a>
            </div>
            <div className="block sm:hidden space-x-4">
                <img src={logoIcon} draggable="false" className="w-20 animate-bounce select-none filter drop-shadow-[0px_0px_5px_white]" alt="Logo" />
            </div>
        </div>
    )
}
export default Navbar