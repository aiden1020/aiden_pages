import CMDBox from "./cmdBox"
import logoIcon from "/favicon.svg" 

function Home () {
  return (
    <div className="flex flex-col sm:flex-row mx-auto items-center justify-center h-auto sm:h-screen space-y-10 sm:space-x-40">
        <div className="py-24 sm:py-0"><CMDBox/></div>
        <div className="hidden sm:block pt-10">
            <img src={logoIcon} draggable="false" className="w-80 animate-bounce select-none filter drop-shadow-[0px_0px_5px_white]" alt="Logo" />
        </div>
    </div>
    
  )
}
export default Home