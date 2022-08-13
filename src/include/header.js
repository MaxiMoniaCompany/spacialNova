


// css
import "../css/desktop/header.css"; 
//@css


//img
import logo from "../assets/logob.jpeg";
//@img

function Header(){
    return (
        <div className="header">
            <div className="left-content">
                <img src={logo}></img>
            </div>
            <div className="center-content">
                <a href="#" id="active">Home</a>
                <a href="#">Purpose</a>
                <a href="#">Solution</a>
                <a href="#">Contact</a>
            </div>
            <div className="right-content">
                <a href="#" id="seprators">Become a member</a>
                <a href="#">Login instead</a>
            </div>
        </div>
    );
}

export default Header;