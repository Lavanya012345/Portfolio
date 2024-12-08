import React from "react";
import './home.css'
import logo from './logo.png'
import girlimg from './freepik__background__18294.png'
import html from './html_1051277.png'
import css from '../assets/css-3_732190.png'
import js from './js_5968292.png'
import mysql from './mysql_919836.png'
import github from './github_3291695.png'
import nodejs from './node.js_img.png'
import postgre from './postgre_5968342.png'
import sql from './sql-server_4492311.png'
import react from './science_17264291.png'
import studyhall from './studyhall.png'
import ftitgs from './ftitgs.png'
import mopedo from './mopedo.png'
import ecom from '../assets/ecommerce.png'
import expenceTracker from '../assets/expenseTracker.png'

const Home=()=>{
    return(
        <div>
            <div className="w-backgroud">
                {/* header */}
                <div>
                    <nav className="d-flex">
                        <img className="logo m-4" src={logo} alt="logo"/>
                        <ul className="d-flex m-4">
                        <a href="#" className="m-5 text-white">HOME</a>
                        <a href="#" className="m-5 text-white">ABOUT</a>
                        <a href="#" className="m-5 text-white">PROJECT</a>
                        <a href="#" className="m-5 text-white">CONTACT US</a>
                        </ul>
                    </nav>
                </div>
                {/* main-page */}
                <div className=" main-content">
                    <div className="heading-container mt-5 ml-0">
                        <h1 className="headingstyle">I'm <span className="span-heading">Lavanya</span></h1>
                        <h1 className="mt-3 headingstyle">Full Stack developer</h1>
                        <button className="btn btn-warning btn-container mt-2">Contact me</button>
                    </div>
                        
                    <div>
                        <img src={girlimg} className="girl-img" alt="girl-img"/>
                    </div>
                </div>
            </div>    
        
            {/* about me */}
            <div className="about-container">
                <div className="ab-con">
                <h1 className="p-5 headingstyle">About</h1>
                <hr className="ml-5 line"/>
                <p className="pl-5 paragraphstyle">
                     {/* I am a full stack developer with a passion for creating innovative and user-friendly applications. I have a strong background in computer science and a keen eye for detail, which enables me to deliver high-quality solutions that meet the needs of my clients. */}
                     A detail-oriented and motivated Computer Science graduate with strong skills in web development, including
                    HTML, CSS, Bootstrap, JavaScript, Nodejs and basic knowledge of React.js, SQL, PostgreSQL. Seeking to
                    leverage my technical expertise and passion for building responsive and user-friendly websites to contribute
                    to a dynamic organization. Eager to grow and enhance my development skills while delivering impactful
                    digital solutions.
                </p>
                </div>
                {/* skills */}
                <div className="skills-container">
                    <h1 className="headingstyle">My Skills</h1>
                    <div className="skill">
                        <div className="skill-cards m-3">
                            <img src={html} alt="html-image" className="skill-img mt-5"/>
                            <h3 className="headingstyle m-2">Html</h3>
                        </div>
                        <div className="skill-cards m-3">
                            <img src={css} alt="html-image" className="skill-img mt-5"/>
                            <h3 className="headingstyle m-2">CSS</h3>
                        </div>
                        <div className="skill-cards m-3">
                            <img src={js} alt="html-image" className="skill-img mt-5"/>
                            <h3 className="headingstyle m-2">JavaScript</h3>
                        </div>
                        <div className="skill-cards m-3">
                            <img src={react} alt="html-image" className="skill-img mt-5"/>
                            <h3 className="headingstyle m-2">React</h3>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-cards m-3">
                            <img src={nodejs} alt="html-image" className="skill-img mt-5"/>
                            <h3 className="headingstyle m-2">Node.Js</h3>
                        </div>
                        <div className="skill-cards m-3">
                            <img src={github} alt="html-image" className="skill-img mt-5"/>
                            <h3 className="headingstyle m-2">Github</h3>
                        </div>
                        <div className="skill-cards m-3">
                            <img src={sql} alt="html-image" className="skill-img mt-5"/>
                            <h3 className="headingstyle m-2">SQL</h3>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-cards m-3">
                            <img src={postgre} alt="html-image" className="skill-img mt-5"/>
                            <h3 className="headingstyle m-2">PostgreSQL</h3>
                        </div>
                        <div className="skill-cards m-3">
                            <img src={mysql} alt="html-image" className="skill-img mt-5"/>
                            <h3 className="headingstyle m-2">Mysql</h3>
                        </div>
                    </div>

                </div>
            
            </div>
               {/* project-section  */}

                <div className="project-container">
                    <h1 className="headingstyle text-center mt-5">Projects</h1>
                    {/* <div className="project-card">
                        <div className="pro-card"> </div>
                            <img src={studyhall} alt="proj-img" className="img"/>
                            <div className="card-overlay ">
                                <h1>Studyhall</h1>
                            </div>
                       
                        
                    </div> */}
                    <div className="row mt-5">
                        <div class="col-xl-4 col-lg-6 col-md-6 mb-30 wow tpfadeUp mt-4" data-wow-duration=".9s" data-wow-delay=".9s" >
                            <div class="content">
                                <a href="#">
                                    <div class="content-overlay"></div>
                                        <img class="content-image" src={studyhall} alt="img"/>
                                        <div class="content-details fadeIn-bottom">
                                            <h3 class="content-title">Studyhall Web Application</h3>
                                            <p class="content-text">Travel from your door-step to preferred destination effortlessly and with utmost safety through Mopedo ride.</p>
                                            <button>Read more</button>
                                        </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6 mb-30 wow tpfadeUp mt-4" data-wow-duration=".9s" data-wow-delay=".9s" >
                            <div class="content">
                                <a href="#">
                                    <div class="content-overlay"></div>
                                        <img class="content-image" src={ftitgs} alt="img"/>
                                        <div class="content-details fadeIn-bottom">
                                            <h3 class="content-title">Website</h3>
                                            <p class="content-text">Travel from your door-step to preferred destination effortlessly and with utmost safety through Mopedo ride.</p>
                                            <button>Read more</button>
                                        </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6 mb-30 wow tpfadeUp mt-4" data-wow-duration=".9s" data-wow-delay=".9s" >
                            <div class="content">
                                <a href="#">
                                    <div class="content-overlay"></div>
                                        <img class="content-image" src={mopedo} alt="img"/>
                                        <div class="content-details fadeIn-bottom">
                                            <h3 class="content-title">Website design</h3>
                                            <p class="content-text">Travel from your door-step to preferred destination effortlessly and with utmost safety through Mopedo ride.</p>
                                            <button>Read more</button>
                                        </div>
                                </a>
                            </div>
                        </div>


                    </div>
                    <div className="row d-flex jystify-content-center"> 
                        <div class="col-xl-4 col-lg-6 col-md-6 mb-30 wow tpfadeUp mt-4" data-wow-duration=".9s" data-wow-delay=".9s" >
                                <div class="content">
                                    <a href="#">
                                        <div class="content-overlay"></div>
                                            <img class="content-image" src={ecom} alt="img"/>
                                            <div class="content-details fadeIn-bottom">
                                                <h3 class="content-title">Website design</h3>
                                                <p class="content-text">Travel from your door-step to preferred destination effortlessly and with utmost safety through Mopedo ride.</p>
                                                <button>Read more</button>
                                            </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 mb-30 wow tpfadeUp mt-4" data-wow-duration=".9s" data-wow-delay=".9s" >
                                <div class="content">
                                    <a href="#">
                                        <div class="content-overlay"></div>
                                            <img class="content-image" src={expenceTracker} alt="img"/>
                                            <div class="content-details fadeIn-bottom">
                                                <h3 class="content-title">Website design</h3>
                                                <p class="content-text">Travel from your door-step to preferred destination effortlessly and with utmost safety through Mopedo ride.</p>
                                                <button>Read more</button>
                                            </div>
                                    </a>
                                </div>
                            </div>


                     </div>
                </div>
                        
                   
        </div>     
         
    )
}


export default Home