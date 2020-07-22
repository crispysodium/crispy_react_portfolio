import React from "react";
import "./styles.css";

//logo images
import mongo from "./assets/mongodb.svg";
import reactLogo from "./assets/logo.svg";
import express from "./assets/express-109.svg";
import handlebars from "./assets/handlebars-1.svg";
import nodejs from "./assets/nodejs-1.svg";


function Skills() {
    const technologies = [
        {
            name: "MongoDB",
            logo: mongo
        },
        {
            name: "Express",
            logo: express
        },
        {
            name: "React.js",
            logo: reactLogo
        },   
        { 
            name: "Node.js", 
            logo: nodejs
        }
    ];
    return(
        <>
        <div className="notification is-warning">
            <h1 className="title is-4">{`Skills & Technologies`}</h1>
        </div>
        
        <h2 className="title is-5 center notification is-warning is-light">MERN Stack</h2>
        <div className="columns">
            {technologies.map(skill => 
                
                    <div key={skill.name} className="column center">
                    {
                        skill.logo === "" ? 
                        skill.name 
                        : 
                        <>
                        <figure className="logo center">
                        <img src={skill.logo} alt={skill.name} />
                        </figure>
                        <p>{skill.name}</p>
                        </>
                    }
                    </div>)}
        </div>
    </>
    );
}

export default Skills;