

//css
import "../css/mobile/m_header.css";


//images
import logo from "../assets/logob.jpeg";

function MobileHeader(){
    return (
        <div className="mobile_header">
            <div className="m_left">
                <img src={logo}></img>
            </div>
            <div className="m_right">
                <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3 12H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3 19H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            </div>
        </div>
    );  
}

export default MobileHeader;