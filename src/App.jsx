import Navbar from "./components/navbar"
import Home from "./components/home"
import Contact from "./components/contact"
function App() {
  return (
    <div className="bg-gradient-to-l from-indigo-950 to-black text-white font-mono">
      <Navbar/>
      <Home/>
      <Contact/>
    </div>
  )
}

export default App
