
//css
import "../css/desktop/loading-screen.css";
import "../css/desktop/bks.css";
import "../css/desktop/contents.css";
import "../css/desktop/layouts.css";
import "../css/desktop/footer.css";
//css'

//img
import Img1 from "../assets/drone.gif";
import logo from "../assets/logos.png";
import com1 from "../assets/com1.jpeg";
import com2 from "../assets/com2.jpeg";
import com3 from "../assets/com3.jpeg";
import dash from "../assets/dash.png";
//@image


// includi
import Header from "../include/header.js";


function Home(){
    // simple script
    window.addEventListener("load", ()=>{
        document.getElementById("loadscreen").style.display = "none";
    })


    window.onscroll = (e) =>{
        console.log(e);
    }

    return (
        <div className="root">

            {/* it get invoke when the network is slow */}
            <div className="loading-screen" id="loadscreen">
                <div className="image-container">
                    <div className="img">
                        <center><img src={Img1}></img></center>
                    </div>
                </div>
            </div>

            <div className="user-view">

                <Header></Header>
                <div className="background-image"></div>
                <div className="content-positioning">
                    <div className="content-container">
                        <center>
                            <div className="content">
                                <h1>Welcome to Spacial Nova</h1>
                                <p>Democratizing Drone Technology In Africa</p>
                                <div className="button-group">
                                    <button id="actives">Book an appointment</button>
                                    <button>Pre order</button>
                                </div>
                            </div>
                        </center>
                    </div>
                </div>
                <div className="intro-content">
                    <p><b>What Our company tho ?</b></p>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not.
                    </p>
                </div>

                <div className="social_midia_content">
                    <a href="#" id="active">facebook</a>
                    <a href="#">instargram</a>
                    <a href="#">youtube</a>
                    <a href="#">LinkIn</a>
                </div>

            </div>





            <div className="next-layout">
                <div className="left-lay">
                    <div className="upright-content">
                        <p>Artemis One, The new Technology of managing drone flights</p>
                    </div>
                    <div className="cont">
                        <h1><span>Mission</span> And Vision</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not.</p>
                        <div className="button">
                            <button id="active">Read more....</button>
                            <button>Become a member</button>
                        </div>
                        <div className="partners">
                            <p>partnering company.</p>
                            <div className="row">
                                <div className="column">
                                    <img src={com1}></img>
                                </div>
                                <div className="column">
                                    <img src={com2}></img>
                                </div>
                                <div className="column">
                                    <img src={com3}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="right-lay">
                    <div className="container-bk">
                        <div className="displacement">
                            <div className="cont-bk">

                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="artemis-two">
                <div className="right-lay2">
                    <div className="container-bk2">
                        <div className="displacement2">
                            <div className="cont-bk2">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="left-lay">
                    <div className="upright-content">
                        <p>Artemis One, The new Technology of managing drone flights</p>
                    </div>
                    <div className="cont2">
                        <h1><span>Plan</span> Your flight</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not.</p>
                        <div className="button">
                            <button id="active">Read more....</button>
                            <button>Become a member</button>
                        </div>
                        <div className="partners">
                            <p>partnering company.</p>
                            <div className="row">
                                <div className="column">
                                   <p>Manage your drone</p>
                                </div>
                                <div className="column">
                                    <p>Plan your drone flight</p>
                                </div>
                                <div className="column">
                                    <p>store all drone data</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="artemis">
                <div className="titless">
                    <h1>Introducing you to <span>Artemis</span> One</h1>
                    <p>Data is key and how your data is stored is important to us, we have developed the first drone strorage and analysis software for easy data logging and admistration.</p>
                </div>
                <div className="img">
                    <center>
                        <img src={dash}></img>
                    </center>
                </div>
            </div>




            <div className="footer">
                <div className="footer-container">
                    <div className="rows">
                        <div className="columns logo-area">
                            <img src={logo}></img>
                        </div>
                        <div className="columns newslater">
                            <div className="news-later">
                                <span>Subscribe to news latter</span><br></br>
                                <input type="email" placeholder="email address"></input>
                            </div>
                        </div>
                        <div className="columns menus">
                            <p>Contact</p>
                            <a href="#">support</a>
                            <a href="#">pre order</a>
                        </div>
                        <div className="columns menus">
                            <p>Follow us</p>
                            <a href="#">facebook</a>
                            <a href="#">youtube</a>
                            <a href="#">instargram</a>
                            <a href="#">twitter</a>
                        </div>
                        <div className="columns menus">
                            <p>Contact</p>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms & Condition</a>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
}


export default Home;
