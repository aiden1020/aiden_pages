import emailIcon from '../assets/email-icon.svg'
import githubIcon from '../assets/github-icon.svg'
import civitaiIcon from '../assets/civitai-icon.svg'
import instagramIcon from '../assets/instagram-icon.svg'
import twitterIcon from '../assets/twitter-icon.svg'
function Contact() {
    return (
        <div className='h-screen bg-black'>
            <div id="contact" className="font-sikscreen text-3xl sm:text-5xl  flex justify-center py-25 ">Contact me</div>
            <div className='flex space-x-20 sm:space-x-50 p-5 sm:p-10 justify-center'>
                <a href="https://civitai.com/user/Aiden1020" target="_blank" rel="noreferrer">
                    <img
                        src={civitaiIcon} 
                        draggable="false"
                        alt="civitai icon"
                        className="w-25 h-25 invert transition-transform duration-300 drop-shadow-[0px_0px_10px_rgb(31,133,244)] sm:drop-shadow-none sm:hover:drop-shadow-[0px_0px_10px_rgb(31,133,244)] hover:scale-120"
                    />
                </a>
                <a href="https://github.com/aiden1020" target="_blank" rel="noreferrer">
                    <img
                        src={githubIcon} 
                        draggable="false"
                        alt="github icon"
                        className="w-25 h-25 invert transition-transform duration-300 drop-shadow-[0px_0px_10px_gray] sm:drop-shadow-none hover:scale-120 hover:drop-shadow-[0px_0px_10px_gray]"
                    />
                </a>
            </div>
            <div className='flex space-x-20 sm:space-x-50 py-5 sm:p-10 justify-center'>
                <a href="mailto:tsztowong@gmail.com">
                    <img
                        src={emailIcon} 
                        draggable="false"
                        alt="email icon"
                        className="w-25 h-25 invert transition-transform duration-300 drop-shadow-[0px_0px_10px_rgb(217,77,63)] hover:scale-120 sm:drop-shadow-none hover:drop-shadow-[0px_0px_10px_rgb(217,77,63)]"
                    />
                </a>
                <a href="https://www.instagram.com/tszto.wong/" target="_blank" rel="noreferrer">
                    <img
                        src={instagramIcon} 
                        draggable="false"
                        alt="instagram icon"
                        className="w-25 h-25 invert transition-transform duration-300 drop-shadow-[0px_0px_10px_rgb(251,3,216)] sm:drop-shadow-none hover:scale-120 hover:drop-shadow-[0px_0px_10px_rgb(251,3,216)]"
                    />
                </a>
                <a href="https://x.com/Aiden06042893" target="_blank" rel="noreferrer">
                    <img
                        src={twitterIcon} 
                        draggable="false"
                        alt="twitter icon"
                        className="w-25 h-25 invert transition-transform duration-300 drop-shadow-[0px_0px_10px_rgb(59,207,254)] sm:drop-shadow-none hover:scale-120 hover:drop-shadow-[0px_0px_10px_rgb(59,207,254)]"
                    />
                </a>
            </div>
        </div>
    )
}
export default Contact
