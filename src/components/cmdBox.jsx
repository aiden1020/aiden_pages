import { useState, useEffect } from "react";

function CMDBox() {
    const [lastLogin, setLastLogin] = useState("");

    useEffect(() => {
      function formatDate() {
        const now = new Date();
  
        const weekday = now.toLocaleString("en-US", { weekday: "short" });  
        const month = now.toLocaleString("en-US", { month: "short" }); 
        const day = now.getDate().toString().padStart(2, "0");  
        const year = now.getFullYear();  
        const hours = now.getHours().toString().padStart(2, "0");  
        const minutes = now.getMinutes().toString().padStart(2, "0"); 
        const seconds = now.getSeconds().toString().padStart(2, "0"); 
  
        return `Last login: ${weekday} ${month} ${day} ${year} ${hours}:${minutes}:${seconds}`;
      }
  
      const intervalId = setInterval(() => {
        setLastLogin(formatDate());
      }, 1000); 
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);
  
    return (

        <div className="w-auto max-w-sm h-auto sm:max-w-128 sm:h-72  bg-[rgb(30,30,30)] text-white shadow-[0px_0px_80px_rgba(255,255,255,0.75)] rounded-xl animate-fadeUp sm:mx-auto">
            <div className="w-full bg-[rgb(58,59,61)] h-8 rounded-t-xl">
                <div className="flex p-3 space-x-2">
                    <div className="w-3 h-3 bg-[rgb(255,96,86)] rounded-full"></div>
                    <div className="w-3 h-3 bg-[rgb(253,195,51)] rounded-full"></div>
                    <div className="w-3 h-3 bg-[rgb(35,199,71)] rounded-full"></div>
                </div>
            </div>
                <div className="px-3 py-1">{lastLogin}</div>
                <div className="px-3">
                    <div className="inline-flex items-center pb-10">
                        <p className="mr-1">
                            aiden1020@nycu ~ % Hi, I am Aiden! 👋🏻 A HongKongese currently studying abroad in TW 🇹🇼 I’m a postgrad in NYCU, diving deep into computer vision and NLP. I believe in living in the moment while constantly pushing myself to learn and grow. Let’s connect and create something amazing together! 🚀
                            <span className="animate-flash bg-white w-2">I</span>
                        </p>
                    </div>
                </div>
        </div>


    )
}
export default CMDBox;