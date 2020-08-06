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

    // const frontend = [
    //     {
    //         name: "Handle Bars",
    //         logo: handlebars
    //     },
    //     {
    //         name: "REST APIs",
    //         logo: ""
    //     },
    //     {
    //         name: "Flex-Box",
    //         logo: ""
    //     },
    //     {
    //         name: "Responsive Design",
    //         logo: ""
    //     }
    // ];
    return(
        <>
        <div className="notification is-warning">
            <h1 className="title is-4">{`Skills & Technologies`}</h1>
        </div>
        <br></br>
        <h2 className="title is-5 heading center">MERN Stack</h2>
        <div className="flex-box">
            {technologies.map(skill => 
                
                    <div key={skill.name} className="skill">
                    {
                        skill.logo === "" ? 
                        skill.name 
                        : 
                        <div className="skill">
                        <figure className="logo">
                        <img src={skill.logo} alt={skill.name} />
                        </figure>
                        <p>{skill.name}</p>
                        </div>
                    }
                    </div>)}
        </div>
        {/* <br></br> */}
        {/* <h2 className="title is-5 heading center">Front End</h2>
        <div className="flex-box">
            {frontend.map(skill =>
                skill.logo === "" ? 
                <div className="skill"> 
                <p>{skill.name}</p>
                </div>
                : 
                <div className="skill"> 
                <figure className="logo">
                <img src={skill.logo} alt={skill.name} />
                </figure>
                <p>{skill.name}</p>
                </div>
                    )}
        </div> */}
    </>
    );
}

export default Skills;