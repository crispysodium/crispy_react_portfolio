import React from "react";
import pic from "./assets/profile-pic.JPG";
import "./styles.css";
import Skills from "../Skills";

function Bio() {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="section">
                    <h1 className="title">About Me</h1>
                    <div className="columns">
                        <div className="column is-4">
                            <figure>    
                                <img src={pic} alt="profile"/>
                            </figure>
                        </div>
                        <div className="column">
                            <p>
                                Hi! Glad to see you here. I am a new web developer interested in games, entertainment, and analytics. My first job in the food industry plunged me into the world of testing and innovations of restaurant operations. Initially graduating with an industrial engineering degree because I used math, observations, and data analytics to solve real business problems. I asked a lot of questions to satiate my desire to understand and unpack the root of any problem. I do not like to waste effort and resources. My main goals are always to debunk any bias or assumptions and present the facts through data and context.
                            </p> 
                            <br></br>
                            <p>
                                I spent 6 months learning full-stack web development, specifically the MERN stack (mongo, express, react, node), and had the chance to hone my skills in project management, back-end architecture, and front-end design. Through various projects, I practiced leading effective meetings that outlined objectives, solved issues, and delegrated tasks. Every project I undertook successfully made it to the minimum viable product stage, and had won recognition from my fellow classmates. 
                            </p>
                        </div>
                    </div>
                    <Skills />
                </div>
            </div>
        </section>
        
    )
}

export default Bio;