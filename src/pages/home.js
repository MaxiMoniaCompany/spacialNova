
//css
import "../css/desktop/loading-screen.css";
import "../css/desktop/bks.css";
import "../css/desktop/contents.css";
import "../css/desktop/layouts.css";
import "../css/desktop/footer.css";
import "../css/desktop/contact.css"
import "../css/res/res.css";
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


//include for mobile
import MobileHeader from "../include/m_header";


//mobile css
import "../css/mobile/bks.css";


function Home(){
    window.addEventListener("load", ()=>{
        document.getElementById("loadscreen").style.display = "none";
    })


    window.onscroll = (e) =>{
        console.log(e);
    }

    return (
        <div className="root">


            <div className="view" id="user_view">
                {/* it get invoke when the network is slow */}
                <div className="loading-screen" id="loadscreen">
                    <div className="image-container">
                        <div className="img">
                            <center><img src={Img1}></img></center>
                        </div>
                    </div>
                </div>

                <div className="user-view" id="">

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



                <div className="contact_sections">
                    <div className="title">
                        <center><h1>contact us</h1></center>
                    </div>

                    <div className="input_fields">
                        <center>
                            <div className="box">
                                <div className="input_holder">
                                    <div className="name">
                                        <spann>Name</spann><br></br>
                                    </div><br></br>
                                    <div className="input">
                                        <input type="text" placeholder="your name"></input>
                                    </div>
                                </div>

                                <div className="input_holder toper">
                                    <div className="name">
                                        <spann>Email</spann><br></br>
                                    </div><br></br>
                                    <div className="input">
                                        <input type="email" placeholder="your email"></input>
                                    </div>
                                </div>


                                <div className="input_holder toper">
                                    <div className="name">
                                        <spann>Your message</spann><br></br>
                                    </div><br></br>
                                    <div className="input">
                                        <textarea placeholder="Leave us a message"></textarea>
                                    </div>
                                </div>

                                <div className="input_holder toper">
                                    <button>Send feedback</button>
                                </div>


                            </div>
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
                                    <div className="in">
                                        <input type="email" placeholder="email address"></input>    
                                    </div>
                                    <div className="bu">
                                        <button>subscribe</button>
                                    </div>
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
            

            <div className="mobile_devices">


                <MobileHeader></MobileHeader>
                <div className="m_bks">
                    <div className="m_content">
                        <div className="m_title">
                            <h1>
                                <span>Welcome</span><br></br>To spacialNova
                            </h1>
                        </div>
                        <div className="button">
                            <button>Book an appointment</button>
                            <button id="active">Pre-Order</button>
                        </div>
                    </div>
                </div>

                <div className="m_bks_two">
                </div>
                <div className="m_contents">
                        <div className="m_intro">
                            <h1><span>Mission</span> And Vision</h1>
                            <div className="boxer">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not.
                                </p>
                            </div>
                            <div className="button">
                                <button>Book an appointment</button>
                                <button id="active">Pre-Order</button>
                            </div>
                        </div>
                </div>

                <div className="next_layout">
                    <div className="tit">
                        <center>
                            <h1><span>partnering</span> company</h1>
                        </center>
                    </div>
                </div>



            </div>

        


        </div>
    );
}






export default Home;
