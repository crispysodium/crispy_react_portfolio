import React from "react";

function Skills() {
    const frontend = ["HTML", "Javascript", "React.js", "Handlebars", "CSS", "JQuery"];
    const backend = ["Node.js", "Express", "SQL", "Mongo"];
    return(
        <>
        <h1 className="title">{`Skills & Technologies`}</h1>
        <h2 className="subtitle">Listed in order of proficiency</h2>
        <br></br>
        <h2 className="title is-4">Front End</h2>
        <ul>
            {frontend.map(skill => <li>{skill}</li>)}
        </ul>
        <br></br>
        <h2 className="title is-4">Back End</h2>
        <ul>
            {backend.map(skill => <li>{skill}</li>)}
        </ul>
        
    </>
    );
}

export default Skills;